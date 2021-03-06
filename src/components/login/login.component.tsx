import * as React from 'react';
import { IState, IAuthState } from '../../reducers';
import { connect } from 'react-redux';
// import ResetFirstPasswordComponent from '../resetFirstPassword/ResetFirstPassword.component';
// import * as userActions from '../../actions/user/user.actions';
import { setup } from '../../actions/auth/auth.actions';

import { Auth } from 'aws-amplify';
import { RouteComponentProps } from 'react-router';
import Button from 'reactstrap/lib/Button';
import { Link } from 'react-router-dom';

interface IComponentState {
  cogUser: any,
  username: string,
  password: string,
  confirmationPassword: string,
  newPassword: string,
  passwordNeedsReset,
  incorrectUserPass,
  failToResetPassword,
  passwordResetMismatch
}

interface IComponentProps extends IAuthState, RouteComponentProps<{}> {
  setup
}

export class LoginComponent extends React.Component<IComponentProps, IComponentState> {

  constructor(props: any) {
    super(props);
    this.state = {
      cogUser: undefined,
      confirmationPassword: '',
      incorrectUserPass: false,
      newPassword: '',
      password: '',
      passwordNeedsReset: false,
      username: '',
      failToResetPassword: false,
      passwordResetMismatch: false
    }
  }

  public updateUsername = (e: any) => {
    const username = e.target.value;
    this.setState({
      ...this.state,
      username

    })
  }

  public updatePassword = (e: any) => {
    const password = e.target.value;
    this.setState({
      ...this.state,
      password
    })
  }
  public updateConfirmationPassword = (e: any) => {
    const password = e.target.value;
    this.setState({
      ...this.state,
      confirmationPassword: password
    })
  }
  public updateNewPassword = (e: any) => {
    const password = e.target.value;
    this.setState({
      ...this.state,
      newPassword: password
    })
  }

  public submitLogin = async (e: any) => {
    e.preventDefault();
    const { username, password } = this.state; // destructuring
    try {
      const user = await Auth.signIn({
        password,
        username, // Required, the username
      })
      if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
        this.setState({
          ...this.state,
          cogUser: user,
          passwordNeedsReset: true,

        });
      } else {
        this.props.history.push('/home');
        this.props.setup();
      }
    } catch (err) {
      console.log(err);
    }
    // this.props.cognitoLogin(username, password, this.props.history);
  }

  public submitPasswordReset = async (e: any) => {
    e.preventDefault();
    this.setState({failToResetPassword: false});
    if (this.state.newPassword === this.state.confirmationPassword) {
      // You need to get the new password and required attributes from the UI inputs
      // and then trigger the following function with a button click
      // For example, the email and phone_number are required attributes
      this.setState({passwordResetMismatch: false});
      try {
        await Auth.completeNewPassword(
          this.state.cogUser,               // the Cognito User Object
          this.state.newPassword,       // the new password
          // OPTIONAL, the required attributes
          {
            // username: this.state.username,
          }
        );
        this.props.setup();
        this.props.history.push('/home');
      } catch(exception){
        this.setState({failToResetPassword: true});
      }
    } else {
      this.setState({passwordResetMismatch: true})
    }
  }

  public handlePassChange(event) {
    this.setState({
      ...this.state,
      password: event.target.value
    })
  }

  public render() {
    return (
      <div className="centered shadow-lg p-3 mb-5 bg-white rounded top-lev-div">
        {!this.state.passwordNeedsReset &&
          <>
            <h4 id="titleHead">Sign in to Origin Awakened Database</h4>
            <form id="login-form" onSubmit={this.submitLogin}>
              <input name="username" type="text" className="form-control txt-bx" placeholder="Username" onChange={this.updateUsername} value={this.state.username} />

              <input name="password" type="password" className="form-control txt-bx" id="login-pass" placeholder="Password" onChange={this.updatePassword} value={this.state.password}/>
              <Button className="origin-btn-blue">Login</Button>

            </form>

            {this.state.incorrectUserPass &&
              <h6 id="invalidCredHead">Invalid Credentials</h6>
            }
          </>
        }
        {this.state.passwordNeedsReset &&
          <>
            <h4 id="titleHead">Reset Password</h4>
            <form id="login-form" onSubmit={this.submitPasswordReset}>
              <input type="text" className="form-control txt-bx" placeholder="New Password" onChange={this.updateNewPassword} value={this.state.newPassword} />

              <input id="login-pass" type="password" className="form-control txt-bx" placeholder="Confirm Password" onChange={this.updateConfirmationPassword} value={this.state.confirmationPassword} />
              <Button className="origin-btn-blue">Reset</Button>

            </form>
            {this.state.failToResetPassword &&
              <>
                <h4>Could Not Reset Password</h4>
              </>
            }
            {this.state.passwordResetMismatch &&
              <>
                <h6>Passwords Must Match</h6>
              </>
            }
          </>
          // <ResetFirstPasswordComponent
          //   cognitUser={this.props.cogUser}
          //   code={this.state.password}
          //   setup={this.props.initUser} />
        }
        <div className="row resetDiv">
          <button id="forgot-pass-btn">Forgot Username or Password</button>
        </div>
        <div className="row resetDiv">
          <Link to="/register">
            <button id="register-btn">Register with System</button>
            </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => (state.auth)
const mapDispatchToProps = {
  setup
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)
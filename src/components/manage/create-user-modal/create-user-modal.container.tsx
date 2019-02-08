import { toggleModal, updateNewUser, saveUser } from '../../../actions/create-user/create-user.actions';
import { IState, ICreateUserState } from '../../../reducers';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { CreateUserModal } from './create-user-modal.component';

export interface ICreateUserModal {
  toggleModal,
  createUser: ICreateUserState,
  saveUser,
  updateNewUser,
}

const mapStateToProps = (state:IState) => ({
  createUser: state.createUser
});

const mapDispatchToProps = {
  saveUser,
  toggleModal,
  updateNewUser,
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateUserModal);
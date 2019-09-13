import * as React from 'react';
import './include/bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import { store } from './Store';
import AppNav from './components/nav/nav.component';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import clickerContainer from './components/clicker/clicker.container';
import ManageComponent from './components/manage/manage.container';
// import  ProtectedRoute  from './components/protected-route.component/protected-route.component';
import  LoginComponent  from './components/login/login.component';
import { ToastContainer, toast } from 'react-toastify';
import { HomeContainer } from './components/home/home.container';
import CreateCharacterModal from './components/shared-components/create-character-modal/create-character-modal.container';


class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <AppNav />
            <div id="main-content-container">
              <Switch>
                <Route path="/login" component={LoginComponent} />
                <Route path="/home" component={HomeContainer} />
                <Route path="/clicker" component={clickerContainer} />
                {/* <ProtectedRoute allowedRoles={['admin', 'staging-manager', 'trainer']} path="/manage/:manage" component={ManageComponent} /> */}
                <Route path="/manage/:manage" component={ManageComponent} />
                <Route component={HomeContainer} />
              </Switch>
            </div>
            <ToastContainer autoClose={2000} position={toast.POSITION.BOTTOM_RIGHT}/>
            <CreateCharacterModal />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;

// import * as awsCognito from 'amazon-cognito-identity-js';
// import * as AWS from 'aws-sdk';
import { environment } from '../../environment';
import { History } from 'history';
import { ICognitoUser } from '../../model/cognito-user.model';
// import { toast } from 'react-toastify';
import Amplify, { Auth } from 'aws-amplify';
import { refreshJwt } from '../../axios/origin-client';
import { refreshMyCharactersList } from '../my-characters/my-characters.actions';
// import Axios from 'axios';

Amplify.configure({
  Auth: {
    region: environment.awsRegion,
    userPoolId: environment.cognitoUserPoolId,
    userPoolWebClientId: environment.cognitoClientId,
  }
})


export const authTypes = {
  LOGOUT: 'LOGOUT',
  UPDATE_CURRENT_USER: 'UPDATE_CURRENT_USER',
}

export const updateCurrentUser = (currentUser: ICognitoUser) => {
  return {
    payload: {
      currentUser
    },
    type: authTypes.UPDATE_CURRENT_USER
  }
}

/**
 * Get current login user info from the server
 */
export const setup = () => (dispatch) => {
  Auth.currentAuthenticatedUser()
    .then(user => {
      // initialize the jwt for axios
      Auth.currentSession()
        .then(data => {
          refreshJwt(data.getIdToken().getJwtToken());
          
          const userAttributes = data.getIdToken().payload;
          const currentUser = {
            email: userAttributes.email,
            username: userAttributes['cognito:username'],
            roles: userAttributes['cognito:groups'] || [],
          }
          // Set redux cognito data
          dispatch(updateCurrentUser(currentUser));
          refreshMyCharactersList(currentUser.username)(dispatch);
        })

      // create interval to refresh the jwt periodically
      setInterval(() => {
        Auth.currentSession()
          .then(data => {
            refreshJwt(data.getIdToken().getJwtToken());
          })
      }, 300000)


    })
    .catch(e => {
      return;
    })
}


export const logout = () => {
  Auth.signOut();
  return {
    payload: {},
    type: authTypes.LOGOUT
  }
}
import { ICreateUserState } from '.';
import { authTypes } from '../actions/auth/auth.actions';
import { createUserTypes } from '../actions/create-user/create-user.actions';

const initialState: ICreateUserState = {
  enabled: false,
  newUser: {
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: ''
  },
}

export const createUserReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case createUserTypes.TOGGLE:
      return {
        ...state,
        enabled: !state.enabled
      }
    case createUserTypes.UPDATE_NEW_USER:
      return {
        ...state,
        newUser: action.payload.newUser
      }
    case createUserTypes.USER_SAVED:
      return initialState;
    case authTypes.LOGOUT:
      return initialState;
  }
  return state;
}

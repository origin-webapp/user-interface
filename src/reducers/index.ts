import { combineReducers } from 'redux';
import { clickerReducer } from './clicker.reducer';
import { authReducer } from './auth.reducer';
import { ICognitoUser } from '../model/cognito-user.model';
import { manageUsersReducer } from './manage-users.reducer';
import { createUserReducer } from './create-user.reducer';
import Character from '../model/character.model';
import { myCharactersReducer } from './my-characters.reducer';

export interface IAuthState {
  currentUser: ICognitoUser
}

export interface IClickerState {
  clicks: number
}

export interface ICreateUserState {
  enabled: boolean,
  newUser: {
    email: string,
    firstName: string,
    lastName: string,
    phoneNumber: string
  }
}

export interface IManageUsersState {
  manageUsers: ICognitoUser[];
}

export interface IMyCharactersState {
  characters: Character[],
  currentCharacterId: number,
  isEditing: boolean
}

export interface IState {
  auth: IAuthState,
  clicker: IClickerState,
  createUser: ICreateUserState,
  manageUsers: IManageUsersState,
  myCharacters: IMyCharactersState
}

export const state = combineReducers<IState>({
  auth: authReducer,
  clicker: clickerReducer,
  createUser: createUserReducer,
  manageUsers: manageUsersReducer,
  myCharacters: myCharactersReducer
})
import { ICreateCharacterState } from '.';
import { authTypes } from '../actions/auth/auth.actions';
import { createCharacterTypes } from '../actions/create-character/create-character.actions';

const initialState: ICreateCharacterState = {
  enabled: false,
  
}

export const createCharacterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case createCharacterTypes.TOGGLE:
      return {
        ...state,
        enabled: !state.enabled
      }
    case createCharacterTypes.UPDATE_NEW_CHARACTER:
      return {
        ...state,
        newCharacter: action.payload.newCharacter
      }
    case createCharacterTypes.CHARACTER_SAVED:
      return initialState;
    case authTypes.LOGOUT:
      return initialState;
  }
  return state;
}
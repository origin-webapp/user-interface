import { ICreateCharacterState } from '.';
import { authTypes } from '../actions/auth/auth.actions';
import { createCharacterTypes } from '../actions/create-character/create-character.actions';
import Character from '../model/character.model';

const initialState: ICreateCharacterState = {
  enabled: false,
  newCharacter: new Character()
  
}

export const createCharacterReducer = (state = initialState, action: any): ICreateCharacterState => {
  switch (action.type) {
    case createCharacterTypes.TOGGLE:
      return {
        ...state,
        enabled: !state.enabled,
        newCharacter: {
          ...state.newCharacter,
          creator: action.payload.creator
        }
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
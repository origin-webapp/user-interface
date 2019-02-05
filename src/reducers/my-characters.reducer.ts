import { IMyCharactersState } from '.';
import { myCharactersTypes } from '../actions/my-characters/my-characters.actions';

const initialState: IMyCharactersState = {
  characters: [],
  currentCharacterId: 0
}

export const myCharactersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case myCharactersTypes.SET_MY_CHARACTERS_LIST:
      return {
        ...state,
        characters: action.payload.characters
      }
  }
  return state;
}

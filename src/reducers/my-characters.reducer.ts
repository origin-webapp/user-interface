import { IMyCharactersState } from '.';
import { myCharactersTypes } from '../actions/my-characters/my-characters.actions';

const initialState: IMyCharactersState = {
  characters: [],
  currentCharacterId: 0,
  isEditing: false
}

export const myCharactersReducer = (state = initialState, action: any): IMyCharactersState => {
  switch (action.type) {
    case myCharactersTypes.SET_MY_CHARACTERS_LIST:
      const characters = action.payload.characters;
      return {
        ...state,
        characters,
        currentCharacterId: characters.length && characters[0],
        isEditing: false,
      }
    case myCharactersTypes.TOGGLE_IS_EDITING:
      return {
        ...state,
        isEditing: action.payload.isEditing,
      }
    case myCharactersTypes.UPDATE_STATS: {
      console.log(action.payload);
      return {
        ...state,
        characters: state.characters.map(character => {
          if (character.stats && character.stats.id === action.payload.stats.id) {
            return {
              ...character,
              stats: action.payload.stats
            }
          }
          return character;
        })
      }
    }
  }
  return state;
}

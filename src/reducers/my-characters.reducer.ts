import { IMyCharactersState } from '.';
import { myCharactersTypes } from '../actions/my-characters/my-characters.actions';
import Character from '../model/character.model';

const initialState: IMyCharactersState = {
  characters: [{
    creator: '',
    id: 1,
    name: 'Switch',
    powers: [{
      id: 1,
      mechanic: {
        costScalesWithMaxAbility: false,
        description: 'does stuff',
        healthCostMultiplier: .25,
        id: 1,
        name: 'skillful strike',
        wellCostMultiplier: 1.0
      },
      name: 'strike skill',
      rank: 80
    }],
    stats: {
      agility: 50,
      characterId: 1,
      dexterity: 40,
      endurance: 40,
      fighting: 40,
      id: 1,
      intuition: 15,
      psyche: 20,
      reason: 15,
      strength: 40
    }
  }],
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

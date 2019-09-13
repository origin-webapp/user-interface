import { IMyCharactersState } from '.';
import { myCharactersTypes } from '../actions/my-characters/my-characters.actions';
import { characterTypes } from '../actions/characters/characters.actions';
import { createCharacterTypes } from '../actions/create-character/create-character.actions';
import { store } from '../Store';

const initialState: IMyCharactersState = {
  characters: [{
    creator: '',
    id: 1,
    name: 'Swash',
    powers: [{
      id: 1,
      characterId: 1,
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
  },
  {
    creator: 'nicklurch',
    id: 2,
    name: 'Halstead',
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
      characterId: 2,
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
  isEditing: false,
}

export const myCharactersReducer = (state = initialState, action: any): IMyCharactersState => {
  switch (action.type) {
    case myCharactersTypes.SET_MY_CHARACTERS_LIST:
      const characters = action.payload.characters;
      return {
        ...state,
        characters,
        currentCharacterId: characters.length && characters[0].id,
        isEditing: false,
      }
    case myCharactersTypes.TOGGLE_IS_EDITING:
      return {
        ...state,
        isEditing: action.payload.isEditing,
      }
    case characterTypes.UPDATE_STATS: {
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
    case createCharacterTypes.CHARACTER_SAVED: {
      if(store.getState().auth.currentUser.username === action.payload.creator) {
        return {
          ...state,
          characters: [...state.characters, action.payload]
        }
      }
      break;
    }
    case characterTypes.SAVE_CHARACTER: {
      if (action.payload.isCurrentUsers) {
        return {
          ...state,
          characters: [...state.characters, action.payload.character]
        }
      }
      break;
    }
    case characterTypes.UPDATE_CHARACTER: {
      return {
        ...state,
        characters: state.characters.map(character => {
          if (character.id === action.payload.character.id) {
            console.log('true')
            return action.payload.character 
          }
          return character;
        })
      }
    }
    case characterTypes.DELETE_CHARACTER: {
      const characters = state.characters;
      const filteredCharacters = characters.filter(character => character.id !== action.payload.id)
      return {
        ...state,
        characters: filteredCharacters,
        currentCharacterId: filteredCharacters.length && filteredCharacters[0].id,
        isEditing: false,
      }
    }
    case characterTypes.UPDATE_POWER: {
      const updatedPower = action.payload.power;
      return {
        ...state,
        characters: state.characters.map(character => {
          if (character.id === updatedPower.characterId) {
            return {
              ...character,
              powers: character.powers.map(power => {
                if(power.id !== updatedPower.id) {
                  return power;
                } else {
                  return updatedPower;
                }
              })
            }
          } else { 
            return character;
          }
        })
      }
    }
    case myCharactersTypes.SET_CURRENT_CHARACTER_ID: {
      console.log(action.payload);
      return {
        ...state,
        currentCharacterId: action.payload.characterId,
        isEditing: false,
      }
    }
    case characterTypes.SAVE_POWER: {
      const power = action.payload.power;
      return {
        ...state,
        characters: state.characters.map(character => {
          if (character.id === power.characterId) {
            return {
              ...character,
              powers: [...character.powers, power]
            }
          } else { 
            return character;
          }
        })
      }
    }
    case characterTypes.DELETE_POWER: {
      const powerId = action.payload.powerId;
      return {
        ...state,
        characters: state.characters.map(character => {
          return {
            ...character,
            powers: character.powers.filter(power => power.id !== powerId)
          }
        })
      }
    }
  }
  return state;
}

import { IMyCharactersState } from '.';
import { myCharactersTypes } from '../actions/my-characters/my-characters.actions';
import Character from '../model/character.model';
import { characterTypes } from '../actions/characters/characters.actions';

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
    case myCharactersTypes.SET_CURRENT_CHARACTER_ID: {
      console.log(action.payload);
      return {
        ...state,
        currentCharacterId: action.payload.characterId
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

import { toast } from "react-toastify";
import { charactersStatsClient } from "../../axios/origin-client/character-stats.client";
import { powersClient } from "../../axios/origin-client/powers.client";
import CharacterStats from "../../model/character-stats.model";
import { Power } from "../../model/power.model";
import { charactersClient } from "../../axios/origin-client/characters.client";
import Character from "../../model/character.model";
import { IState } from "../../reducers";

export const characterTypes = {
  UPDATE_STATS: '[CHARACTERS] UPDATE_STATS',
  UPDATE_POWER: '[CHARACTERS] UPDATE_POWER',
  UPDATE_CHARACTER: '[CHARACTERS} UPDATE_CHARACTER',
  SAVE_POWER: '[CHARACTERS] SAVE_POWER',
  SAVE_CHARACTER: '[CHARACTERS] SAVE_CHARACTER',
  DELETE_POWER: '[CHARACTERS] DELETE_POWER',
  DELETE_CHARACTER: '[CHARACTERS] DELETE CHARACTER'
}

export const createCharacter = (character?: Partial<Character>) =>  async (dispatch, getState: () => IState) => {
  const currentUsername = getState().auth.currentUser.username;
  const defaultChar = new Character(0, 'New Character', currentUsername, new CharacterStats(), []);
  let isCurrentUsers = true;
  if (character && character.creator && character.creator !== currentUsername) {
    isCurrentUsers = false;
  }
  try {
    const res = await charactersClient.save({
      ...defaultChar,
      ...character,
      id: 0,
    });
    dispatch({
      payload: {
        character: res.data,
        isCurrentUsers
      },
      type: characterTypes.SAVE_CHARACTER
    })
  } catch (err) {
    toast.error("Failed to create a new character");
  }
} 

export const updateCharacter = (character: Partial<Character>) =>  async (dispatch) => {
  try {
    const res = await charactersClient.update(character);
    dispatch({
      payload: {
        character: res.data
      },
      type: characterTypes.UPDATE_CHARACTER
    })
  } catch (err) {
    toast.error("Character may not be successfully updated.");
  }
}

export const deleteCharacter = (characterId: number) =>  async (dispatch) => {
  try {
    const res = await charactersClient.delete(characterId);
    dispatch({
      payload: {
        id: characterId
      },
      type: characterTypes.DELETE_CHARACTER
    })
  } catch (err) {
    toast.error("Character may not be successfully deleted.");
  }
}

export const updateStats = (stats: CharacterStats) =>  async (dispatch) => {
  try {
    const res = await charactersStatsClient.update(stats);
    dispatch({
      payload: {
        stats: res.data
      },
      type: characterTypes.UPDATE_STATS
    })
  } catch (err) {
    toast.error("Stats may not be successfully updated.");
  }
}

export const updatePower = (power: Partial<Power>) =>  async (dispatch) => {
  try {
    const res = await powersClient.patch(power);
    dispatch({
      payload: {
        power: res.data
      },
      type: characterTypes.UPDATE_POWER
    })
  } catch (err) {
    toast.error("Failed to update power");
  }
}


export const addPower = (power: Power) =>  async (dispatch) => {
  try {
    const res = await powersClient.save(power);
    dispatch({
      payload: {
        power: res.data
      },
      type: characterTypes.SAVE_POWER
    })
  } catch (err) {
    toast.error("Failed to create a new power");
  }
}

export const deletePower = (powerId: number) =>  async (dispatch) => {
  try {
    const res = await powersClient.delete(powerId);
    dispatch({
      payload: {
        powerId
      },
      type: characterTypes.DELETE_POWER
    })
  } catch (err) {
    toast.error("Failed to delete power");
  }
}
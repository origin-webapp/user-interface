import { charactersClient } from "../../axios/origin-client/characters.client";
import { charactersStatsClient } from "../../axios/origin-client/character-stats.client";
import CharacterStats from "../../model/character-stats.model";

export const myCharactersTypes = {
  SET_MY_CHARACTERS_LIST: 'SET_MY_CHARACTERS_LIST',
  TOGGLE_IS_EDITING: 'MY_CHARACTERS_TOGGLE_IS_EDITING',
  UPDATE_STATS: 'MY_CHARACTERS_UPDATE_STATS'
}

export const refreshMyCharactersList = (username: string) => async (dispatch) => {
  try {
    const resp = await charactersClient.findByCreator(username);
    dispatch({
      payload: {
        characters: resp.data
      },
      type: myCharactersTypes.SET_MY_CHARACTERS_LIST
    })
  } catch (err) {
    console.log('error fiding my characters')
  }

}


export const toggleIsEditing = (isEditing: boolean) => {
  return {
    payload: {
      isEditing
    },
    type: myCharactersTypes.TOGGLE_IS_EDITING
  }
}

export const updateStats = (stats: CharacterStats) =>  async (dispatch) => {
  try {
    const res = await charactersStatsClient.update(stats);
    dispatch({
      payload: {
        stats: res.data
      },
      type: myCharactersTypes.UPDATE_STATS
    })
  } catch (err) {

  }
}

import { charactersClient } from "../../axios/origin-client/characters.client";

export const myCharactersTypes = {
  SET_MY_CHARACTERS_LIST: '[MY_CHARACTERS] SET_MY_CHARACTERS_LIST',
  TOGGLE_IS_EDITING: '[MY_CHARACTERS] TOGGLE_IS_EDITING',
  SET_CURRENT_CHARACTER_ID: '[MY_CHARACTERS] SET_CURRENT_CHARACTER_ID'
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

export const setCurrentCharacterId = (characterId: number) => {
  return {
    payload: {
      characterId
    },
    type: myCharactersTypes.SET_CURRENT_CHARACTER_ID
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



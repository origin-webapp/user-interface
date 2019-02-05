import { charactersClient } from "src/axios/origin-client/characters.client";

export const myCharactersTypes = {
  SET_MY_CHARACTERS_LIST: 'SET_MY_CHARACTERS_LIST',
}

export const refreshMyCharactersList = (myEmail: string) => async (dispatch) => {
  try {
    const resp = await charactersClient.findByCreator(myEmail);
    dispatch({
      payload: {
        characters: resp.data
      },
      type: myCharactersTypes.SET_MY_CHARACTERS_LIST
    })
  } catch (err) {
    return null;
  }
  
}


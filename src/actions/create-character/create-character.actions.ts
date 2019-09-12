import Character from "../../model/character.model";
import { charactersClient } from "../../axios/origin-client/characters.client";
import { toast } from "react-toastify";

export const createCharacterTypes = {  
  TOGGLE: 'TOGGLE_CREATE_CHARACTER_MODAL',
  UPDATE_NEW_CHARACTER: 'UPDATE_NEW_CHARACTER',
  CHARACTER_SAVED: 'CREATE_NEW_CHARACTER_CHARACTER_SAVED'
}

export const toggleModal = () => {
  return {
    payload: {
    },
    type: createCharacterTypes.TOGGLE
  }
}

export const updateNewCharacter = (newCharacter: Character) => {
  return {
    payload: {
      newCharacter
    },
    type: createCharacterTypes.UPDATE_NEW_CHARACTER
  }
}

export const saveCharacter = (newCharacter: Character) => (dispatch) => {
  charactersClient.save(newCharacter)
    .then(resp => {
      toast.success('Character Created')
      dispatch({
        payload: {},
        type: createCharacterTypes.CHARACTER_SAVED
      })
    })
    .catch(e => {
      toast.error('Failed To Save Character')
    })

 
}
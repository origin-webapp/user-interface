import { IUser } from "../../model/user.model";
import { userClient } from "../../axios/origin-client/user-client";
import { toast } from "react-toastify";

export const createUserTypes = {  
  TOGGLE: 'TOGGLE_CREATE_USER_MODAL',
  UPDATE_NEW_USER: 'UPDATE_NEW_USER',
  USER_SAVED: 'CREATE_NEW_USER_USER_SAVED'
}

export const toggleModal = () => {
  return {
    payload: {
    },
    type: createUserTypes.TOGGLE
  }
}

export const updateNewUser = (newUser: IUser) => {
  return {
    payload: {
      newUser
    },
    type: createUserTypes.UPDATE_NEW_USER
  }
}

export const saveUser = (newUser: IUser) => (dispatch) => {
  userClient.saveUser(newUser)
    .then(resp => {
      toast.success('User Created')
      dispatch({
        payload: {},
        type: createUserTypes.USER_SAVED
      })
    })
    .catch(e => {
      toast.error('Failed To Save User')
    })

 
}
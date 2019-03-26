import * as types from './actionTypes'
import firebaseService from '../../services/firebase'

import {CreateGuid} from '../../utils/utils';

//const FIREBASE_REF_MESSAGES = firebaseService.database().ref('Messages')
const FIREBASE_REF_MESSAGES_LIMIT = 20

export const sendMessage = message => {
  return (dispatch) => {
    dispatch(chatMessageLoading())

    let currentUser = firebaseService.auth().currentUser
    let createdAt = new Date().getTime()
    let chatMessage = {
      text: message,
      createdAt: createdAt,
      user: {
        id: '60228967-5e74-438d-b40b-4831e14d7bff',
        phone: '093391234343' 
      }
    }
    const FIREBASE_REF_MESSAGES = firebaseService.database().ref('44a45a89-b3da-4c6b-c2c8-166124516b4f')
    FIREBASE_REF_MESSAGES.push().set(chatMessage, (error) => {
      if (error) {
        dispatch(chatMessageError(error.message))
      } else {
        dispatch(chatMessageSuccess())
      }
    })
  }
}

export const updateMessage = text => {
  return (dispatch) => {
    dispatch(chatUpdateMessage(text))
  }
}

export const loadMessages = () => {
  return (dispatch) => {
    const FIREBASE_REF_MESSAGES = firebaseService.database().ref('44a45a89-b3da-4c6b-c2c8-166124516b4f')
    FIREBASE_REF_MESSAGES.limitToLast(FIREBASE_REF_MESSAGES_LIMIT)
                         .on('value', (snapshot) => {
      dispatch(loadMessagesSuccess(snapshot.val()))
    }, (errorObject) => {
      dispatch(loadMessagesError(errorObject.message))
    })
  }
}

const chatMessageLoading = () => ({
  type: types.CHAT_MESSAGE_LOADING
})

const chatMessageSuccess = () => ({
  type: types.CHAT_MESSAGE_SUCCESS
})

const chatMessageError = error => ({
  type: types.CHAT_MESSAGE_ERROR,
  error
})

const chatUpdateMessage = text => ({
  type: types.CHAT_MESSAGE_UPDATE,
  text
})

const loadMessagesSuccess = messages => ({
  type: types.CHAT_LOAD_MESSAGES_SUCCESS,
  messages
})

const loadMessagesError = error => ({
  type: types.CHAT_LOAD_MESSAGES_ERROR,
  error
})

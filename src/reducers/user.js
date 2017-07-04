import {
  LOGIN_SUCCES,
  LOGIN_FAIL
} from '../constants/User'

const initialState = {
  name: '',
  surname: ['Анонимов', 'Обыкновенный'],
  age: [25, 99],
  error: ''
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCES:
      return { 
        ...state,
        name: action.payload,
        error: ''
      }
    case LOGIN_FAIL:
      return { 
        ...state,
        error: action.payload.message
      }
    default:
      return state
  }
}
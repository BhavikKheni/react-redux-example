import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {
  ADD_CONTACT
} from '../actions/actions.js'


const contact = (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        user: action.user
      }
    default:
      return state
  }
}
const contacts = (state = [], action) => {

  switch (action.type) {
    case ADD_CONTACT:
      return [
        ...state,
        contact(undefined, action)
      ]
    default:
      return state
  }
}

const rootReducer = combineReducers({
  form: formReducer,
  contacts
})

export default rootReducer;
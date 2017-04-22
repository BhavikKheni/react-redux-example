export const ADD_CONTACT = 'ADD_CONTACT';
export const ADD_CONTACT_SUCCESS = 'ADD_CONTACT_SUCCESS';

export const addContact = (user) => {
  return {
    type: ADD_CONTACT,
    user
  }
}

export const contactSuccess = (user) => {
  return {
    type: ADD_CONTACT_SUCCESS,
    user
  }
}
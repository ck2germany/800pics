import {
  RECEIVE_ERRORS,
  RECEIVE_USER
} from '../actions/user_actions';

const userErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case RECEIVE_USER:
      return null;
    default:
      return state;
  }
};

export default userErrorsReducer;

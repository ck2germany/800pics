import {
  RECEIVE_ERRORS,
  RECEIVE_PHOTO,
  RECEIVE_ALL_PHOTOS
} from '../actions/photo_actions';

const photoErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case RECEIVE_PHOTO:
      return null;
    case RECEIVE_ALL_PHOTOS:
      return null;
    default:
      return state;
  }
};

export default photoErrorsReducer;

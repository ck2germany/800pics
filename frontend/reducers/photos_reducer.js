import merge from 'lodash/merge';

import {
  RECEIVE_ALL_PHOTOS,
  RECEIVE_PHOTO,
  DELETE_PHOTO
} from '../actions/photo_actions.js';

const photosReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_PHOTOS:
      const photos = {};
      action.photos.forEach(photo => {
        photos[photo.id] = photo;
      });
      return photos;
    case RECEIVE_PHOTO:
      let newPhoto = {[action.photo.id]: action.photo };
      return merge({}, state, newPhoto);
    case DELETE_PHOTO:
      let newState = merge({}, state);
      delete newState[action.photoId];
      return newState;
    default:
      return state;
  }
};

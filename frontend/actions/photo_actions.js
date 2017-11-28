import * as PhotoUtil from '../util/photo_api_util';

export const RECEIVE_ALL_PHOTOS = 'RECEIVE_ALL_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const DELETE_PHOTO = 'DELETE_PHOTO';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

//actions
export const receiveAllPhotos = (photos) => ({
  type: RECEIVE_ALL_PHOTOS,
  photos
});

export const receiveSinglePhoto = (photo) => ({
  type: RECEIVE_PHOTO,
  photo
});

export const deletePhoto = (photo) => ({
  type: DELETE_PHOTO,
  photoId: photo.id
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});



//thunks
export const fetchAllPhotos = () => dispatch => (
  PhotoUtil.getAllPhotos()
  .then(photos => (
    dispatch(receiveAllPhotos(photos))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const fetchSinglePhoto = (photoId) => dispatch => (
  PhotoUtil.getPhoto(photoId)
  .then(photo => (dispatch(receiveSinglePhoto(photo))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const createPhoto = (photo) => dispatch => (
  PhotoUtil.postPhoto(photo)
  .then(rphoto => (dispatch(receiveSinglePhoto(rphoto))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const updatePhoto = (photo) => dispatch => (
  PhotoUtil.patchPhoto(photo)
  .then(rphoto => (dispatch(receiveSinglePhoto(rphoto))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const removePhoto = (photoId) => dispatch => (
  PhotoUtil.deletePhoto(photoId)
  .then(photo => (dispatch(deletePhoto(photo))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

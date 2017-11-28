import * as PhotoUtil from '../util/photo_api_util';

export const RECEIVE_ALL_PHOTOS = 'RECEIVE_ALL_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';

//actions
export const receiveAllPhotos = (photos) => ({
  type: RECEIVE_ALL_PHOTOS,
  photos
});

export const receiveSinglePhoto = (photo) => ({
  type: RECEIVE_PHOTO,
  photo
});

//thunks
export const fetchAllPhotos = () => dispatch => (
  PhotoUtil.getAllPhotos().then(photos => dispatch(receiveAllPhotos(photos)))
);

export const fetchSinglePhoto = (photoId) => dispatch => (
  PhotoUtil.getPhoto(photoId).then(photo => dispatch(receiveSinglePhoto(photo)))
);

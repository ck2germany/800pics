import * as UserUtil from '../util/user_api_util';
import * as FollowUtil from '../util/follow_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

//actions
export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});


//thunks
export const getUserInfo = (userId) => dispatch => (
  UserUtil.getUserInfo(userId)
    .then(
      user => (
        dispatch(receiveUser(user))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    )
  )
);

export const followUser = (puId, cuId) => dispatch => (
  FollowUtil.postFollow(puId, cuId)
    .then(
      user => (
        dispatch(receiveUser(user))
      ), err => (
        dispatch(receiveErrors(err.responseJSON))
      )
  )
);

export const unFollowUser = (puId, cuId) => dispatch => (
  FollowUtil.deleteFollow(puId, cuId)
    .then(
      user => (
        dispatch(receiveUser(user))
      ), err => (
        dispatch(receiveErrors(err.responseJSON))
      )
    )
);

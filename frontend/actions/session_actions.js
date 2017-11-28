import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

//actions
export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => {
  return ({
    type: RECEIVE_ERRORS,
    errors
  });

};

//thunks
export const login = (user) => dispatch => (
  APIUtil.login(user).then(ruser => (
    dispatch(receiveCurrentUser(ruser))
  ), err => (
  dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(() => dispatch(receiveCurrentUser(null)))
);

export const signup = (user) => dispatch => (
  APIUtil.signup(user).then(ruser => (dispatch(receiveCurrentUser(ruser))), err => (dispatch(receiveErrors(err.responseJSON))))
);

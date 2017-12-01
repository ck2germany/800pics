import merge from 'lodash/merge';

import {
  RECEIVE_USER
} from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);


  switch (action.type) {
    case RECEIVE_USER:
    console.log(action.user);
      let newUser = { [action.user.id]: action.user };
      let merged = merge({}, state, newUser);
      merged[action.user.id].fans = [];
      return merge(merged, newUser);
    default:
      return state;
  }
};

export default usersReducer;

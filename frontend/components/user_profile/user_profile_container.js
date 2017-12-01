import { connect } from 'react-redux';

import { getUserInfo, followUser, unFollowUser } from '../../actions/user_actions';
import { fetchAllPhotos } from '../../actions/photo_actions';
import {isFollowing} from '../../reducers/selectors';
import UserProfile from './user_profile';

const mapStateToProps = (state, ownProps) => {

  const userId = ownProps.match.params.id;
  const user = state.entities.users[userId];
  const currentUserId = state.session.currentUser.id;

  return ({
  user: user,
  userId,
  currentUserId,


  });
};
 // .match.params
const mapDispatchToProps = (dispatch, ownProps) => {
  // let id = ownProps.match.params.id;
  return ({
    getUsrInfo: (id) => dispatch(getUserInfo(id)),
    followUser: (id) => dispatch(followUser(id)),
    unFollowUser: (id) => dispatch(unFollowUser(id))


  });
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);

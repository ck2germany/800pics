import { connect } from 'react-redux';

import { getUserInfo } from '../../actions/user_actions';
import { fetchAllPhotos } from '../../actions/photo_actions';
import UserProfile from './user_profile';

const mapStateToProps = (state, ownProps) => {

  const userId = ownProps.match.params.id;
  const user = state.entities.users[userId];
  console.log("mstps");
  console.log(user);
  return ({
  user: user,
  userId,
  currentUserId: state.session.currentUser.id,


  });
};
 // .match.params
const mapDispatchToProps = (dispatch, ownProps) => {
  // let id = ownProps.match.params.id;
  return ({
    getUsrInfo: (id) => dispatch(getUserInfo(id)),

  });
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);

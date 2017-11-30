import { connect } from 'react-redux';

import { getUserInfo } from '../../actions/user_actions';
import { fetchAllPhotos } from '../../actions/photo_actions';
import UserProfile from './user_profile';

const mapStateToProps = (state, ownProps) => ({
  users: state.entities.users,
  userId: ownProps.match.params.id
});
 // .match.params
const mapDispatchToProps = (dispatch, ownProps) => {
  // let id = ownProps.match.params.id;
  return ({
    getUsrInfo: (id) => dispatch(getUserInfo(id)),

  });
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);

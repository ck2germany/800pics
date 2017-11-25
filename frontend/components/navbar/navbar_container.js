import { connect } from 'react-redux';

import { logout, login } from '../../actions/session_actions';
import NavBar from './navbar';


const mapStateToProps = ({ session }) => {
  return ({
  currentUser: session.currentUser,
  loggedIn: Boolean(session.currentUser)
  });
};

const mapDispatchToProps = dispatch => {
  const user = { username: "Demo User", password: "password" };
  return ({
    loginDemoUser: () => dispatch(login({user})),
    logout: () => dispatch(logout())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

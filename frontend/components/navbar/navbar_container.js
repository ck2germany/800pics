import { connect } from 'react-redux';

import { logout, login } from '../../actions/session_actions';
import NavBar from './navbar';


const mapStateToProps = ({ session }, ownProps) => {

  return ({
  currentUser: session.currentUser,
  loggedIn: Boolean(session.currentUser),
  currentPath: ownProps.location.pathname
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const user = { username: "Demo User", password: "password" };
  return ({
    loginDemoUser: () => dispatch(login({user})).then(() => ownProps.history.push('/main')),
    logout: () => dispatch(logout())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

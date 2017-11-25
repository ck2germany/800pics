import { connect } from 'react-redux';

import { signup, login, logout, receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ session, errors }, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  return ({
  currentUser: session.currentUser,
  errors: errors.session,
  formType
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const formAction = (formType === 'login') ? login : signup;

  return {
    formAction: user => dispatch(formAction(user)),
    clearErrors: () => dispatch(receiveErrors([]))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

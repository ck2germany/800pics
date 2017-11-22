import React from 'react';
import ReactDOM from 'react-dom';
import * as Session_API_Util from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  window.login = Session_API_Util.login;
  window.logout = Session_API_Util.logout;
  window.createUser = Session_API_Util.signup;
  ReactDOM.render(<h2>Hi from the app</h2>, root);
});

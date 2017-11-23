import React from 'react';
import { Link } from 'react-router-dom';

const sessionButtons = () => (
  <nav>
    <Link className="button" to='/signup'>Sign Up</Link>
      &nbsp;or&nbsp;
    <Link className="button" to='/login'>Log In</Link>
  </nav>
);

const loggedInButtons = ( currentuser, logout ) => (
  <hgroup>
    <h3>{currentuser.username}</h3>
    <button onClick={logout}>Log Out</button>
  </hgroup>
);

const NavBar = ({ currentUser, logout }) => (
  currentUser ? loggedInButtons(currentUser, logout) : sessionButtons()
);

export default NavBar;

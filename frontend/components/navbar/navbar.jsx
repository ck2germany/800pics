import React from 'react';
import { Link } from 'react-router-dom';

const sessionButtons = () => (
  <nav className="session-nav">
    <Link className="button" to='/signup'>Sign Up</Link>
      &nbsp;or&nbsp;
    <Link className="button" to='/login'>Log In</Link>
  </nav>
);

const loggedInButtons = ( currentuser, logout ) => (
  <nav>
    <p>{currentuser.username}</p>
    <button onClick={logout}>Log Out</button>
  </nav>
);

const NavBar = ({ currentUser, logout }) => (
  currentUser ? loggedInButtons(currentUser, logout) : sessionButtons()
);

export default NavBar;

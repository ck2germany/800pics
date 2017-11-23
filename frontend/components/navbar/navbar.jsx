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

const NavBar = ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <h4>{currentUser.username}</h4>
      <button onClick={logout}>Log Out</button>
    </div>
  ) : (
    <div>
      <Link className="button" to='/signup'>Sign Up</Link>
      &nbsp;or&nbsp;
      <Link className="button" to='/login'>Log In</Link>
    </div>
  );

  return (
    <header className="header-nav-left">
      <h1 className="logo">Landscapes</h1>
      <div>
        {display}
      </div>
    </header>
  );
};

export default NavBar;

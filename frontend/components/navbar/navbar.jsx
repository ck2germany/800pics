import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <h4>{currentUser.username}</h4>
      <button onClick={logout}>Log out</button>
    </div>
  ) : (
    <div>
      <Link className="button" to='/signup'>Sign Up</Link>
      <Link className="button" to='/login'>Log In</Link>
    </div>
  );

  return (
    <header>
      <h1>Landscapes</h1>
      <div>
        {display}
      </div>
    </header>
  );
};

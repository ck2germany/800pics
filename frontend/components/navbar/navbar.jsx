import React from 'react';
import { Link } from 'react-router-dom';


// const sessionButtons = () => (
//   <nav className="session-nav-buttons">
//     <Link className="button" to='/signup'>Sign Up</Link>
//       &nbsp;or&nbsp;
//     <Link className="button" to='/login'>Log In</Link>
//   </nav>
// );
//
// const loggedInButtons = ( currentuser, logout ) => (
//   <nav className="user-nav-buttons">
//     <p>{currentuser.username}</p>
//     <button onClick={logout}>Log Out</button>
//   </nav>
// );

const NavBar = ({ currentUser, logout, loginDemoUser }) => {

  const display = currentUser ? (
    <div className="header-nav-right">
      <p>{currentUser.username}</p>
      <button className="text-button" onClick={logout}>Log out</button>
    </div>
  ) : (
    <div>
      <Link className="text-button" to='/signup'>Sign Up</Link>
      <Link className="text-button" to='/login'>Log In</Link>
      <button className="text_button" id="demo-button" onClick={loginDemoUser}>Demo Login</button>
    </div>
  );




  return (
    <header className="header-nav">
      <div className="header-nav-left">
        <h1 className="logo"><a href='#'><i className="fa fa-tree"></i>Landscapes</a></h1>
      </div>
      <div>
        {display}
      </div>
    </header>
  );
};

export default NavBar;

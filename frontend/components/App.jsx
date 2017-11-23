import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import NavBarContainer from './navbar/navbar_container';
import SessionFormContainer from './session/session_form_container';

//the App component is the only thing in root, but we use root to wrap
// the app component in HashRouter and Provider
const App = () => (
  <div>
    <header className="header-nav">
      <div className="header-nav-left">Landspaces</div>
      <NavBarContainer />
    </header>
    <Switch>
      <Route path="/login" component={SessionFormContainer} />
      <Route path="/signup" component={SessionFormContainer} />
    </Switch>


  </div>
);

export default App;

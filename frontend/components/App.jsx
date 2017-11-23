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

      <Route path="/" component={NavBarContainer} />
      <Route path="/login" component={SessionFormContainer} />
      <Route path="/signup" component={SessionFormContainer} />

  </div>
);

export default App;

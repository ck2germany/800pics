import React from 'react';
import { Route } from 'react-router-dom';

import { AuthRoute } from '../util/route_util';

import NavBarContainer from './navbar/navbar_container';
import SessionFormContainer from './session/session_form_container';
import Intro from './intro_splash/intro';

//the App component is the only thing in root, but we use root to wrap
// the app component in HashRouter and Provider
const App = () => (
  <div>

      <Route path="/" component={NavBarContainer} />

      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <Route exact path="/" component={Intro} />

  </div>
);


export default App;

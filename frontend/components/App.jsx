import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import NavBarContainer from './navbar/navbar_container';
import SessionFormContainer from './session/session_form_container';
import Intro from './intro_splash/intro';
import PhotoIndexContainer from './photo_index/photo_index_container';

//the App component is the only thing in root, but we use root to wrap
// the app component in HashRouter and Provider
const App = () => (
  <div>

      <Route path="/" component={NavBarContainer} />

    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <AuthRoute exact path="/" component={Intro} />
      <ProtectedRoute path="/main" component={PhotoIndexContainer} />
    </Switch>

  </div>
);


export default App;

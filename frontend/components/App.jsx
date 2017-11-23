import React from 'react';

import NavBarContainer from './navbar/navbar_container';

//the App component is the only thing in root, but we use root to wrap
// the app component in HashRouter and Provider
const App = () => (
  <div>
    <NavBarContainer />
  </div>
);

export default App;

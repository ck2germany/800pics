import React from 'react';
import ReactDOM from 'react-dom';


import * as SessionAPIUtil from './util/session_api_util';

import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();

  //testing start
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //testing end

  ReactDOM.render(<Root store={store}/>, root);
});

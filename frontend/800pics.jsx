import React from 'react';
import ReactDOM from 'react-dom';


import * as SessionAPIUtil from './util/session_api_util';
import * as PhotoUtil from './util/photo_api_util';
import fetchAllPhotos from './actions/photo_actions';

import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');

  


  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser} };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  ReactDOM.render(<Root store={store}/>, root);
});

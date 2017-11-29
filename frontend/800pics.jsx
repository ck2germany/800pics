import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';
 import { getUserInfo } from './actions/user_actions';

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

  window.getUserInfo = getUserInfo;
  window.dispatch = store.dispatch;
  window.getState = store.getState;


  ReactDOM.render(<Root store={store}/>, root);
});

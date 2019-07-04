
import React from 'react';
import ReactDOM from 'react-dom'
import configureStore from './store/store';
import Root from './components/root';

import {
  signUp, 
  logIn, 
  logOut } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  // const store = configureStore();

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // TESTING BELOW
  window.signUp = signUp;
  window.logIn = logIn;
  window.logOut = logOut;
  window.getState  = store.getState;
  window.dispatch = store.dispatch;
  // TESTING ABOVE

  ReactDOM.render(<Root store={store} />, root);
})

import React from 'react';
import ReactDOM from 'react-dom'
import configureStore from './store/store';

import {
  signUp, 
  logIn, 
  logOut } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  window.signUp = signUp;
  window.logIn = logIn;
  window.logOut = logOut;
  window.getState  = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(
    <div>
      <img src="https://media2.giphy.com/media/11sBLVxNs7v6WA/giphy.gif?cid=790b76115d1683c6725574516fc51390&rid=giphy.gif">
      </img>
      <br /><br />
      <marquee behavior="alternate" direction="" scrollamount='20'>
        <h1>YAY!</h1>
      </marquee>
    </div>
    , root
  );
})

import React from 'react';
import ReactDOM from 'react-dom'
import configureStore from './store/store';
import Root from './components/root';

import {
  signUp, 
  logIn, 
  logOut
  } from './actions/session_actions';

import {
  getVideos,
  getVideo,
  createVideo,
  updateVideo,
  deleteVideo,
  } from './actions/video_actions';

import * as LikeAPIUtil from './util/like_api_util';

import * as SearchAPI from './util/search_api_util';
import { searchVideos } from './actions/search_actions';


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

  // - = * TESTING BELOW *  = -

  // window.searchVideos = searchVideos;
  
  // window.signUp = signUp;
  // window.logIn = logIn;
  // window.logOut = logOut;

  // window.getState  = store.getState;
  // window.dispatch = store.dispatch;

  // window.getVideos = getVideos;
  // window.getVideo = getVideo;
  // window.createVideo = createVideo;
  // window.updateVideo = updateVideo;
  // window.deleteVideo = deleteVideo;

  // window.likeVideo = LikeAPIUtil.likeVideo;
  // window.unlikeVideo = LikeAPIUtil.unlikeVideo;
  // window.dislikeVideo = LikeAPIUtil.dislikeVideo;
  // window.undislikeVideo = LikeAPIUtil.undislikeVideo;
  // window.getLikes = LikeAPIUtil.getLikes;
  // window.getDislikes = LikeAPIUtil.getDislikes;

  // - = * TESTING ABOVE * = -

  ReactDOM.render(<Root store={store} />, root);
})
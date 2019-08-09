import {
  RECEIVE_ALL_VIDEOS,
  RECEIVE_VIDEO,
  DELETE_VIDEO,
} from '../actions/video_actions';

import {
  RECEIVE_SEARCH
} from '../actions/search_actions';


const videoReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  // debugger
  switch (action.type) {
    case RECEIVE_ALL_VIDEOS:
      return action.payload.videos;
    case RECEIVE_VIDEO: // only fires when user hard refresh the show page
      newState[action.payload.video.id] = action.payload.video;
      return newState;
    case DELETE_VIDEO:
      delete newState[action.videoId];
      return newState;
    default:
      return oldState;
  }
}

export default videoReducer;
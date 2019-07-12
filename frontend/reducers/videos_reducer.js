import {
  RECEIVE_ALL_VIDEOS,
  RECEIVE_VIDEO,
  DELETE_VIDEO,
} from '../actions/video_actions';


const videoReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_ALL_VIDEOS:
      return action.videos;
    case RECEIVE_VIDEO:
      newState[action.video.id] = action.video;
      return newState;
    case DELETE_VIDEO:
      delete newState[action.videoId];
      return newState;
    default:
      return oldState;
  }
}

export default videoReducer;
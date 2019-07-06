
import { RECEIVE_VIDEO_ERRORS } from '../actions/video_actions';

const videoErrorReducer = (oldState = [], action) => {

  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_VIDEO_ERRORS:
      return action.errors;
    default:
      return oldState;
  }
}

export default videoErrorReducer;
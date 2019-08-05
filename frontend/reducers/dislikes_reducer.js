import {
  RECEIVE_ALL_DISLIKES,
  RECEIVE_DISLIKE,
  DELETE_DISLIKE,
} from '../actions/like_actions';


const dislikesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_ALL_DISLIKES:
      return action.dislikes;
    case RECEIVE_DISLIKE:
      newState[action.dislike.id] = action.dislike;
      return newState;
    case DELETE_DISLIKE:
      delete newState[action.dislike.id];
      return newState;
    default:
      return oldState;
  }
}

export default dislikesReducer;
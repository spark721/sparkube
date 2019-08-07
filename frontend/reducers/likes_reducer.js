import {
  RECEIVE_ALL_LIKES,
  RECEIVE_LIKE,
  DELETE_LIKE,
} from '../actions/like_actions';


const likesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  // debugger
  switch (action.type) {
    case RECEIVE_ALL_LIKES:
      return action.likes;
    case RECEIVE_LIKE:
      newState[action.like.id] = action.like;
      return newState;
    case DELETE_LIKE:
      delete newState[action.like.id];
      return newState;
    default:
      return oldState;
  }
}

export default likesReducer;
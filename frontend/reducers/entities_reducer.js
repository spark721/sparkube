
import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import videoReducer from './videos_reducer';
import likesReducer from './likes_reducer';
import dislikesReducer from './dislikes_reducer';
import commentsReducer from './comments_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  videos: videoReducer,
  comments: commentsReducer,
  likes: likesReducer,
  dislikes: dislikesReducer,
});

export default entitiesReducer;
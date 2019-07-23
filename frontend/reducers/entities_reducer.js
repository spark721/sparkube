
import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import videoReducer from './videos_reducer';
import likesReducer from './likes_reducer';
import dislikesReducer from './dislikes_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  videos: videoReducer,
  likes: likesReducer,
  dislikes: dislikesReducer,
});

export default entitiesReducer;
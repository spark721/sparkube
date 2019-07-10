
import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import videoReducer from './videos_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  videos: videoReducer,
});

export default entitiesReducer;
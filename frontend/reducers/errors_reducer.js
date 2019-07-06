
import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import videoErrorReducer from './videos_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  videos: videoErrorReducer,
});

export default errorsReducer;

import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import videoErrorReducer from './videos_errors_reducer';

const errorsReducer = combineReducers({
  sessionErrors: sessionErrorsReducer,
  videoErrors: videoErrorReducer,
});

export default errorsReducer;
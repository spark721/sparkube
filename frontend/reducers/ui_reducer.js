
import {
  COLLAPSE_SIDEBAR,
  EXPAND_SIDEBAR,
} from '../actions/ui_action';

let defaultState = { expand: true };

const uiReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case EXPAND_SIDEBAR:
      newState.expand = true;
      return newState;
    case COLLAPSE_SIDEBAR:
      newState.expand = false;
      return newState;
    default:
      return oldState;
  }
}

export default uiReducer;

import {
  COLLAPSE_SIDEBAR,
  EXPAND_SIDEBAR,
  OPEN_MODAL,
  CLOSE_MODAL,
} from '../actions/ui_action';

let defaultState = {
  expand: true,
  modal: false,
};

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
    case OPEN_MODAL:
      newState.modal = true;
      return newState;
    case CLOSE_MODAL:
      newState.modal = false;
      return newState;
    default:
      return oldState;
  }
}

export default uiReducer;
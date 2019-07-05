
import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS;'
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

// regular action creator
const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser: currentUser,
  };
};

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  }
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors: errors,
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};


// thunk action creator
export const signUp = (user) => {
  return (dispatch) => {
    return SessionAPIUtil.signUp(user).then(
      user => dispatch(receiveCurrentUser(user)),
      err => dispatch(receiveErrors(err.responseJSON))
    );
  };
};

export const logIn = (user) => {
  return (dispatch) => {
    return SessionAPIUtil.logIn(user).then( 
      user => dispatch(receiveCurrentUser(user)),
      err => dispatch(receiveErrors(err.responseJSON))
    );
  };
};

export const logOut = () => {
  return (dispatch) => {
    return SessionAPIUtil.logOut().then( 
      res => dispatch(logoutCurrentUser(res))
      // err => dispatch(receiveErrors(err.responseJSON))
    );
  };
};



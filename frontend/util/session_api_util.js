
// signUp
export const signUp = (user) => {
  return $.ajax({
    type: `POST`,
    url: `/api/users`,
    data: { user },
  });
};

// logIn
export const logIn = (user) => {
  return $.ajax({
    type: `POST`,
    url: `/api/session`,
    data: { user },
  });
};

// logOut
export const logOut = () => {
  return $.ajax({
    type: `DELETE`,
    url: `/api/session`,
  });
};

// check username
export const chkUsername = (username) => {
  return $.ajax({
    // what type is this?
    // type:
    
    // where is this heading to?
    // url:
  });
};
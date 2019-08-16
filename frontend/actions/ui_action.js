
export const COLLAPSE_SIDEBAR = "COLLAPSE_SIDEBAR";
export const EXPAND_SIDEBAR = "EXPAND_SIDEBAR";

export const collapse = () => {
  return (dispatch) => {
    return dispatch({ type: COLLAPSE_SIDEBAR, });
  };
};

export const expand = () => {
  return (dispatch) => {
    return dispatch({ type: EXPAND_SIDEBAR, });
  };
};
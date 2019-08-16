
export const COLLAPSE_SIDEBAR = "COLLAPSE_SIDEBAR";
export const EXPAND_SIDEBAR = "EXPAND_SIDEBAR";

export const collapseSidebar = () => {
  return (dispatch) => {
    return dispatch({ type: COLLAPSE_SIDEBAR, });
  };
};

export const expandSidebar = () => {
  return (dispatch) => {
    return dispatch({ type: EXPAND_SIDEBAR, });
  };
};
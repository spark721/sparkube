
export const COLLAPSE_SIDEBAR = "COLLAPSE_SIDEBAR";
export const EXPAND_SIDEBAR = "EXPAND_SIDEBAR";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const collapseSidebar = () => {
  return { type: COLLAPSE_SIDEBAR, };
};

export const expandSidebar = () => {
  return { type: EXPAND_SIDEBAR, };
};

export const openModal = () => {
  return { type: OPEN_MODAL, };
};

export const closeModal = () => {
  // debugger
  return { type: CLOSE_MODAL, };
};


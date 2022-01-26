export const toggleMainMenus = (btn) => {
  return (dispatch, getState) => {
    //ASYNC CODE HERE
    dispatch({ type: "TOGGLE_MAINMENUS", btn });
  };
};

export const toggleSubMenus = (section) => {
  return (dispatch, getState) => {
    //ASYNC CODE HERE
    dispatch({ type: "TOGGLE_SUB_MENU", section });
  };
};

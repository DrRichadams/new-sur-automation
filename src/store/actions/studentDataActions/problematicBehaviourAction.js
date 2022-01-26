export const togglePBBtns = (btype) => {
  return (dispatch) => {
    dispatch({ type: "TOGGLE_PB_BTN", payload: btype });
  };
};

export const toggleEditingMode = (current) => {
  return (dispatch) =>
    dispatch({ type: "TOGGLE_EDITING_MODE", payload: current });
};

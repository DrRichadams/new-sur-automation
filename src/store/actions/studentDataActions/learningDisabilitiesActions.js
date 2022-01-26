export const toggleLDBtns = (btype) => {
  return (dispatch) => {
    dispatch({ type: "TOGGLE_LD_BTN", payload: btype });
  };
};

export const toggleEditingMode = (current) => {
  return (dispatch) =>
    dispatch({ type: "TOGGLE_EDITING_MODE", payload: current });
};

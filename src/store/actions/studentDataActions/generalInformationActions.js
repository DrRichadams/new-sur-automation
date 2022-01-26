export const switchbtn = (btype) => {
  return (dispatch) => {
    dispatch({ type: "SWITCH_GI_BTN", payload: btype });
  };
};

export const toggleEditingMode = (current) => {
  return (dispatch) =>
    dispatch({ type: "TOGGLE_EDITING_MODE", payload: current });
};

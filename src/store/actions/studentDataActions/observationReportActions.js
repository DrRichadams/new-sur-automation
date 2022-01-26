export const toggleOBbtns = (btype) => {
  return (dispatch) => {
    dispatch({ type: "TOGGLE_OB_BTNS", payload: btype });
  };
};

export const triggerEditingMode = (current) => {
  return (dispatch) =>
    dispatch({ type: "TRIGGER_EDITING_MODE", payload: current });
};

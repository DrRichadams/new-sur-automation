export const togglerEditing = (current) => {
  return (dispatch) =>
    dispatch({ type: "EDITING_MODE_TOGGLE", payload: current });
};

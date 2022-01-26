export const toggleEditingMode = (current) => {
  return (dispatch) =>
    dispatch({ type: "TOGGLE_EDITING_MODE", payload: current });
};

export const toggleEditing = (current) => {
  return (dispatch) => dispatch({ type: "TOGGLE_EDITING", payload: current });
};

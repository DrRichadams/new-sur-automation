export const toggleEditing = (current) => {
  return (dispatch) => dispatch({ type: "TOGGLE_EDITING", payload: current });
};

export const upddateData = (data) => {
  return (dispatch) => dispatch({ type: "UPDATE_DATA", payload: data })
}
export const selectStudent = (std_id) => {
  return (dispatch) => dispatch({ type: "SELECT_STUDENT", payload: std_id });
};

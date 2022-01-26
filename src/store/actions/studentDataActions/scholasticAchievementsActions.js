export const shiftEditingMode = (current) => {
  return (dispatch) =>
    dispatch({ type: "SHIFT_EDITING_MODE", payload: current });
};

export const shiftSchoolType = (current) => {
  return (dispatch) =>
    dispatch({ type: "SHIFT_SCHOOL_MODE", payload: current });
};

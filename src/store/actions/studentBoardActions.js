export const switchGender = (gen) => {
  return (dispatch, getState) => {
    dispatch({ type: "SWITCH_GENDER", gender: gen });
  };
};

export const toggleControls = () => {
  return (dispatch) => {
    dispatch({ type: "TOGGLE_CONTROLS" });
  };
};

export const triggerNewStudent = () => {
  return (dispatch) => {
    dispatch({ type: "TRIGGER_NEW_STUDENT" });
  };
};

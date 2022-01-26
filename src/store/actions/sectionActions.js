export const switchSection = (sec) => {
  return (dispatch, getState) => {
    //ASYNC CODE HERE

    dispatch({ type: "SWITCH_SECTION", payload: sec });
  };
};

export const switchObSection = (id) => {
  return (dispatch) => {
    dispatch({ type: "SWITCH_OB_SECTION", id });
  };
};

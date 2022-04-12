export const setCurrentUser = (data) => {
    return (dispatch) => dispatch({ type: "SET_CURRENT_USER", payload: data });
  };
   
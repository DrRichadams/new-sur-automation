export const getExternalData = (data) => {
  return (dispatch) => dispatch({ type: "GET_EXTERNAL_DATA", payload: data });
};

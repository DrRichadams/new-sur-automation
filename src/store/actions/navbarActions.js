export const makeDisplay = (param) => {
    return (dispatch) => dispatch({ type: "SHIFT_NAV_DISPLAY", payload: param })
}
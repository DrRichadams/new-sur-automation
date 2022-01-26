const initState = {
  editingMode: false,
};

const schoolsAttendedReducer = (state = initState, action) => {
  switch (action.type) {
    case "TOGGLE_EDITING":
      console.log("its wordking", action);
      if (action.payload === "editing") {
        return {
          editingMode: true,
        };
      } else if (action.payload === "not_editing") {
        return {
          editingMode: false,
        };
      }
      break;
    default:
      return state;
  }
};

export default schoolsAttendedReducer;

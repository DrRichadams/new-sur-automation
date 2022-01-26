const initState = {
  editingMode: false,
};

const identificationReducer = (state = initState, action) => {
  switch (action.type) {
    case "TOGGLE_EDITING_MODE":
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

export default identificationReducer;

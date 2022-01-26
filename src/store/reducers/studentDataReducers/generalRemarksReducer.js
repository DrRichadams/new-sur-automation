const initState = {
  editingMode: false,
};

const generalRemarksReducer = (state = initState, action) => {
  switch (action.type) {
    case "TOGGLE_EDITING_MODE":
      if (action.payload === "editing") {
        return {
          ...state,
          editingMode: true,
        };
      } else if (action.payload === "not_editing") {
        return {
          ...state,
          editingMode: false,
        };
      }
      break;
    default:
      return state;
  }
};

export default generalRemarksReducer;

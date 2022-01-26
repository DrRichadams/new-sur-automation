const initState = {
  editingMode: false,
};

const physicalConditionReducer = (state = initState, action) => {
  switch (action.type) {
    case "EDITING_MODE_TOGGLE":
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

export default physicalConditionReducer;

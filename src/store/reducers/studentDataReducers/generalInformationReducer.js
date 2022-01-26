const initState = {
  giBtns: {
    oap: true,
    oac: false,
    voca: false,
  },
  editingMode: false,
};

const generalInformationReducer = (state = initState, action) => {
  switch (action.type) {
    case "SWITCH_GI_BTN":
      if (action.payload === "oap") {
        return {
          ...state,
          giBtns: {
            oap: true,
            oac: false,
            voca: false,
          },
        };
      } else if (action.payload === "oac") {
        return {
          ...state,
          giBtns: {
            oap: false,
            oac: true,
            voca: false,
          },
        };
      } else if (action.payload === "voca") {
        return {
          ...state,
          giBtns: {
            oap: false,
            oac: false,
            voca: true,
          },
        };
      }
      break;
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

export default generalInformationReducer;

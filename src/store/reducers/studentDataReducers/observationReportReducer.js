const initState = {
  OBbtns: {
    psych: true,
    social: false,
    overal: false,
  },
  editingMode: false,
};

const observationReportReducer = (state = initState, action) => {
  switch (action.type) {
    case "TOGGLE_OB_BTNS":
      if (action.payload === "psych") {
        return {
          ...state,
          OBbtns: {
            psych: true,
            social: false,
            overal: false,
          },
        };
      } else if (action.payload === "social") {
        return {
          ...state,
          OBbtns: {
            psych: false,
            social: true,
            overal: false,
          },
        };
      } else if (action.payload === "overal") {
        return {
          ...state,
          OBbtns: {
            psych: false,
            social: false,
            overal: true,
          },
        };
      }
      break;
    case "TRIGGER_EDITING_MODE":
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

export default observationReportReducer;

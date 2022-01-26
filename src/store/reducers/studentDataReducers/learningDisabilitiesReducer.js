const initState = {
  LDBtns: {
    natBtn: true,
    actBtn: false,
    resBtn: false,
  },
  editingMode: false,
};

const toggleLDBtnReducer = (state = initState, action) => {
  switch (action.type) {
    case "TOGGLE_LD_BTN":
      if (action.payload == "natBtn") {
        // console.log("nat reached", action);
        return {
          ...state,
          LDBtns: {
            natBtn: true,
            actBtn: false,
            resBtn: false,
          },
        };
      } else if (action.payload == "actBtn") {
        return {
          ...state,
          LDBtns: {
            natBtn: false,
            actBtn: true,
            resBtn: false,
          },
        };
      } else if (action.payload == "resBtn") {
        return {
          ...state,
          LDBtns: {
            natBtn: false,
            actBtn: false,
            resBtn: true,
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
          editingMode: false
        }
      } break;
    default:
      return state;
  }
};

export default toggleLDBtnReducer;

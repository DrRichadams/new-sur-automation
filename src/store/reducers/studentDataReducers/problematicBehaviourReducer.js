const initState = {
  PBBtns: {
    natBtn: true,
    actBtn: false,
    resBtn: false,
  },
  editingMode: false,
};

const togglePBBtnReducer = (state = initState, action) => {
  switch (action.type) {
    case "TOGGLE_PB_BTN":
      if (action.payload == "natBtn") {
        // console.log("nat reached", action);
        return {
          ...state,
          PBBtns: {
            natBtn: true,
            actBtn: false,
            resBtn: false,
          },
        };
      } else if (action.payload == "actBtn") {
        return {
          ...state,
          PBBtns: {
            natBtn: false,
            actBtn: true,
            resBtn: false,
          },
        };
      } else if (action.payload == "resBtn") {
        return {
          ...state,
          PBBtns: {
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
          editingMode: false,
        };
      }
      break;
    default:
      return state;
  }
};

export default togglePBBtnReducer;

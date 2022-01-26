const initState = {
  sectionsControls: false,
  genderBtns: {
    boys: true,
    girls: false,
  },
  addNewStudentTrigger: false
};

const studentsBoardReducer = (state = initState, action) => {
  switch (action.type) {
    case "SWITCH_GENDER":
      if (action.gender === "boys") {
        return {
          ...state,
          genderBtns: {
            boys: true,
            girls: false,
          },
        };
      } else if (action.gender === "girls") {
        return {
          ...state,
          genderBtns: {
            boys: false,
            girls: true,
          },
        };
      } else {
        return state;
      }
    case "TOGGLE_CONTROLS":
      return {
        ...state,
        sectionsControls: !state.sectionsControls,
      };
      
      case "TRIGGER_NEW_STUDENT":
        return {
          ...state,
          addNewStudentTrigger: !state.addNewStudentTrigger
        }
    default:
      return state;
  }
};

export default studentsBoardReducer;

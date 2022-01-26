const initState = {
  editingMode: false,
  primarySchool: true,
};

const scholasticAchievementsReducer = (state = initState, action) => {
  switch (action.type) {
    case "SHIFT_EDITING_MODE":
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
      } else if (action.payload === "saving") {
        return {
          ...state,
          editingMode: false,
        };
      }
      break;
    case "SHIFT_SCHOOL_MODE":
      if (action.payload === "primary") {
        return {
          ...state,
          primarySchool: true,
        };
      } else if (action.payload === "secondary") {
        return {
          ...state,
          primarySchool: false,
        };
      }
      break;
    default:
      return state;
  }
};

export default scholasticAchievementsReducer;

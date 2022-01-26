const initState = {
  psyMain: true,
  socMain: false,
  psySec: {
    cogBtn: true,
    emoBtn: false,
    motBtn: false,
  },
  socSec: {
    homeBtn: true,
    schoolBtn: false,
    envBtn: false,
  },
};

const observationsReducer = (state = initState, action) => {
  //console.log(action);
  switch (action.type) {
    case "SWITCH_OB_SECTION":
      if (action.id === "1.1") {
        return {
          ...state,
          psySec: {
            cogBtn: true,
            emoBtn: false,
            motBtn: false,
          },
        };
      } else if (action.id === "1.2") {
        return {
          ...state,
          psySec: {
            cogBtn: false,
            emoBtn: true,
            motBtn: false,
          },
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default observationsReducer;

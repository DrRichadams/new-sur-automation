const initState = {
  sectionButtons: {
    btn1: true,
    btn2: false,
    btn3: false,
    btn4: false,
    btn5: false,
    btn6: false,
    btn7: false,
    btn8: false,
    btn9: false,
    btn10: false,
  },
};

const sectionsReducer = (state = initState, action) => {
  if (action.type === "SWITCH_SECTION") {
    switch (action.payload) {
      case "section1":
        return {
          ...state,
          sectionButtons: {
            btn1: true,
            btn2: false,
            btn3: false,
            btn4: false,
            btn5: false,
            btn6: false,
            btn7: false,
            btn8: false,
            btn9: false,
            btn10: false,
          },
        };
      case "section2":
        return {
          ...state,
          sectionButtons: {
            btn1: false,
            btn2: true,
            btn3: false,
            btn4: false,
            btn5: false,
            btn6: false,
            btn7: false,
            btn8: false,
            btn9: false,
            btn10: false,
          },
        };
      case "section3":
        return {
          ...state,
          sectionButtons: {
            btn1: false,
            btn2: false,
            btn3: true,
            btn4: false,
            btn5: false,
            btn6: false,
            btn7: false,
            btn8: false,
            btn9: false,
            btn10: false,
          },
        };
      case "section4":
        return {
          ...state,
          sectionButtons: {
            btn1: false,
            btn2: false,
            btn3: false,
            btn4: true,
            btn5: false,
            btn6: false,
            btn7: false,
            btn8: false,
            btn9: false,
            btn10: false,
          },
        };
      case "section5":
        return {
          ...state,
          sectionButtons: {
            btn1: false,
            btn2: false,
            btn3: false,
            btn4: false,
            btn5: true,
            btn6: false,
            btn7: false,
            btn8: false,
            btn9: false,
            btn10: false,
          },
        };
      case "section6":
        return {
          ...state,
          sectionButtons: {
            btn1: false,
            btn2: false,
            btn3: false,
            btn4: false,
            btn5: false,
            btn6: true,
            btn7: false,
            btn8: false,
            btn9: false,
            btn10: false,
          },
        };
      case "section7":
        return {
          ...state,
          sectionButtons: {
            btn1: false,
            btn2: false,
            btn3: false,
            btn4: false,
            btn5: false,
            btn6: false,
            btn7: true,
            btn8: false,
            btn9: false,
            btn10: false,
          },
        };
      case "section8":
        return {
          ...state,
          sectionButtons: {
            btn1: false,
            btn2: false,
            btn3: false,
            btn4: false,
            btn5: false,
            btn6: false,
            btn7: false,
            btn8: true,
            btn9: false,
            btn10: false,
          },
        };
      case "section9":
        return {
          ...state,
          sectionButtons: {
            btn1: false,
            btn2: false,
            btn3: false,
            btn4: false,
            btn5: false,
            btn6: false,
            btn7: false,
            btn8: false,
            btn9: true,
            btn10: false,
          },
        };
      case "section10":
        return {
          ...state,
          sectionButtons: {
            btn1: false,
            btn2: false,
            btn3: false,
            btn4: false,
            btn5: false,
            btn6: false,
            btn7: false,
            btn8: false,
            btn9: false,
            btn10: true,
          },
        };

      default:
        return state;
    }
  } else {
    return state;
  }
};

export default sectionsReducer;

const initState = {
  infoBtn: true,
  stdBtn: true,
  subBtns: {
    infoType: {
      instructions: true,
      observation: false,
    },
    stdType: {
      identification: false,
      schools_attended: false,
      physical_condition: false,
      psychometric_data: false,
      learning_disabilities: false,
      problematic_behaviour: false,
      observation_report: false,
      scholastic_achievements: false,
      general_information: false,
      general_remarks: false,
    },
  },
};

const classTeacherReducer = (state = initState, action) => {
  switch (action.type) {
    case "TOGGLE_MAINMENUS":
      //console.log(action);
      // return {
      //   ...state,
      //   infoBtn: action.btn == "information" ? true : false,
      //   stdBtn: action.btn == "students" ? true : false,
      // };
      if (action.btn == "information") { 
        return {
          ...state,
          infoBtn: true,
          stdBtn: false,
        };
      } else if (action.btn == "students") {
        return {
          ...state,
          infoBtn: false,
          stdBtn: true,
        };
      }
      break;
    case "TOGGLE_SUB_MENU":
      //falsify();
      //console.log("Reducer reached with", action);
      //console.log("Reducer current-state", state);
      switch (action.section) {
        case "students_selection":
          return {
            ...state,
            subBtns: {
              infoType: {
                instructions: true,
                observation: false,
              },
              stdType: {
                identification: false,
                schools_attended: false,
                physical_condition: false,
                psychometric_data: false,
                learning_disabilities: false,
                problematic_behaviour: false,
                observation_report: false,
                scholastic_achievements: false,
                general_information: false,
                general_remarks: false,
              },
            },
          };
        case "instructions":
          return {
            ...state,
            subBtns: {
              infoType: {
                instructions: true,
                observation: false,
              },
              stdType: {
                identification: false,
                schools_attended: false,
                physical_condition: false,
                psychometric_data: false,
                learning_disabilities: false,
                problematic_behaviour: false,
                observation_report: false,
                scholastic_achievements: false,
                general_information: false,
                general_remarks: false,
              },
            },
          };
        case "observations":
          return {
            ...state,
            subBtns: {
              infoType: {
                instructions: false,
                observation: true,
              },
              stdType: {
                identification: false,
                schools_attended: false,
                physical_condition: false,
                psychometric_data: false,
                learning_disabilities: false,
                problematic_behaviour: false,
                observation_report: false,
                scholastic_achievements: false,
                general_information: false,
                general_remarks: false,
              },
            },
          };
        case "identification":
          return {
            ...state,
            subBtns: {
              infoType: {
                instructions: false,
                observation: false,
              },
              stdType: {
                identification: true,
                schools_attended: false,
                physical_condition: false,
                psychometric_data: false,
                learning_disabilities: false,
                problematic_behaviour: false,
                observation_report: false,
                scholastic_achievements: false,
                general_information: false,
                general_remarks: false,
              },
            },
          };
        case "schools_attended":
          return {
            ...state,
            subBtns: {
              infoType: {
                instructions: false,
                observation: false,
              },
              stdType: {
                identification: false,
                schools_attended: true,
                physical_condition: false,
                psychometric_data: false,
                learning_disabilities: false,
                problematic_behaviour: false,
                observation_report: false,
                scholastic_achievements: false,
                general_information: false,
                general_remarks: false,
              },
            },
          };
        case "physical_condition":
          return {
            ...state,
            subBtns: {
              infoType: {
                instructions: false,
                observation: false,
              },
              stdType: {
                identification: false,
                schools_attended: false,
                physical_condition: true,
                psychometric_data: false,
                learning_disabilities: false,
                problematic_behaviour: false,
                observation_report: false,
                scholastic_achievements: false,
                general_information: false,
                general_remarks: false,
              },
            },
          };
        case "psychometric_data":
          return {
            ...state,
            subBtns: {
              infoType: {
                instructions: false,
                observation: false,
              },
              stdType: {
                identification: false,
                schools_attended: false,
                physical_condition: false,
                psychometric_data: true,
                learning_disabilities: false,
                problematic_behaviour: false,
                observation_report: false,
                scholastic_achievements: false,
                general_information: false,
                general_remarks: false,
              },
            },
          };
        case "learning_disabilities":
          return {
            ...state,
            subBtns: {
              infoType: {
                instructions: false,
                observation: false,
              },
              stdType: {
                identification: false,
                schools_attended: false,
                physical_condition: false,
                psychometric_data: false,
                learning_disabilities: true,
                problematic_behaviour: false,
                observation_report: false,
                scholastic_achievements: false,
                general_information: false,
                general_remarks: false,
              },
            },
          };
        case "problematic_behaviour":
          return {
            ...state,
            subBtns: {
              infoType: {
                instructions: false,
                observation: false,
              },
              stdType: {
                identification: false,
                schools_attended: false,
                physical_condition: false,
                psychometric_data: false,
                learning_disabilities: false,
                problematic_behaviour: true,
                observation_report: false,
                scholastic_achievements: false,
                general_information: false,
                general_remarks: false,
              },
            },
          };
        case "observation_report":
          return {
            ...state,
            subBtns: {
              infoType: {
                instructions: false,
                observation: false,
              },
              stdType: {
                identification: false,
                schools_attended: false,
                physical_condition: false,
                psychometric_data: false,
                learning_disabilities: false,
                problematic_behaviour: false,
                observation_report: true,
                scholastic_achievements: false,
                general_information: false,
                general_remarks: false,
              },
            },
          };
        case "scholastic_achievements":
          return {
            ...state,
            subBtns: {
              infoType: {
                instructions: false,
                observation: false,
              },
              stdType: {
                identification: false,
                schools_attended: false,
                physical_condition: false,
                psychometric_data: false,
                learning_disabilities: false,
                problematic_behaviour: false,
                observation_report: false,
                scholastic_achievements: true,
                general_information: false,
                general_remarks: false,
              },
            },
          };
        case "general_information":
          return {
            ...state,
            subBtns: {
              infoType: {
                instructions: false,
                observation: false,
              },
              stdType: {
                identification: false,
                schools_attended: false,
                physical_condition: false,
                psychometric_data: false,
                learning_disabilities: false,
                problematic_behaviour: false,
                observation_report: false,
                scholastic_achievements: false,
                general_information: true,
                general_remarks: false,
              },
            },
          };
        case "general_remarks":
          return {
            ...state,
            subBtns: {
              infoType: {
                instructions: false,
                observation: false,
              },
              stdType: {
                identification: false,
                schools_attended: false,
                physical_condition: false,
                psychometric_data: false,
                learning_disabilities: false,
                problematic_behaviour: false,
                observation_report: false,
                scholastic_achievements: false,
                general_information: false,
                general_remarks: true,
              },
            },
          };
        default:
          return state;
      }

    default:
      return state;
  }
};

export default classTeacherReducer;

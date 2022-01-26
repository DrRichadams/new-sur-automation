const SchoolsPsychometricData = [
  {
    std_id: "111",
    psychData: [
      {
        id: "ad",
        date: "28 December",
        name_of_test: "Reasoning test",
        grade: "B",
        tester: "Dr Jonnas",
        remarks: "There is room for improvement in the situation",
      },
      {
        id: "bd",
        date: "28 April",
        name_of_test: "Concious test",
        grade: "D",
        tester: "Dr Philips",
        remarks: "If not monitored the condition could escalate",
      },
    ],
  },
  {
    std_id: "222",
    psychData: [
      {
        id: "ad",
        date: "28 December",
        name_of_test: "Reasoning test",
        grade: "B",
        tester: "Dr Jonnas",
        remarks: "There is room for improvement in the situation",
      },
      {
        id: "bd",
        date: "28 April",
        name_of_test: "Concious test",
        grade: "D",
        tester: "Dr Philips",
        remarks: "If not monitored the condition could escalate",
      },
    ],
  },
  {
    std_id: "333",
    psychData: [
      {
        id: "ad",
        date: "28 December",
        name_of_test: "Reasoning test",
        grade: "B",
        tester: "Dr Jonnas",
        remarks: "There is room for improvement in the situation",
      },
      {
        id: "bd",
        date: "28 April",
        name_of_test: "Concious test",
        grade: "D",
        tester: "Dr Philips",
        remarks: "If not monitored the condition could escalate",
      },
    ],
  },
];

const exPsychometricDataReducer = (state = SchoolsPsychometricData, action) => {
  return state;
};

export default exPsychometricDataReducer;

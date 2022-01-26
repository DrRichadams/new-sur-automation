const studentsPhysicalCondition = [
  {
    std_id: "111",
    conditions: [
      {
        id: "1",
        date: "june 28",
        general_health: "normal",
        problem: "asthmatic",
        current_solution: "Inhaler",
        previous_illness: "chest pains",
      },
      {
        id: "2",
        date: "May 28",
        general_health: "normal",
        problem: "Allegic to cats",
        current_solution: "Inhaler",
        previous_illness: "acne",
      },
    ],
  },
  {
    std_id: "222",
    conditions: [
      {
        id: "1",
        date: "August 28",
        general_health: "normal",
        problem: "asthmatic",
        current_solution: "Inhaler",
        previous_illness: "chest pains",
      },
      {
        id: "2",
        date: "May 28",
        general_health: "normal",
        problem: "Allegic to cats",
        current_solution: "Inhaler",
        previous_illness: "acne",
      },
    ],
  },
  {
    std_id: "333",
    conditions: [
      {
        id: "3",
        date: "june 2",
        general_health: "normal",
        problem: "skn desease",
        current_solution: "cream",
        previous_illness: "migraine",
      },
      {
        id: "2",
        date: "May 28",
        general_health: "normal",
        problem: "Allegic to cats",
        current_solution: "Inhaler",
        previous_illness: "migraine",
      },
    ],
  },
];

const exPhysicalConditionReducer = (
  state = studentsPhysicalCondition,
  action
) => {
  return state;
};

export default exPhysicalConditionReducer;

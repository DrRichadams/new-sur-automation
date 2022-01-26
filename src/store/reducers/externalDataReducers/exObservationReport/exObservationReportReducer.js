const exStudentsObservationReport = [
  {
    std_id: "111",
    psychological: [
      {
        id: "bc",
        grade: "9",
        year: "2001",
        report:
          "Agatha has a strong mental character and she is less emotional in dire situations",
      },
      {
        id: "bc1",
        grade: "12",
        year: "2004",
        report:
          "Over the years, Agatha has developed some outstanding emotional strength as compared to when she started school",
      },
    ],
    social: [
      {
        id: "bb",
        grade: "10",
        year: "2002",
        report: "Agatha has serious challenges with making new friends",
      },
    ],
    overall_impression: [
      {
        id: "b9",
        grade: "12",
        year: "2004",
        report:
          "The girl has improved socially, she made 3 friends in her chemistry class",
      },
    ],
  },
  {
    std_id: "22",
    psychological: [
      {
        id: "bc",
        grade: "9",
        year: "2001",
        report:
          "Ashely has a strong mental character and she is less emotional in dire situations",
      },
      {
        id: "bc1",
        grade: "12",
        year: "2004",
        report:
          "Over the years, Agatha has developed some outstanding emotional strength as compared to when she started school",
      },
    ],
    social: [
      {
        id: "bb",
        grade: "10",
        year: "2002",
        report: "Ashlet has serious challenges with making new friends",
      },
    ],
    overall_impression: [
      {
        id: "b9",
        grade: "12",
        year: "2004",
        report:
          "The student has improved socially, she made 3 friends in her chemistry class",
      },
    ],
  },
  {
    std_id: "333",
    psychological: [
      {
        id: "bc",
        grade: "9",
        year: "2001",
        report:
          "Marian has a strong mental character and she is less emotional in dire situations",
      },
      {
        id: "bc1",
        grade: "12",
        year: "2004",
        report:
          "Over the years, Agatha has developed some outstanding emotional strength as compared to when she started school",
      },
    ],
    social: [
      {
        id: "bb",
        grade: "10",
        year: "2002",
        report: "Marian has serious challenges with making new friends",
      },
    ],
    overall_impression: [
      {
        id: "b9",
        grade: "12",
        year: "2004",
        report:
          "The girl has improved socially, she made 3 friends in her chemistry class",
      },
    ],
  },
];

const exObservationReportReducer = (
  state = exStudentsObservationReport,
  action
) => {
  return state;
};

export default exObservationReportReducer;

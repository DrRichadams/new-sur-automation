const studentsSchoolsAttended = [
  {
    std_id: "111",
    exemption_from_compulsory_education: false,
    date: {
      month: "6",
      day: "28",
      year: "98",
    },
    age_on_initial_entry_to_school: "9",
    schools_details: [
      {
        id: "a1",
        admission_no: "11224",
        name_of_school: "St Georges",
        medium: null,
        date_of_admission: "1/1/2002",
        grade_of_admission: "8",
        date_of_departure: "11/12/2009",
        grade_of_departure: "7",
      },
      {
        id: "a2",
        admission_no: "11223",
        name_of_school: "Windhoek High",
        medium: null,
        date_of_admission: "12/06/2009",
        grade_of_admission: "8",
        date_of_departure: "28/08/2010",
        grade_of_departure: "9", 
      },
    {
        id: "a3",
        admission_no: "11222",
        name_of_school: "DHPS",
        medium: null,
        date_of_admission: "12/06/2010",
        grade_of_admission: "9",
        date_of_departure: "12/11/2014",
        grade_of_departure: "12",
      },
    ],
  },

  {
    std_id: "222",
    exemption_from_compulsory_education: false,
    date: {
      month: "6",
      day: "28",
      year: "98",
    },
    age_on_initial_entry_to_school: "9",
    schools_details: [
      {
        id: "a1",
        admission_no: "ab",
        name_of_school: "Amazing kids",
        medium: null,
        date_of_admission: "1/1/2002",
        grade_of_admission: "8",
        date_of_departure: "11/12/2009",
        grade_of_departure: "7",
      },
      {
        id: "a2",
        admission_no: "ac",
        name_of_school: "Windhoek High",
        medium: null,
        date_of_admission: "12/06/2009",
        grade_of_admission: "8",
        date_of_departure: "28/08/2010",
        grade_of_departure: "9",
      },
      {
        id: "a3",
        admission_no: "ad",
        name_of_school: "DHPS",
        medium: null,
        date_of_admission: "12/06/2010",
        grade_of_admission: "9",
        date_of_departure: "12/11/2014",
        grade_of_departure: "12",
      },
    ],
  },

  {
    std_id: "333",
    exemption_from_compulsory_education: false,
    date: {
      month: "6",
      day: "28",
      year: "98",
    },
    age_on_initial_entry_to_school: "9",
    schools_details: [
      {
        id: "a1",
        admission_no: "fg",
        name_of_school: "Amazing kids",
        medium: null,
        date_of_admission: "1/1/2002",
        grade_of_admission: "8",
        date_of_departure: "11/12/2009",
        grade_of_departure: "7",
      },
      {
        id: "a2",
        admission_no: "fh",
        name_of_school: "Windhoek High",
        medium: null,
        date_of_admission: "12/06/2009",
        grade_of_admission: "8",
        date_of_departure: "28/08/2010",
        grade_of_departure: "9",
      },
      {
        id: "a3",
        admission_no: "fj",
        name_of_school: "DHPS",
        medium: null,
        date_of_admission: "12/06/2010",
        grade_of_admission: "9",
        date_of_departure: "12/11/2014",
        grade_of_departure: "12",
      },
    ],
  },
];

const exSchoolsAttendedReducer = (state = studentsSchoolsAttended, action) => {
  switch(action.type) {
    case "UPDATE_DATA":
      console.log("Data has been set", action)
      return [
        ...action.payload
      ]
    default:
      return state
  }
};

export default exSchoolsAttendedReducer;

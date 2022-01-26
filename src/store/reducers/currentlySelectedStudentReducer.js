const initState = {
  student_id: null,
};

const currentlySelectedStudentReducer = (state = initState, action) => {
  switch (action.type) {
    case "SELECT_STUDENT":
      return {
        student_id: action.payload,
      };
    default:
      return state;
  }
};

export default currentlySelectedStudentReducer;

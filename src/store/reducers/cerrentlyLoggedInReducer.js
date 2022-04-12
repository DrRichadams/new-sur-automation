const currentlyLoggedIn = {
  userInfo: {
    userID: "P28A4",
    name: "Jake Doman",
    email: "proxyserver7798@gmail.com",
    userType: "admin",
    class: "",
  },
};

const currentlyLoggedInReducer = (state = currentlyLoggedIn, action) => {
  switch(action.type) {
    case "SET_CURRENT_USER":  
      return {
        ...state,
        userID: "YTYT",
        name: "Richard Mutambisi",
        email: "proxyserver7798@gmail.com",
        userType: "admin",
        class: "1A",
      }
      default:
        return state
  }
};

export default currentlyLoggedInReducer;

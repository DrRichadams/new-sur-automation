const currentlyLoggedIn = {
  userInfo: {
    userID: "P28A4",
    name: "Jake Doman",
    email: "proxyserver7798@gmail.com",
    userType: "admin",
  },
  classes: [
    {
      id: "1B2c",
      name: "B",
      grade: "9",
    },
    {
      id: "1B2d",
      name: "A",
      grade: "10",
    },
    {
      id: "1B2e",
      name: "D",
      grade: "8",
    },
  ],
};

const currentlyLoggedInReducer = (state = currentlyLoggedIn, action) => {
  return state;
};

export default currentlyLoggedInReducer;

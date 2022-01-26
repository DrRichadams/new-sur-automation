import React from "react";
import { connect } from "react-redux";
import "../../app.css";

const SignedInClassTeacher = (props) => {
  const { email, name, userID, userType } = props.userData;
  console.log("Nav bar data", props);
  return (
    <>
      <div className="main_logo">SUR AUTOMATION</div>
      <div className="user_profile">
        <button
          className="logout_user_btn"
          onClick={() => {
            localStorage.setItem("isLoggedIn", false);
            console.log("local storage has been set");
          }}
        >
          LOG OUT
        </button>
        <div className="logged_in_user_details">
          <div className="name_type">
            <p className="user_name">{name}</p>
            <p className="user_type">{userType}</p>
          </div>
          <div className="user_initials">
            {name.charAt(0)} {name.charAt(name.length - 1)}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.loggedIn.userInfo,
  };
};

export default connect(mapStateToProps)(SignedInClassTeacher);

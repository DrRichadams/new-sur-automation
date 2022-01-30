import React from "react";
import "../../app.css";
import SignedInClassTeacher from "./SignedInClassTeacher";
import { connect } from "react-redux"

const MainNavTop = ({ displayMode }) => {

  console.log("Is display",displayMode)

  const logged_in_state = JSON.parse(
    localStorage.getItem("isLoggedIn")
  )

  console.log("Nav local", logged_in_state)

  const [ curState, setCurState ] = React.useState(false)

  React.useEffect(() => {
    setCurState(logged_in_state)
  }, [])

  return (
    <div className="main_nav_top_container" style={{ display: curState ? "flex":"none" }}>
      <SignedInClassTeacher />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    displayMode: state.NavbarReducer.isDisplayed
  }
}

export default connect(mapStateToProps)(MainNavTop);

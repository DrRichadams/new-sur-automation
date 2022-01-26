import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./students_information.css";

const StudentSelect = (props) => {
  const navigator = useNavigate();
  const { classes, userInfo } = props.loggedInUser;
  const [classlist, setclasslist] = useState([{ grade: "Loading", name: "." }]);
  useEffect(() => {
    setclasslist(classes);
  }, []);
  //console.log("Logged in props", classlist);

  const openClass = (id) => {
    navigator("/students_board");
  };

  const renderClasses = classlist.map((classi) => (
    <div className="a_class_box" key={classi.id}>
      <h1 className="class_title">
        {classi.grade} {classi.name}
      </h1>
      {/* <div className="num_of_students num_of">28 Students</div>
      <div className="num_of_boys num_of">10 Boys</div>
      <div className="num_of_girls num_of">18 Girls</div> */}
      <button className="open_btn" onClick={() => openClass()}>
        OPEN
      </button>
    </div>
  ));
  return (
    <div className="student_select_contain">
      <div className="title_header">
        <h1 className="main_ssc_title">Your classes are displayed here</h1>
        <Link to="/dashboard" className="exit_select">
          GO BACK
        </Link>
      </div>
      <p className="main_ssc_label">You have {classlist.length} classes</p>
      <div className="act_classes">{renderClasses}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.loggedIn,
  };
};

export default connect(mapStateToProps)(StudentSelect);

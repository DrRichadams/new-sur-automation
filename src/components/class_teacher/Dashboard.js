import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleMainMenus } from "../../store/actions/classTeacherActions";
import { toggleSubMenus } from "../../store/actions/classTeacherActions";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import "../../app.css";
import Instructions from "./sections/information/Instructions";
import Observations from "./sections/information/Observations";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = (props) => {
  const [ state, setState ] = React.useState({
    infoBtn_sect: {
      colorSwitch: "#fff)",
      backgroundColorSwitch: "transparent",
    },
    stdBtn_sect: {
      colorSwitch: "#fff)",
      backgroundColorSwitch: "transparent",
    },
  });
    const { infoBtn, stdBtn, subBtns } = props.classTeacher;
    const { toggleTwo, toggleMany } = props;
    const { infoType, stdType } = subBtns;
    //console.log(props);
    console.log("needed", infoType);
    const Navigate = useNavigate()
    return (
      <div className="class_teacher_dashboard_container">
        <div className="left_dashboard_menu">
          <div className="school_grade_titles">
            <div className="school_title">Windhoek High School</div>
            <div className="grade_title">Grade 9B</div>
          </div>
          <div className="side_menu_links">
            <div
              className="information_btn side_btn"
              id="information"
              onClick={(e) => toggleTwo("information")}
              style={{
                backgroundColor: infoBtn
                  ? "#fff"
                  : state.backgroundColorSwitch,
                color: infoBtn ? "rgb(36,40,80)" : state.colorSwitch,
              }}
              onMouseOver={() => {
                setState({
                  ...state,
                  infoBtn_sect: {
                    backgroundColorSwitch: "#fff",
                    colorSwitch: "rgb(36,40,80)",
                  },
                });
              }}
              onMouseOut={() => {
                setState({
                  ...state,
                  infoBtn_sect: {
                    backgroundColorSwitch: "transparent",
                    colorSwitch: "#fff",
                  },
                });
              }}
            >
              <p>Information</p>
              {infoBtn ? (
                <FiChevronDown size={20} className="info_icon" />
              ) : (
                <FiChevronRight size={20} className="info_icon" />
              )}
            </div>
            <div
              className="information_link_btns"
              style={{
                display: infoBtn ? "block" : "none",
              }}
            >
              <div
                className="identification_link btn_link"
                onClick={() => {
                  toggleMany("instructions");
                }}
              >
                <p>Instructions</p>
                <div className="identification_link_icon student_link_icon">
                  <FiChevronRight size={20} color="#fff" />
                </div>
              </div>
              <div
                className="schools_attended_link btn_link"
                onClick={() => {
                  toggleMany("observations");
                }}
              >
                <p>Observations</p>
                <div className="schools_attended_link_icon student_link_icon">
                  <FiChevronRight size={20} color="#fff" />
                </div>
              </div>
            </div>
            {/* to="/students_select"  to="/students_board"*/}
            <div
              
              className="students_btn side_btn"
              onClick={(e) => Navigate("/students_board")}>
              <p>Classes</p>
              {stdBtn ? (
                <FiChevronDown size={20} className="std_icon" />
              ) : (
                <FiChevronRight size={20} className="std_icon" />
              )}
            </div>
          </div>
        </div>
        <div className="details_contents">
          {infoType.instructions ? (
            <Instructions />
          ) : infoType.observation ? (
            <Observations />
          ) : !infoType.observation ? (
            <div className="choose_class"></div>
          ) : (
            <div className="default_no_data_page">NO DATA</div>
          )}
        </div>
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    classTeacher: state.classTeacher, 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTwo: (btn) => dispatch(toggleMainMenus(btn)),
    toggleMany: (section) => dispatch(toggleSubMenus(section)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

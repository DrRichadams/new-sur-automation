import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toggleMainMenus } from "../../../store/actions/classTeacherActions";
import { toggleSubMenus } from "../../../store/actions/classTeacherActions";
import { triggerNewStudent } from "../../../store/actions/studentBoardActions";
import { FiChevronRight, FiChevronDown, FiChevronLeft } from "react-icons/fi";
import "../../../app.css";
import Identification from "../sections/students/Identification";
import SchoolsAttended from "../sections/students/SchoolsAttended";
import PhysicalCondition from "../sections/students/PhysicalCondition";
import PsychometricData from "../sections/students/PsychometricData";
import LearningDisabilities from "../sections/students/LearningDisabilities";
import ProblematicBehaviour from "../sections/students/ProblematicBehaviour";
import ObservationReport from "../sections/students/ObservationReport";
import ScholasticAchievements from "../sections/students/ScholasticAchievements";
import GeneralInformation from "../sections/students/GeneralInformation";
import GeneralRemarks from "../sections/students/GeneralRemarks";
import {
  switchGender,
  toggleControls,
} from "../../../store/actions/studentBoardActions";
import { selectStudent } from "../../../store/actions/currentlySelectedStudentActions";
import AddNewStudent from "../modals/AddNewStudent";

class StudentsBoard extends Component {
  state = {
    infoBtn_sect: {
      colorSwitch: "#fff)",
      backgroundColorSwitch: "transparent",
    },
    stdBtn_sect: {
      colorSwitch: "#fff)",
      backgroundColorSwitch: "transparent",
    },
    selected: {
      fontWeight: "bold",
      color: "rgb(1,161,231)"
    },
    not_selected: {
      fontWeight: "normal",
    },
  };

  render() { 
    const { infoBtn, stdBtn, subBtns } = this.props.classTeacher;
    const { toggleTwo, toggleMany, studentsList, selectAstudent, newStudentInstance } = this.props;
    const { infoType, stdType } = subBtns;
    const { boys, girls } = this.props.studentsBoard.genderBtns;
    const { sectionsControls, addNewStudentTrigger } = this.props.studentsBoard;
    const { switchSex, triggerSection } = this.props;

    const { studentsBoardData, cur_class } = this.props

    console.log("Students list", this.props);
    //console.log("needed", toggleTwo);

    const renderMaleStudents = studentsBoardData
      .filter((st) => st.gender === "male")
      .map((student) => (
        <div className="sin_student">
          <div className="sin_min_details">
            <div className="sin_name">
              {student.name} {student.surname}
            </div>
            <div className="sin_gender">{student.gender}</div>
          </div>
          <div
            className="sin_more_btn"
            onClick={async () => {
              await selectAstudent(student.std_id.toString());
              triggerSection();
              toggleMany("identification");
            }}
          >
            More details
          </div>
        </div>
      ));

    const renderFemaleStudents = studentsBoardData
      .filter((st) => st.gender === "female")
      .map((student) => (
        <div className="sin_student">
          <div className="sin_min_details">
            <div className="sin_name">
              {student.name} {student.surname}
            </div>
            <div className="sin_gender">{student.gender}</div>
          </div>
          <div
            className="sin_more_btn"
            onClick={async () => {
              await selectAstudent(student.std_id.toString());
              triggerSection();
              toggleMany("identification");

              // console.log("UNIQUE ID", typeof student.std_id.toString());
            }}
          >
            More details
          </div>
        </div>
      ));

    return (
      <div className="class_teacher_dashboard_container">
        <AddNewStudent viewState={addNewStudentTrigger} />
        <div className="left_dashboard_menu">
          <div className="school_grade_titles">
            <div className="school_title">Windhoek High School</div>
            <div className="grade_title">Grade 9B</div>
          </div>
          <div className="side_menu_links">
            <div
              className="students_btn side_btn"
              onClick={(e) => toggleTwo("students-none")}
              style={{
                backgroundColor: stdBtn
                  ? "#fff"
                  : this.state.backgroundColorSwitch,
                color: stdBtn ? "rgb(36,40,80)" : this.state.colorSwitch,
              }}
              onMouseOver={() => {
                this.setState({
                  ...this.state,
                  stdBtn_sect: {
                    backgroundColorSwitch: "#fff",
                    colorSwitch: "rgb(36,40,80)",
                  },
                });
              }}
              onMouseOut={() => {
                this.setState({
                  ...this.state,
                  stdBtn_sect: {
                    backgroundColorSwitch: "transparent",
                    colorSwitch: "#fff",
                  },
                });
              }}
            >
              <p>Students</p>
              {stdBtn ? (
                <FiChevronDown size={20} className="std_icon" />
              ) : (
                <FiChevronRight size={20} className="std_icon" />
              )}
            </div>
            <button className="add_new_student_main_btn" style={{
              display: sectionsControls ? "none" : "block",
            }}
              onClick={() => newStudentInstance()}
            >ADD NEW STUDENT</button>
          </div>
          <div
            className="student_link_btns"
            style={{
              display: sectionsControls ? "block" : "none",
            }}
          >
            <div
              className="identification_link btn_link"
              onClick={() => {
                toggleMany("identification");
              }}
            >
              <p
                style={
                  stdType.identification
                    ? this.state.selected
                    : this.state.not_selected
                }
              >
                Identification
              </p>
              <div className="identification_link_icon student_link_icon">
                <FiChevronRight size={20} color="#fff" />
              </div>
            </div>
            <div
              className="schools_attended_link btn_link"
              onClick={() => {
                toggleMany("schools_attended");
              }}
            >
              <p
                style={
                  stdType.schools_attended
                    ? this.state.selected
                    : this.state.not_selected
                }
              >
                Schools attended
              </p>
              <div className="schools_attended_link_icon student_link_icon">
                <FiChevronRight size={20} color="#fff" />
              </div>
            </div>
            <div
              className="physical_condition_link btn_link"
              onClick={() => {
                toggleMany("physical_condition");
              }}
            >
              <p
                style={
                  stdType.physical_condition
                    ? this.state.selected
                    : this.state.not_selected
                }
              >
                Physical condition
              </p>
              <div className="physical_condition_link_icon student_link_icon">
                <FiChevronRight size={20} color="#fff" />
              </div>
            </div>
            <div
              className="psychometric_data_link btn_link"
              onClick={() => {
                toggleMany("psychometric_data");
              }}
            >
              <p
                style={
                  stdType.psychometric_data
                    ? this.state.selected
                    : this.state.not_selected
                }
              >
                Psychometric data
              </p>
              <div className="psychometric_data_link_icon student_link_icon">
                <FiChevronRight size={20} color="#fff" />
              </div>
            </div>
            <div
              className="learning_disabilities_link btn_link"
              onClick={() => {
                toggleMany("learning_disabilities");
              }}
            >
              <p
                style={
                  stdType.learning_disabilities
                    ? this.state.selected
                    : this.state.not_selected
                }
              >
                Learning disabilities
              </p>
              <div className="learning_disabilities_link_icon student_link_icon">
                <FiChevronRight size={20} color="#fff" />
              </div>
            </div>
            <div
              className="problematic_behaviour_link btn_link"
              onClick={() => {
                toggleMany("problematic_behaviour");
              }}
            >
              <p
                style={
                  stdType.problematic_behaviour
                    ? this.state.selected
                    : this.state.not_selected
                }
              >
                Problematic behaviour
              </p>
              <div className="problematic_behaviour_link_icon student_link_icon">
                <FiChevronRight size={20} color="#fff" />
              </div>
            </div>
            <div
              className="observation_report_link btn_link"
              onClick={() => {
                toggleMany("observation_report");
              }}
            >
              <p
                style={
                  stdType.observation_report
                    ? this.state.selected
                    : this.state.not_selected
                }
              >
                Observation report
              </p>
              <div className="observation_report_link_icon student_link_icon">
                <FiChevronRight size={20} color="#fff" />
              </div>
            </div>
            <div
              className="scholastic_achievements_link btn_link"
              onClick={() => {
                toggleMany("scholastic_achievements");
              }}
            >
              <p
                style={
                  stdType.scholastic_achievements
                    ? this.state.selected
                    : this.state.not_selected
                }
              >
                Scholastic achievements
              </p>
              <div className="scholastic_achievements_link_icon student_link_icon">
                <FiChevronRight size={20} color="#fff" />
              </div>
            </div>
            <div
              className="general_information_link btn_link"
              onClick={() => {
                toggleMany("general_information");
              }}
            >
              <p
                style={
                  stdType.general_information
                    ? this.state.selected
                    : this.state.not_selected
                }
              >
                General information
              </p>
              <div className="general_information_link_icon student_link_icon">
                <FiChevronRight size={20} color="#fff" />
              </div>
            </div>
            <div
              className="general_remarks_link btn_link"
              onClick={() => {
                toggleMany("general_remarks");
              }}
            >
              <p
                style={
                  stdType.general_remarks
                    ? this.state.selected
                    : this.state.not_selected
                }
              >
                General remarks
              </p>
              <div className="general_remarks_link_icon student_link_icon">
                <FiChevronRight size={20} color="#fff" />
              </div>
            </div>
          </div>
          <div
            className="return_to_student_btn"
            onClick={() => {
              triggerSection();
              toggleMany("students_selection");
            }}
            style={{
              display: sectionsControls ? "block" : "none",
            }}
          >
            GO BACK
          </div>
        </div>
        <div className="details_contents">
          {stdType.identification ? (
            <Identification />
          ) : stdType.schools_attended ? (
            <SchoolsAttended />
          ) : stdType.physical_condition ? (
            <PhysicalCondition />
          ) : stdType.psychometric_data ? (
            <PsychometricData />
          ) : stdType.learning_disabilities ? (
            <LearningDisabilities />
          ) : stdType.problematic_behaviour ? (
            <ProblematicBehaviour />
          ) : stdType.observation_report ? (
            <ObservationReport />
          ) : stdType.scholastic_achievements ? (
            <ScholasticAchievements />
          ) : stdType.general_information ? (
            <GeneralInformation />
          ) : stdType.general_remarks ? (
            <GeneralRemarks />
          ) : (
            <div className="students_listing">
              <div className="sl_header">
                <Link
                  to="/dashboard"
                  className="back_to_student_select_btn"
                >
                  <FiChevronLeft />
                  <p>Back</p>
                </Link>
                <h2 className="sl_title">Class {cur_class} Students</h2>
              </div>
              <div className="the_class_list">
                <div className="gender_select_box">
                  <div className="vertical_bar">
                    <div
                      className="first_dot dot"
                      style={{
                        backgroundColor: boys ? "#fff" : "transparent",
                      }}
                    ></div>
                    <div className="first_pipe pipe"></div>
                    <div
                      className="second_dot dot"
                      style={{
                        backgroundColor: girls ? "#fff" : "transparent",
                      }}
                    ></div>
                    <div className="second_pipe pipe"></div>
                  </div>
                  <div className="observations_controls">
                    <button
                      onClick={() => switchSex("boys")}
                      className="ob_btn btn_psychology"
                      style={{
                        backgroundColor: boys ? "#fff" : "transparent",
                        color: boys ? "rgb(36,40,80)" : "#fff",
                      }}
                    >
                      Boys
                    </button>
                    <button
                      onClick={() => switchSex("girls")}
                      className="ob_btn btn_social"
                      style={{
                        backgroundColor: girls ? "#fff" : "transparent",
                        color: girls ? "rgb(36,40,80)" : "#fff",
                      }}
                    >
                      Girls
                    </button>
                  </div>
                </div>
                <div className="sin_student_list_display">
                  {/* {new Array(20).fill(1).map((sin) => {
                    return (
                      <div className="sin_student">
                        <div className="sin_min_details">
                          <div className="sin_name">Richard Mutambisi</div>
                          <div className="sin_gender">Male</div>
                        </div>
                        <div
                          className="sin_more_btn"
                          onClick={() => {
                            triggerSection();
                            toggleMany("identification");
                          }}
                        >
                          More details
                        </div>
                      </div>
                    );
                  })} */}
                  {boys ? renderMaleStudents : renderFemaleStudents}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    classTeacher: state.classTeacher,
    studentsBoard: state.studentsBoard,
    studentsList: state.exIdentification,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTwo: (btn) => dispatch(toggleMainMenus(btn)),
    toggleMany: (section) => dispatch(toggleSubMenus(section)),
    switchSex: (gender) => dispatch(switchGender(gender)),
    triggerSection: () => dispatch(toggleControls()),
    selectAstudent: (std_id) => dispatch(selectStudent(std_id)),
    newStudentInstance: () => dispatch(triggerNewStudent())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentsBoard);

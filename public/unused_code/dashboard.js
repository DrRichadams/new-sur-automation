import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleMainMenus } from "../../store/actions/classTeacherActions";
import { toggleSubMenus } from "../../store/actions/classTeacherActions";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import "../../app.css";
import Instructions from "./sections/information/Instructions";
import Observations from "./sections/information/Observations";
import Identification from "./sections/students/Identification";
import SchoolsAttended from "./sections/students/SchoolsAttended";
import PhysicalCondition from "./sections/students/PhysicalCondition";
import PsychometricData from "./sections/students/PsychometricData";
import LearningDisabilities from "./sections/students/LearningDisabilities";
import ProblematicBehaviour from "./sections/students/ProblematicBehaviour";
import ObservationReport from "./sections/students/ObservationReport";
import ScholasticAchievements from "./sections/students/ScholasticAchievements";
import GeneralInformation from "./sections/students/GeneralInformation";
import GeneralRemarks from "./sections/students/GeneralRemarks";

class Dashboard extends Component {
  state = {
    infoBtn_sect: {
      colorSwitch: "#fff)",
      backgroundColorSwitch: "transparent",
    },
    stdBtn_sect: {
      colorSwitch: "#fff)",
      backgroundColorSwitch: "transparent",
    },
  };
  render() {
    const { infoBtn, stdBtn, subBtns } = this.props.classTeacher;
    const { toggleTwo, toggleMany } = this.props;
    const { infoType, stdType } = subBtns;
    //console.log(this.props);
    //console.log("needed", toggleTwo);
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
                  : this.state.backgroundColorSwitch,
                color: infoBtn ? "rgb(36,40,80)" : this.state.colorSwitch,
              }}
              onMouseOver={() => {
                this.setState({
                  ...this.state,
                  infoBtn_sect: {
                    backgroundColorSwitch: "#fff",
                    colorSwitch: "rgb(36,40,80)",
                  },
                });
              }}
              onMouseOut={() => {
                this.setState({
                  ...this.state,
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
            <div
              className="students_btn side_btn"
              onClick={(e) => toggleTwo("students")}
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
          </div>
          <div
            className="student_link_btns"
            style={{
              display: stdBtn ? "block" : "none",
            }}
          >
            <div
              className="identification_link btn_link"
              onClick={() => {
                toggleMany("identification");
              }}
            >
              <p>Identification</p>
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
              <p>Schools attended</p>
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
              <p>Physical condition</p>
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
              <p>Psychometric data</p>
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
              <p>Learning disabilities</p>
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
              <p>Problematic behaviour</p>
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
              <p>Observation report</p>
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
              <p>Scholastic achievements</p>
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
              <p>General information</p>
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
              <p>General remarks</p>
              <div className="general_remarks_link_icon student_link_icon">
                <FiChevronRight size={20} color="#fff" />
              </div>
            </div>
          </div>
        </div>
        <div className="details_contents">
          {infoType.instructions ? (
            <Instructions />
          ) : infoType.observation ? (
            <Observations />
          ) : stdType.identification ? (
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
            <div className="default_no_data_page">NO DATA</div>
          )}
        </div>
      </div>
    );
  }
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

import React, { Component } from "react";
import { connect } from "react-redux";
import { FiUser, FiUsers } from "react-icons/fi";
import { switchSection } from "../../../../store/actions/sectionActions";
import "./styles/information.css";
import InstructionsDisplay from "./InstructionsDesplay";

class Instructions extends Component {
  state = {
    sec1: {
      title: "Section I: Identification",
      details: [
        "a: Type surname and name in CAPITAL LETTERS",
        "b: By father / Guardian is referring to the head of family ( in some cases, it can also be the mother)",
      ],
    },
    sec2: {
      title: "Section II: Schools Attended",
      details: ["a: By 'medium' is referring to the language of instruction "],
    },
    sec3: {
      title: "Section III: Physical Condition",
      details: [
        "a: This section is to be completed at least at the end of primary school and at leaving school",
        "b: By 'handicaps' is referring to all physical and sensory handicaps",
        "c: Under 'remarks' any appropriate remarks can be entered concerning the learner's health.",
      ],
    },
    sec4: {
      title: "Section IV: Psychometric Data",
      details: [
        "a: All psychometric and other tests are to be entered under this section and must be initialed by tester. Answer sheets are kept safe by the school.",
      ],
    },
    sec5: {
      title: "Section V: Learning Disabilities",
      details: [
        "a: This section is to be completed concerning all learners with with identified learning disabilities",
      ],
    },
    sec6: {
      title: "Section VI: Problematic Behaviour",
      details: [
        "a: Serious behavioural problems are to be entered under this section.",
        "b: Confidential information should not be entered into the system.)",
      ],
    },
    sec7: {
      title: "Section VII: Observation Report",
      details: ["a: Go to the observations section for more details"],
    },
    sec8: {
      title: "Section VIII: SCholastic Achievements",
      details: [
        "a: Grade 1 - 3: Symbols / Marks achieved are to be entered.",
        "b: Grade 4 - 12: Marks are to be entered as percentages.",
        "c: School attendance is filled in annually",
      ],
    },
    sec9: {
      title: "Section IX: General Information",
      details: ["a: To be completed on school leaving"],
    },
    sec10: {
      title: "Section X: General Remarks / recommendations / Interviews",
      details: [
        "a: Appropriate remarks are to be entered under this section throughout the learner's school career",
      ],
    },
  };
  render() {
    const { sectionButtons, switchSection } = this.props;
    console.log(this.props);
    return (
      <div className="instructions_container">
        <div className="section_title">Instructions to complete report</div>
        <div className="gender_visual">
          <div className="maleType student_type">
            <FiUser size={25} />
            <div className="gender_info">WHITE CARD: BOYS</div>
          </div>
          <div className="femaleType student_type">
            <FiUsers size={25} />
            <div className="gender_info">GREEN CARD: GIRLS</div>
          </div>
        </div>
        <div className="sect_navigator">
          <div
            className="control_btn"
            id="sectionI"
            style={{
              backgroundColor: sectionButtons.btn1 ? "rgb(36,40,80)" : "#fff",
              color: sectionButtons.btn1 ? "#fff" : "rgb(36,40,80)",
            }}
            onClick={() => switchSection("section1")}
          >
            Section I
          </div>
          <div
            className="control_btn"
            id="sectionII"
            style={{
              backgroundColor: sectionButtons.btn2 ? "rgb(36,40,80)" : "#fff",
              color: sectionButtons.btn2 ? "#fff" : "rgb(36,40,80)",
            }}
            onClick={() => switchSection("section2")}
          >
            Section II
          </div>
          <div
            className="control_btn"
            id="sectionIII"
            style={{
              backgroundColor: sectionButtons.btn3 ? "rgb(36,40,80)" : "#fff",
              color: sectionButtons.btn3 ? "#fff" : "rgb(36,40,80)",
            }}
            onClick={() => switchSection("section3")}
          >
            Section III
          </div>
          <div
            className="control_btn"
            id="sectionIV"
            style={{
              backgroundColor: sectionButtons.btn4 ? "rgb(36,40,80)" : "#fff",
              color: sectionButtons.btn4 ? "#fff" : "rgb(36,40,80)",
            }}
            onClick={() => switchSection("section4")}
          >
            Section IV
          </div>
          <div
            className="control_btn"
            id="sectionV"
            style={{
              backgroundColor: sectionButtons.btn5 ? "rgb(36,40,80)" : "#fff",
              color: sectionButtons.btn5 ? "#fff" : "rgb(36,40,80)",
            }}
            onClick={() => switchSection("section5")}
          >
            Section V
          </div>
          <div
            className="control_btn"
            id="sectionVI"
            style={{
              backgroundColor: sectionButtons.btn6 ? "rgb(36,40,80)" : "#fff",
              color: sectionButtons.btn6 ? "#fff" : "rgb(36,40,80)",
            }}
            onClick={() => switchSection("section6")}
          >
            Section VI
          </div>
          <div
            className="control_btn"
            id="sectionVII"
            style={{
              backgroundColor: sectionButtons.btn7 ? "rgb(36,40,80)" : "#fff",
              color: sectionButtons.btn7 ? "#fff" : "rgb(36,40,80)",
            }}
            onClick={() => switchSection("section7")}
          >
            Section VII
          </div>
          <div
            className="control_btn"
            id="sectionVIII"
            style={{
              backgroundColor: sectionButtons.btn8 ? "rgb(36,40,80)" : "#fff",
              color: sectionButtons.btn8 ? "#fff" : "rgb(36,40,80)",
            }}
            onClick={() => switchSection("section8")}
          >
            Section VIII
          </div>
          <div
            className="control_btn"
            id="sectionIX"
            style={{
              backgroundColor: sectionButtons.btn9 ? "rgb(36,40,80)" : "#fff",
              color: sectionButtons.btn9 ? "#fff" : "rgb(36,40,80)",
            }}
            onClick={() => switchSection("section9")}
          >
            Section IX
          </div>
          <div
            className="control_btn"
            id="sectionX"
            style={{
              backgroundColor: sectionButtons.btn10 ? "rgb(36,40,80)" : "#fff",
              color: sectionButtons.btn10 ? "#fff" : "rgb(36,40,80)",
            }}
            onClick={() => switchSection("section10")}
          >
            Section X
          </div>
        </div>
        <div className="instructions_details_container">
          <div
            className="sec1 sec"
            style={{ display: sectionButtons.btn1 ? "block" : "none" }}
          >
            <InstructionsDisplay contents={this.state.sec1} />
          </div>
          <div
            className="sec2 sec"
            style={{ display: sectionButtons.btn2 ? "block" : "none" }}
          >
            <InstructionsDisplay contents={this.state.sec2} />
          </div>
          <div
            className="sec3 sec"
            style={{ display: sectionButtons.btn3 ? "block" : "none" }}
          >
            <InstructionsDisplay contents={this.state.sec3} />
          </div>
          <div
            className="sec4 sec"
            style={{ display: sectionButtons.btn4 ? "block" : "none" }}
          >
            <InstructionsDisplay contents={this.state.sec4} />
          </div>
          <div
            className="sec5 sec"
            style={{ display: sectionButtons.btn5 ? "block" : "none" }}
          >
            <InstructionsDisplay contents={this.state.sec5} />
          </div>
          <div
            className="sec6 sec"
            style={{ display: sectionButtons.btn6 ? "block" : "none" }}
          >
            <InstructionsDisplay contents={this.state.sec6} />
          </div>
          <div
            className="sec7 sec"
            style={{ display: sectionButtons.btn7 ? "block" : "none" }}
          >
            <InstructionsDisplay contents={this.state.sec7} />
          </div>
          <div
            className="sec8 sec"
            style={{ display: sectionButtons.btn8 ? "block" : "none" }}
          >
            <InstructionsDisplay contents={this.state.sec8} />
          </div>
          <div
            className="sec9 sec"
            style={{ display: sectionButtons.btn9 ? "block" : "none" }}
          >
            <InstructionsDisplay contents={this.state.sec9} />
          </div>
          <div
            className="sec10 sec"
            style={{ display: sectionButtons.btn10 ? "block" : "none" }}
          >
            <InstructionsDisplay contents={this.state.sec10} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sectionButtons: state.instructions.sectionButtons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    switchSection: (secID) => dispatch(switchSection(secID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Instructions);

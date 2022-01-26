import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  toggleLDBtns,
  toggleEditingMode,
} from "../../../../store/actions/studentDataActions/learningDisabilitiesActions";
import "./styles/learning_disabilities.css";

const LearningDisabilities = (props) => {
  const { natBtn, actBtn, resBtn } = props.threeMain;
  const { toggleThree } = props;
  const { exDisabilitiesData, triggerEditingMode } = props;
  const { student_id } = props.selectedStudent;

  const currentDisabilities = exDisabilitiesData.find(
    (sin) => sin.std_id === student_id
  );

  const { editingMode } = props.toggleEditingMode;
  console.table("My props", triggerEditingMode);

  const [disabilitiesInfo, setDisabilitiesInfo] = useState({
    nature: null,
    action_taken: null,
    results: null,
  });

  useEffect(() => {
    setDisabilitiesInfo({
      nature: currentDisabilities.nature,
      action_taken: currentDisabilities.action_taken,
      results: currentDisabilities.results,
    });
  }, []);

  //const editingMode = false;

  return (
    <div className="instructions_container">
      <div className="top_main_title">
        <h1 className="section_title">Learning Disabilities</h1>
        <div className="editing_controls">
          <div
            className="enable_editing editing_controls_btns"
            style={{ display: editingMode ? "none" : "block" }}
            onClick={() => triggerEditingMode("editing")}
          >
            Enable editing
          </div>
          <div
            className="disable_editing editing_controls_btns"
            style={{ display: editingMode ? "block" : "none" }}
            onClick={() => triggerEditingMode("not_editing")}
          >
            Disable editing
          </div>
          <div
            className="save_edited editing_controls_btns"
            style={{ display: editingMode ? "block" : "none" }}
            onClick={() => triggerEditingMode("not_editing")}
          >
            Save changes
          </div>
        </div>
      </div>
      <div className="threeBtns">
        <div
          className="natBtn"
          onClick={() => toggleThree("natBtn")}
          style={{
            borderColor: natBtn ? "#fff" : "transparent",
          }}
        >
          Nature
        </div>
        <div
          className="actBtn"
          onClick={() => toggleThree("actBtn")}
          style={{
            borderColor: actBtn ? "#fff" : "transparent",
          }}
        >
          Action Taken
        </div>
        <div
          className="resBtn"
          onClick={() => toggleThree("resBtn")}
          style={{
            borderColor: resBtn ? "#fff" : "transparent",
          }}
        >
          Results
        </div>
      </div>
      <div className="learning_disabilities_title_box">
        {natBtn ? "NATURE" : actBtn ? "ACTION TAKEN" : "RESULTS"}
      </div>
      <div className="learning_disabilities_content_box">
        <div
          className="LD_nature contents"
          style={{
            display: natBtn ? "block" : "none",
          }}
        >
          <textarea
            disabled={!editingMode}
            onChange={(e) => {
              setDisabilitiesInfo({
                ...disabilitiesInfo,
                nature: e.target.value,
              });
            }}
            value={disabilitiesInfo.nature}
          ></textarea>
        </div>

        <div
          className="LD_action contents"
          style={{
            display: actBtn ? "block" : "none",
          }}
        >
          <textarea
            disabled={!editingMode}
            onChange={(e) => {
              setDisabilitiesInfo({
                ...disabilitiesInfo,
                action_taken: e.target.value,
              });
            }}
            value={disabilitiesInfo.action_taken}
          ></textarea>
        </div>

        <div
          className="LD_results contents"
          style={{
            display: resBtn ? "block" : "none",
          }}
        >
          <textarea
            disabled={!editingMode}
            onChange={(e) => {
              setDisabilitiesInfo({
                ...disabilitiesInfo,
                results: e.target.value,
              });
            }}
            value={disabilitiesInfo.results}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    threeMain: state.learningDisability.LDBtns,
    exDisabilitiesData: state.exLearningDisabilities,
    selectedStudent: state.selectedStudent,
    toggleEditingMode: state.learningDisability,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleThree: (btype) => dispatch(toggleLDBtns(btype)),
    triggerEditingMode: (current) => dispatch(toggleEditingMode(current)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LearningDisabilities);

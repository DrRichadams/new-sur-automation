import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  togglePBBtns,
  toggleEditingMode,
} from "../../../../store/actions/studentDataActions/problematicBehaviourAction";

const ProblematicBehaviour = (props) => {
  const { natBtn, actBtn, resBtn } = props.threeMain;
  const { toggleThree, shiftEditingMode } = props;

  const exProblematicData = props.exProblematicData;
  const { student_id } = props.selectedStudent;
  const currentProblemData = exProblematicData.find(
    (sin) => sin.std_id === student_id
  );

  const { editingMode } = props.editingModeVal;
  console.log("Prob value", editingMode);

  //const editingMode = false;

  const [problematicData, setProblematicData] = useState({
    nature_of_offense: null,
    action_taken: null,
    results: null,
  });

  useEffect(() => {
    setProblematicData({
      nature_of_offense: currentProblemData.nature_of_offence,
      action_taken: currentProblemData.action_taken,
      results: currentProblemData.results,
    });
  }, []);

  return (
    <div className="instructions_container">
      <div className="top_main_title">
        <h1 className="section_title">Problematic Behaviour</h1>
        <div className="editing_controls">
          <div
            className="enable_editing editing_controls_btns"
            style={{ display: editingMode ? "none" : "block" }}
            onClick={() => shiftEditingMode("editing")}
          >
            Enable editing
          </div>
          <div
            className="disable_editing editing_controls_btns"
            style={{ display: editingMode ? "block" : "none" }}
            onClick={() => shiftEditingMode("not_editing")}
          >
            Disable editing
          </div>
          <div
            className="save_edited editing_controls_btns"
            style={{ display: editingMode ? "block" : "none" }}
            onClick={() => shiftEditingMode("not_editing")}
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
        {natBtn ? "NATURE OF OFFENCE" : actBtn ? "ACTION TAKEN" : "RESULTS"}
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
              setProblematicData({
                ...problematicData,
                nature_of_offense: e.target.value,
              });
            }}
            value={problematicData.nature_of_offense}
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
              setProblematicData({
                ...problematicData,
                action_taken: e.target.value,
              });
            }}
            value={problematicData.action_taken}
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
              setProblematicData({
                ...problematicData,
                results: e.target.value,
              });
            }}
            value={problematicData.results}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    threeMain: state.problematicBehaviour.PBBtns,
    exProblematicData: state.exProblematicBehaviour,
    selectedStudent: state.selectedStudent,
    editingModeVal: state.togglePBBtnReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleThree: (btype) => dispatch(togglePBBtns(btype)),
    shiftEditingMode: (current) => dispatch(toggleEditingMode(current)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProblematicBehaviour);

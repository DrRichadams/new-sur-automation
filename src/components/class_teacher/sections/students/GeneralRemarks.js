import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./styles/general_remarks.css";
import { toggleEditingMode } from "../../../../store/actions/studentDataActions/generalRemarksActions";

const GeneralRemarks = ({
  exGeneralRemarks,
  selectedStudent,
  editingMode,
  triggerEditingMode,
}) => {
  const cerrentStudentRemarks = exGeneralRemarks.find(
    (sin) => sin.std_id === selectedStudent.student_id
  );
  console.log(editingMode);
  const [generalRemarks, setGeneralRemarks] = useState("All remarks");

  useEffect(() => {
    setGeneralRemarks(cerrentStudentRemarks.remark);
  });

  //const editingMode = false;

  return (
    <div className="instructions_container">
      <div className="top_main_title">
        <h1 className="section_title">General Remarks</h1>
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
      <div className="gr_title">
        GENERAL REMARKS / RECOMMENDATIONS / INTERVIEWS
      </div>
      <div className="gr_remarks_box">
        <textarea
          disabled={!editingMode}
          onChange={(e) => {
            setGeneralRemarks(e.target.value);
          }}
          value={generalRemarks}
        ></textarea>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    exGeneralRemarks: state.exGeneralRemarks,
    selectedStudent: state.selectedStudent,
    editingMode: state.generalRemarksReducer.editingMode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    triggerEditingMode: (current) => dispatch(toggleEditingMode(current)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GeneralRemarks);

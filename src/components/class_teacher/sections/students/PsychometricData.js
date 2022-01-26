import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./styles/psychometric_data.css";
import { togglerEditing as togglerEditingInstance } from "../../../../store/actions/studentDataActions/psychometricDataActions";

const PsychometricData = ({
  exPsychData,
  selectedStudent,
  psychometricDataReducer,
  togglerEditing,
}) => {
  const { editingMode } = psychometricDataReducer;

  const currentStudentPsychInfo = exPsychData.find(
    (sin) => sin.std_id === selectedStudent.student_id
  );

  const psychInfo = currentStudentPsychInfo.psychData;

  console.log("Psych data", psychometricDataReducer);

  const [psychData, setPsychData] = useState([
    {
      id: null,
      date: null,
      name_of_test: null,
      grade: null,
      tester: null,
      remarks: null,
    },
  ]);

  useEffect(() => {
    setPsychData([...psychInfo]);
  }, []);

  return (
    <div className="instructions_container">
      <div className="top_main_title">
        <h1 className="section_title">Psychometric Data</h1>
        <div className="editing_controls">
          <div
            className="enable_editing editing_controls_btns"
            style={{ display: editingMode ? "none" : "block" }}
            onClick={() => togglerEditing("editing")}
          >
            Enable editing
          </div>
          <div
            className="disable_editing editing_controls_btns"
            style={{ display: editingMode ? "block" : "none" }}
            onClick={() => togglerEditing("not_editing")}
          >
            Disable editing
          </div>
          <div
            className="save_edited editing_controls_btns"
            style={{ display: editingMode ? "block" : "none" }}
            onClick={() => togglerEditing("not_editing")}
          >
            Save changes
          </div>
        </div>
      </div>
      <div className="psychometric_data_titles">
        <div className="psy_date">DATE</div>
        <div className="psy_name">NAME OF TEST</div>
        <div className="psy_grade">GRADE</div>
        <div className="psy_tester">TESTER</div>
        <div className="psy_remarks">REMARKS</div>
      </div>
      <div className="pych_data_list_container">
        {psychData.map((sin) => {
          return (
            <div className="psych_data_box">
              <input
                type="text"
                className="input_pych_date"
                disabled={!editingMode}
                onChange={(e) =>
                  setPsychData({
                    ...psychData,
                    date: e.target.value,
                  })
                }
                value={sin.date}
              />
              <input
                type="text"
                className="input_pych_name"
                disabled={!editingMode}
                onChange={(e) =>
                  setPsychData({
                    ...psychData,
                    name_of_test: e.target.value,
                  })
                }
                value={sin.name_of_test}
              />
              <input
                type="text"
                className="input_pych_grade"
                disabled={!editingMode}
                onChange={(e) =>
                  setPsychData({
                    ...psychData,
                    grade: e.target.value,
                  })
                }
                value={sin.grade}
              />
              <input
                type="text"
                className="input_pych_tester"
                disabled={!editingMode}
                onChange={(e) =>
                  setPsychData({
                    ...psychData,
                    tester: e.target.value,
                  })
                }
                value={sin.tester}
              />
              <input
                type="text"
                className="input_pych_remarks"
                disabled={!editingMode}
                onChange={(e) =>
                  setPsychData({
                    ...psychData,
                    remarks: e.target.value,
                  })
                }
                value={sin.remarks}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    exPsychData: state.exSchoolsPsychometricData,
    selectedStudent: state.selectedStudent,
    psychometricDataReducer: state.psychometricDataReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    togglerEditing: (current) => dispatch(togglerEditingInstance(current)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PsychometricData);

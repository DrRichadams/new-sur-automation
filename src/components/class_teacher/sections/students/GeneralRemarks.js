import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./styles/general_remarks.css";
import { toggleEditingMode } from "../../../../store/actions/studentDataActions/generalRemarksActions";
import db from "../../../../firebase"
import {
  collection,
  onSnapshot,
  doc,
  setDoc,
  getDocs,
} from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';
import { upddateData } from "../../../../store/actions/studentDataActions/schoolsAttendedActions";

const GeneralRemarks = ({
  exGeneralRemarks,
  selectedStudent,
  editingMode,
  triggerEditingMode,
}) => {

  const [temporaryData, settemporaryData] = useState([]);
  const [finalizedData, setfinalizedData] = useState([]);

    useEffect(() => {
    onSnapshot(collection(db, "general_remarks"),(snapshot) => {
            console.log("From Firebase in remarks",snapshot.docs.map((doc) => doc.data()));
            let tempData = snapshot.docs.map((doc) => doc.data())
            settemporaryData([
                ...tempData
            ])
          }
        );
        
  },[])

  useEffect(() => { setfinalizedData([...temporaryData]) }, [temporaryData])

  const cerrentStudentRemarks = finalizedData.find(
    (sin) => sin.std_id === selectedStudent.student_id
  );
  console.log("Remarks chunk", cerrentStudentRemarks);
  const [generalRemarks, setGeneralRemarks] = useState({ remark: "All remarks here", std_id: selectedStudent.student_id });

  useEffect(() => {
    let unm = false
    if(!unm) {
      cerrentStudentRemarks && setGeneralRemarks({ remark: cerrentStudentRemarks.remark })
    }

    return unm = true
  }, [finalizedData]);

  //const editingMode = false;

  const updateFirebase = async (cur_id, data) => {
    const docRef = doc(db, "general_remarks", cur_id);
    let payload = {
      std_id: selectedStudent.student_id,
      remark: data.remark
    }
    await setDoc(docRef, payload);
  }

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
            onClick={() => {
              triggerEditingMode("not_editing")
              updateFirebase(selectedStudent.student_id, generalRemarks)
            }}
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
            setGeneralRemarks({ remark: e.target.value });
          }}
          value={generalRemarks.remark}
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

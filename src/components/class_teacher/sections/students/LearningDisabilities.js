import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  toggleLDBtns,
  toggleEditingMode,
} from "../../../../store/actions/studentDataActions/learningDisabilitiesActions";
import "./styles/learning_disabilities.css";
import db from "../../../../firebase"
import {
  collection,
  onSnapshot,
  doc,
  setDoc,
  getDocs,
} from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';

const LearningDisabilities = (props) => {
  const { natBtn, actBtn, resBtn } = props.threeMain;
  const { toggleThree } = props;
  const { exDisabilitiesData, triggerEditingMode } = props;
  const { student_id } = props.selectedStudent;

  const current_id = props.selectedStudent.student_id
  const [fromData, setfromData] = useState([]);


  useEffect(() => {
    
    let unmounted = false
    
      onSnapshot(collection(db, "learning_disabilities"),(snapshot) => {
            //console.log("From Firebase",snapshot.docs.map((doc) => doc.data()));
            let tempData = snapshot.docs.map((doc) => doc.data())
            if(!unmounted) {
            setfromData([
                ...tempData
            ])
            }
          }
        )

        return () => unmounted = true
        
  },[])


  const current_data = fromData.find(sin => sin.std_id === current_id
  );

  useEffect(() => { console.log("From data now", current_data) }, [fromData])

  const { editingMode } = props.toggleEditingMode;
  console.table("My props", triggerEditingMode);

  const [disabilitiesInfo, setDisabilitiesInfo] = useState({
    nature: null,
    action_taken: null,
    results: null,
  });
  

  useEffect(() => {
    current_data && setDisabilitiesInfo({
      nature: current_data.nature,
      action_taken: current_data.action_taken,
      results: current_data.results,
    });
  }, [fromData]);

  //const editingMode = false;

    ////////HANDLING FIREBASE UPDATE FUNCTIONS//////////////////
    const updateSchoolsAttendedFirebase = async(cur_id, data) => {
      const payload = {
        nature: data.nature,
        action_taken: data.action_taken,
        results: data.results,
        std_id: current_id
      }
      const docRef = doc(db, "learning_disabilities", cur_id);
      await setDoc(docRef, payload);
      alert("Data updated successfully")
      console.log("My payload", payload,cur_id)
    }

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
            onClick={() => {
              triggerEditingMode("not_editing")
              updateSchoolsAttendedFirebase(current_id, disabilitiesInfo)
            }}
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

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  togglePBBtns,
  toggleEditingMode,
} from "../../../../store/actions/studentDataActions/problematicBehaviourAction";
import db from "../../../../firebase"
import {
  collection,
  onSnapshot,
  doc,
  setDoc,
  getDocs,
} from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';

const ProblematicBehaviour = (props) => {
  const { natBtn, actBtn, resBtn } = props.threeMain;
  const { toggleThree, shiftEditingMode } = props;

  const current_id = props.selectedStudent.student_id
  console.log("My IDENTITY", current_id)

  const [fromData, setfromData] = useState([]);

  useEffect(() => {
    
    let unmounted = false
    
      onSnapshot(collection(db, "problematic_behaviour"),(snapshot) => {
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

  const current_data = fromData.find(sin => sin.std_id === current_id)

  useEffect(() => { console.log("From data now", current_data) }, [fromData])


  const exProblematicData = props.exProblematicData;
  const { student_id } = props.selectedStudent;
  const currentProblemData = exProblematicData.find(
    (sin) => sin.std_id === student_id
  );

  const { editingMode } = props.editingModeVal;
  console.log("Prob value", editingMode);

  //const editingMode = false;

  const [problematicData, setProblematicData] = useState({
    nature_of_offense: "",
    action_taken: "",
    results: "",
  });

  useEffect(() => {
    current_data && setProblematicData({
      nature_of_offense: current_data.nature_of_offence,
      action_taken: current_data.action_taken,
      results: current_data.results,
    });
  }, [fromData]);

  const handleInputChange = (e) => {
    setProblematicData({
      ...problematicData,
      [ e.target.id ]: e.target.value
    })
  }

  ////////HANDLING FIREBASE UPDATE FUNCTIONS//////////////////
  const updateSchoolsAttendedFirebase = async(cur_id, data) => {
    const payload = {
      action_taken: data.action_taken,
      nature_of_offence: data.nature_of_offense,
      results: data.results,
      std_id: current_id
    }
    const docRef = doc(db, "problematic_behaviour", cur_id);
    await setDoc(docRef, payload);
    alert("Data updated successfully")
    console.log("My payload", payload)
  }

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
            onClick={() => {
              shiftEditingMode("not_editing")
              updateSchoolsAttendedFirebase(current_id, problematicData)
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
            id="nature_of_offense"
            onChange={(e) => { handleInputChange(e) }}
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
            id="action_taken"
            onChange={(e) => { handleInputChange(e) }}
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
            id="results"
            onChange={(e) => { handleInputChange(e) }}
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

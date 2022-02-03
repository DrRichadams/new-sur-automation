import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./styles/psychometric_data.css";
import { togglerEditing as togglerEditingInstance } from "../../../../store/actions/studentDataActions/psychometricDataActions";
import { FiPlus } from "react-icons/fi"
import db from "../../../../firebase"
import {
  collection,
  onSnapshot,
  doc,
  setDoc,
  getDocs,
} from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';


const PsychometricData = ({
  exPsychData,
  selectedStudent,
  psychometricDataReducer,
  togglerEditing,
}) => {

  const current_id = selectedStudent.student_id

  console.log("My IDENTITY", current_id)

  const { editingMode } = psychometricDataReducer;

  ///////////////////////////////////////////////////////////////
  const [fromData, setfromData] = useState([]);
  
  useEffect(() => {
    
    let unmounted = false
    
      onSnapshot(collection(db, "psychometric_data"),(snapshot) => {
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

  useEffect(() => {
    current_data && setPsychData([
      ...current_data.psychData
    ])
  }, [fromData])

  const currentStudentPsychInfo = exPsychData.find(
    (sin) => sin.std_id === selectedStudent.student_id
  );

  //const psychInfo = currentStudentPsychInfo.psychData;

  console.log("Psych data", psychometricDataReducer);

  const [psychData, setPsychData] = useState([
    {
      id: "",
      date: "",
      name_of_test: "",
      grade: "",
      tester: "",
      remarks: "",
    },
  ]);

  // useEffect(() => {
  //   setPsychData([...psychInfo]);
  // }, []);
  
  ////////////////////CHANGE INPUT FUNCTION/////////////////
  const handleDateChange =(e) => {
    let tempData = psychData
    tempData.forEach(item => {
      if(item.id === e.target.id) {
        item.date = e.target.value
      }
    })
    setPsychData([ ...tempData ])
  }
  ////////////////////CHANGE INPUT FUNCTION/////////////////
  const handleNameChange =(e) => {
    let tempData = psychData
    tempData.forEach(item => {
      if(item.id === e.target.id) {
        item.name_of_test = e.target.value
      }
    })
    setPsychData([ ...tempData ])
  }
  ////////////////////CHANGE INPUT FUNCTION/////////////////
  const handleGradeChange =(e) => {
     let tempData = psychData
    tempData.forEach(item => {
      if(item.id === e.target.id) {
        item.grade = e.target.value
      }
    })
    setPsychData([ ...tempData ])    
  }
  ////////////////////CHANGE INPUT FUNCTION/////////////////
  const handleTesterChange =(e) => {
       let tempData = psychData
    tempData.forEach(item => {
      if(item.id === e.target.id) {
        item.tester = e.target.value
      }
    })
    setPsychData([ ...tempData ])
  }
  ////////////////////CHANGE INPUT FUNCTION/////////////////
  const handleRemarksChange =(e) => {
       let tempData = psychData
    tempData.forEach(item => {
      if(item.id === e.target.id) {
        item.remarks = e.target.value
      }
    })
    setPsychData([ ...tempData ])
  }
  ////////////////////CHANGE INPUT FUNCTION/////////////////


  ////////////////////TALKING TO FIRESTORE//////////////////
  const updatepSychometricDataFirebase = async(cur_id, data) => {
    const payload = {
      psychData:[...data],
      std_id: current_id
    }
    const docRef = doc(db, "psychometric_data", cur_id);
    await setDoc(docRef, payload);
    alert("Data updated successfully")
    console.log("My payload", payload)
  }

  const NewToPsychometricDataField = async(cur_id, data) => {
    const payload = {
      psychData:[
          ...data,
          {
            id: uuidv4(),
            date: "",
            name_of_test: "",
            grade: "",
            tester: "",
            remarks: "",
          },
      ],
      std_id: current_id
    }
    const docRef = doc(db, "psychometric_data", cur_id);
    await setDoc(docRef, payload);
    console.log("My payload", payload)
  }
  ////////////////////TALKING TO FIRESTORE//////////////////

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
            onClick={() => {
              togglerEditing("not_editing")
              updatepSychometricDataFirebase(current_id, psychData)
            }}
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
                id={sin.id}
                onChange={(e) => {handleDateChange(e)}}
                value={sin.date}
              />
              <input
                type="text"
                className="input_pych_name"
                disabled={!editingMode}
                id={sin.id}
                onChange={(e) => {handleNameChange(e)}}
                value={sin.name_of_test}
              />
              <input
                type="text"
                className="input_pych_grade"
                disabled={!editingMode}
                id={sin.id}
                onChange={(e) => {handleGradeChange(e)}}
                value={sin.grade}
              />
              <input
                type="text"
                className="input_pych_tester"
                disabled={!editingMode}
                id={sin.id}
                onChange={(e) =>{handleTesterChange(e)}}
                value={sin.tester}
              />
              <input
                type="text"
                className="input_pych_remarks"
                disabled={!editingMode}
                id={sin.id}
                onChange={(e) =>{handleRemarksChange(e)}}
                value={sin.remarks}
              />
            </div>
          );
        })}
      </div>
      <div 
          className="add_left_school" 
          onClick={() => NewToPsychometricDataField(current_id, psychData)}>
        <div className="surround_border">
          <FiPlus size={20} />
        </div>
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

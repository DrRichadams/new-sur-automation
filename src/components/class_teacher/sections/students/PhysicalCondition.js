import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./styles/physical_condition.css";
import { FiPlus } from "react-icons/fi";
import { toggleEditingMode } from "../../../../store/actions/studentDataActions/physicalConditionActions";
import db from "../../../../firebase"
import {
  collection,
  onSnapshot,
  doc,
  setDoc,
  getDocs,
} from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';

const PhysicalCondition = ({
  physicalConditionData,
  selectedStudent,
  physicalConditionReducer,
  toggleEditingMode,
}) => {
  //const editingMode = false;

  const [fromData, setfromData] = useState([]);

  // const [temporaryData, settemporaryData] = useState([]);
  // const [finalizedData, setfinalizedData] = useState([]);

  useEffect(() => {
    let unmount = false
    onSnapshot(collection(db, "physical_condition"),(snapshot) => {
            console.log("From Firebase",snapshot.docs.map((doc) => doc.data()));
            let tempData = snapshot.docs.map((doc) => doc.data())
            if(!unmount) {
              setfromData([
                ...tempData
            ])
            }
          }
        );

        return () => unmount = true
        
  },[])

  const current_id = selectedStudent.student_id

    const current_student = fromData.find(sin => sin.std_id === current_id
  );

  useEffect(() => { console.log("My finalized data:" ,fromData) }, [fromData])
  useEffect(() => { console.log("My returned data:" ,current_student) }, [fromData])
  useEffect(() => { console.log("My current ID:" ,selectedStudent.student_id) }, [fromData])

  // const current_student = finalizedData.find(
  //   (sin) => sin.std_id === selectedStudent.student_id
  // );
  // console.log("My filtered data:" ,current_student)
   const { editingMode } = physicalConditionReducer;
  // console.log("phy data", editingMode);

  const [physicalInfo, setPhysicalInfo] = useState([
    {
      id: null,
      date: null,
      general_health: null,
      problem: null,
      current_solution: null,
      previous_illness: null,
    },
  ]);

  useEffect(() => {
    current_student && setPhysicalInfo([
      ...current_student.conditions
    ]);
  }, [fromData]);

  useEffect(() => { console.log("My physic", physicalInfo) }, [physicalInfo])

  const styles = {
    selected: { display: "block" },
    not_selected: { display: "none" },
  };

  const handleDateChange = (e) => {
    let tempItem = physicalInfo
    tempItem.forEach(sin => {
      if(sin.id === e.target.id) {
        sin.date = e.target.value
      }
    })
    setPhysicalInfo([...tempItem])
        
  }
  const handleHealthChange = (e) => {
    let tempItem = physicalInfo
    tempItem.forEach(sin => {
      if(sin.id === e.target.id) {
        sin.general_health = e.target.value
      }
    })
    setPhysicalInfo([...tempItem])
      
  }
  const handleProblemChange = (e) => {
    let tempItem = physicalInfo
    tempItem.forEach(sin => {
      if(sin.id === e.target.id) {
        sin.problem = e.target.value
      }
    })
    setPhysicalInfo([...tempItem])
      
  }
  const handleSolutionChange = (e) => {
    let tempItem = physicalInfo
    tempItem.forEach(sin => {
      if(sin.id === e.target.id) {
        sin.current_solution = e.target.value
      }
    })
    setPhysicalInfo([...tempItem])
      
  }
  const handlePreviousChange = (e) => {
    let tempItem = physicalInfo
    tempItem.forEach(sin => {
      if(sin.id === e.target.id) {
        sin.previous_illness = e.target.value
      }
    })
    setPhysicalInfo([...tempItem])
      
  }

  const updatePhysicalConditionFirebase = async(cur_id, data) => {
    const payload = {
      conditions: [ ...data ],
      std_id: cur_id
    }
    const docRef = doc(db, "physical_condition", cur_id);
    await setDoc(docRef, payload);
    alert("Data updated successfully")
    console.log("My payload", payload)
  }

  const addNewField = async(cur_id, data) => {
    const payload = {
      conditions: [ ...data, {
        id: uuidv4(),
        date: "",
        general_health: "",
        problem: "",
        current_solution: "",
        previous_illness: "",
      }, ],
      std_id: cur_id
    }
    const docRef = doc(db, "physical_condition", cur_id);
    await setDoc(docRef, payload);
    // console.log("My payload", payload)
  }

  return (
    <div className="instructions_container">
      <div className="top_main_title">
        <h1 className="section_title">Physical Condition</h1>
        <div className="editing_controls">
          <div
            className="enable_editing editing_controls_btns"
            style={editingMode ? styles.not_selected : styles.selected}
            onClick={() => toggleEditingMode("editing")}
          >
            Enable editing
          </div>
          <div
            className="disable_editing editing_controls_btns"
            style={editingMode ? styles.selected : styles.not_selected}
            onClick={() => toggleEditingMode("not_editing")}
          >
            Disable editing
          </div>
          <div
            className="save_edited editing_controls_btns"
            style={editingMode ? styles.selected : styles.not_selected}
            onClick={() => {
              toggleEditingMode("not_editing")
              updatePhysicalConditionFirebase(current_id, physicalInfo)
            }}
          >
            Save changes
          </div>
        </div>
      </div>
      <div className="physical_titles">
        <div className="phy_date">DATE</div>
        <div className="phy_general_health">GENERAL HEALTH</div>
        <div className="phy_problem">PROBLEM / DISABILITY</div>
        <div className="phy_how">HOW IS THE PROBLEM BEING DEALT WITH</div>
        <div className="phy_previous">PREVIOUS ILLNESS</div>
      </div>
      <div className="actual_conditions">
        {physicalInfo.map((cond) => {
          return (
            <div className="physical_conditions">
              <input
                type="text"
                className="physical_date"
                disabled={!editingMode}
                id={cond.id}
                onChange={(e) => handleDateChange(e)}
                value={cond.date}
              />
              <input
                type="text"
                className="physical_general_health"
                disabled={!editingMode}
                id={cond.id}
                onChange={(e) => handleHealthChange(e)}
                value={cond.general_health}
              />
              <input
                type="text"
                className="physical_problem"
                disabled={!editingMode}
                id={cond.id}
                onChange={(e) => handleProblemChange(e) }
                value={cond.problem}
              />
              <input
                type="text"
                className="physical_how_part"
                disabled={!editingMode}
                id={cond.id}
                onChange={(e) => handleSolutionChange(e)}
                value={cond.current_solution}
              />
              <input
                type="text"
                className="physical_previous_illness"
                disabled={!editingMode}
                id={cond.id}
                onChange={(e) => handlePreviousChange(e)}
                value={cond.previous_illness}
              />
            </div>
          );
        })}
      </div>
      <div 
        className="add_left_school"
        onClick={() => addNewField(current_id, physicalInfo)}
        >
        <div className="surround_border">
          <FiPlus size={20} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    physicalConditionData: state.exPhysicalCondition,
    selectedStudent: state.selectedStudent,
    physicalConditionReducer: state.physicalConditionReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleEditingMode: (current) => dispatch(toggleEditingMode(current)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhysicalCondition);

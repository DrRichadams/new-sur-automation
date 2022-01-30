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

  const [temporaryData, settemporaryData] = useState([]);
  const [finalizedData, setfinalizedData] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "physical_condition"),(snapshot) => {
            console.log("From Firebase",snapshot.docs.map((doc) => doc.data()));
            let tempData = snapshot.docs.map((doc) => doc.data())
            settemporaryData([
                ...tempData
            ])
          }
        );
        
  },[])

  useEffect(() => {
    setfinalizedData([ ...temporaryData ])
  }, [temporaryData])

  useEffect(() => { console.log("My finalized data:" ,finalizedData) }, [finalizedData])

  const current_student = finalizedData.find(
    (sin) => sin.std_id === selectedStudent.student_id
  );
  console.log("My filtered data:" ,current_student)
  const { editingMode } = physicalConditionReducer;
  console.log("phy data", editingMode);

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
  }, [finalizedData]);

  useEffect(() => { console.log("My physic", physicalInfo) }, [physicalInfo])

  const styles = {
    selected: { display: "block" },
    not_selected: { display: "none" },
  };

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
            onClick={() => toggleEditingMode("not_editing")}
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
                onChange={(e) =>
                  setPhysicalInfo({
                    ...physicalInfo,
                    date: e.target.value,
                  })
                }
                value={cond.date}
              />
              <input
                type="text"
                className="physical_general_health"
                disabled={!editingMode}
                onChange={(e) =>
                  setPhysicalInfo({
                    ...physicalInfo,
                    general_health: e.target.value,
                  })
                }
                value={cond.general_health}
              />
              <input
                type="text"
                className="physical_problem"
                disabled={!editingMode}
                onChange={(e) =>
                  setPhysicalInfo({
                    ...physicalInfo,
                    problem: e.target.value,
                  })
                }
                value={cond.problem}
              />
              <input
                type="text"
                className="physical_how_part"
                disabled={!editingMode}
                onChange={(e) =>
                  setPhysicalInfo({
                    ...physicalInfo,
                    how_problem: e.target.value,
                  })
                }
                value={cond.current_solution}
              />
              <input
                type="text"
                className="physical_previous_illness"
                disabled={!editingMode}
                onChange={(e) =>
                  setPhysicalInfo({
                    ...physicalInfo,
                    previous_illness: e.target.value,
                  })
                }
                value={cond.previous_illness}
              />
            </div>
          );
        })}
      </div>
      <div className="add_left_school">
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

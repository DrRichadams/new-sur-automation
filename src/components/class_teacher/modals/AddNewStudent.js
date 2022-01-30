import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux"
import { FiPlus, FiCheckCircle } from "react-icons/fi";
import { triggerNewStudent } from "../../../store/actions/studentBoardActions"
import "./styles/add_new_student.css";
import { v4 as uuidv4 } from 'uuid';
import db from "../../../firebase"
import {
  collection,
  onSnapshot,
  doc,
  setDoc,
  getDocs,
} from "firebase/firestore";

const AddNewStudent = ({ viewState, sliceInstance }) => {
  const [newStudentData, setnewStudentData] = useState({
    ///////////////////////////////
      std_id: uuidv4().toString(),
      name: "",
      other: "",
      surname: "",
      identity_number: "",
      residential_address: "",
      postal_address: "",
      gender: "",
      name_of_guardian: "",
      name_of_mother: "",
      occupation_of_guardian: "",
      occupation_of_mother: "",
      home_phone: "",
      business_phone: "",
      church: "",
      home_language: "",
      dob: {
        month: "",
        day: "",
        year: "",
      },
   
  });

  const settingNewNameData = (e) => {
    setnewStudentData({
      ...newStudentData,
        name: e.target.value
    })
  }

  const settingNewOtherData = (e) => {
    setnewStudentData({
      ...newStudentData,
        other: e.target.value
    })
  }

  const settingNewSurnameData = (e) => {
    setnewStudentData({
      ...newStudentData,
        surname: e.target.value
    })
  }

  const settingNewGenderData = (e) => {
    setnewStudentData({
      ...newStudentData,
        gender: e.target.value
    })
  }

  useEffect(() => console.log(newStudentData),[newStudentData])

  const [genderError, setgenderError] = useState({
    message: null,
  });

  // const addNew = async () => {
  //   const docRef = doc(db, "identification", newStudentData.std_id);
  //   const payload = {...newStudentData};
  //   await setDoc(docRef, payload);
  // };


  //////////////////////////////////////////////////////////
  /**                  DATABASE TEMPLATING                 */
  //////////////////////////////////////////////////////////

  const ship_schools_attended = {
    std_id: newStudentData.std_id,
    exemption_from_compulsory_education: false,
    date: {
      month: "",
      day: "",
      year: "",
    },
    age_on_initial_entry_to_school: "",
    schools_details: [
      {
        id: uuidv4(),
        admission_no: "",
        name_of_school: "",
        medium: null,
        date_of_admission: "",
        grade_of_admission: "8",
        date_of_departure: "",
        grade_of_departure: "",
      },
      {
        id: uuidv4(),
        admission_no: "",
        name_of_school: "",
        medium: null,
        date_of_admission: "",
        grade_of_admission: "",
        date_of_departure: "",
        grade_of_departure: "", 
      },
    {
        id: uuidv4(),
        admission_no: "",
        name_of_school: "",
        medium: null,
        date_of_admission: "",
        grade_of_admission: "",
        date_of_departure: "",
        grade_of_departure: "",
      },
    ],
  }

  const ship_physical_condition = {
    std_id: newStudentData.std_id,
    conditions: [
      {
        id: uuidv4(),
        date: "",
        general_health: "",
        problem: "",
        current_solution: "",
        previous_illness: "",
      },
      {
        id: uuidv4(),
        date: "",
        general_health: "",
        problem: "",
        current_solution: "",
        previous_illness: "",
      },
    ],
  }

  const ship_psychometric_data = {
    std_id: newStudentData.std_id,
    psychData: [
      {
        id: uuidv4(),
        date: "",
        name_of_test: "",
        grade: "",
        tester: "",
        remarks: "",
      },
      {
        id: uuidv4(),
        date: "",
        name_of_test: "",
        grade: "",
        tester: "",
        remarks: "",
      },
    ],
  }

  const ship_learning_disabilities = {
    std_id: newStudentData.std_id,
    nature: "",
    action_taken: "",
    results: "",
  }

  const ship_problematic_behaviour = {
    std_id: newStudentData.std_id,
    nature_of_offence: "",
    action_taken: "",
    results: "",
  }

  const ship_observation_report = {
    std_id: newStudentData.std_id,
    psychological: [
      {
        id: uuidv4(),
        grade: "",
        year: "",
        report: "",
      },
    ],
    social: [
      {
        id: uuidv4(),
        grade: "",
        year: "",
        report: "",
      },
    ],
    overall_impression: [
      {
        id: uuidv4(),
        grade: "",
        year: "",
        report: "",
      },
    ],
  }

  const ship_general_information = {
    std_id: newStudentData.std_id,
    outstanding_aptitudes_interests: {
      aptitudes: "",
      interests: "",
    },
    outstanding_achievements_attained: {
      academic: "",
      extra_curricular:
        "",
    },
    vocational_choice: {
      careers_chosen_by_learner: "",
      careers_chosen_by_parents: "",
      counsellors_recommendations: "",
      broad_vocational_field: "",
      specific_careers: "",
    },
  }

  const ship_general_remarks = {
    std_id: newStudentData.std_id,
    remark: "",
  }


  //////////////////////////////////////////////////////////
  /**                  DATABASE TEMPLATING                 */
  //////////////////////////////////////////////////////////

  const sendToDatabase = async () => {
    if(newStudentData.gender === "" || newStudentData.gender === "Gender") {
      setgenderError({
        message: "Please select gender to continue"
      })
    } else {
      setgenderError({
        message: null
      })
      ///////////////////////////////
      
      ////////////////////////REFS///////////////////
      const docRefIdentification = doc(db, "identification", newStudentData.std_id);
      const docRefSchools_Attended = doc(db, "schools_attended", newStudentData.std_id);
      const docRefPhysicalCondition = doc(db, "physical_condition", newStudentData.std_id);
      const docRefPsychometricData = doc(db, "psychometric_data", newStudentData.std_id);
      const docRefLearningDisabilities = doc(db, "learning_disabilities", newStudentData.std_id);
      const docRefProblematicBehaviour = doc(db, "problematic_behaviour", newStudentData.std_id);
      const docRefObservationReport = doc(db, "observation_report", newStudentData.std_id);
      const docRefScholasticsAchievements = doc(db, "scholastic_achievements", newStudentData.std_id);
      const docRefGeneralInformation = doc(db, "general_information", newStudentData.std_id);
      const docRefGeneralRemarks = doc(db, "general_remarks", newStudentData.std_id);
      ////////////////////////REFS///////////////////
      const payload = {...newStudentData};
      await setDoc(docRefIdentification, newStudentData);
      await setDoc(docRefSchools_Attended, ship_schools_attended);
      await setDoc(docRefPhysicalCondition, ship_physical_condition);
      await setDoc(docRefPsychometricData, ship_psychometric_data);
      await setDoc(docRefLearningDisabilities, ship_learning_disabilities);
      await setDoc(docRefProblematicBehaviour, ship_problematic_behaviour);
      await setDoc(docRefObservationReport, ship_observation_report);
      await setDoc(docRefScholasticsAchievements, ship_general_remarks); ///TEMPORARY DATA
      await setDoc(docRefGeneralInformation, ship_general_information);
      await setDoc(docRefGeneralRemarks, ship_general_remarks);
      ///////////////////////////////
      alert("Student added successfully")
      window.location.reload(true)
    }
  }

  return ReactDOM.createPortal(
    <div className="add_new_student" style={{ display: viewState ? "flex": "none" }}>
      <div
        className="add_new_student_box"
        style={{ display: true ? "block" : "none" }}
      >
        <div className="exit_add_student" onClick={() => {
          sliceInstance();
          console.log("Clicked")
        }}>
          <FiPlus />
        </div>
        <h2 className="add_new_student_title">New Student</h2>
        <form className="add_new_student_form" onSubmit={(e) => e.preventDefault()}> 
          <div className="inputBox">
            <input type="text" required="required" id="name" onChange={(e) => settingNewNameData(e)} value={newStudentData.name} />
            <span>Firstname</span>
          </div>
          <div className="inputBox">
            <input type="text" id="other" onChange={(e) => settingNewOtherData(e)} value={newStudentData.other} />
            <span>Other names</span>
          </div>
          <div className="inputBox">
            <input type="text" required="required" id="surname" onChange={(e) => settingNewSurnameData(e)} value={newStudentData.surname} />
            <span>Lastname</span>
          </div>
          <div className="inputBox">
            <div className="gender_error_messa">{ genderError.message }</div>
            <select name="gender" id="gender" onChange={(e) => settingNewGenderData(e)} value={newStudentData.gender}>
              <option value="male">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="inputBox">
            <input
              type="submit"
              value="Add student"
              className="add_student_btn"
              onClick={() => sendToDatabase()}
            />
          </div>
        </form>
      </div>
      <div
        className="add_student_success"
        style={{ display: false ? "block" : "none" }}
      >
        <div className="success_contents_container">
          <FiCheckCircle size={100} />
          <h3 className="success_message">Student added successfully</h3>
          <button className="return_to_students_btn">Finish</button>
        </div>
      </div>
    </div>,
    document.querySelector("#add_new_student")
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    sliceInstance: () => dispatch(triggerNewStudent())
  }
}

export default connect(null, mapDispatchToProps)(AddNewStudent);

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

  const ship_scholastic_achievements = {
    std_id: newStudentData.std_id,
    primary: {
      studentSubjectsList: [
        {
          id: uuidv4(),
          subject_name: "",
          sub_cols: {c1: "",c2: "",c3: "",c4: "",c5: "",c6: "",c7: "",c8: "",c9: "",c10: "",c11: "",}
        },
      ], 
      yam: {
        yam1: "placeholder",yam2: "",yam3: "",yam4: "",yam5: "",yam6: "", yam7: "",yam8: "",yam9: "",yam10: "",yam11: "",
      }, 
      gd: {
        gd1: "placeholder",gd2: "",gd3: "",gd4: "",gd5: "",gd6: "",gd7: "",gd8: "",gd9: "",gd10: " ",gd11: " ",
      }, 
      log: {
        log1: "placeholder",log2: "",log3: "",log4: "",log5: "",log6: "",log7: "",log8: "",log9: "",log10: "",log11: "",
      }, 
      eh: {
        eh1: "placeholder",eh2: "",eh3: "",eh4: "",eh5: "",eh6: "",eh7: "",eh8: "",eh9: "",eh10: "",eh11: "",
      }, 
      asl: {
        asl1: "placeholder",asl2: "",asl3: "",asl4: "",asl5: "",asl6: "",asl7: "",asl8: "",asl9: "",asl10: "",asl11: "",
      }, 
      asg: {
        asg1: "placeholder",asg2: "",asg3: "",asg4: "",asg5: "",asg6: "",asg7: "",asg8: "",asg9: "",asg10: "",asg11: "",
      }, 
      pf: {
        pf1: "placeholder",pf2: "",pf3: "",pf4: "",pf5: "",pf6: "",pf7: "",pf8: "",pf9: "",pf10: "",pf11: "",
      }, 
      sat: {
        sat1: "placeholder",sat2: "",sat3: "",sat4: "",sat5: "",sat6: "",sat7: "",sat8: "",sat9: "",sat10: "",sat11: "",
      },
    },
    secondary: { 
      studentSubjectsList: [
        {
          id: uuidv4(),
          subject_name: "",
          sub_cols: {c1: "",c2: "",c3: "",c4: "",c5: "",c6: "",c7: "",c8: "",c9: "",c10: "",c11: "",}
        },
      ], 
      yam: {
        yam_s1: "placeholder",yam_s2: "",yam3: "",yam_s4: "",yam_s5: "",yam_s6: "", yam_s7: "",yam8: "",yam_s9: "",yam_s10: "",yam_s11: "",
      }, 
      gd: {
        gd_s1: "placeholder",gd_s2: "",gd_s3: "",gd_s4: "",gd_s5: "",gd_s6: "",gd_s7: "",gd_s8: "",gd_s9: "",gd_s10: " ",gd_s11: " ",
      }, 
      log: {
        log_s1: "placeholder",log_s2: "",log_s3: "",log_s4: "",log_s5: "",log_s6: "",log_s7: "",log_s8: "",log_s9: "",log_s10: "",log_s11: "",
      }, 
      eh: {
        eh_s1: "placeholder",eh_s2: "",eh_s3: "",eh_s4: "",eh_s5: "",eh_s6: "",eh_s7: "",eh_s8: "",eh_s9: "",eh_s10: "",eh_s11: "",
      }, 
      asl: {
        asl_s1: "placeholder",asl_s2: "",asl_s3: "",asl_s4: "",asl_s5: "",asl_s6: "",asl_s7: "",asl_s8: "",asl_s9: "",asl_s10: "",asl_s11: "",
      }, 
      asg: {
        asg_s1: "placeholder",asg_s2: "",asg_s3: "",asg_s4: "",asg_s5: "",asg_s6: "",asg_s7: "",asg_s8: "",asg_s9: "",asg_s10: "",asg_s11: "",
      }, 
      pf: {
        pf_s1: "placeholder",pf_s2: "",pf_s3: "",pf_s4: "",pf_s5: "",pf_s6: "",pf_s7: "",pf_s8: "",pf_s9: "",pf_s10: "",pf_s11: "",
      }, 
      sat: {
        sat_s1: "placeholder",sat_s2: "",sat_s3: "",sat_s4: "",sat_s5: "",sat_s6: "",sat_s7: "",sat_s8: "",sat_s9: "",sat_s10: "",sat_s11: "",
      },
     },
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
      //const payload = {...newStudentData};
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
      await setDoc(docRefScholasticsAchievements, ship_scholastic_achievements);
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

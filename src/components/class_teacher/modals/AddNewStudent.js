import React, { useState } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux"
import { FiPlus, FiCheckCircle } from "react-icons/fi";
import { triggerNewStudent } from "../../../store/actions/studentBoardActions"
import "./styles/add_new_student.css";

const AddNewStudent = ({ viewState, sliceInstance }) => {
  const [newStudentData, setnewStudentData] = useState({
    ///////////////////////////////
    identification: {
      std_id: "",
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
    },
    ////////////////////////////
    schools_attended: {
      std_id: "",
      exemption_from_compulsory_education: false,
      date: {
        month: "",
        day: "",
        year: "",
      },
      age_on_initial_entry_to_school: "",
      schools_details: [
        {
          id: "",
          admission_no: "",
          name_of_school: "",
          medium: null,
          date_of_admission: "",
          grade_of_admission: "",
          date_of_departure: "",
          grade_of_departure: "",
        },
      ],
    },
    ///////////////////////////
    physical_condition: {
      std_id: "",
      conditions: [
        {
          id: "",
          date: "",
          general_health: "",
          problem: "",
          current_solution: "",
          previous_illness: "",
        },
      ],
    },
    ///////////////////////////
    psychometric_data: {
      std_id: "",
      psychData: [
        {
          id: "",
          date: "",
          name_of_test: "",
          grade: "",
          tester: "",
          remarks: "",
        },
      ],
    },
    ///////////////////////////
    learning_disabilities: {
      std_id: "",
      nature: "",
      action_taken: "",
      results: "",
    },
    ///////////////////////////
    problematic_behaviour: {
      std_id: "",
      nature_of_offence: "",
      action_taken: "",
      results: "",
    },
    ///////////////////////////
    observation_report: {
      std_id: "",
      psychological: [
        {
          id: "",
          grade: "",
          year: "",
          report: "",
        },
      ],
      social: [
        {
          id: "",
          grade: "",
          year: "",
          report: "",
        },
      ],
      overall_impression: [
        {
          id: "",
          grade: "",
          year: "",
          report: "",
        },
      ],
    },
    ///////////////////////////
    scholastic_achievements: {
        std_id: "",
        primary: {
            year_and_month: { c1: "", c2: "", c3: "", c4: "", c5: "", c6: "", c7: "", c8: "", c9: "", c10: "", c11: "" },
            grade: { c1: "", c2: "", c3: "", c4: "", c5: "", c6: "", c7: "", c8: "", c9: "", c10: "", c11: "" },
            level: { c1: "", c2: "", c3: "", c4: "", c5: "", c6: "", c7: "", c8: "", c9: "", c10: "", c11: "" },
            english_home: { c1: "", c2: "", c3: "", c4: "", c5: "", c6: "", c7: "", c8: "", c9: "", c10: "", c11: "" },
            average_symbol_learner: { c1: "", c2: "", c3: "", c4: "", c5: "", c6: "", c7: "", c8: "", c9: "", c10: "", c11: "" },
            average_symbol_grade: { c1: "", c2: "", c3: "", c4: "", c5: "", c6: "", c7: "", c8: "", c9: "", c10: "", c11: "" },
            pass_fail: { c1: "", c2: "", c3: "", c4: "", c5: "", c6: "", c7: "", c8: "", c9: "", c10: "", c11: "" },
            attendance: { c1: "", c2: "", c3: "", c4: "", c5: "", c6: "", c7: "", c8: "", c9: "", c10: "", c11: "" },
            /**********************SUBJECTS BELOW */
            subjects: [
                {
                    id: "",
                    name: "",
                    cols: { c1: "", c2: "", c3: "", c4: "", c5: "", c6: "", c7: "", c8: "", c9: "", c10: "", c11: "" }
                }
            ]
        },
        secondary: {
            year_and_month: { c1: "", c2: "", c3: "", c4: "", c5: "", c6: "", c7: "", c8: "", c9: "", c10: "", c11: "" },
            grade: { c1: "", c2: "", c3: "", c4: "", c5: "", c6: "", c7: "", c8: "", c9: "", c10: "", c11: "" },
            level: { c1: "", c2: "", c3: "", c4: "", c5: "", c6: "", c7: "", c8: "", c9: "", c10: "", c11: "" },
            english_home: { c1: "", c2: "", c3: "", c4: "", c5: "", c6: "", c7: "", c8: "", c9: "", c10: "", c11: "" },
            average_symbol_learner: { c1: "", c2: "", c3: "", c4: "", c5: "", c6: "", c7: "", c8: "", c9: "", c10: "", c11: "" },
            average_symbol_grade: { c1: "", c2: "", c3: "", c4: "", c5: "", c6: "", c7: "", c8: "", c9: "", c10: "", c11: "" },
            pass_fail: { c1: "", c2: "", c3: "", c4: "", c5: "", c6: "", c7: "", c8: "", c9: "", c10: "", c11: "" },
            attendance: { c1: "", c2: "", c3: "", c4: "", c5: "", c6: "", c7: "", c8: "", c9: "", c10: "", c11: "" },
            /**********************SUBJECTS BELOW */
            subjects: [
                {
                    id: "",
                    name: "",
                    cols: { c1: "", c2: "", c3: "", c4: "", c5: "", c6: "", c7: "", c8: "", c9: "", c10: "", c11: "" }
                }
            ]
        }
    },
    ///////////////////////////
    general_information: {},
    ///////////////////////////
    general_remarks: {},
    ///////////////////////////
  });
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
        <form className="add_new_student_form">
          <div className="inputBox">
            <input type="text" required="required" />
            <span>Firstname</span>
          </div>
          <div className="inputBox">
            <input type="text" required="required" />
            <span>Other names</span>
          </div>
          <div className="inputBox">
            <input type="text" required="required" />
            <span>Lastname</span>
          </div>
          <div className="inputBox">
            <select name="gender" id="gender">
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

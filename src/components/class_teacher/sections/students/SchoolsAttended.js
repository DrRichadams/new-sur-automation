import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./styles/schools_attended.css";
import { FiPlus } from "react-icons/fi";
import { toggleEditing } from "../../../../store/actions/studentDataActions/schoolsAttendedActions";

const SchoolsAttended = ({
  schoolsAttendedData,
  selectedStudent,
  editingModeValue,
  shiftEditingMode,
}) => {
  const studentSchools = schoolsAttendedData.find(
    (sin) => sin.std_id === selectedStudent.student_id
  );

  const [exemptChoice, setExemptChoice] = useState({
    yes: false,
    no: false,
  });

  const { editingMode } = editingModeValue;
  console.log("schools attended data", editingMode);

  const toggleChoice = (decision) => {
    switch (decision) {
      case "yes":
        setExemptChoice({
          yes: true,
          no: false,
        });
        setLeavingInfo({
          ...leavingInfo,
          compulsory: {
            ...leavingInfo.compulsory,
            exempted: true,
          },
        });
        break;
      case "no":
        setExemptChoice({
          yes: false,
          no: true,
        });
        setLeavingInfo({
          ...leavingInfo,
          compulsory: {
            ...leavingInfo.compulsory,
            exempted: false,
          },
        });
        break;
      default:
        return null;
    }
  };

  const [leavingInfo, setLeavingInfo] = useState({
    compulsory: {
      exempted: null,
      date: {
        month: null,
        day: null,
        year: null,
      },
    },
    ageOnInitial: null,
    schoolsLeft: {},
  });


  useEffect(() => {
    selectedStudent.student_id &&
      setLeavingInfo({
        //...leavingInfo,
        compulsory: {
          exempted: studentSchools.exemption_from_compulsory_education,
          date: {
            month: studentSchools.date.month,
            day: studentSchools.date.day,
            year: studentSchools.date.year,
          },
        },
        ageOnInitial: studentSchools.age_on_initial_entry_to_school,
        schoolsLeft: {...studentSchools.schools_details},
        
      });
    toggleChoice();
    //studentSchools.exemption_from_compulsory_education ? "yes" : "no"
  }, []);

  const styles = {
    selected: { display: "block" },
    not_selected: { display: "none" },
  };

  const renderedList = () => {
    for(const [key, value] of Object.entries(leavingInfo.schoolsLeft)) {
      console.log(key, value)
      return(
      <div className="school_left_box">
                
                <input
                  type="text"
                  className="input_admin_no"
                  disabled={!editingMode}
                  value={value.admission_no}
                />
                <input
                  type="text"
                  className="input_school_name"
                  disabled={!editingMode}
                  value={value.name_of_school}
                />
                <input
                  type="text"
                  className="input_medium"
                  disabled={!editingMode}
                  value={value.medium}
                />
                <input
                  type="text"
                  className="input_date_of_admission"
                  disabled={!editingMode}
                  value={value.date_of_admission}
                />
                <input
                  type="text"
                  className="input_grade_of_admission"
                  disabled={!editingMode}
                  value={value.grade_of_admission}
                />
                <input
                  type="text"
                  className="input_date_of_departure"
                  disabled={!editingMode}
                  value={value.date_of_departure}
                />
                <input
                  type="text"
                  className="input_grade_of_departure"
                  disabled={!editingMode}
                  value={value.grade_of_departure}
                />
              </div>
              )
              
    }
    
  }

  //console.log(JSON.stringify(renderedList))
  

  return (
    <div className="instructions_container">
      <div className="top_main_title">
        <h1 className="section_title">Schoold attended</h1>
        <div className="editing_controls">
          <div
            className="enable_editing editing_controls_btns"
            style={editingMode ? styles.not_selected : styles.selected}
            onClick={() => shiftEditingMode("editing")}
          >
            Enable editing
          </div>
          <div
            className="disable_editing editing_controls_btns"
            style={editingMode ? styles.selected : styles.not_selected}
            onClick={() => shiftEditingMode("not_editing")}
          >
            Disable editing
          </div>
          <div
            className="save_edited editing_controls_btns"
            style={editingMode ? styles.selected : styles.not_selected}
            onClick={() => shiftEditingMode("not_editing")}
          >
            Save changes
          </div>
        </div>
      </div>
      <div className="schools_attended_messages exemption_message">
        <div className="message_title">
          Exemption from compulsory education:
        </div>
        <div className="message_dots">
          <div
            className="yes_box decision_box"
            disabled={!editingMode}
            onClick={() => (editingMode ? toggleChoice("yes") : null)}
          >
            <div
              className="yes_radio radio_box"
              style={{
                backgroundColor: exemptChoice.yes ? "#fff" : "transparent",
              }}
            ></div>
            <div className="yes_title decision_title">Yes</div>
          </div>
          <div
            className="no_box decision_box"
            disabled={!editingMode}
            onClick={() => (editingMode ? toggleChoice("no") : null)}
          >
            <div
              className="no_radio radio_box"
              style={{
                backgroundColor: exemptChoice.no ? "#fff" : "transparent",
              }}
            ></div>
            <div className="no_title decision_title">No</div>
          </div>
        </div>
        <div className="message_dates">
          <div className="big_date_title">Date</div>
          <div className="date_boxes">
            <div className="month_box date_box">
              <label htmlFor="Month" className="date_label">
                Month
              </label>
              <input
                type="text"
                className="month_date_input date_input"
                disabled={!editingMode}
                onChange={(e) =>
                  setLeavingInfo({
                    ...leavingInfo,
                    compulsory: {
                      ...leavingInfo.compulsory,
                      date: {
                        ...leavingInfo.compulsory.date,
                        month: e.target.value,
                      },
                    },
                  })
                }
                value={leavingInfo.compulsory.date.month}
              />
            </div>
            <div className="day_box date_box">
              <label htmlFor="day" className="date_label">
                Day
              </label>
              <input
                type="text"
                className="day_date_input date_input"
                disabled={!editingMode}
                onChange={(e) =>
                  setLeavingInfo({
                    ...leavingInfo,
                    compulsory: {
                      ...leavingInfo.compulsory,
                      date: {
                        ...leavingInfo.compulsory.date,
                        day: e.target.value,
                      },
                    },
                  })
                }
                value={leavingInfo.compulsory.date.day}
              />
            </div>
            <div className="year_box date_box">
              <label htmlFor="year" className="date_label">
                Year
              </label>
              <input
                type="text"
                className="year_date_input date_input"
                disabled={!editingMode}
                onChange={(e) =>
                  setLeavingInfo({
                    ...leavingInfo,
                    compulsory: {
                      ...leavingInfo.compulsory,
                      date: {
                        ...leavingInfo.compulsory.date,
                        year: e.target.value,
                      },
                    },
                  })
                }
                value={leavingInfo.compulsory.date.year}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="age_entry schools_attended_messages">
        <div className="age_entry_title">Age on Initial Entry to School:</div>
        <input
          type="text"
          className="age_entry_input"
          disabled={!editingMode}
          onChange={(e) =>
            setLeavingInfo({
              ...leavingInfo,
              ageOnInitial: e.target.value,
            })
          }
          value={leavingInfo.ageOnInitial}
        />
      </div>
      <div className="schools_left_details">
        <div className="admission_no">ADMISSION NO</div>
        <div className="name_of_school">NAME OF SCHOOL</div>
        <div className="medium">MEDIUM</div>
        <div className="admision_info">ADMISSION</div>
        <div className="admission_date">DATE</div>
        <div className="admission_grade">GRADE</div>
        <div className="departure_info">DEPARTURE</div>
        <div className="departure_date">DATE</div>
        <div className="departure_grade">GRADE</div>
      </div>
      {/* <div className="schools_left_sections">
        {leavingInfo.schoolsLeft.map((sc) => {
          return (
            <div className="school_left_box">
              
              <input
                type="text"
                className="input_admin_no"
                disabled={!editingMode}
                value={sc.admission_no}
              />
              <input
                type="text"
                className="input_school_name"
                disabled={!editingMode}
                value={sc.name_of_school}
              />
              <input
                type="text"
                className="input_medium"
                disabled={!editingMode}
                value={sc.medium}
              />
              <input
                type="text"
                className="input_date_of_admission"
                disabled={!editingMode}
                value={sc.date_of_admission}
              />
              <input
                type="text"
                className="input_grade_of_admission"
                disabled={!editingMode}
                value={sc.grade_of_admission}
              />
              <input
                type="text"
                className="input_date_of_departure"
                disabled={!editingMode}
                value={sc.date_of_departure}
              />
              <input
                type="text"
                className="input_grade_of_departure"
                disabled={!editingMode}
                value={sc.grade_of_departure}
              />
            </div>
          );
        })}
      </div> */}
      <div className="schools_left_sections">
      {
        renderedList()
      }
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
    schoolsAttendedData: state.exSchoolsAttended,
    selectedStudent: state.selectedStudent,
    editingModeValue: state.schoolsAttendedReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    shiftEditingMode: (current) => dispatch(toggleEditing(current)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SchoolsAttended);

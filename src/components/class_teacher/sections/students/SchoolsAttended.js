import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./styles/schools_attended.css";
import { FiPlus } from "react-icons/fi";
import { toggleEditing } from "../../../../store/actions/studentDataActions/schoolsAttendedActions";
import db from "../../../../firebase"
import {
  collection,
  onSnapshot,
  doc,
  setDoc,
  getDocs,
} from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';



const SchoolsAttended = ({
  schoolsAttendedData,
  selectedStudent,
  editingModeValue,
  shiftEditingMode,
}) => {

  ///////////////////////////////////////////////////////////////
  const [fromData, setfromData] = useState([]);
  
  useEffect(() => {
    
    let unmounted = false
    
      onSnapshot(collection(db, "schools_attended"),(snapshot) => {
            console.log("From Firebase",snapshot.docs.map((doc) => doc.data()));
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

  useEffect(() => { console.log("From data now", fromData) }, [fromData])

  // useEffect(() => {
  //   console.log("From data here", fromData)
  //   const curFromData = fromData.find(sin => sin.std_id === selectedStudent.student_id);
  //   console.log("From data filtered", curFromData)

  //   selectedStudent.student_id &&
  //       setLeavingInfo({
  //         //...leavingInfo,
  //         std_id: curFromData.std_id,
  //         compulsory: {
  //           exempted: curFromData.compulsory.exempted,
  //           date: {
  //             month: curFromData.compulsory.date.month,
  //             day: curFromData.compulsory.date.day,
  //             year: curFromData.compulsory.date.year,
  //           },
  //         },
  //         schoolsLeft: [...curFromData.schoolsLeft],
  //         ageOnInitial: curFromData.ageOnInitial,
  //       });
  //     toggleChoice();
  //     //studentSchools.exemption_from_compulsory_education ? "yes" : "no"
  // }, [fromData])

  const updateSchoolsAttendedFirebase = async(cur_id, payload) => {
    const docRef = doc(db, "schools_attended", cur_id);
    await setDoc(docRef, payload);
    alert("Data updated successfully")
  }
  ///////////////////////////////////////////////////////////////
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
    std_id: null,
    compulsory: {
      exempted: null,
      date: {
        month: null,
        day: null,
        year: null,
      },
    },
    ageOnInitial: null,
    schoolsLeft: [
      {
        id: null,
        admission_no: null,
        name_of_school: null,
        medium: null,
        date_of_admission: null,
        grade_of_admission: null,
        date_of_departure: null,
        grade_of_departure: null,
      },
    ],
  });

  // useEffect(() => {
  //   selectedStudent.student_id &&
  //     setLeavingInfo({
  //       //...leavingInfo,
  //       std_id: studentSchools.std_id,
  //       compulsory: {
  //         exempted: studentSchools.exemption_from_compulsory_education,
  //         date: {
  //           month: studentSchools.date.month,
  //           day: studentSchools.date.day,
  //           year: studentSchools.date.year,
  //         },
  //       },
  //       schoolsLeft: [...studentSchools.schools_details],
  //       ageOnInitial: studentSchools.age_on_initial_entry_to_school,
  //     });
  //   toggleChoice();
  //   //studentSchools.exemption_from_compulsory_education ? "yes" : "no"
  // }, []);


  const styles = {
    selected: { display: "block" },
    not_selected: { display: "none" },
  };

  const handleAdmissionNoInput = (e) => {
    console.log(e.target.id)
    let temp_id = e.target.id
    let tempList = leavingInfo.schoolsLeft;
    tempList.forEach(item => {
      if(item.id === temp_id) {
        item.admission_no = e.target.value
      }
    })

    setLeavingInfo({
      ...leavingInfo,
      schoolsLeft: [
        ...tempList
      ]
    })
  }

  const handleNameOfSchoolInput = (e) => {
    //console.log(e.target.id)
    let temp_id = e.target.id
    let tempList = leavingInfo.schoolsLeft;
    tempList.forEach(item => {
      if(item.id === temp_id) {
        item.name_of_school = e.target.value
      }
    })

    setLeavingInfo({
      ...leavingInfo,
      schoolsLeft: [
        ...tempList
      ]
    })
  }

  const handleMediumInput = (e) => {
    //console.log(e.target.id)
    let temp_id = e.target.id
    let tempList = leavingInfo.schoolsLeft;
    tempList.forEach(item => {
      if(item.id === temp_id) {
        item.medium = e.target.value
      }
    })

    setLeavingInfo({
      ...leavingInfo,
      schoolsLeft: [
        ...tempList
      ]
    })
  } 

  const handleDateOfAdmissionInput = (e) => {
    //console.log(e.target.id)
    let temp_id = e.target.id
    let tempList = leavingInfo.schoolsLeft;
    tempList.forEach(item => {
      if(item.id === temp_id) {
        item.date_of_admission = e.target.value
      }
    })

    setLeavingInfo({
      ...leavingInfo,
      schoolsLeft: [
        ...tempList
      ]
    })
  }

  const handleGradeOfAdmissionInput = (e) => {
    //console.log(e.target.id)
    let temp_id = e.target.id
    let tempList = leavingInfo.schoolsLeft;
    tempList.forEach(item => {
      if(item.id === temp_id) {
        item.grade_of_admission = e.target.value
      }
    })

    setLeavingInfo({
      ...leavingInfo,
      schoolsLeft: [
        ...tempList
      ]
    })
  }

  const handleDateOfDepartureInput = (e) => {
    //console.log(e.target.id)
    let temp_id = e.target.id
    let tempList = leavingInfo.schoolsLeft;
    tempList.forEach(item => {
      if(item.id === temp_id) {
        item.date_of_departure = e.target.value
      }
    })

    setLeavingInfo({
      ...leavingInfo,
      schoolsLeft: [
        ...tempList
      ]
    })
  }

  const handleGradeOfDepartureInput = (e) => {
    //console.log(e.target.id)
    let temp_id = e.target.id
    let tempList = leavingInfo.schoolsLeft;
    tempList.forEach(item => {
      if(item.id === temp_id) {
        item.grade_of_departure = e.target.value
      }
    })

    setLeavingInfo({
      ...leavingInfo,
      schoolsLeft: [
        ...tempList
      ]
    })
  } 

  useEffect(() => console.log("This is it:",leavingInfo),[leavingInfo])

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
            onClick={() => {
              shiftEditingMode("not_editing")
              updateSchoolsAttendedFirebase("af4b1efc-3cba-4f0e-ae37-78ef30c3fbeb", leavingInfo)
            }}
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
      <div className="schools_left_sections">
        {leavingInfo.schoolsLeft.map((sc) => {
          return (
            <div className="school_left_box">
              {/* <input
                type="text"
                className="input_admin_no"
                disabled={!editingMode}
                onChange={(e) => {
                  setLeavingInfo({
                    ...leavingInfo,
                    admission_no: e.target.value,
                  });
                }}
                value={leavingInfo.admission_no}
              />
              <input
                type="text"
                className="input_school_name"
                disabled={!editingMode}
                onChange={(e) => {
                  setLeavingInfo({
                    ...leavingInfo,
                    name_of_school: e.target.value,
                  });
                }}
                value={leavingInfo.name_of_school}
              />
              <input
                type="text"
                className="input_medium"
                disabled={!editingMode}
                onChange={(e) => {
                  setLeavingInfo({
                    ...leavingInfo,
                    medium: e.target.value,
                  });
                }}
                value={leavingInfo.medium}
              />
              <input
                type="text"
                className="input_date_of_admission"
                disabled={!editingMode}
                onChange={(e) => {
                  setLeavingInfo({
                    ...leavingInfo,
                    admission_date: e.target.value,
                  });
                }}
                value={leavingInfo.admission_date}
              />
              <input
                type="text"
                className="input_grade_of_admission"
                disabled={!editingMode}
                onChange={(e) => {
                  setLeavingInfo({
                    ...leavingInfo,
                    admission_grade: e.target.value,
                  });
                }}
                value={leavingInfo.admission_grade}
              />
              <input
                type="text"
                className="input_date_of_departure"
                disabled={!editingMode}
                onChange={(e) => {
                  setLeavingInfo({
                    ...leavingInfo,
                    departure_date: e.target.value,
                  });
                }}
                value={leavingInfo.departure_date}
              />
              <input
                type="text"
                className="input_grade_of_departure"
                disabled={!editingMode}
                onChange={(e) => {
                  setLeavingInfo({
                    ...leavingInfo,
                    departure_grade: e.target.value,
                  });
                }}
                value={leavingInfo.departure_grade}
              /> */}
              <input
                type="text"
                className="input_admin_no"
                disabled={!editingMode}
                value={sc.admission_no}
                id={sc.id}
                onChange={(e) => handleAdmissionNoInput(e)}
              />
              <input
                type="text"
                className="input_school_name"
                disabled={!editingMode}
                value={sc.name_of_school}
                id={sc.id}
                onChange={(e) => handleNameOfSchoolInput(e)}
              />
              <input
                type="text"
                className="input_medium"
                disabled={!editingMode}
                value={sc.medium}
                id={sc.id}
                onChange={(e) => handleMediumInput(e)}
              />
              <input
                type="text"
                className="input_date_of_admission"
                disabled={!editingMode}
                value={sc.date_of_admission}
                id={sc.id}
                onChange={(e) => handleDateOfAdmissionInput(e)}
              />
              <input
                type="text"
                className="input_grade_of_admission"
                disabled={!editingMode}
                value={sc.grade_of_admission}
                id={sc.id}
                onChange={(e) => handleGradeOfAdmissionInput(e)}
              />
              <input
                type="text"
                className="input_date_of_departure"
                disabled={!editingMode}
                value={sc.date_of_departure}
                id={sc.id}
                onChange={(e) => handleDateOfDepartureInput(e)}
              />
              <input
                type="text"
                className="input_grade_of_departure"
                disabled={!editingMode}
                value={sc.grade_of_departure}
                id={sc.id}
                onChange={(e) => handleGradeOfDepartureInput(e)}
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

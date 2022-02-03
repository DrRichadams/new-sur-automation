import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { FiPlus } from "react-icons/fi"
import "./styles/observation_report.css";
import {
  toggleOBbtns,
  triggerEditingMode,
} from "../../../../store/actions/studentDataActions/observationReportActions";
import db from "../../../../firebase"
import {
  collection,
  onSnapshot,
  doc,
  setDoc,
  getDocs,
} from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';

const ObservationReport = (props) => {

  ////////////////////NEW AGE CODE////////////////////////////////
  const current_id = props.selectedStudent.student_id

  console.log("My IDENTITY", current_id)

  ///////////////////////////////////////////////////////////////
  const [fromData, setfromData] = useState([]);
  
  useEffect(() => {
    
    let unmounted = false
    
      onSnapshot(collection(db, "observation_report"),(snapshot) => {
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

  



  //////////////TEMPORARILY COMMENTED///////////////

  useEffect(() => {
    current_data && setObservationReportData({
      psychological: [ ...current_data.psychological ],
      social:[ ...current_data.social ],
      overall_impression: [ ...current_data.overall_impression ],
    })
  }, [fromData])
  ////////////////////////////NEW AGE CODE ENDING///////////////////////////////////

  const { overal, psych, social } = props.mainBtns;
  const { changeSect, editingMode, changeEditingMode } = props;
  const { student_id } = props.selectedStudent; 
  console.log("oB props", changeEditingMode);
  //const editingMode = false;

  const [observationReportData, setObservationReportData] = useState({
    psychological: [],
    social: [],
    overall_impression: [],
  });

  //////////////////////CHANGE INPUT PSYCHOLOGICAL FUNCTIONS/////////////
  const change_psy_grade = (e) => {
    let tempData = observationReportData.psychological
    tempData.forEach(item => {
      if(item.id === e.target.id) {
        item.grade = e.target.value
      }
    })
    setObservationReportData({
      ...observationReportData,
      psychological: [...tempData]
    })
    console.log("Req data", tempData)
  }
  const change_psy_year = (e) => {
    let tempData = observationReportData.psychological
      tempData.forEach(item => {
      if(item.id === e.target.id) {
        item.year = e.target.value
      }
    })
    setObservationReportData({
      ...observationReportData,
      psychological: [...tempData]
    })
    console.log("Req data", tempData)
  }
  const change_psy_report = (e) => {
    let tempData = observationReportData.psychological
      tempData.forEach(item => {
      if(item.id === e.target.id) {
        item.report = e.target.value
      }
    })
    setObservationReportData({
      ...observationReportData,
      psychological: [...tempData]
    })
    console.log("Req data", tempData)
  }
  ///////////////////////////////////////////////////////////////////////


    //////////////////////CHANGE INPUT SOCIAL FUNCTIONS/////////////
    const change_social_grade = (e) => {
        let tempData = observationReportData.social
        tempData.forEach(item => {
        if(item.id === e.target.id) {
          item.grade = e.target.value
        }
      })
      setObservationReportData({
        ...observationReportData,
        social: [...tempData]
      })
    }
    const change_social_year = (e) => {
      let tempData = observationReportData.social
      tempData.forEach(item => {
      if(item.id === e.target.id) {
        item.year = e.target.value
      }
    })
    setObservationReportData({
      ...observationReportData,
      social: [...tempData]
    })
    }
    const change_social_report = (e) => {
      let tempData = observationReportData.social
      tempData.forEach(item => {
      if(item.id === e.target.id) {
        item.report = e.target.value
      }
    })
    setObservationReportData({
      ...observationReportData,
      social: [...tempData]
    })
    }
    ///////////////////////////////////////////////////////////////////////
  

        //////////////////////CHANGE INPUT OVERALL IMPRESSION FUNCTIONS/////////////
    const change_overall_grade = (e) => {
      let tempData = observationReportData.overall_impression
      tempData.forEach(item => {
      if(item.id === e.target.id) {
        item.grade = e.target.value
      }
    })
      setObservationReportData({
        ...observationReportData,
        overall_impression: [...tempData]
      })
    }
    const change_overall_year = (e) => {
      let tempData = observationReportData.overall_impression
      tempData.forEach(item => {
      if(item.id === e.target.id) {
        item.year = e.target.value
      }
    })
      setObservationReportData({
        ...observationReportData,
        overall_impression: [...tempData]
      })
    }
    const change_overall_report = (e) => {
      let tempData = observationReportData.overall_impression
      tempData.forEach(item => {
      if(item.id === e.target.id) {
        item.report = e.target.value
      }
    })
      setObservationReportData({
        ...observationReportData,
        overall_impression: [...tempData]
      })
    }
    ///////////////////////////////////////////////////////////////////////

    /////////////////////////////////////////////
    /**HANDLING FIREBASE DATA UPDATES///////// */
    /////////////////////////////////////////////

    const updateObservationReportFirebase = async(cur_id, data) => {
      const payload = {
        std_id: current_id,
        psychological: [...data.psychological],
        social: [...data.social],
        overall_impression: [...data.overall_impression],
      }
      const docRef = doc(db, "observation_report", cur_id);
      await setDoc(docRef, payload);
      alert("Data updated successfully")
      console.log("My payload", payload)
    }

    /////////////////////////////////////////////
    /**HANDLING FIREBASE DATA UPDATES///////// */
    /////////////////////////////////////////////

    useEffect(() => { console.log("From data nowobservation", observationReportData) }, [observationReportData])


    const addNewPsychologicalReport = async(cur_id, data) => {
      const payload = {
        std_id: current_id,
        psychological: [...data.psychological,
          {
            id: uuidv4(),
            grade: "",
            year: "",
            report: "",
          },
        ],
        social: [...data.social],
        overall_impression: [...data.overall_impression],
      }
      const docRef = doc(db, "observation_report", cur_id);
      await setDoc(docRef, payload);
    }

    const addNewSocialReport = async(cur_id, data) => {
      const payload = {
        std_id: current_id,
        psychological: [...data.psychological],
        social: [...data.social,
          {
            id: uuidv4(),
            grade: "",
            year: "",
            report: "",
          },
        ],
        overall_impression: [...data.overall_impression],
      }
      const docRef = doc(db, "observation_report", cur_id);
      await setDoc(docRef, payload);
    }

    const addNewOverallReport = async(cur_id, data) => {
      const payload = {
        std_id: current_id,
        psychological: [...data.psychological],
        social: [...data.social],
        overall_impression: [...data.overall_impression,
          {
            id: uuidv4(),
            grade: "",
            year: "",
            report: "",
          },],
      }
      const docRef = doc(db, "observation_report", cur_id);
      await setDoc(docRef, payload);
    }

  return (
    <div className="instructions_container">
      <div className="top_main_title">
        <h1 className="section_title">Observation Report</h1>
        <div className="editing_controls">
          <div
            className="enable_editing editing_controls_btns"
            style={{ display: editingMode ? "none" : "block" }}
            onClick={() => changeEditingMode("editing")}
          >
            Enable editing
          </div>
          <div
            className="disable_editing editing_controls_btns"
            style={{ display: editingMode ? "block" : "none" }}
            onClick={() => changeEditingMode("not_editing")}
          >
            Disable editing
          </div>
          <div
            className="save_edited editing_controls_btns"
            style={{ display: editingMode ? "block" : "none" }}
            onClick={() => {
              changeEditingMode("not_editing")
              updateObservationReportFirebase(current_id, observationReportData)
            }}
          >
            Save changes
          </div>
        </div>
      </div>
      <div className="control_btns">
        <div
          className="psych_btn"
          style={{
            backgroundColor: psych ? "#fff" : "transparent",
            color: psych ? "#878787" : "#fff",
          }}
          onClick={() => changeSect("psych")}
        >
          PSYCHOLOGICAL
        </div>
        <div
          className="social_btn"
          style={{
            backgroundColor: social ? "#fff" : "transparent",
            color: social ? "#878787" : "#fff",
          }}
          onClick={() => changeSect("social")}
        >
          SOCIAL
        </div>
        <div
          className="overall_impression"
          style={{
            backgroundColor: overal ? "#fff" : "transparent",
            color: overal ? "#878787" : "#fff",
          }}
          onClick={() => changeSect("overal")}
        >
          OVERALL IMPRESSION
        </div>
      </div>
      <div
        className="psych_section"
        style={{ display: psych ? "block" : "none" }}
      >
        <div className="ob_title_box">Psychological</div>
        <div className="ob_section_titles">
          <div className="ob_grade">GRADE</div>
          <div className="ob_year">YEAR</div>
          <div className="ob_report">REPORT</div>
        </div>
        <div className="ob_section_content_box">
          {observationReportData.psychological && observationReportData.psychological.map((cn) => {
            //console.log("My inner data", cn)
            return (
              <div className="ob_section_content">
                <input
                  type="text"
                  className="ob_grade"
                  disabled={!editingMode}
                  id={cn.id}
                  onChange={(e) => {change_psy_grade(e)}}
                  value={cn.grade}
                />
                <input
                  type="text"
                  className="ob_year"
                  disabled={!editingMode}
                  id={cn.id}
                  onChange={(e) => {change_psy_year(e)}}
                  value={cn.year}
                />
                <input
                  type="text"
                  className="ob_report"
                  disabled={!editingMode}
                  id={cn.id}
                  onChange={(e) => {change_psy_report(e)}}
                  value={cn.report}
                />
              </div>
            );
          })}
          <div 
          className="add_left_school" 
          onClick={() => addNewPsychologicalReport(current_id, observationReportData)}>
          <div className="surround_border">
            <FiPlus size={20} />
          </div>
      </div>
        </div>
      </div>
      <div
        className="social_section"
        style={{ display: social ? "block" : "none" }}
      >
        <div className="ob_title_box">Social</div>
        <div className="ob_section_titles">
          <div className="ob_grade">GRADE</div>
          <div className="ob_year">YEAR</div>
          <div className="ob_report">REPORT</div>
        </div>
        <div className="ob_section_content_box">
          {observationReportData.social && observationReportData.social.map((cn) => {
            return (
              <div className="ob_section_content">
                <input
                  type="text"
                  className="ob_grade"
                  disabled={!editingMode}
                  id={cn.id}
                  onChange={(e) => {change_social_grade(e)}}
                  value={cn.grade}
                />
                <input
                  type="text"
                  className="ob_year"
                  disabled={!editingMode}
                  id={cn.id}
                  onChange={(e) => {change_social_year(e)}}
                  value={cn.year}
                />
                <input
                  type="text"
                  className="ob_report"
                  disabled={!editingMode}
                  id={cn.id}
                  onChange={(e) => {change_social_report(e)}}
                  value={cn.report}
                />
              </div>
            );
          })}
          <div 
          className="add_left_school" 
          onClick={() => addNewSocialReport(current_id, observationReportData)}>
          <div className="surround_border">
            <FiPlus size={20} />
          </div>
      </div>
        </div>
      </div>
      <div
        className="overal_section"
        style={{ display: overal ? "block" : "none" }}
      >
        <div className="ob_title_box">Overall Impression</div>
        <div className="ob_section_titles">
          <div className="ob_grade">GRADE</div>
          <div className="ob_year">YEAR</div>
          <div className="ob_report">REPORT</div>
        </div>
        <div className="ob_section_content_box">
          {observationReportData.overall_impression && observationReportData.overall_impression.map((cn) => {
            return (
              <div className="ob_section_content">
                <input
                  type="text"
                  className="ob_grade"
                  disabled={!editingMode}
                  id={cn.id}
                  onChange={(e) => {change_overall_grade(e)}}
                  value={cn.grade}
                />
                <input
                  type="text"
                  className="ob_year"
                  disabled={!editingMode}
                  id={cn.id}
                  onChange={(e) => {change_overall_year(e)}}
                  value={cn.year}
                />
                <input
                  type="text"
                  className="ob_report"
                  disabled={!editingMode}
                  id={cn.id}
                  onChange={(e) => {change_overall_report(e)}}
                  value={cn.report}
                />
              </div>
            );
          })}
          <div 
          className="add_left_school" 
          onClick={() => addNewOverallReport(current_id, observationReportData)}>
          <div className="surround_border">
            <FiPlus size={20} />
          </div>
      </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mainBtns: state.obReport.OBbtns,
    selectedStudent: state.selectedStudent,
    editingMode: state.obReport.editingMode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSect: (btype) => dispatch(toggleOBbtns(btype)),
    changeEditingMode: (current) => dispatch(triggerEditingMode(current)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ObservationReport);

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { FiPlus } from "react-icons/fi";
import "./styles/scholastic_achievements.css";
import {
  shiftEditingMode, 
  shiftSchoolType,
} from "../../../../store/actions/studentDataActions/scholasticAchievementsActions";
import db from "../../../../firebase"
import { 
  collection,
  onSnapshot,
  doc,
  setDoc,
  getDocs,
} from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';

const ScholasticAchievements = (props) => {
  const { editingMode, primarySchool } = props.editingData;
  const { switchEditing, switchSchool, selectedStudent } = props;
  console.log("Requested props", props);

  const current_id = selectedStudent.student_id

  console.log("My IDENTITY", current_id)

  const [ schoolsData, setSchoolsData ] = useState({
    std_id: "",
    primary: {},
    secondary: {}
  })

  ///////////////////////////////////////////////////////////////
  const [fromData, setfromData] = useState([]);
  
  useEffect(() => {
    
    let unmounted = false
    
      onSnapshot(collection(db, "scholastic_achievements"),(snapshot) => {
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

  useEffect(() => {console.log("My dataz ", fromData)}, [fromData])

  useEffect(() => {
    current_data && setSchoolsData({
      std_id: current_data.std_id,
      primary: current_data.primary,
      secondary: current_data.secondary
    })
    // current_data && console.log("My current cur ", schoolsData)
  }, [fromData])

  current_data && console.log("My current cur ", schoolsData)

  let yamInfo, gdInfo, logInfo, ehInfo, aslInfo, asgInfo, pfInfo, satInfo
  let sec_yamInfo, sec_gdInfo, sec_logInfo, sec_ehInfo, sec_aslInfo, sec_asgInfo, sec_pfInfo, sec_satInfo

  try{ yamInfo = current_data && schoolsData.primary.yam.map(item => (
      <input type="text" className="sc_section_inputs" disabled={!editingMode} id={item.id} 
      value={item.yam} 
      onChange = {(e) => handleYam(e)}/> ))} catch(err) {}

  try{ gdInfo = current_data && schoolsData.primary.gd.map(item => (
      <input type="text" className="sc_section_inputs" disabled={!editingMode} id={item.id} 
      value={item.gd} 
      onChange = {(e) => handleGd(e)}/> ))} catch(err) {}

  try{ logInfo = current_data && schoolsData.primary.log.map(item => (
      <input type="text" className="sc_section_inputs" disabled={!editingMode} id={item.id} 
      value={item.log} 
      onChange = {(e) => handleLog(e)}/> ))} catch(err) {}

  try{ ehInfo = current_data && schoolsData.primary.eh.map(item => (
      <input type="text" className="sc_section_inputs" disabled={!editingMode} id={item.id} 
      value={item.eh} 
      onChange = {(e) => handleEh(e)}/> ))} catch(err) {}

  try{ aslInfo = current_data && schoolsData.primary.asl.map(item => (
      <input type="text" className="sc_section_inputs" disabled={!editingMode} id={item.id} 
      value={item.asl} 
      onChange = {(e) => handleAsl(e)}/> ))} catch(err) {}

  try{ asgInfo = current_data && schoolsData.primary.asg.map(item => (
      <input type="text" className="sc_section_inputs" disabled={!editingMode} id={item.id} 
      value={item.asg} 
      onChange = {(e) => handleAsg(e)}/> ))} catch(err) {}

  try{ pfInfo = current_data && schoolsData.primary.pf.map(item => (
      <input type="text" className="sc_section_inputs" disabled={!editingMode} id={item.id} 
      value={item.pf} 
      onChange = {(e) => handlePf(e)}/> ))} catch(err) {}

  try{ satInfo = current_data && schoolsData.primary.sat.map(item => (
      <input type="text" className="sc_section_inputs" disabled={!editingMode} id={item.id} 
      value={item.sat} 
      onChange = {(e) => handleSat(e)}/> ))} catch(err) {}

  ///////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////

try{ sec_yamInfo = current_data && schoolsData.secondary.yam_s.map(item => (
    <input type="text" className="sc_section_inputs" disabled={!editingMode} id={item.id} 
    value={item.yam} 
    onChange = {(e) => handleYam_s(e)}/> ))} catch(err) {}

try{ sec_gdInfo = current_data && schoolsData.secondary.gd_s.map(item => (
    <input type="text" className="sc_section_inputs" disabled={!editingMode} id={item.id} 
    value={item.gd} 
    onChange = {(e) => handleGd_s(e)}/> ))} catch(err) {}

try{ sec_logInfo = current_data && schoolsData.secondary.log_s.map(item => (
    <input type="text" className="sc_section_inputs" disabled={!editingMode} id={item.id} 
    value={item.log} 
    onChange = {(e) => handleLog_s(e)}/> ))} catch(err) {}

try{ sec_ehInfo = current_data && schoolsData.secondary.eh_s.map(item => (
    <input type="text" className="sc_section_inputs" disabled={!editingMode} id={item.id} 
    value={item.eh} 
    onChange = {(e) => handleEh_s(e)}/> ))} catch(err) {}

try{ sec_aslInfo = current_data && schoolsData.secondary.asl_s.map(item => (
    <input type="text" className="sc_section_inputs" disabled={!editingMode} id={item.id} 
    value={item.asl} 
    onChange = {(e) => handleAsl_s(e)}/> ))} catch(err) {}

try{ sec_asgInfo = current_data && schoolsData.secondary.asg_s.map(item => (
    <input type="text" className="sc_section_inputs" disabled={!editingMode} id={item.id} 
    value={item.asg} 
    onChange = {(e) => handleAsg_s(e)}/> ))} catch(err) {}

try{ sec_pfInfo = current_data && schoolsData.secondary.pf_s.map(item => (
    <input type="text" className="sc_section_inputs" disabled={!editingMode} id={item.id} 
    value={item.pf} 
    onChange = {(e) => handlePf_s(e)}/> ))} catch(err) {}

try{ sec_satInfo = current_data && schoolsData.secondary.sat_s.map(item => (
    <input type="text" className="sc_section_inputs" disabled={!editingMode} id={item.id} 
    value={item.sat} 
    onChange = {(e) => handleSat_s(e)}/> ))} catch(err) {}


///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

let primarySubjectsRender;
let secondarySubjectsRender;

try {
  primarySubjectsRender = current_data && schoolsData.primary.studentSubjectsList.map(item => (
    <div className="sa_subject_box" key={item.id}>
      <input type="text" className="sa_subject_title" disabled={!editingMode} 
      id = {item.id}
      value = {item.subject_name}
      onChange = {(e) => handlePrimarySubjectNames(e)}/>

      <div className="sa_subject_input_fields">
        {
          item.sub_cols.map(col => (
            <input type="text" className="sc_section_inputs" disabled={!editingMode}
                id = {col.id}
                value = {col.c} 
                onChange = {(e) => handlePrimaryCol(e, item.id)} />
          ))
        }
        
        
      </div>
    </div>
  ))
} catch(err) {
  console.log("THis is a SupEr ErRor", err)
}

try {
  secondarySubjectsRender = current_data && schoolsData.secondary.studentSubjectsList.map(item => (
    <div className="sa_subject_box" key={item.id}>
      <input type="text" className="sa_subject_title" disabled={!editingMode}
      id = {item.id}
      value = {item.subject_name}
      onChange = {(e) => handleSecondarySubjectNames(e)} />

      <div className="sa_subject_input_fields">
        {
          item.sub_cols.map(col => (
            <input type="text" className="sc_section_inputs" disabled={!editingMode}
                id = {col.id}
                value = {col.c} 
                onChange = {(e) => handleSecondaryCol(e, item.id)}/>
          ))
        }
        
        
      </div>
    </div>
  ))
} catch(err) {
  console.log("THis is a SupEr ErRor", err)
}

///////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////SETTING PRIMARY FIELDS////////////////////////////////////


const handleYam = (e) => {
    let tempYam = schoolsData.primary.yam
    tempYam.forEach(item => {if(item.id == e.target.id) item.yam = e.target.value });
    setSchoolsData({...schoolsData, primary: {...schoolsData.primary, yam: tempYam }})}

const handleGd = (e) => {
    let tempGd = schoolsData.primary.gd
    tempGd.forEach(item => {if(item.id == e.target.id) item.gd = e.target.value });
    setSchoolsData({...schoolsData, primary: {...schoolsData.primary, gd: tempGd }})}

const handleLog = (e) => {
    let templog = schoolsData.primary.log
    templog.forEach(item => {if(item.id == e.target.id) item.log = e.target.value });
    setSchoolsData({...schoolsData, primary: {...schoolsData.primary, log: templog }})}

const handleEh = (e) => {
    let tempeh = schoolsData.primary.eh
    tempeh.forEach(item => {if(item.id == e.target.id) item.eh = e.target.value });
    setSchoolsData({...schoolsData, primary: {...schoolsData.primary, eh: tempeh }})}

const handleAsl = (e) => {
    let tempasl = schoolsData.primary.asl
    tempasl.forEach(item => {if(item.id == e.target.id) item.asl = e.target.value });
    setSchoolsData({...schoolsData, primary: {...schoolsData.primary, asl: tempasl }})}

const handleAsg = (e) => {
    let tempasg = schoolsData.primary.asg
    tempasg.forEach(item => {if(item.id == e.target.id) item.asg = e.target.value });
    setSchoolsData({...schoolsData, primary: {...schoolsData.primary, asg: tempasg }})}

const handlePf = (e) => {
    let temppf = schoolsData.primary.pf
    temppf.forEach(item => {if(item.id == e.target.id) item.pf = e.target.value });
    setSchoolsData({...schoolsData, primary: {...schoolsData.primary, pf: temppf }})}

const handleSat = (e) => {
    let tempsat = schoolsData.primary.sat
    tempsat.forEach(item => {if(item.id == e.target.id) item.sat = e.target.value });
    setSchoolsData({...schoolsData, primary: {...schoolsData.primary, sat: tempsat }})}

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////SETTING SECONDART FIELDS///////////////////////////////////


const handleYam_s = (e) => {
    let tempYam = schoolsData.secondary.yam_s
    tempYam.forEach(item => {if(item.id == e.target.id) item.yam = e.target.value });
    setSchoolsData({...schoolsData, secondary: {...schoolsData.secondary, yam: tempYam }})}

const handleGd_s = (e) => {
    let tempGd = schoolsData.secondary.gd_s
    tempGd.forEach(item => {if(item.id == e.target.id) item.gd = e.target.value });
    setSchoolsData({...schoolsData, secondary: {...schoolsData.secondary, gd: tempGd }})}

const handleLog_s = (e) => {
    let templog = schoolsData.secondary.log_s
    templog.forEach(item => {if(item.id == e.target.id) item.log = e.target.value });
    setSchoolsData({...schoolsData, secondary: {...schoolsData.secondary, log: templog }})}

const handleEh_s = (e) => {
    let tempeh = schoolsData.secondary.eh_s
    tempeh.forEach(item => {if(item.id == e.target.id) item.eh = e.target.value });
    setSchoolsData({...schoolsData, secondary: {...schoolsData.secondary, eh: tempeh }})}

const handleAsl_s = (e) => {
    let tempasl = schoolsData.secondary.asl_s
    tempasl.forEach(item => {if(item.id == e.target.id) item.asl = e.target.value });
    setSchoolsData({...schoolsData, secondary: {...schoolsData.secondary, asl: tempasl }})}

const handleAsg_s = (e) => {
    let tempasg = schoolsData.secondary.asg_s
    tempasg.forEach(item => {if(item.id == e.target.id) item.asg = e.target.value });
    setSchoolsData({...schoolsData, secondary: {...schoolsData.secondary, asg: tempasg }})}

const handlePf_s = (e) => {
    let temppf = schoolsData.secondary.pf_s
    temppf.forEach(item => {if(item.id == e.target.id) item.pf = e.target.value });
    setSchoolsData({...schoolsData, secondary: {...schoolsData.secondary, pf: temppf }})}

const handleSat_s = (e) => {
    let tempsat = schoolsData.secondary.sat_s
    tempsat.forEach(item => {if(item.id == e.target.id) item.sat = e.target.value });
    setSchoolsData({...schoolsData, secondary: {...schoolsData.secondary, sat: tempsat }})}

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////
////////////////////////HANDLING SUBJECT INPUT/////////////////////
///////////////////////////////////////////////////////////////////

const handlePrimarySubjectNames = (e) => {
  let tempSubList = schoolsData.primary.studentSubjectsList
  tempSubList.forEach(item => { if(item.id == e.target.id) item.subject_name = e.target.value })
  setSchoolsData({...schoolsData, primary: {...schoolsData.primary, studentSubjectsList: tempSubList }})
}

const handleSecondarySubjectNames = (e) => {
  let tempSubList = schoolsData.secondary.studentSubjectsList
  tempSubList.forEach(item => { if(item.id == e.target.id) item.subject_name = e.target.value })
  setSchoolsData({...schoolsData, secondary: {...schoolsData.secondary, studentSubjectsList: tempSubList }})
}

///////////////////////////////////////////////////////////////////
////////////////////////HANDLING COLUMN INPUT/////////////////////
///////////////////////////////////////////////////////////////////

const handlePrimaryCol = (e, an_id) => {
  let tempSubData = schoolsData.primary.studentSubjectsList
  tempSubData.forEach(item => { if(item.id == an_id) {item.sub_cols.forEach(sin => {if(sin.id == e.target.id) sin.c = e.target.value})}})
  setSchoolsData({...schoolsData, primary: {...schoolsData.primary, studentSubjectsList: tempSubData }})
  console.log("Detes", e.target.id, e.target.value,tempSubData)
}

const handleSecondaryCol = (e, an_id) => {
  let tempSubData = schoolsData.secondary.studentSubjectsList
  tempSubData.forEach(item => { if(item.id == an_id) {item.sub_cols.forEach(sin => {if(sin.id == e.target.id) sin.c = e.target.value})}})
  setSchoolsData({...schoolsData, secondary: {...schoolsData.secondary, studentSubjectsList: tempSubData }})
  console.log("Detes", e.target.id, e.target.value,tempSubData)
}


////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////SENDING TO FIRESTORE//////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

const updateScholasticFirebase = async(cur_id, data) => {
  const payload = {
    std_id: data.std_id,
    primary: {...data.primary},
    secondary: {...data.secondary}
  }
  const docRef = doc(db, "scholastic_achievements", cur_id);
  await setDoc(docRef, payload);
  alert("Data updated successfully")
  console.log("My payload", payload,cur_id)
} 

const addNewSubjectPrimary = async(cur_id, data) => {
  let tempSubList = schoolsData.primary.studentSubjectsList
  tempSubList.push({
    id: uuidv4(),
    subject_name: "",
    sub_cols: [{id: 1, c: ""},{id: 2, c: ""},{id: 3, c: ""},{id: 4, c: ""},{id: 5, c: ""},{id: 6, c: ""},{id: 7, c: ""},{id: 8, c: ""},{id: 9, c: ""},{id: 10, c: ""},{id: 11, c: ""}]
  })
  setSchoolsData({...schoolsData,primary: {...schoolsData.primary,studentSubjectsList: tempSubList}})
  const payload = {
    std_id: data.std_id,
    primary: {...data.primary},
    secondary: {...data.secondary}
  }
  const docRef = doc(db, "scholastic_achievements", cur_id);
  await setDoc(docRef, payload);
  console.log("My payload", payload,cur_id)
} 

const addNewSubjectSecondary = async(cur_id, data) => {
  let tempSubList = schoolsData.secondary.studentSubjectsList
  tempSubList.push({
    id: uuidv4(),
    subject_name: "",
    sub_cols: [{id: 1, c: ""},{id: 2, c: ""},{id: 3, c: ""},{id: 4, c: ""},{id: 5, c: ""},{id: 6, c: ""},{id: 7, c: ""},{id: 8, c: ""},{id: 9, c: ""},{id: 10, c: ""},{id: 11, c: ""}]
  })
  setSchoolsData({...schoolsData,secondary: {...schoolsData.primary,studentSubjectsList: tempSubList}})
  const payload = {
    std_id: data.std_id,
    primary: {...data.primary},
    secondary: {...data.secondary}
  }
  const docRef = doc(db, "scholastic_achievements", cur_id);
  await setDoc(docRef, payload);
  console.log("My payload", payload,cur_id)
} 

////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////SENDING TO FIRESTORE//////////////////////////////
////////////////////////////////////////////////////////////////////////////////////


  return (
    <div className="instructions_container">
      <div className="top_main_title">
        <h1 className="section_title">Scholastic Achievements</h1>
        <div className="editing_controls">
          <div className="enable_editing editing_controls_btns" style={{ display: editingMode ? "none" : "block" }} onClick={() => switchEditing("editing")} >
            Enable editing
          </div>
          <div className="disable_editing editing_controls_btns" style={{ display: editingMode ? "block" : "none" }} onClick={() => switchEditing("not_editing")} >
            Disable editing
          </div>
          <div 
            className="save_edited editing_controls_btns" 
            style={{ display: editingMode ? "block" : "none" }} 
            onClick={() => {
              switchEditing("saving"); 
              updateScholasticFirebase(current_id, schoolsData)
              }} >
            Save changes
          </div>
        </div>
      </div>
      <div
        className="schola_primary_box"
        style={{ display: primarySchool ? "block" : "none" }}
      >
        <div className="schola_phase_1">
          <div className="phase_box">
            <div className="phase_title">PHASE</div>
            <div className="phase_btns">
              <button className="primary_btn" onClick={() => switchSchool("primary")}
                style={{ backgroundColor: primarySchool ? "#fff" : "transparent", color: primarySchool ? "black" : "#fff",}} >PRIMARY (GRADE 1 - 7)
              </button>
              <button className="secondary_btn" onClick={() => switchSchool("secondary")}
                style={{ backgroundColor: !primarySchool ? "#fff" : "transparent", color: !primarySchool ? "black" : "#fff", }}>SECONDARY (GRADE 8 - 12)
              </button>
            </div>
          </div>
          <div className="year_month_box">
            <div className="year_title">YEAR AND MONTH</div>
            <div className="year_input_boxes">{ yamInfo }</div>
          </div>
          <div className="grade_box_first">
            <div className="grade_name_title">GRADE</div>
            <div className="grade_input_boxes">{ gdInfo }</div>
          </div>
          <div className="leve_grade_box">
            <div className="level_title">LEVEL OF GRADE</div>
            <div className="level_input_boxes">{logInfo}</div>
          </div>
          <div className="english_home_box">
            <div className="english_home_title">
              ENGLISH HOME / SECOND LANGUAGE
            </div>
            <div className="english_home_input_boxes">{ehInfo}</div>
          </div>
        </div>
        <div className="schola_phase_2">
          { primarySubjectsRender }
          
          <button className="sa_add_subject" onClick={() => addNewSubjectPrimary(current_id, schoolsData)}>
            <p className="sa_add_sub_text">ADD</p>
            <FiPlus size={16} />
          </button>
        </div>
        <div className="schola_phase_3">
          <div className="average_learner_box">
            <div className="al_title">AVERAGE SYMBOL % OF LEARNER</div>
            <div className="al_input_boxes">{aslInfo}</div>
          </div>
          <div className="average_grade_box">
            <div className="ag_title">AVERAGE SYMBOL % OF GRADE</div>
            <div className="ag_input_boxes">{asgInfo}</div>
          </div>
          <div className="pass_fail_box">
            <div className="pf_title">PASS(P); FAIL(F)</div>
            <div className="pf_input_boxes">{pfInfo}</div>
          </div>
          <div className="school_attendance_box">
            <div className="sat_title">SCHOOL ATTENDANCE ( G; P/R; PT )</div>
            <div className="sat_input_boxes">{satInfo}</div>
          </div>
          <div className="satd_detail_box">
            <div className="satd_title">
              G=GOOD; P/R=POOR REASON; P/T=POOR TRUANCY
            </div>
            <div className="satd_input_boxes">
              {/* <input type="text" className="sc_section_inputs" disabled={!editingMode} id="satg1" /> */}
            </div>
          </div>
        </div>
      </div>
      {/* STARTING OF SECONDARY INFORMATION SECTION */}
      <div
        className="schola_secondary_box"
        style={{ display: !primarySchool ? "block" : "none" }}
      >
        <div className="schola_phase_1">
          <div className="phase_box">
            <div className="phase_title">PHASE</div>
            <div className="phase_btns">
              <button className="primary_btn" onClick={() => switchSchool("primary")}
                style={{ backgroundColor: primarySchool ? "#fff" : "transparent", color: primarySchool ? "black" : "#fff",}}>PRIMARY (GRADE 1 - 7)
              </button>
              <button className="secondary_btn" onClick={() => switchSchool("secondary")}
                style={{ backgroundColor: !primarySchool ? "#fff" : "transparent", color: !primarySchool ? "black" : "#fff",}} >SECONDARY (GRADE 8 - 12)
              </button>
            </div>
          </div>
          <div className="year_month_box">
            <div className="year_title">YEAR AND MONTH</div>
            <div className="year_input_boxes">{sec_yamInfo}</div>
          </div>
          <div className="grade_box_first">
            <div className="grade_name_title">GRADE</div>
            <div className="grade_input_boxes">{sec_gdInfo}</div>
          </div>
          <div className="leve_grade_box">
            <div className="level_title">LEVEL OF GRADE</div>
            <div className="level_input_boxes">{sec_logInfo}</div>
          </div>
          <div className="english_home_box">
            <div className="english_home_title">
              ENGLISH HOME / SECOND LANGUAGE
            </div>
            <div className="english_home_input_boxes">{sec_ehInfo}</div>
          </div>
        </div>
        <div className="schola_phase_2">
          { secondarySubjectsRender }
          <button className="sa_add_subject" onClick={() => addNewSubjectSecondary(current_id, schoolsData)}>
            <p className="sa_add_sub_text">ADD</p>
            <FiPlus size={16} />
          </button>
        </div>
        <div className="schola_phase_3">
          <div className="average_learner_box">
            <div className="al_title">AVERAGE SYMBOL % OF LEARNER</div>
            <div className="al_input_boxes">{sec_aslInfo}</div>
          </div>
          <div className="average_grade_box">
            <div className="ag_title">AVERAGE SYMBOL % OF GRADE</div>
            <div className="ag_input_boxes">{sec_asgInfo}</div>
          </div>
          <div className="pass_fail_box">
            <div className="pf_title">PASS(P); FAIL(F)</div>
            <div className="pf_input_boxes">{sec_pfInfo}</div>
          </div>
          <div className="school_attendance_box">
            <div className="sat_title">SCHOOL ATTENDANCE ( G; P/R; PT )</div>
            <div className="sat_input_boxes">{sec_satInfo}</div>
          </div>
          <div className="satd_detail_box">
            <div className="satd_title">
              G=GOOD; P/R=POOR REASON; P/T=POOR TRUANCY
            </div>
            <div className="satd_input_boxes">
                {/* <input type="text" className="sc_section_inputs" disabled={!editingMode} id="satg1" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { editingData: state.schola_store, selectedStudent: state.selectedStudent, };};

const mapDispatchToProps = (dispatch) => {
  return { switchEditing: (current) => dispatch(shiftEditingMode(current)), switchSchool: (current) => dispatch(shiftSchoolType(current)),};};

export default connect( mapStateToProps, mapDispatchToProps)(ScholasticAchievements);

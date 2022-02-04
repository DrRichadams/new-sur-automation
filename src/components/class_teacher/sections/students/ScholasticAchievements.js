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

  // const [pr_subjectInfo, setPr_subjectInfo] = useState({
  //   subject_name: "Mathematics",col1: 1,col2: 2,col3: 3,col4: 4,col5: 5,col6: 6,col7: 7,col8: 8,col9: 9,col10: 10,col11: 11,
  // });

  // const [sec_subjectInfo, setSec_subjectInfo] = useState({
  //   subject_name: "Chemistry",col1: 1,col2: 2,col3: 3,col4: 4,col5: 5,col6: 6,col7: 7,col8: 8,col9: 9,col10: 10,col11: 11,
  // });

  const current_id = selectedStudent.student_id

  console.log("My IDENTITY", current_id)

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


  const [primaryStudentList, setprimaryStudentList] = useState([
    {
      id: "111",
      subject_name: "Maths",
      sub_cols: {c1: "",c2: "",c3: "",c4: "",c5: "",c6: "",c7: "",c8: "",c9: "",c10: "",c11: "",}
    },
    
  ]);

  const [secondaryStudentList, setsecondaryStudentList] = useState([
    {
      id: "111",
      subject_name: "Maths",
      sub_cols: {c1: "",c2: "",c3: "",c4: "",c5: "",c6: "",c7: "",c8: "",c9: "",c10: "",c11: "",}
    },
    
  ]);

  useEffect(() => { console.log("From data now", current_data) }, [fromData])

  useEffect(() => {
    /////////////////////////////////////////////////
    current_data && setYam({ ...current_data.primary.yam });
    current_data && setGd({ ...current_data.primary.gd });
    current_data && setLog({ ...current_data.primary.log });
    current_data && setEh({ ...current_data.primary.eh });
    current_data && setAsl({ ...current_data.primary.asl });
    current_data && setAsg({ ...current_data.primary.asg });
    current_data && setPf({ ...current_data.primary.pf });
    current_data && setSat({ ...current_data.primary.sat });
    
    /////////////////////////////////////////////////
    current_data && setYam_s({ ...current_data.secondary.yam });
    current_data && setGd_s({ ...current_data.secondary.gd });
    current_data && setLog_s({ ...current_data.secondary.log });
    current_data && setEh_s({ ...current_data.secondary.eh });
    current_data && setAsl_s({ ...current_data.secondary.asl });
    current_data && setAsg_s({ ...current_data.secondary.asg });
    current_data && setPf_s({ ...current_data.secondary.pf });
    current_data && setSat_s({ ...current_data.secondary.sat });
    /////////////////////////////////////////////////
    current_data && setprimaryStudentList([...current_data.primary.studentSubjectsList])
    current_data && setsecondaryStudentList([...current_data.secondary.studentSubjectsList])
    current_data && console.log("Primary subjects", current_data.primary.studentSubjectsList)
    current_data && console.log("Secondary subjects", current_data.secondary.studentSubjectsList)


  /////////////////////////////////////////////////////////////////
    
  }, [fromData])


  ///////////////////////////////////////////////////////////////
  /**////////////////////////////////SETTING SUBJECTS FROM FIRESTORE */
  ///////////////////////////////////////////////////////////////
    

  ////////////////////UPDATING SUBJECT FIELD INPUTS STARTS HERE ----PRIMARY///////////////////////////

  const update_pri_sub_name = (e) => {
    let tempData = primaryStudentList;
    tempData.forEach(item => {if(item.id === e.target.id) item.subject_name = e.target.value})
    setprimaryStudentList([ ...tempData ])
  }

  const update_pri_sub_c1 = (e) => {
    let tempData = primaryStudentList;
    tempData.forEach(item => {if(item.id === e.target.id) item.sub_cols.c1 = e.target.value})
    setprimaryStudentList([ ...tempData ])
  }

    const update_pri_sub_c2 = (e) => {
    let tempData = primaryStudentList;
    tempData.forEach(item => {if(item.id === e.target.id) item.sub_cols.c2 = e.target.value})
    setprimaryStudentList([ ...tempData ])
  }

  const update_pri_sub_c3 = (e) => {
    let tempData = primaryStudentList;
    tempData.forEach(item => {if(item.id === e.target.id) item.sub_cols.c3 = e.target.value})
    setprimaryStudentList([ ...tempData ])
  }

  const update_pri_sub_c4 = (e) => {
    let tempData = primaryStudentList;
    tempData.forEach(item => {if(item.id === e.target.id) item.sub_cols.c4 = e.target.value})
    setprimaryStudentList([ ...tempData ])
  }

  const update_pri_sub_c5 = (e) => {
    let tempData = primaryStudentList;
    tempData.forEach(item => {if(item.id === e.target.id) item.sub_cols.c5 = e.target.value})
    setprimaryStudentList([ ...tempData ])
  }

  const update_pri_sub_c6 = (e) => {
    let tempData = primaryStudentList;
    tempData.forEach(item => {if(item.id === e.target.id) item.sub_cols.c6 = e.target.value})
    setprimaryStudentList([ ...tempData ])
  }

  const update_pri_sub_c7 = (e) => {
    let tempData = primaryStudentList;
    tempData.forEach(item => {if(item.id === e.target.id) item.sub_cols.c7 = e.target.value})
    setprimaryStudentList([ ...tempData ])
  }

  const update_pri_sub_c8 = (e) => {
    let tempData = primaryStudentList;
    tempData.forEach(item => {if(item.id === e.target.id) item.sub_cols.c8 = e.target.value})
    setprimaryStudentList([ ...tempData ])
  }

  const update_pri_sub_c9 = (e) => {
    let tempData = primaryStudentList;
    tempData.forEach(item => {if(item.id === e.target.id) item.sub_cols.c9 = e.target.value})
    setprimaryStudentList([ ...tempData ])
  }

  const update_pri_sub_c10 = (e) => {
    let tempData = primaryStudentList;
    tempData.forEach(item => {if(item.id === e.target.id) item.sub_cols.c10 = e.target.value})
    setprimaryStudentList([ ...tempData ])
  }

  const update_pri_sub_c11 = (e) => {
    let tempData = primaryStudentList;
    tempData.forEach(item => {if(item.id === e.target.id) item.sub_cols.c11 = e.target.value})
    setprimaryStudentList([ ...tempData ])
  }

    ////////////////////UPDATING SUBJECT FIELD INPUTS ENDS HERE ----PRIMARY///////////////////////////

    ////////////////////UPDATING SUBJECT FIELD INPUTS STARTS HERE ----SECONDARY///////////////////////////

  const update_sec_sub_name = (e) => {
    let tempData = secondaryStudentList;
    tempData.forEach(item => {if(item.id === e.target.id) item.subject_name = e.target.value})
    setsecondaryStudentList([ ...tempData ])
  }

  const update_sec_sub_c1 = (e) => {
    let tempData = secondaryStudentList;
    tempData.forEach(item => {if(item.id === e.target.id) item.sub_cols.c1 = e.target.value})
    setsecondaryStudentList([ ...tempData ])
  }

    const update_sec_sub_c2 = (e) => {
    let tempData = secondaryStudentList;
    tempData.forEach(item => {if(item.id === e.target.id) item.sub_cols.c2 = e.target.value})
    setsecondaryStudentList([ ...tempData ])
  }

  const update_sec_sub_c3 = (e) => {
    let tempData = secondaryStudentList;
    tempData.forEach(item => {if(item.id === e.target.id) item.sub_cols.c3 = e.target.value})
    setsecondaryStudentList([ ...tempData ])
  }

  const update_sec_sub_c4 = (e) => {
    let tempData = secondaryStudentList;
    tempData.forEach(item => {if(item.id === e.target.id) item.sub_cols.c4 = e.target.value})
    setsecondaryStudentList([ ...tempData ])
  }

  const update_sec_sub_c5 = (e) => {
    let tempData = secondaryStudentList;
    tempData.forEach(item => {if(item.id === e.target.id) item.sub_cols.c5 = e.target.value})
    setsecondaryStudentList([ ...tempData ])
  }

  const update_sec_sub_c6 = (e) => {
    let tempData = secondaryStudentList;
    tempData.forEach(item => {if(item.id === e.target.id) item.sub_cols.c6 = e.target.value})
    setsecondaryStudentList([ ...tempData ])
  }

  const update_sec_sub_c7 = (e) => {
    let tempData = secondaryStudentList;
    tempData.forEach(item => {if(item.id === e.target.id) item.sub_cols.c7 = e.target.value})
    setsecondaryStudentList([ ...tempData ])
  }

  const update_sec_sub_c8 = (e) => {
    let tempData = secondaryStudentList;
    tempData.forEach(item => {if(item.id === e.target.id) item.sub_cols.c8 = e.target.value})
    setsecondaryStudentList([ ...tempData ])
  }

  const update_sec_sub_c9 = (e) => {
    let tempData = secondaryStudentList;
    tempData.forEach(item => {if(item.id === e.target.id) item.sub_cols.c9 = e.target.value})
    setsecondaryStudentList([ ...tempData ])
  }

  const update_sec_sub_c10 = (e) => {
    let tempData = secondaryStudentList;
    tempData.forEach(item => {if(item.id === e.target.id) item.sub_cols.c10 = e.target.value})
    setsecondaryStudentList([ ...tempData ])
  }

  const update_sec_sub_c11 = (e) => {
    let tempData = secondaryStudentList;
    tempData.forEach(item => {if(item.id === e.target.id) item.sub_cols.c11 = e.target.value})
    setsecondaryStudentList([ ...tempData ])
  }

    ////////////////////UPDATING SUBJECT FIELD INPUTS ENDS HERE ----SECONDARY///////////////////////////

  // const changeSubInputChange = (e) => {
  //   const stepRemove = primaryStudentList.filter(sin => sin.id !== e.target.id)
  //   const stepToChange = primaryStudentList.find(sin => sin.id === e.target.id)
  //   const stepChanged = stepToChange.subject_name = e.target.value
  //   const stepNewData = stepRemove.concat(stepChanged)

  //   setprimaryStudentList([
  //     ...stepNewData
  //   ])
  //   console.log("Changed data", primaryStudentList)
  // }

  useEffect(() => {
   console.log("student listing",primaryStudentList)
  }, [primaryStudentList]);
  

  //SETTING THE STATE OF OUR INPUT FIELDS
  /**
   * yam == year and month
   * gd == grade
   * log == level of grade
   * eh == english home
   * asl == average symbol of learner
   * asg == average symbol of grade
   * pf == pass fail
   * sat == school attendance
   * satg == school attendance grader
   */


  //////////////////////////////////////////PRIMARY STATES BEGINNING///////////////////////////////////////////////////

  const [yam, setYam] = useState({ yam1: "rty",yam2: "",yam3: "",yam4: "",yam5: "",yam6: "", yam7: "",yam8: "",yam9: "",yam10: "",yam11: "",});
  const [gd, setGd] = useState({
    gd1: "",gd2: "",gd3: "",gd4: "",gd5: "",gd6: "",gd7: "",gd8: "",gd9: "",gd10: " ",gd11: " ",
  });
  const [log, setLog] = useState({
    log1: "",log2: "",log3: "",log4: "",log5: "aasw",log6: "",log7: "",log8: "",log9: "",log10: "",log11: "",
  });
  const [eh, setEh] = useState({
    eh1: "",eh2: "",eh3: "",eh4: "",eh5: "",eh6: "",eh7: "",eh8: "",eh9: "",eh10: "",eh11: "",
  });
  const [asl, setAsl] = useState({
    asl1: "",asl2: "",asl3: "",asl4: "",asl5: "",asl6: "",asl7: "",asl8: "",asl9: "",asl10: "",asl11: "",
  });
  const [asg, setAsg] = useState({
    asg1: "",asg2: "",asg3: "",asg4: "",asg5: "",asg6: "",asg7: "",asg8: "",asg9: "",asg10: "",asg11: "",
  });
  const [pf, setPf] = useState({
    pf1: "",pf2: "",pf3: "",pf4: "",pf5: "",pf6: "",pf7: "",pf8: "",pf9: "",pf10: "",pf11: "",
  });
  const [sat, setSat] = useState({
    sat1: "",sat2: "",sat3: "",sat4: "",sat5: "",sat6: "",sat7: "",sat8: "",sat9: "",sat10: "",sat11: "",
  });
  const [satg, setSatg] = useState({
    satg1: "",satg2: "",satg3: "",satg4: "",satg5: "",satg6: "",satg7: "",satg8: "",satg9: "",satg10: "",satg11: "",
  })

  const handleYamChange = e => setYam({...yam, [e.target.id]: e.target.value})
  const handleGdChange = e => setGd({...gd, [e.target.id]: e.target.value})
  const handleLogChange = e => setLog({...log, [e.target.id]: e.target.value})
  const handleEhChange = e => setEh({...eh, [e.target.id]: e.target.value})
  const handleAslChange = e => setAsl({...asl, [e.target.id]: e.target.value})
  const handleAsgChange = e => setAsg({...asg, [e.target.id]: e.target.value})
  const handlePfChange = e => setPf({...pf, [e.target.id]: e.target.value})
  const handleSatChange = e => setSat({...sat, [e.target.id]: e.target.value})


    //////////////////////////////////////////PRIMARY STATES ENDING///////////////////////////////////////////////////


      //////////////////////////////////////////SECONDARY STATES BEGINNING///////////////////////////////////////////////////

  const [yam_s, setYam_s] = useState({ yam_s1: "",yam_s2: "",yam_s3: "",yam_s4: "",yam_s5: "",yam_s6: "",yam_s7: "",yam_s8: "",yam_s9: "",yam_s10: "",yam_s11: "",});
  const [gd_s, setGd_s] = useState({
    gd_s1: "",gd_s2: "",gd_s3: "",gd_s4: "",gd_s5: "",gd_s6: "",gd_s7: "",gd_s8: "",gd_s9: "",gd_s10: " ",gd_s11: " ",
  });
  const [log_s, setLog_s] = useState({
    log_s1: "",log_s2: "",log_s3: "",log_s4: "",log_s5: "",log_s6: "",log_s7: "",log_s8: "",log_s9: "",log_s10: "",log_s11: "",
  });
  const [eh_s, setEh_s] = useState({
    eh_s1: "",eh_s2: "",eh_s3: "",eh_s4: "",eh_s5: "",eh_s6: "",eh_s7: "",eh_s8: "",eh_s9: "",eh_s10: "",eh_s11: "",
  });
  const [asl_s, setAsl_s] = useState({
    asl_s1: "",asl_s2: "",asl_s3: "",asl_s4: "",asl_s5: "",asl_s6: "",asl_s7: "",asl_s8: "",asl_s9: "",asl_s10: "",asl_s11: "",
  });
  const [asg_s, setAsg_s] = useState({
    asg_s1: "",asg_s2: "",asg_s3: "",asg_s4: "",asg_s5: "",asg_s6: "",asg_s7: "",asg_s8: "",asg_s9: "",asg_s10: "",asg_s11: "",
  });
  const [pf_s, setPf_s] = useState({
    pf_s1: "",pf_s2: "",pf_s3: "",pf_s4: "",pf_s5: "",pf_s6: "",pf_s7: "",pf_s8: "",pf_s9: "",pf_s10: "",pf_s11: "",
  });
  const [sat_s, setSat_s] = useState({
    sat_s1: "",sat_s2: "",sat_s3: "",sat_s4: "",sat_s5: "",sat_s6: "",sat_s7: "",sat_s8: "",sat_s9: "",sat_s10: "",sat_s11: "",
  });
  const [satg_s, setSatg_s] = useState({
    satg_s1: "",satg_s2: "",satg_s3: "",satg_s4: "",satg_s5: "",satg_s6: "",satg_s7: "",satg_s8: "",satg_s9: "",satg_s10: "",satg_s11: "",
  });

  const handleYam_sChange = e => setYam_s({...yam_s, [e.target.id]: e.target.value})
  const handleGd_sChange = e => setGd_s({...gd_s, [e.target.id]: e.target.value})
  const handleLog_sChange = e => setLog_s({...log_s, [e.target.id]: e.target.value})
  const handleEh_sChange = e => setEh_s({...eh_s, [e.target.id]: e.target.value})
  const handleAsl_sChange = e => setAsl_s({...asl_s, [e.target.id]: e.target.value})
  const handleAsg_sChange = e => setAsg_s({...asg_s, [e.target.id]: e.target.value})
  const handlePf_sChange = e => setPf_s({...pf_s, [e.target.id]: e.target.value})
  const handleSat_sChange = e => setSat_s({...sat_s, [e.target.id]: e.target.value})


    //////////////////////////////////////////SECONDARY STATES ENDING///////////////////////////////////////////////////

    const [ collectiveData, setCollectiveData ] = useState({
      primary: {
        studentSubjectsList: [], 
        yam: {}, 
        gd: {}, 
        log: {}, 
        eh: {}, 
        asl: {}, 
        asg: {}, 
        pf: {}, 
        sat: {},
      },
      secondary: { 
        studentSubjectsList: [], 
        yam: {}, 
        gd: {}, 
        log: {}, 
        eh: {}, 
        asl: {}, 
        asg: {}, 
        pf: {}, 
        sat: {},
       },
    })

    useEffect(() => {
      current_data && setCollectiveData({
        primary: {
          studentSubjectsList: [...primaryStudentList], 
          yam: yam, 
          gd: {...gd}, 
          log: {...log}, 
          eh: {...eh}, 
          asl: {...asl}, 
          asg: {...asg}, 
          pf: {...pf}, 
          sat: {...sat},
        },
        secondary: {
          studentSubjectsList: [...secondaryStudentList], 
          yam: {...yam_s}, 
          gd: {...gd_s}, 
          log: {...log_s}, 
          eh: {...eh_s}, 
          asl: {...asl_s}, 
          asg: {...asg_s}, 
          pf: {...pf_s}, 
          sat: {...sat_s}, 
        },
      })
      
    }, [yam, gd, log, eh, asl, asg, pf, sat, yam_s, gd_s, log_s, eh_s, asl_s, asg_s, pf_s, sat_s])

    //useEffect(() =>  {console.log("The collective", collectiveData)}, [])
    //console.log("The collective remaster", collectiveData)

    //////////////////COMMUNICATING WITH FIRESTORE IN SENDING DATA////////////////////////////

    // const updateScholasticAchievementsFirebase = async(cur_id, data) => {
    //   const payload = {
    //     std_id: current_id,
    //     primary: {...data.primary},
    //     secondary: {...data.secondary},
    //   }
    //   const docRef = doc(db, "scholastic_achievements", cur_id);
    //   await setDoc(docRef, payload);
    //   alert("Data updated successfully")
    //   console.log("My payload", payload)
    // }

    const updateScholasticAchievementsFirebase = async(cur_id, data) => {
      const payload = {
        std_id: current_id,
        primary: {
          yam: {...yam},
          gd: {...gd},
          log: {...log},
          eh: {...eh},
          asl: {...asl},
          asg: {...asg},
          pf: {...pf},
          sat: {...sat},
          studentSubjectsList: [...primaryStudentList],
        },
        secondary: {
          yam: {...yam_s},
          gd: {...gd_s},
          log: {...log_s},
          eh: {...eh_s},
          asl: {...asl_s},
          asg: {...asg_s},
          pf: {...pf_s},
          sat: {...sat_s},
          studentSubjectsList: [...secondaryStudentList],
        },
      }
      // const docRef = doc(db, "scholastic_achievements", cur_id);
      // await setDoc(docRef, payload);
      // alert("Data updated successfully")
      console.log("My payload", payload)
    }

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
          <div className="save_edited editing_controls_btns" style={{ display: editingMode ? "block" : "none" }} onClick={() => {switchEditing("saving"); updateScholasticAchievementsFirebase(current_id, collectiveData)}} >
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
            <div className="year_input_boxes">
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="yam1" onChange={e => handleYamChange(e)} value={yam.yam1} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="yam2" onChange={e => handleYamChange(e)} value={yam.yam2} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="yam3" onChange={e => handleYamChange(e)} value={yam.yam3} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="yam4" onChange={e => handleYamChange(e)} value={yam.yam4} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="yam5" onChange={e => handleYamChange(e)} value={yam.yam5} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="yam6" onChange={e => handleYamChange(e)} value={yam.yam6} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="yam7" onChange={e => handleYamChange(e)} value={yam.yam7} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="yam8" onChange={e => handleYamChange(e)} value={yam.yam8} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="yam9" onChange={e => handleYamChange(e)} value={yam.yam9} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="yam10" onChange={e => handleYamChange(e)} value={yam.yam10} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="yam11" onChange={e => handleYamChange(e)} value={yam.yam11} />
            </div>
          </div>
          <div className="grade_box">
            <div className="grade_name_title">GRADE</div>
            <div className="grade_input_boxes">
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="gd1" onChange={e => handleGdChange(e)} value={gd.gd1} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="gd2" onChange={e => handleGdChange(e)} value={gd.gd2} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="gd3" onChange={e => handleGdChange(e)} value={gd.gd3} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="gd4" onChange={e => handleGdChange(e)} value={gd.gd4} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="gd5" onChange={e => handleGdChange(e)} value={gd.gd5} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="gd6" onChange={e => handleGdChange(e)} value={gd.gd6} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="gd7" onChange={e => handleGdChange(e)} value={gd.gd7} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="gd8" onChange={e => handleGdChange(e)} value={gd.gd8} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="gd9" onChange={e => handleGdChange(e)} value={gd.gd9} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="gd10" onChange={e => handleGdChange(e)} value={gd.gd10} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="gd11" onChange={e => handleGdChange(e)} value={gd.gd11} />
            </div>
          </div>
          <div className="leve_grade_box">
            <div className="level_title">LEVEL OF GRADE</div>
            <div className="level_input_boxes">
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="log1" onChange={e => handleLogChange(e)} value={log.log1} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="log2" onChange={e => handleLogChange(e)} value={log.log2} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="log3" onChange={e => handleLogChange(e)} value={log.log3} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="log4" onChange={e => handleLogChange(e)} value={log.log4} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="log5" onChange={e => handleLogChange(e)} value={log.log5} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="log6" onChange={e => handleLogChange(e)} value={log.log6} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="log7" onChange={e => handleLogChange(e)} value={log.log7} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="log8" onChange={e => handleLogChange(e)} value={log.log8} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="log9" onChange={e => handleLogChange(e)} value={log.log9} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="log10" onChange={e => handleLogChange(e)} value={log.log10} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="log11" onChange={e => handleLogChange(e)} value={log.log11} />
            </div>
          </div>
          <div className="english_home_box">
            <div className="english_home_title">
              ENGLISH HOME / SECOND LANGUAGE
            </div>
            <div className="english_home_input_boxes">
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="eh1" onChange={e => handleEhChange(e)} value={eh.eh1} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="eh2" onChange={e => handleEhChange(e)} value={eh.eh2} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="eh3" onChange={e => handleEhChange(e)} value={eh.eh3} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="eh4" onChange={e => handleEhChange(e)} value={eh.eh4} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="eh5" onChange={e => handleEhChange(e)} value={eh.eh5} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="eh6" onChange={e => handleEhChange(e)} value={eh.eh6} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="eh7" onChange={e => handleEhChange(e)} value={eh.eh7} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="eh8" onChange={e => handleEhChange(e)} value={eh.eh8} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="eh9" onChange={e => handleEhChange(e)} value={eh.eh9} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="eh10" onChange={e => handleEhChange(e)} value={eh.eh10} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="eh11" onChange={e => handleEhChange(e)} value={eh.eh11} />
            </div>
          </div>
        </div>
        <div className="schola_phase_2">
          {primaryStudentList && primaryStudentList.map((sin) => {
            return (
              <div className="sa_subject_box" key={sin.id}>
                <input type="text" className="sa_subject_title" disabled={!editingMode} id={sin.id} onChange={(e) => update_pri_sub_name(e)} value={sin.subject_name} />

                <div className="sa_subject_input_fields">
                  <input type="text" className="sc_section_inputs" disabled={!editingMode} id={sin.id} onChange={(e) => update_pri_sub_c1(e)} value={sin.col1} />
                  <input type="text" className="sc_section_inputs" disabled={!editingMode} id={sin.id} onChange={(e) => update_pri_sub_c2(e)} value={sin.col2} />
                  <input type="text" className="sc_section_inputs" disabled={!editingMode} id={sin.id} onChange={(e) => update_pri_sub_c3(e)} value={sin.col3} />
                  <input type="text" className="sc_section_inputs" disabled={!editingMode} id={sin.id} onChange={(e) => update_pri_sub_c4(e)} value={sin.col4} />
                  <input type="text" className="sc_section_inputs" disabled={!editingMode} id={sin.id} onChange={(e) => update_pri_sub_c5(e)} value={sin.col5} />
                  <input type="text" className="sc_section_inputs" disabled={!editingMode} id={sin.id} onChange={(e) => update_pri_sub_c6(e)} value={sin.col6} />
                  <input type="text" className="sc_section_inputs" disabled={!editingMode} id={sin.id} onChange={(e) => update_pri_sub_c7(e)} value={sin.col7} />
                  <input type="text" className="sc_section_inputs" disabled={!editingMode} id={sin.id} onChange={(e) => update_pri_sub_c8(e)} value={sin.col8} />
                  <input type="text" className="sc_section_inputs" disabled={!editingMode} id={sin.id} onChange={(e) => update_pri_sub_c9(e)} value={sin.col9} />
                  <input type="text" className="sc_section_inputs" disabled={!editingMode} id={sin.id} onChange={(e) => update_pri_sub_c10(e)} value={sin.col10} />
                  <input type="text" className="sc_section_inputs" disabled={!editingMode} id={sin.id} onChange={(e) => update_pri_sub_c11(e)} value={sin.col11} />
                </div>
              </div>
            );
          })}
          <button className="sa_add_subject">
            <p className="sa_add_sub_text">ADD</p>
            <FiPlus size={16} />
          </button>
        </div>
        <div className="schola_phase_3">
          <div className="average_learner_box">
            <div className="al_title">AVERAGE SYMBOL % OF LEARNER</div>
            <div className="al_input_boxes">
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asl1" onChange={e => handleAslChange(e)} value={asl.asl1} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asl2" onChange={e => handleAslChange(e)} value={asl.asl2} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asl3" onChange={e => handleAslChange(e)} value={asl.asl3} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asl4" onChange={e => handleAslChange(e)} value={asl.asl4} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asl5" onChange={e => handleAslChange(e)} value={asl.asl5} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asl6" onChange={e => handleAslChange(e)} value={asl.asl6} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asl7" onChange={e => handleAslChange(e)} value={asl.asl7} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asl8" onChange={e => handleAslChange(e)} value={asl.asl8} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asl9" onChange={e => handleAslChange(e)} value={asl.asl9} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asl10" onChange={e => handleAslChange(e)} value={asl.asl10} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asl11" onChange={e => handleAslChange(e)} value={asl.asl11} />
            </div>
          </div>
          <div className="average_grade_box">
            <div className="ag_title">AVERAGE SYMBOL % OF GRADE</div>
            <div className="ag_input_boxes">
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asg1" onChange={e => handleAsgChange(e)} value={asg.asg1} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asg2" onChange={e => handleAsgChange(e)} value={asg.asg2} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asg3" onChange={e => handleAsgChange(e)} value={asg.asg3} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asg4" onChange={e => handleAsgChange(e)} value={asg.asg4} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asg5" onChange={e => handleAsgChange(e)} value={asg.asg5} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asg6" onChange={e => handleAsgChange(e)} value={asg.asg6} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asg7" onChange={e => handleAsgChange(e)} value={asg.asg7} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asg8" onChange={e => handleAsgChange(e)} value={asg.asg8} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asg9" onChange={e => handleAsgChange(e)} value={asg.asg9} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asg10" onChange={e => handleAsgChange(e)} value={asg.asg10} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asg11" onChange={e => handleAsgChange(e)} value={asg.asg11} />
            </div>
          </div>
          <div className="pass_fail_box">
            <div className="pf_title">PASS(P); FAIL(F)</div>
            <div className="pf_input_boxes">
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="pf1" onChange={e => handlePfChange(e)} value={pf.pf1} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="pf2" onChange={e => handlePfChange(e)} value={pf.pf2} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="pf3" onChange={e => handlePfChange(e)} value={pf.pf3} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="pf4" onChange={e => handlePfChange(e)} value={pf.pf4} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="pf5" onChange={e => handlePfChange(e)} value={pf.pf5} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="pf6" onChange={e => handlePfChange(e)} value={pf.pf6} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="pf7" onChange={e => handlePfChange(e)} value={pf.pf7} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="pf8" onChange={e => handlePfChange(e)} value={pf.pf8} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="pf9" onChange={e => handlePfChange(e)} value={pf.pf9} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="pf10" onChange={e => handlePfChange(e)} value={pf.pf10} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="pf11" onChange={e => handlePfChange(e)} value={pf.pf11} />
            </div>
          </div>
          <div className="school_attendance_box">
            <div className="sat_title">SCHOOL ATTENDANCE ( G; P/R; PT )</div>
            <div className="sat_input_boxes">
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="sat1" onChange={e => handleSatChange(e)} value={sat.sat1} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="sat2" onChange={e => handleSatChange(e)} value={sat.sat2} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="sat3" onChange={e => handleSatChange(e)} value={sat.sat3} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="sat4" onChange={e => handleSatChange(e)} value={sat.sat4} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="sat5" onChange={e => handleSatChange(e)} value={sat.sat5} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="sat6" onChange={e => handleSatChange(e)} value={sat.sat6} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="sat7" onChange={e => handleSatChange(e)} value={sat.sat7} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="sat8" onChange={e => handleSatChange(e)} value={sat.sat8} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="sat9" onChange={e => handleSatChange(e)} value={sat.sat9} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="sat10" onChange={e => handleSatChange(e)} value={sat.sat10} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="sat11" onChange={e => handleSatChange(e)} value={sat.sat11} />
            </div>
          </div>
          <div className="satd_detail_box">
            <div className="satd_title">
              G=GOOD; P/R=POOR REASON; P/T=POOR TRUANCY
            </div>
            <div className="satd_input_boxes">
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="satg1" />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="satg2" />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="satg3" />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="satg4" />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="satg5" />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="satg6" />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="satg7" />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="satg8" />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="satg9" />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="satg10" />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="satg11" />
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
            <div className="year_input_boxes">
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="yam_s1" onChange={e => handleYam_sChange(e)} value={yam_s.yam_s1} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="yam_s2" onChange={e => handleYam_sChange(e)} value={yam_s.yam_s2} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="yam_s3" onChange={e => handleYam_sChange(e)} value={yam_s.yam_s3} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="yam_s4" onChange={e => handleYam_sChange(e)} value={yam_s.yam_s4} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="yam_s5" onChange={e => handleYam_sChange(e)} value={yam_s.yam_s5} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="yam_s6" onChange={e => handleYam_sChange(e)} value={yam_s.yam_s6} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="yam_s7" onChange={e => handleYam_sChange(e)} value={yam_s.yam_s7} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="yam_s8" onChange={e => handleYam_sChange(e)} value={yam_s.yam_s8} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="yam_s9" onChange={e => handleYam_sChange(e)} value={yam_s.yam_s9} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="yam_s10" onChange={e => handleYam_sChange(e)} value={yam_s.yam_s10} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="yam_s11" onChange={e => handleYam_sChange(e)} value={yam_s.yam_s11} />
            </div>
          </div>
          <div className="grade_box">
            <div className="grade_name_title">GRADE</div>
            <div className="grade_input_boxes">
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="gd_s1" onChange={e => handleGd_sChange(e)} value={gd_s.gd_s1} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="gd_s2" onChange={e => handleGd_sChange(e)} value={gd_s.gd_s2} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="gd_s3" onChange={e => handleGd_sChange(e)} value={gd_s.gd_s3} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="gd_s4" onChange={e => handleGd_sChange(e)} value={gd_s.gd_s4} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="gd_s5" onChange={e => handleGd_sChange(e)} value={gd_s.gd_s5} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="gd_s6" onChange={e => handleGd_sChange(e)} value={gd_s.gd_s6} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="gd_s7" onChange={e => handleGd_sChange(e)} value={gd_s.gd_s7} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="gd_s8" onChange={e => handleGd_sChange(e)} value={gd_s.gd_s8} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="gd_s9" onChange={e => handleGd_sChange(e)} value={gd_s.gd_s9} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="gd_s10" onChange={e => handleGd_sChange(e)} value={gd_s.gd_s10} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="gd_s11" onChange={e => handleGd_sChange(e)} value={gd_s.gd_s11} />
            </div>
          </div>
          <div className="leve_grade_box">
            <div className="level_title">LEVEL OF GRADE</div>
            <div className="level_input_boxes">
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="log_s1" onChange={e => handleLog_sChange(e)} value={log_s.log_s1} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="log_s2" onChange={e => handleLog_sChange(e)} value={log_s.log_s2} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="log_s3" onChange={e => handleLog_sChange(e)} value={log_s.log_s3} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="log_s4" onChange={e => handleLog_sChange(e)} value={log_s.log_s4} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="log_s5" onChange={e => handleLog_sChange(e)} value={log_s.log_s5} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="log_s6" onChange={e => handleLog_sChange(e)} value={log_s.log_s6} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="log_s7" onChange={e => handleLog_sChange(e)} value={log_s.log_s7} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="log_s8" onChange={e => handleLog_sChange(e)} value={log_s.log_s8} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="log_s9" onChange={e => handleLog_sChange(e)} value={log_s.log_s9} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="log_s10" onChange={e => handleLog_sChange(e)} value={log_s.log_s10} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="log_s11" onChange={e => handleLog_sChange(e)} value={log_s.log_s11} />
            </div>
          </div>
          <div className="english_home_box">
            <div className="english_home_title">
              ENGLISH HOME / SECOND LANGUAGE
            </div>
            <div className="english_home_input_boxes">
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="eh_s1" onChange={e => handleEh_sChange(e)} value={eh_s.eh_s1} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="eh_s2" onChange={e => handleEh_sChange(e)} value={eh_s.eh_s2} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="eh_s3" onChange={e => handleEh_sChange(e)} value={eh_s.eh_s3} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="eh_s4" onChange={e => handleEh_sChange(e)} value={eh_s.eh_s4} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="eh_s5" onChange={e => handleEh_sChange(e)} value={eh_s.eh_s5} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="eh_s6" onChange={e => handleEh_sChange(e)} value={eh_s.eh_s6} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="eh_s7" onChange={e => handleEh_sChange(e)} value={eh_s.eh_s7} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="eh_s8" onChange={e => handleEh_sChange(e)} value={eh_s.eh_s8} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="eh_s9" onChange={e => handleEh_sChange(e)} value={eh_s.eh_s9} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="eh_s10" onChange={e => handleEh_sChange(e)} value={eh_s.eh_s10} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="eh_s11" onChange={e => handleEh_sChange(e)} value={eh_s.eh_s11} />
            </div>
          </div>
        </div>
        <div className="schola_phase_2">
          {secondaryStudentList && secondaryStudentList.map((sin) => {
            return (
              <div className="sa_subject_box" key={sin.id}>
                <input type="text" className="sa_subject_title" disabled={!editingMode} id={sin.id} onChange={(e) => update_sec_sub_name(e)} value={sin.subject_name} />
                <div className="sa_subject_input_fields">

                  <input type="text" className="sc_section_inputs" disabled={!editingMode} id={sin.id} onChange={(e) => update_sec_sub_c1(e)} value={sin.col1} />
                  <input type="text" className="sc_section_inputs" disabled={!editingMode} id={sin.id} onChange={(e) => update_sec_sub_c2(e)} value={sin.col2} />
                  <input type="text" className="sc_section_inputs" disabled={!editingMode} id={sin.id} onChange={(e) => update_sec_sub_c3(e)} value={sin.col3} />
                  <input type="text" className="sc_section_inputs" disabled={!editingMode} id={sin.id} onChange={(e) => update_sec_sub_c4(e)} value={sin.col4} />
                  <input type="text" className="sc_section_inputs" disabled={!editingMode} id={sin.id} onChange={(e) => update_sec_sub_c5(e)} value={sin.col5} />
                  <input type="text" className="sc_section_inputs" disabled={!editingMode} id={sin.id} onChange={(e) => update_sec_sub_c6(e)} value={sin.col6} />
                  <input type="text" className="sc_section_inputs" disabled={!editingMode} id={sin.id} onChange={(e) => update_sec_sub_c7(e)} value={sin.col7} />
                  <input type="text" className="sc_section_inputs" disabled={!editingMode} id={sin.id} onChange={(e) => update_sec_sub_c8(e)} value={sin.col8} />
                  <input type="text" className="sc_section_inputs" disabled={!editingMode} id={sin.id} onChange={(e) => update_sec_sub_c9(e)} value={sin.col9} />
                  <input type="text" className="sc_section_inputs" disabled={!editingMode} id={sin.id} onChange={(e) => update_sec_sub_c10(e)} value={sin.col10} />
                  <input type="text" className="sc_section_inputs" disabled={!editingMode} id={sin.id} onChange={(e) => update_sec_sub_c11(e)} value={sin.col11} />
                </div>
              </div>
            );
          })}
          <button className="sa_add_subject">
            <p className="sa_add_sub_text">ADD</p>
            <FiPlus size={16} />
          </button>
        </div>
        <div className="schola_phase_3">
          <div className="average_learner_box">
            <div className="al_title">AVERAGE SYMBOL % OF LEARNER</div>
            <div className="al_input_boxes">
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asl_s1" onChange={e => handleAsl_sChange(e)} value={asl_s.asl_s1} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asl_s2" onChange={e => handleAsl_sChange(e)} value={asl_s.asl_s2} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asl_s3" onChange={e => handleAsl_sChange(e)} value={asl_s.asl_s3} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asl_s4" onChange={e => handleAsl_sChange(e)} value={asl_s.asl_s4} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asl_s5" onChange={e => handleAsl_sChange(e)} value={asl_s.asl_s5} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asl_s6" onChange={e => handleAsl_sChange(e)} value={asl_s.asl_s6} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asl_s7" onChange={e => handleAsl_sChange(e)} value={asl_s.asl_s7} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asl_s8" onChange={e => handleAsl_sChange(e)} value={asl_s.asl_s8} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asl_s9" onChange={e => handleAsl_sChange(e)} value={asl_s.asl_s9} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asl_s10" onChange={e => handleAsl_sChange(e)} value={asl_s.asl_s10} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asl_s11" onChange={e => handleAsl_sChange(e)} value={asl_s.asl_s11} />
            </div>
          </div>
          <div className="average_grade_box">
            <div className="ag_title">AVERAGE SYMBOL % OF GRADE</div>
            <div className="ag_input_boxes">
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asg_s1" onChange={e => handleAsg_sChange(e)} value={asg_s.asg_s1} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asg_s2" onChange={e => handleAsg_sChange(e)} value={asg_s.asg_s2} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asg_s3" onChange={e => handleAsg_sChange(e)} value={asg_s.asg_s3} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asg_s4" onChange={e => handleAsg_sChange(e)} value={asg_s.asg_s4} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asg_s5" onChange={e => handleAsg_sChange(e)} value={asg_s.asg_s5} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asg_s6" onChange={e => handleAsg_sChange(e)} value={asg_s.asg_s6} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asg_s7" onChange={e => handleAsg_sChange(e)} value={asg_s.asg_s7} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asg_s8" onChange={e => handleAsg_sChange(e)} value={asg_s.asg_s8} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asg_s9" onChange={e => handleAsg_sChange(e)} value={asg_s.asg_s9} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asg_s10" onChange={e => handleAsg_sChange(e)} value={asg_s.asg_s10} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="asg_s11" onChange={e => handleAsg_sChange(e)} value={asg_s.asg_s11} />
            </div>
          </div>
          <div className="pass_fail_box">
            <div className="pf_title">PASS(P); FAIL(F)</div>
            <div className="pf_input_boxes">
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="pf_s1" onChange={e => handlePf_sChange(e)} value={pf_s.pf_s1} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="pf_s2" onChange={e => handlePf_sChange(e)} value={pf_s.pf_s2} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="pf_s3" onChange={e => handlePf_sChange(e)} value={pf_s.pf_s3} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="pf_s4" onChange={e => handlePf_sChange(e)} value={pf_s.pf_s4} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="pf_s5" onChange={e => handlePf_sChange(e)} value={pf_s.pf_s5} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="pf_s6" onChange={e => handlePf_sChange(e)} value={pf_s.pf_s6} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="pf_s7" onChange={e => handlePf_sChange(e)} value={pf_s.pf_s7} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="pf_s8" onChange={e => handlePf_sChange(e)} value={pf_s.pf_s8} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="pf_s9" onChange={e => handlePf_sChange(e)} value={pf_s.pf_s9} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="pf_s10" onChange={e => handlePf_sChange(e)} value={pf_s.pf_s10} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="pf_s11" onChange={e => handlePf_sChange(e)} value={pf_s.pf_s11} />
            </div>
          </div>
          <div className="school_attendance_box">
            <div className="sat_title">SCHOOL ATTENDANCE ( G; P/R; PT )</div>
            <div className="sat_input_boxes">
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="sat_s1" onChange={e => handleSat_sChange(e)} value={sat_s.sat_s1} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="sat_s2" onChange={e => handleSat_sChange(e)} value={sat_s.sat_s2} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="sat_s3" onChange={e => handleSat_sChange(e)} value={sat_s.sat_s3} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="sat_s4" onChange={e => handleSat_sChange(e)} value={sat_s.sat_s4} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="sat_s5" onChange={e => handleSat_sChange(e)} value={sat_s.sat_s5} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="sat_s6" onChange={e => handleSat_sChange(e)} value={sat_s.sat_s6} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="sat_s7" onChange={e => handleSat_sChange(e)} value={sat_s.sat_s7} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="sat_s8" onChange={e => handleSat_sChange(e)} value={sat_s.sat_s8} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="sat_s9" onChange={e => handleSat_sChange(e)} value={sat_s.sat_s9} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="sat_s10" onChange={e => handleSat_sChange(e)} value={sat_s.sat_s10} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="sat_s11" onChange={e => handleSat_sChange(e)} value={sat_s.sat_s11} />
            </div>
          </div>
          <div className="satd_detail_box">
            <div className="satd_title">
              G=GOOD; P/R=POOR REASON; P/T=POOR TRUANCY
            </div>
            <div className="satd_input_boxes">
            <input type="text" className="sc_section_inputs" disabled={!editingMode} id="satg1" />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="satg_s2" />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="satg_s3" />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="satg_s4" />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="satg_s5" />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="satg_s6" />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="satg_s7" />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="satg_s8" />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="satg_s9" />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="satg_s10" />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} id="satg_s11" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    editingData: state.schola_store,
    selectedStudent: state.selectedStudent,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    switchEditing: (current) => dispatch(shiftEditingMode(current)),
    switchSchool: (current) => dispatch(shiftSchoolType(current)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScholasticAchievements);

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { FiPlus } from "react-icons/fi";
import "./styles/scholastic_achievements.css";
import {
  shiftEditingMode,
  shiftSchoolType,
} from "../../../../store/actions/studentDataActions/scholasticAchievementsActions";

const ScholasticAchievements = (props) => {
  const { editingMode, primarySchool } = props.editingData;
  const { switchEditing, switchSchool } = props;
  console.log("Requested props", props);

  const [pr_subjectInfo, setPr_subjectInfo] = useState({
    subject_name: "Mathematics",col1: 1,col2: 2,col3: 3,col4: 4,col5: 5,col6: 6,col7: 7,col8: 8,col9: 9,col10: 10,col11: 11,
  });

  const [sec_subjectInfo, setSec_subjectInfo] = useState({
    subject_name: "Chemistry",col1: 1,col2: 2,col3: 3,col4: 4,col5: 5,col6: 6,col7: 7,col8: 8,col9: 9,col10: 10,col11: 11,
  });

  const [primaryStudentList, setprimaryStudentList] = useState([
    {
      id: "111",
      subject_name: "Maths",
      sub_cols: {c1: "",c2: "",c3: "",c4: "",c5: "",c6: "",c7: "",c8: "",c9: "",c10: "",c11: "",}
    },
    
  ]);

  ////////////////////UPDATING SUBJECT FIELD INPUTS STARTS HERE///////////////////////////

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

    ////////////////////UPDATING SUBJECT FIELD INPUTS ENDS HERE///////////////////////////

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
  const [yam, setYam] = useState({
    yam1: 1,yam2: 2,yam3: 3,yam4: 4,yam5: 5,yam6: 6,yam7: 7,yam8: 8,yam9: 9,yam10: 10,yam11: 11,
  });
  const [gd, setGd] = useState({
    gd1: "a",gd2: "null",gd3: "null",gd4: "null",gd5: "null",gd6: "null",gd7: "null",gd8: "null",gd9: "null",gd10: " null",gd11: " null",
  });
  const [log, setLog] = useState({
    log1: "null",log2: "null",log3: "null",log4: "null",log5: "null",log6: "null",log7: "null",log8: "null",log9: "null",log10: "null",log11: "null",
  });
  const [eh, setEh] = useState({
    eh1: "null",eh2: "null",eh3: "null",eh4: "null",eh5: "null",eh6: "null",eh7: "null",eh8: "null",eh9: "null",eh10: "null",eh11: "null",
  });
  const [asl, setAsl] = useState({
    asl1: "null",asl2: "null",asl3: "null",asl4: "null",asl5: "null",asl6: "null",asl7: "null",asl8: "null",asl9: "null",asl10: "null",asl11: "null",
  });
  const [asg, setAsg] = useState({
    asg1: "null",asg2: "null",asg3: "null",asg4: "null",asg5: "null",asg6: "null",asg7: "null",asg8: "null",asg9: "null",asg10: "null",asg11: "null",
  });
  const [pf, setPf] = useState({
    pf1: "null",pf2: "null",pf3: "null",pf4: "null",pf5: "null",pf6: "null",pf7: "null",pf8: "null",pf9: "null",pf10: "null",pf11: "null",
  });
  const [sat, setSat] = useState({
    sat1: "null",sat2: "null",sat3: "null",sat4: "null",sat5: "null",sat6: "null",sat7: "null",sat8: "null",sat9: "null",sat10: "null",sat11: "null",
  });
  const [satg, setSatg] = useState({
    satg1: "null",satg2: "null",satg3: "null",satg4: "null",satg5: "null",satg6: "null",satg7: "null",satg8: "null",satg9: "null",satg10: " nul",satg11: " nul",
  });

  const handleYamChange = e => setYam({[e.target.id]: e.target.value})
  const handleGdChange = e => setGd({[e.target.id]: e.target.value})
  const handleLogChange = e => setLog({[e.target.id]: e.target.value})
  const handleEhChange = e => setEh({[e.target.id]: e.target.value})
  const handleAslChange = e => setAsl({[e.target.id]: e.target.value})
  const handleAsgChange = e => setAsg({[e.target.id]: e.target.value})
  const handlePfChange = e => setPf({[e.target.id]: e.target.value})
  const handleSatChange = e => setSat({[e.target.id]: e.target.value})

  return (
    <div className="instructions_container">
      <div className="top_main_title">
        <h1 className="section_title">Scholastic Achievements</h1>
        <div className="editing_controls">
          <div
            className="enable_editing editing_controls_btns"
            style={{ display: editingMode ? "none" : "block" }}
            onClick={() => switchEditing("editing")}
          >
            Enable editing
          </div>
          <div
            className="disable_editing editing_controls_btns"
            style={{ display: editingMode ? "block" : "none" }}
            onClick={() => switchEditing("not_editing")}
          >
            Disable editing
          </div>
          <div
            className="save_edited editing_controls_btns"
            style={{ display: editingMode ? "block" : "none" }}
            onClick={() => switchEditing("saving")}
          >
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
              <button
                className="primary_btn"
                onClick={() => switchSchool("primary")}
                style={{
                  backgroundColor: primarySchool ? "#fff" : "transparent",
                  color: primarySchool ? "black" : "#fff",
                }}
              >
                PRIMARY (GRADE 1 - 7)
              </button>
              <button
                className="secondary_btn"
                onClick={() => switchSchool("secondary")}
                style={{
                  backgroundColor: !primarySchool ? "#fff" : "transparent",
                  color: !primarySchool ? "black" : "#fff",
                }}
              >
                SECONDARY (GRADE 8 - 12)
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
                  <input type="text" className="sc_section_inputs" disabled={!editingMode} id={sin.id} onChange={(e) => update_pri_sub_c9(e)} value={sin.col8} />
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
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="asl1"
                onChange={e => handleAslChange(e)}
                value={asl.asl1}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="asl2"
                onChange={e => handleAslChange(e)}
                value={asl.asl2}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="asl3"
                onChange={e => handleAslChange(e)}
                value={asl.asl3}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="asl4"
                onChange={e => handleAslChange(e)}
                value={asl.asl4}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="asl5"
                onChange={e => handleAslChange(e)}
                value={asl.asl5}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="asl6"
                onChange={e => handleAslChange(e)}
                value={asl.asl6}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="asl7"
                onChange={e => handleAslChange(e)}
                value={asl.asl7}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="asl8"
                onChange={e => handleAslChange(e)}
                value={asl.asl8}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="asl9"
                onChange={e => handleAslChange(e)}
                value={asl.asl9}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="asl10"
                onChange={e => handleAslChange(e)}
                value={asl.asl10}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="asl11"
                onChange={e => handleAslChange(e)}
                value={asl.asl11}
              />
            </div>
          </div>
          <div className="average_grade_box">
            <div className="ag_title">AVERAGE SYMBOL % OF GRADE</div>
            <div className="ag_input_boxes">
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="asg1"
                onChange={e => handleAsgChange(e)}
                value={asg.asg1}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="asg2"
                onChange={e => handleAsgChange(e)}
                value={asg.asg2}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="asg3"
                onChange={e => handleAsgChange(e)}
                value={asg.asg3}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="asg4"
                onChange={e => handleAsgChange(e)}
                value={asg.asg4}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="asg5"
                onChange={e => handleAsgChange(e)}
                value={asg.asg5}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="asg6"
                onChange={e => handleAsgChange(e)}
                value={asg.asg6}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="asg7"
                onChange={e => handleAsgChange(e)}
                value={asg.asg7}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="asg8"
                onChange={e => handleAsgChange(e)}
                value={asg.asg8}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="asg9"
                onChange={e => handleAsgChange(e)}
                value={asg.asg9}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="asg10"
                onChange={e => handleAsgChange(e)}
                value={asg.asg10}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="asg11"
                onChange={e => handleAsgChange(e)}
                value={asg.asg11}
              />
            </div>
          </div>
          <div className="pass_fail_box">
            <div className="pf_title">PASS(P); FAIL(F)</div>
            <div className="pf_input_boxes">
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="pf1"
                onChange={e => handlePfChange(e)}
                value={pf.pf1}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="pf2"
                onChange={e => handlePfChange(e)}
                value={pf.pf2}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="pf3"
                onChange={e => handlePfChange(e)}
                value={pf.pf3}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="pf4"
                onChange={e => handlePfChange(e)}
                value={pf.pf4}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="pf5"
                onChange={e => handlePfChange(e)}
                value={pf.pf5}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="pf6"
                onChange={e => handlePfChange(e)}
                value={pf.pf6}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="pf7"
                onChange={e => handlePfChange(e)}
                value={pf.pf7}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="pf8"
                onChange={e => handlePfChange(e)}
                value={pf.pf8}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="pf9"
                onChange={e => handlePfChange(e)}
                value={pf.pf9}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="pf10"
                onChange={e => handlePfChange(e)}
                value={pf.pf10}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="pf11"
                onChange={e => handlePfChange(e)}
                value={pf.pf11}
              />
            </div>
          </div>
          <div className="school_attendance_box">
            <div className="sat_title">SCHOOL ATTENDANCE ( G; P/R; PT )</div>
            <div className="sat_input_boxes">
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="sat1"
                onChange={e => handleSatChange(e)}
                value={sat.sat1}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="sat2"
                onChange={e => handleSatChange(e)}
                value={sat.sat2}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="sat3"
                onChange={e => handleSatChange(e)}
                value={sat.sat3}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="sat4"
                onChange={e => handleSatChange(e)}
                value={sat.sat4}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="sat5"
                onChange={e => handleSatChange(e)}
                value={sat.sat5}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="sat6"
                onChange={e => handleSatChange(e)}
                value={sat.sat6}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="sat7"
                onChange={e => handleSatChange(e)}
                value={sat.sat7}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="sat8"
                onChange={e => handleSatChange(e)}
                value={sat.sat8}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="sat9"
                onChange={e => handleSatChange(e)}
                value={sat.sat9}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="sat10"
                onChange={e => handleSatChange(e)}
                value={sat.sat10}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                id="sat11"
                onChange={e => handleSatChange(e)}
                value={sat.sat11}
              />
            </div>
          </div>
          <div className="satd_detail_box">
            <div className="satd_title">
              G=GOOD; P/R=POOR REASON; P/T=POOR TRUANCY
            </div>
            <div className="satd_input_boxes">
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setSatg({
                    ...satg,
                    satg1: e.target.value,
                  });
                }}
                value={satg.satg1}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setSatg({
                    ...satg,
                    satg2: e.target.value,
                  });
                }}
                value={satg.satg2}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setSatg({
                    ...satg,
                    satg3: e.target.value,
                  });
                }}
                value={satg.satg3}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setSatg({
                    ...satg,
                    satg4: e.target.value,
                  });
                }}
                value={satg.satg4}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setSatg({
                    ...satg,
                    satg5: e.target.value,
                  });
                }}
                value={satg.satg5}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setSatg({
                    ...satg,
                    satg6: e.target.value,
                  });
                }}
                value={satg.satg6}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setSatg({
                    ...satg,
                    satg7: e.target.value,
                  });
                }}
                value={satg.satg7}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setSatg({
                    ...satg,
                    satg8: e.target.value,
                  });
                }}
                value={satg.satg8}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setSatg({
                    ...satg,
                    satg9: e.target.value,
                  });
                }}
                value={satg.satg9}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setSatg({
                    ...satg,
                    satg10: e.target.value,
                  });
                }}
                value={satg.satg10}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setSatg({
                    ...satg,
                    satg11: e.target.value,
                  });
                }}
                value={satg.satg11}
              />
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
              <button
                className="primary_btn"
                onClick={() => switchSchool("primary")}
                style={{
                  backgroundColor: primarySchool ? "#fff" : "transparent",
                  color: primarySchool ? "black" : "#fff",
                }}
              >
                PRIMARY (GRADE 1 - 7)
              </button>
              <button
                className="secondary_btn"
                onClick={() => switchSchool("secondary")}
                style={{
                  backgroundColor: !primarySchool ? "#fff" : "transparent",
                  color: !primarySchool ? "black" : "#fff",
                }}
              >
                SECONDARY (GRADE 8 - 12)
              </button>
            </div>
          </div>
          <div className="year_month_box">
            <div className="year_title">YEAR AND MONTH</div>
            <div className="year_input_boxes">
            <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
            </div>
          </div>
          <div className="grade_box">
            <div className="grade_name_title">GRADE</div>
            <div className="grade_input_boxes">
            <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
            </div>
          </div>
          <div className="leve_grade_box">
            <div className="level_title">LEVEL OF GRADE</div>
            <div className="level_input_boxes">
            <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
            </div>
          </div>
          <div className="english_home_box">
            <div className="english_home_title">
              ENGLISH HOME / SECOND LANGUAGE
            </div>
            <div className="english_home_input_boxes">
            <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
            </div>
          </div>
        </div>
        <div className="schola_phase_2">
          {new Array(1).fill(1).map(() => {
            return (
              <div className="sa_subject_box" key={Math.random()}>
                <input
                  type="text"
                  className="sa_subject_title"
                  value={"MATHEMATICS"}
                  disabled={!editingMode}
                />

                <div className="sa_subject_input_fields">
                  <input
                    type="text"
                    className="sc_section_inputs"
                    disabled={!editingMode}
                  />
                  <input
                    type="text"
                    className="sc_section_inputs"
                    disabled={!editingMode}
                  />
                  <input
                    type="text"
                    className="sc_section_inputs"
                    disabled={!editingMode}
                  />
                  <input
                    type="text"
                    className="sc_section_inputs"
                    disabled={!editingMode}
                  />
                  <input
                    type="text"
                    className="sc_section_inputs"
                    disabled={!editingMode}
                  />
                  <input
                    type="text"
                    className="sc_section_inputs"
                    disabled={!editingMode}
                  />
                  <input
                    type="text"
                    className="sc_section_inputs"
                    disabled={!editingMode}
                  />
                  <input
                    type="text"
                    className="sc_section_inputs"
                    disabled={!editingMode}
                  />
                  <input
                    type="text"
                    className="sc_section_inputs"
                    disabled={!editingMode}
                  />
                  <input
                    type="text"
                    className="sc_section_inputs"
                    disabled={!editingMode}
                  />
                  <input
                    type="text"
                    className="sc_section_inputs"
                    disabled={!editingMode}
                  />
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
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
            </div>
          </div>
          <div className="average_grade_box">
            <div className="ag_title">AVERAGE SYMBOL % OF GRADE</div>
            <div className="ag_input_boxes">
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
            </div>
          </div>
          <div className="pass_fail_box">
            <div className="pf_title">PASS(P); FAIL(F)</div>
            <div className="pf_input_boxes">
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
            </div>
          </div>
          <div className="school_attendance_box">
            <div className="sat_title">SCHOOL ATTENDANCE ( G; P/R; PT )</div>
            <div className="sat_input_boxes">
              <input type="text" className="sc_section_inputs" disabled={!editingMode}/>
              <input type="text" className="sc_section_inputs" disabled={!editingMode}/>
              <input type="text" className="sc_section_inputs" disabled={!editingMode}/>
              <input type="text" className="sc_section_inputs" disabled={!editingMode}/>
              <input type="text" className="sc_section_inputs" disabled={!editingMode}/>
              <input type="text" className="sc_section_inputs" disabled={!editingMode}/>
              <input type="text" className="sc_section_inputs" disabled={!editingMode}/>
              <input type="text" className="sc_section_inputs" disabled={!editingMode}/>
              <input type="text" className="sc_section_inputs" disabled={!editingMode}/>
              <input  type="text" className="sc_section_inputs" disabled={!editingMode}/>
              <input type="text" className="sc_section_inputs" disabled={!editingMode}/>
            </div>
          </div>
          <div className="satd_detail_box">
            <div className="satd_title">
              G=GOOD; P/R=POOR REASON; P/T=POOR TRUANCY
            </div>
            <div className="satd_input_boxes">
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
              <input type="text" className="sc_section_inputs" disabled={!editingMode} />
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

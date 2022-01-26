import React, { useState } from "react";
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
    subject_name: "Mathematics",
    col1: 1,
    col2: 2,
    col3: 3,
    col4: 4,
    col5: 5,
    col6: 6,
    col7: 7,
    col8: 8,
    col9: 9,
    col10: 10,
    col11: 11,
  });

  const [sec_subjectInfo, setSec_subjectInfo] = useState({
    subject_name: "Chemistry",
    col1: 1,
    col2: 2,
    col3: 3,
    col4: 4,
    col5: 5,
    col6: 6,
    col7: 7,
    col8: 8,
    col9: 9,
    col10: 10,
    col11: 11,
  });

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
    yam1: 1,
    yam2: 2,
    yam3: 3,
    yam4: 4,
    yam5: 5,
    yam6: 6,
    yam7: 7,
    yam8: 8,
    yam9: 9,
    yam10: 10,
    yam11: 11,
  });
  const [gd, setGd] = useState({
    gd1: "a",
    gd2: "null",
    gd3: "null",
    gd4: "null",
    gd5: "null",
    gd6: "null",
    gd7: "null",
    gd8: "null",
    gd9: "null",
    gd10: " null",
    gd11: " null",
  });
  const [log, setLog] = useState({
    log1: "null",
    log2: "null",
    log3: "null",
    log4: "null",
    log5: "null",
    log6: "null",
    log7: "null",
    log8: "null",
    log9: "null",
    log10: "null",
    log11: "null",
  });
  const [eh, setEh] = useState({
    eh1: "null",
    eh2: "null",
    eh3: "null",
    eh4: "null",
    eh5: "null",
    eh6: "null",
    eh7: "null",
    eh8: "null",
    eh9: "null",
    eh10: "null",
    eh11: "null",
  });
  const [asl, setAsl] = useState({
    asl1: "null",
    asl2: "null",
    asl3: "null",
    asl4: "null",
    asl5: "null",
    asl6: "null",
    asl7: "null",
    asl8: "null",
    asl9: "null",
    asl10: "null",
    asl11: "null",
  });
  const [asg, setAsg] = useState({
    asg1: "null",
    asg2: "null",
    asg3: "null",
    asg4: "null",
    asg5: "null",
    asg6: "null",
    asg7: "null",
    asg8: "null",
    asg9: "null",
    asg10: "null",
    asg11: "null",
  });
  const [pf, setPf] = useState({
    pf1: "null",
    pf2: "null",
    pf3: "null",
    pf4: "null",
    pf5: "null",
    pf6: "null",
    pf7: "null",
    pf8: "null",
    pf9: "null",
    pf10: "null",
    pf11: "null",
  });
  const [sat, setSat] = useState({
    sat1: "null",
    sat2: "null",
    sat3: "null",
    sat4: "null",
    sat5: "null",
    sat6: "null",
    sat7: "null",
    sat8: "null",
    sat9: "null",
    sat10: "null",
    sat11: "null",
  });
  const [satg, setSatg] = useState({
    satg1: "null",
    satg2: "null",
    satg3: "null",
    satg4: "null",
    satg5: "null",
    satg6: "null",
    satg7: "null",
    satg8: "null",
    satg9: "null",
    satg10: " nul",
    satg11: " nul",
  });

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
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setYam({
                    ...yam,
                    yam1: e.target.value,
                  });
                }}
                value={yam.yam1}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setYam({
                    ...yam,
                    yam2: e.target.value,
                  });
                }}
                value={yam.yam2}
              />

              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setYam({
                    ...yam,
                    yam3: e.target.value,
                  });
                }}
                value={yam.yam3}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setYam({
                    ...yam,
                    yam4: e.target.value,
                  });
                }}
                value={yam.yam4}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setYam({
                    ...yam,
                    yam5: e.target.value,
                  });
                }}
                value={yam.yam5}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setYam({
                    ...yam,
                    yam6: e.target.value,
                  });
                }}
                value={yam.yam6}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setYam({
                    ...yam,
                    yam7: e.target.value,
                  });
                }}
                value={yam.yam7}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setYam({
                    ...yam,
                    yam8: e.target.value,
                  });
                }}
                value={yam.yam8}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setYam({
                    ...yam,
                    yam9: e.target.value,
                  });
                }}
                value={yam.yam9}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setYam({
                    ...yam,
                    yam10: e.target.value,
                  });
                }}
                value={yam.yam10}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setYam({
                    ...yam,
                    yam11: e.target.value,
                  });
                }}
                value={yam.yam11}
              />
            </div>
          </div>
          <div className="grade_box">
            <div className="grade_name_title">GRADE</div>
            <div className="grade_input_boxes">
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setGd({
                    ...gd,
                    gd1: e.target.value,
                  });
                }}
                value={gd.gd1}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setGd({
                    ...gd,
                    gd2: e.target.value,
                  });
                }}
                value={gd.gd2}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setGd({
                    ...gd,
                    gd3: e.target.value,
                  });
                }}
                value={gd.gd3}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setGd({
                    ...gd,
                    gd4: e.target.value,
                  });
                }}
                value={gd.gd4}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setGd({
                    ...gd,
                    gd5: e.target.value,
                  });
                }}
                value={gd.gd5}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setGd({
                    ...gd,
                    gd6: e.target.value,
                  });
                }}
                value={gd.gd6}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setGd({
                    ...gd,
                    gd7: e.target.value,
                  });
                }}
                value={gd.gd7}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setGd({
                    ...gd,
                    gd8: e.target.value,
                  });
                }}
                value={gd.gd8}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setGd({
                    ...gd,
                    gd9: e.target.value,
                  });
                }}
                value={gd.gd9}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setGd({
                    ...gd,
                    gd11: e.target.value,
                  });
                }}
                value={gd.gd11}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setGd({
                    ...gd,
                    gd11: e.target.value,
                  });
                }}
                value={gd.gd11}
              />
            </div>
          </div>
          <div className="leve_grade_box">
            <div className="level_title">LEVEL OF GRADE</div>
            <div className="level_input_boxes">
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setLog({
                    ...log,
                    log1: e.target.value,
                  });
                }}
                value={log.log1}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setLog({
                    ...log,
                    log2: e.target.value,
                  });
                }}
                value={log.log2}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setLog({
                    ...log,
                    log3: e.target.value,
                  });
                }}
                value={log.log3}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setLog({
                    ...log,
                    log4: e.target.value,
                  });
                }}
                value={log.log4}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setLog({
                    ...log,
                    log5: e.target.value,
                  });
                }}
                value={log.log5}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setLog({
                    ...log,
                    log6: e.target.value,
                  });
                }}
                value={log.log6}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setLog({
                    ...log,
                    log7: e.target.value,
                  });
                }}
                value={log.log7}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setLog({
                    ...log,
                    log8: e.target.value,
                  });
                }}
                value={log.log8}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setLog({
                    ...log,
                    log9: e.target.value,
                  });
                }}
                value={log.log9}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setLog({
                    ...log,
                    log10: e.target.value,
                  });
                }}
                value={log.log10}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setLog({
                    ...log,
                    log11: e.target.value,
                  });
                }}
                value={log.log11}
              />
            </div>
          </div>
          <div className="english_home_box">
            <div className="english_home_title">
              ENGLISH HOME / SECOND LANGUAGE
            </div>
            <div className="english_home_input_boxes">
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setEh({
                    ...eh,
                    eh1: e.target.value,
                  });
                }}
                value={eh.eh1}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setEh({
                    ...eh,
                    eh2: e.target.value,
                  });
                }}
                value={eh.eh2}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setEh({
                    ...eh,
                    eh3: e.target.value,
                  });
                }}
                value={eh.eh3}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setEh({
                    ...eh,
                    eh4: e.target.value,
                  });
                }}
                value={eh.eh4}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setEh({
                    ...eh,
                    eh5: e.target.value,
                  });
                }}
                value={eh.eh5}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setEh({
                    ...eh,
                    eh6: e.target.value,
                  });
                }}
                value={eh.eh6}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setEh({
                    ...eh,
                    eh7: e.target.value,
                  });
                }}
                value={eh.eh7}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setEh({
                    ...eh,
                    eh8: e.target.value,
                  });
                }}
                value={eh.eh8}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setEh({
                    ...eh,
                    eh9: e.target.value,
                  });
                }}
                value={eh.eh9}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setEh({
                    ...eh,
                    eh10: e.target.value,
                  });
                }}
                value={eh.eh10}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setEh({
                    ...eh,
                    eh11: e.target.value,
                  });
                }}
                value={eh.eh11}
              />
            </div>
          </div>
        </div>
        <div className="schola_phase_2">
          {new Array(1).fill(1).map(() => {
            return (
              <div className="sa_subject_box">
                <input
                  type="text"
                  className="sa_subject_title"
                  disabled={!editingMode}
                  onChange={(e) => {
                    setPr_subjectInfo({
                      ...pr_subjectInfo,
                      subject_name: e.target.value,
                    });
                  }}
                  value={pr_subjectInfo.subject_name}
                />

                <div className="sa_subject_input_fields">
                  <input
                    type="text"
                    className="sc_section_inputs"
                    disabled={!editingMode}
                    onChange={(e) => {
                      setPr_subjectInfo({
                        ...pr_subjectInfo,
                        col1: e.target.value,
                      });
                    }}
                    value={pr_subjectInfo.col1}
                  />
                  <input
                    type="text"
                    className="sc_section_inputs"
                    disabled={!editingMode}
                    onChange={(e) => {
                      setPr_subjectInfo({
                        ...pr_subjectInfo,
                        col2: e.target.value,
                      });
                    }}
                    value={pr_subjectInfo.col2}
                  />
                  <input
                    type="text"
                    className="sc_section_inputs"
                    disabled={!editingMode}
                    onChange={(e) => {
                      setPr_subjectInfo({
                        ...pr_subjectInfo,
                        col3: e.target.value,
                      });
                    }}
                    value={pr_subjectInfo.col3}
                  />
                  <input
                    type="text"
                    className="sc_section_inputs"
                    disabled={!editingMode}
                    onChange={(e) => {
                      setPr_subjectInfo({
                        ...pr_subjectInfo,
                        col4: e.target.value,
                      });
                    }}
                    value={pr_subjectInfo.col4}
                  />
                  <input
                    type="text"
                    className="sc_section_inputs"
                    disabled={!editingMode}
                    onChange={(e) => {
                      setPr_subjectInfo({
                        ...pr_subjectInfo,
                        col5: e.target.value,
                      });
                    }}
                    value={pr_subjectInfo.col5}
                  />
                  <input
                    type="text"
                    className="sc_section_inputs"
                    disabled={!editingMode}
                    onChange={(e) => {
                      setPr_subjectInfo({
                        ...pr_subjectInfo,
                        col6: e.target.value,
                      });
                    }}
                    value={pr_subjectInfo.col6}
                  />
                  <input
                    type="text"
                    className="sc_section_inputs"
                    disabled={!editingMode}
                    onChange={(e) => {
                      setPr_subjectInfo({
                        ...pr_subjectInfo,
                        col7: e.target.value,
                      });
                    }}
                    value={pr_subjectInfo.col7}
                  />
                  <input
                    type="text"
                    className="sc_section_inputs"
                    disabled={!editingMode}
                    onChange={(e) => {
                      setPr_subjectInfo({
                        ...pr_subjectInfo,
                        col8: e.target.value,
                      });
                    }}
                    value={pr_subjectInfo.col8}
                  />
                  <input
                    type="text"
                    className="sc_section_inputs"
                    disabled={!editingMode}
                    onChange={(e) => {
                      setPr_subjectInfo({
                        ...pr_subjectInfo,
                        col9: e.target.value,
                      });
                    }}
                    value={pr_subjectInfo.col9}
                  />
                  <input
                    type="text"
                    className="sc_section_inputs"
                    disabled={!editingMode}
                    onChange={(e) => {
                      setPr_subjectInfo({
                        ...pr_subjectInfo,
                        col10: e.target.value,
                      });
                    }}
                    value={pr_subjectInfo.col10}
                  />
                  <input
                    type="text"
                    className="sc_section_inputs"
                    disabled={!editingMode}
                    onChange={(e) => {
                      setPr_subjectInfo({
                        ...pr_subjectInfo,
                        col11: e.target.value,
                      });
                    }}
                    value={pr_subjectInfo.col11}
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
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setAsl({
                    ...asl,
                    asl1: e.target.value,
                  });
                }}
                value={asl.asl1}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setAsl({
                    ...asl,
                    asl2: e.target.value,
                  });
                }}
                value={asl.asl2}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setAsl({
                    ...asl,
                    asl3: e.target.value,
                  });
                }}
                value={asl.asl3}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setAsl({
                    ...asl,
                    asl4: e.target.value,
                  });
                }}
                value={asl.asl4}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setAsl({
                    ...asl,
                    asl5: e.target.value,
                  });
                }}
                value={asl.asl5}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setAsl({
                    ...asl,
                    asl6: e.target.value,
                  });
                }}
                value={asl.asl6}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setAsl({
                    ...asl,
                    asl7: e.target.value,
                  });
                }}
                value={asl.asl7}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setAsl({
                    ...asl,
                    asl8: e.target.value,
                  });
                }}
                value={asl.asl8}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setAsl({
                    ...asl,
                    asl9: e.target.value,
                  });
                }}
                value={asl.asl9}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setAsl({
                    ...asl,
                    asl10: e.target.value,
                  });
                }}
                value={asl.asl10}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setAsl({
                    ...asl,
                    asl11: e.target.value,
                  });
                }}
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
                onChange={(e) => {
                  setAsg({
                    ...asl,
                    asg1: e.target.value,
                  });
                }}
                value={asg.asg1}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setAsg({
                    ...asl,
                    asg2: e.target.value,
                  });
                }}
                value={asg.asg2}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setAsg({
                    ...asl,
                    asg3: e.target.value,
                  });
                }}
                value={asg.asg3}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setAsg({
                    ...asl,
                    asg4: e.target.value,
                  });
                }}
                value={asg.asg4}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setAsg({
                    ...asl,
                    asg5: e.target.value,
                  });
                }}
                value={asg.asg5}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setAsg({
                    ...asl,
                    asg6: e.target.value,
                  });
                }}
                value={asg.asg6}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setAsg({
                    ...asl,
                    asg7: e.target.value,
                  });
                }}
                value={asg.asg7}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setAsg({
                    ...asl,
                    asg8: e.target.value,
                  });
                }}
                value={asg.asg8}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setAsg({
                    ...asl,
                    asg9: e.target.value,
                  });
                }}
                value={asg.asg9}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setAsg({
                    ...asl,
                    asg10: e.target.value,
                  });
                }}
                value={asg.asg10}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setAsg({
                    ...asl,
                    asg11: e.target.value,
                  });
                }}
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
                onChange={(e) => {
                  setPf({
                    ...pf,
                    pf1: e.target.value,
                  });
                }}
                value={pf.pf1}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setPf({
                    ...pf,
                    pf2: e.target.value,
                  });
                }}
                value={pf.pf2}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setPf({
                    ...pf,
                    pf3: e.target.value,
                  });
                }}
                value={pf.pf3}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setPf({
                    ...pf,
                    pf4: e.target.value,
                  });
                }}
                value={pf.pf4}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setPf({
                    ...pf,
                    pf5: e.target.value,
                  });
                }}
                value={pf.pf5}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setPf({
                    ...pf,
                    pf6: e.target.value,
                  });
                }}
                value={pf.pf6}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setPf({
                    ...pf,
                    pf7: e.target.value,
                  });
                }}
                value={pf.pf7}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setPf({
                    ...pf,
                    pf8: e.target.value,
                  });
                }}
                value={pf.pf8}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setPf({
                    ...pf,
                    pf9: e.target.value,
                  });
                }}
                value={pf.pf9}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setPf({
                    ...pf,
                    pf10: e.target.value,
                  });
                }}
                value={pf.pf10}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setPf({
                    ...pf,
                    pf11: e.target.value,
                  });
                }}
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
                onChange={(e) => {
                  setSat({
                    ...sat,
                    sat1: e.target.value,
                  });
                }}
                value={sat.sat1}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setSat({
                    ...sat,
                    sat2: e.target.value,
                  });
                }}
                value={sat.sat2}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setSat({
                    ...sat,
                    sat3: e.target.value,
                  });
                }}
                value={sat.sat3}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setSat({
                    ...sat,
                    sat4: e.target.value,
                  });
                }}
                value={sat.sat4}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setSat({
                    ...sat,
                    sat5: e.target.value,
                  });
                }}
                value={sat.sat5}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setSat({
                    ...sat,
                    sat6: e.target.value,
                  });
                }}
                value={sat.sat6}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setSat({
                    ...sat,
                    sat7: e.target.value,
                  });
                }}
                value={sat.sat7}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setSat({
                    ...sat,
                    sat8: e.target.value,
                  });
                }}
                value={sat.sat8}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setSat({
                    ...sat,
                    sat9: e.target.value,
                  });
                }}
                value={sat.sat9}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setSat({
                    ...sat,
                    sat10: e.target.value,
                  });
                }}
                value={sat.sat10}
              />
              <input
                type="text"
                className="sc_section_inputs"
                disabled={!editingMode}
                onChange={(e) => {
                  setSat({
                    ...sat,
                    sat11: e.target.value,
                  });
                }}
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
          <div className="grade_box">
            <div className="grade_name_title">GRADE</div>
            <div className="grade_input_boxes">
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
          <div className="leve_grade_box">
            <div className="level_title">LEVEL OF GRADE</div>
            <div className="level_input_boxes">
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
          <div className="english_home_box">
            <div className="english_home_title">
              ENGLISH HOME / SECOND LANGUAGE
            </div>
            <div className="english_home_input_boxes">
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
          <div className="average_grade_box">
            <div className="ag_title">AVERAGE SYMBOL % OF GRADE</div>
            <div className="ag_input_boxes">
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
          <div className="pass_fail_box">
            <div className="pf_title">PASS(P); FAIL(F)</div>
            <div className="pf_input_boxes">
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
          <div className="school_attendance_box">
            <div className="sat_title">SCHOOL ATTENDANCE ( G; P/R; PT )</div>
            <div className="sat_input_boxes">
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
          <div className="satd_detail_box">
            <div className="satd_title">
              G=GOOD; P/R=POOR REASON; P/T=POOR TRUANCY
            </div>
            <div className="satd_input_boxes">
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

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./styles/general_information.css";
import {
  switchbtn,
  toggleEditingMode,
} from "../../../../store/actions/studentDataActions/generalInformationActions";

const GeneralInformation = (props) => {
  const { oap, oac, voca } = props.giBtns;
  const { switchbtnFun, toggleEditing } = props;

  const exGeneralInfo = props.exGeneralInfo;
  const { student_id } = props.selectedStudent;
  const currentStudentData = exGeneralInfo.find(
    (sin) => sin.std_id === student_id
  );
  const { editingMode } = props.editMode;
  console.table(editingMode);

  //const editingMode = false;

  const [generalInfo, setGeneralInfo] = useState({
    outstanding_aptitudes: {
      aptitudes: null,
      interests: null,
    },
    outstanding_achievements: {
      academic: null,
      extra_curricula: null,
    },
    vocational_choice: {
      careers_chosen_by_learner: null,
      careers_chosen_by_parents: null,
      counsellor_recommendations: null,
      broad_vocational_field: null,
      specific_careers: null,
    },
  });

  useEffect(() => {
    setGeneralInfo({
      /////////////////////////
      outstanding_aptitudes: {
        aptitudes: currentStudentData.outstanding_aptitudes_interests.aptitudes,
        interests: currentStudentData.outstanding_aptitudes_interests.interests,
      },
      outstanding_achievements: {
        academic: currentStudentData.outstanding_achievements_attained.academic,
        extra_curricula:
          currentStudentData.outstanding_achievements_attained.extra_curricular,
      },
      vocational_choice: {
        careers_chosen_by_learner:
          currentStudentData.vocational_choice.careers_chosen_by_learner,
        careers_chosen_by_parents:
          currentStudentData.vocational_choice.careers_chosen_by_parents,
        counsellor_recommendations:
          currentStudentData.vocational_choice.counsellors_recommendations,
        broad_vocational_field:
          currentStudentData.vocational_choice.broad_vocational_field,
        specific_careers: currentStudentData.vocational_choice.specific_careers,
      },
      /////////////////////////
    });
  }, []);

  return (
    <div className="instructions_container">
      <div className="top_main_title">
        <h1 className="section_title">General Information</h1>
        <div className="editing_controls">
          <div
            className="enable_editing editing_controls_btns"
            style={{ display: editingMode ? "none" : "block" }}
            onClick={() => toggleEditing("editing")}
          >
            Enable editing
          </div>
          <div
            className="disable_editing editing_controls_btns"
            style={{ display: editingMode ? "block" : "none" }}
            onClick={() => toggleEditing("not_editing")}
          >
            Disable editing
          </div>
          <div
            className="save_edited editing_controls_btns"
            style={{ display: editingMode ? "block" : "none" }}
            onClick={() => toggleEditing("not_editing")}
          >
            Save changes
          </div>
        </div>
      </div>
      <div className="giContainer">
        <div className="giLeft_btns">
          <button
            onClick={() => switchbtnFun("oap")}
            className="gi_oAptitudes"
            style={{
              backgroundColor: oap ? "#fff" : "transparent",
              color: oap ? "#878787" : "#fff",
            }}
          >
            Outstanding Aptitudes And / Or Interests
          </button>
          <button
            onClick={() => switchbtnFun("oac")}
            className="gi_oAchievements"
            style={{
              backgroundColor: oac ? "#fff" : "transparent",
              color: oac ? "#878787" : "#fff",
            }}
          >
            Outstanding Achievements Attained
          </button>
          <button
            onClick={() => switchbtnFun("voca")}
            className="gi_vocational"
            style={{
              backgroundColor: voca ? "#fff" : "transparent",
              color: voca ? "#878787" : "#fff",
            }}
          >
            Vocational Choice
          </button>
        </div>
        <div className="giRightContents">
          <div
            className="gi_aptitudes_right_box"
            style={{ display: oap ? "block" : "none" }}
          >
            <div className="gi_title_box">
              OUTSTANDING APTITUDES AND / OR INTERESTS
            </div>
            <div className="gi_content_box">
              <div className="gi_content">
                <div className="gi_content_title">
                  APTITUDES ( EG. LANGUAGES, NUMBERS, ART, MUSIC, MANUAL,
                  DEXTERITY, ETC. )
                </div>
                <div className="gi_content_textarea">
                  <textarea
                    disabled={!editingMode}
                    onChange={(e) => {
                      setGeneralInfo({
                        ...generalInfo,
                        outstanding_aptitudes: {
                          ...generalInfo.outstanding_aptitudes,
                          aptitudes: e.target.value,
                        },
                      });
                    }}
                    value={generalInfo.outstanding_aptitudes.aptitudes}
                  ></textarea>
                </div>
              </div>
              <div className="gi_content">
                <div className="gi_content_title">
                  INTERESTS ( EG. WORK WITH PEOPLE, WORK WITH MACHINES ETC. )
                </div>
                <div className="gi_content_textarea">
                  <textarea
                    disabled={!editingMode}
                    onChange={(e) => {
                      setGeneralInfo({
                        ...generalInfo,
                        outstanding_aptitudes: {
                          ...generalInfo.outstanding_aptitudes,
                          interests: e.target.value,
                        },
                      });
                    }}
                    value={generalInfo.outstanding_aptitudes.interests}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div
            className="gi_achievements_right_box"
            style={{ display: oac ? "block" : "none" }}
          >
            <div className="gi_title_box">
              OUTSTANDING ACHIEVEMENTS ATTAINED
            </div>
            <div className="gi_content_box">
              <div className="gi_content">
                <div className="gi_content_title">ACADEMIC</div>
                <div className="gi_content_textarea">
                  <textarea
                    disabled={!editingMode}
                    onChange={(e) => {
                      setGeneralInfo({
                        ...generalInfo,
                        outstanding_achievements: {
                          ...generalInfo.outstanding_achievements,
                          academic: e.target.value,
                        },
                      });
                    }}
                    value={generalInfo.outstanding_achievements.academic}
                  ></textarea>
                </div>
              </div>
              <div className="gi_content">
                <div className="gi_content_title">EXTRA-CURRICULAR</div>
                <div className="gi_content_textarea">
                  <textarea
                    disabled={!editingMode}
                    onChange={(e) => {
                      setGeneralInfo({
                        ...generalInfo,
                        outstanding_achievements: {
                          ...generalInfo.outstanding_achievements,
                          extra_curricula: e.target.value,
                        },
                      });
                    }}
                    value={generalInfo.outstanding_achievements.extra_curricula}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div
            className="gi_vocational_right_box"
            style={{ display: voca ? "block" : "none" }}
          >
            <div className="gi_title_box">VOCATIONAL CHOICE</div>
            <div className="gi_content_box">
              <div className="gi_content">
                <div className="gi_content_title">
                  CAREERS CHOSEN BY <strong>LEARNER</strong>
                </div>
                <div className="gi_content_textarea">
                  <textarea
                    disabled={!editingMode}
                    onChange={(e) => {
                      setGeneralInfo({
                        ...generalInfo,
                        vocational_choice: {
                          ...generalInfo.vocational_choice,
                          careers_chosen_by_learner: e.target.value,
                        },
                      });
                    }}
                    value={
                      generalInfo.vocational_choice.careers_chosen_by_learner
                    }
                  ></textarea>
                </div>
              </div>
              <div className="gi_content">
                <div className="gi_content_title">
                  CAREERS CHOSEN BY <strong>PARENTS</strong>
                </div>
                <div className="gi_content_textarea">
                  <textarea
                    disabled={!editingMode}
                    onChange={(e) => {
                      setGeneralInfo({
                        ...generalInfo,
                        vocational_choice: {
                          ...generalInfo.vocational_choice,
                          careers_chosen_by_parents: e.target.value,
                        },
                      });
                    }}
                    value={
                      generalInfo.vocational_choice.careers_chosen_by_parents
                    }
                  ></textarea>
                </div>
              </div>
              <div className="gi_content">
                <div className="gi_content_title">
                  <strong>COUNSELLOR'S</strong> RECOMMENDATIONS
                </div>
                <div className="gi_content_textarea">
                  <textarea
                    disabled={!editingMode}
                    onChange={(e) => {
                      setGeneralInfo({
                        ...generalInfo,
                        vocational_choice: {
                          ...generalInfo.vocational_choice,
                          counsellor_recommendations: e.target.value,
                        },
                      });
                    }}
                    value={
                      generalInfo.vocational_choice.counsellor_recommendations
                    }
                  ></textarea>
                </div>
              </div>
              <div className="gi_content">
                <div className="gi_content_title">
                  <strong>BROAD VOCATIONAL FIELD</strong> ( EG. NATURAL SCIENCE,
                  TECHNICAL, COMMERCIAL, ETC )
                </div>
                <div className="gi_content_textarea">
                  <textarea
                    disabled={!editingMode}
                    onChange={(e) => {
                      setGeneralInfo({
                        ...generalInfo,
                        vocational_choice: {
                          ...generalInfo.vocational_choice,
                          broad_vocational_field: e.target.value,
                        },
                      });
                    }}
                    value={generalInfo.vocational_choice.broad_vocational_field}
                  ></textarea>
                </div>
              </div>
              <div className="gi_content">
                <div className="gi_content_title">
                  <strong>SPECIFIC CAREERS</strong>
                </div>
                <div className="gi_content_textarea">
                  <textarea
                    disabled={!editingMode}
                    onChange={(e) => {
                      setGeneralInfo({
                        ...generalInfo,
                        vocational_choice: {
                          ...generalInfo.vocational_choice,
                          specific_careers: e.target.value,
                        },
                      });
                    }}
                    value={generalInfo.vocational_choice.specific_careers}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    giBtns: state.general_info.giBtns,
    exGeneralInfo: state.exGeneralInformation,
    selectedStudent: state.selectedStudent,
    editMode: state.general_info,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    switchbtnFun: (btype) => dispatch(switchbtn(btype)),
    toggleEditing: (current) => dispatch(toggleEditingMode(current)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GeneralInformation);

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./styles/general_information.css";
import {
  switchbtn,
  toggleEditingMode,
} from "../../../../store/actions/studentDataActions/generalInformationActions";
import db from "../../../../firebase"
import {
  collection,
  onSnapshot,
  doc,
  setDoc,
  getDocs,
} from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';

const GeneralInformation = (props) => {

  const current_id = props.selectedStudent.student_id
  const [fromData, setfromData] = useState([]);

    useEffect(() => {
    onSnapshot(collection(db, "general_information"),(snapshot) => {
            console.log("From Firebase in remarks",snapshot.docs.map((doc) => doc.data()));
            let tempData = snapshot.docs.map((doc) => doc.data())
            setfromData([
                ...tempData
            ])
          }
        );
        
  },[])

  const current_data= fromData.find(sin => sin.std_id === current_id);

  //const { outstanding_achievements, outstanding_aptitudes, vocational_choice } = current_data && current_data

  useEffect(() => { console.log( "My recent data",current_data) }, [fromData])

  const { oap, oac, voca } = props.giBtns;
  const { switchbtnFun, toggleEditing } = props;

  //const exGeneralInfo = props.exGeneralInfo;
  const { student_id } = props.selectedStudent;
  
  const { editingMode } = props.editMode;
  console.log("Info", current_data);

  //const editingMode = false;

  const [generalInfo, setGeneralInfo] = useState({
    std_id: "",
    outstanding_aptitudes: {
      aptitudes: "",
      interests: "",
    },
    outstanding_achievements: {
      academic: "",
      extra_curricula: "",
    },
    vocational_choice: {
      careers_chosen_by_learner: "",
      careers_chosen_by_parents: "",
      counsellor_recommendations: "",
      broad_vocational_field: "",
      specific_careers: "",
    },
  });

  // useEffect(() => {
  //     ///////////////////////////////////////
  //     current_data && setGeneralInfo({
  //           std_id: student_id,
  //           /////////////////////////
  //           outstanding_aptitudes: {
  //             aptitudes: current_data.outstanding_aptitudes_interests.aptitudes,
  //             interests: current_data.outstanding_aptitudes_interests.interests,
  //           },
  //           outstanding_achievements: {
  //             academic: current_data.outstanding_achievements_attained.academic,
  //             extra_curricula: current_data.outstanding_achievements_attained.extra_curricula,
  //           },
  //           vocational_choice: {
  //             careers_chosen_by_learner: current_data.vocational_choice.careers_chosen_by_learner,
  //             careers_chosen_by_parents: current_data.vocational_choice.careers_chosen_by_parents,
  //             counsellor_recommendations: current_data.vocational_choice.counsellor_recommendations,
  //             broad_vocational_field: current_data.vocational_choice.broad_vocational_field,
  //             specific_careers: current_data.vocational_choice.specific_careers,
  //           },
  //           /////////////////////////
  //         });
  //     ///////////////////////////////////////
  // }, [fromData]);

  useEffect(() => {
      ///////////////////////////////////////
      current_data && setGeneralInfo({
            std_id: student_id,
            /////////////////////////
            outstanding_aptitudes: { ...current_data.outstanding_aptitudes },
            outstanding_achievements: { ...current_data.outstanding_achievements },
            vocational_choice: { ...current_data.vocational_choice },
            /////////////////////////
          });
      ///////////////////////////////////////
  }, [fromData]);

  useEffect(() => { console.log( "Set general",generalInfo) }, [generalInfo])

  // const updateFirebase = async (cur_id, data) => {
  //   const docRef = doc(db, "general_information", cur_id);
  //   let payload = {
  //     std_id: current_id,
  //     outstanding_aptitudes: {
  //       aptitudes: data.outstanding_aptitudes.aptitudes,
  //       interests: data.outstanding_aptitudes.interests,
  //     },
  //     outstanding_achievements: {
  //       academic: data.outstanding_achievements.academic,
  //       extra_curricula: data.outstanding_achievements.extra_curricula,
  //     },
  //     vocational_choice: {
  //       careers_chosen_by_learner: data.vocational_choice.careers_chosen_by_learner,
  //       careers_chosen_by_parents: data.vocational_choice.careers_chosen_by_parents,
  //       counsellor_recommendations: data.vocational_choice.counsellor_recommendations,
  //       broad_vocational_field: data.vocational_choice.broad_vocational_field,
  //       specific_careers: data.vocational_choice.specific_careers,
  //     },
  //   }
  //   await setDoc(docRef, payload);
  // }

  const updateFirebase = async (cur_id, data) => {
    const docRef = doc(db, "general_information", cur_id);
    let payload = {
      std_id: current_id,
      outstanding_aptitudes: {...data.outstanding_aptitudes},
      outstanding_achievements: {...data.outstanding_achievements},
      vocational_choice: {...data.vocational_choice},
    }
    await setDoc(docRef, payload);
  }
  console.log("testing data", generalInfo)

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
            onClick={() => {
                updateFirebase(current_id, generalInfo)
                toggleEditing("not_editing")
            }}
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

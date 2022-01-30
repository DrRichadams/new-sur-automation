import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  toggleEditingMode,
  addIdentificationDataToFirestore,
} from "../../../../store/actions/studentDataActions/identificationActions";
import "./styles/identification.css";
import db from "../../../../firebase"
import {
  collection,
  onSnapshot,
  doc,
  setDoc,
  getDocs,
} from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';

const Identification = ({
  exIdentificationData,
  selectedStudent,
  identificationReducer,
  toggleEditingMode,
  sendToFirestore,
}) => {

  /////////////////////////////////////////////////////////
  /**             FIREBASE HANDLER                       */
  /////////////////////////////////////////////////////////

  const [temporaryData, settemporaryData] = useState([]);
  const [finalizedData, setfinalizedData] = useState([]);

    useEffect(() => {
      onSnapshot(collection(db, "identification"),(snapshot) => {
              console.log("From Firebase",snapshot.docs.map((doc) => doc.data()));
              let tempData = snapshot.docs.map((doc) => doc.data())
                settemporaryData([
                  ...tempData
              ])
              }
          );

          
    },[])

    useEffect(() => {
      setfinalizedData([
        ...temporaryData
      ])
      console.log("We did it", temporaryData ,finalizedData)
    }, [temporaryData])

  /////////////////////////////////////////////////////////
  /**             FIREBASE HANDLER                       */
  /////////////////////////////////////////////////////////

  const { editingMode } = identificationReducer;
  console.log("Testing store retrival", toggleEditingMode);
  const userCurrentData = finalizedData.find(
    (sin) => sin.std_id === selectedStudent.student_id
  );

  useEffect(() => {
    ///SETTING PERSONAL DETAILS DATA //////////////
    userCurrentData && setPersonalDetails({
      firstname: userCurrentData.name,
      othername: userCurrentData.other,
      surname: userCurrentData.surname,
      identity_no: userCurrentData.identity_number,
      gender: userCurrentData.gender,
      dob: {
        month: userCurrentData.dob.month,
        day: userCurrentData.dob.day,
        year: userCurrentData.dob.year,
      },
    });

    ///SEETTING OCCUPATIONAL DATA ////////////////

    userCurrentData && setOccupationOfParents({
      father: userCurrentData.occupation_of_guardian,
      mother: userCurrentData.occupation_of_mother,
      name_of_father: userCurrentData.name_of_guardian,
      name_of_mother: userCurrentData.name_of_mother,
    });
    ///SETTING ADDRESSES INFORMATION///////////////
    userCurrentData && setContactAddresses({
      residential_address: userCurrentData.residential_address,
      postal_address: userCurrentData.postal_address,
      home_phone: userCurrentData.home_phone,
      business_phone: userCurrentData.business_phone,
    });
    ///SETTING CULTURE DATA///////////////////////
    userCurrentData && setCulture({
      ///////////////////////////
      church: userCurrentData.church,
      home_language: userCurrentData.home_language,
      ///////////////////////////
    });
  }, [finalizedData]);

  const [personalDetails, setPersonalDetails] = useState({
    firstname: "",
    othername: null,
    surname: null,
    identity_no: null,
    gender: null,
    dob: {
      month: 6,
      day: 28,
      year: 1998,
    },
  });
  const [occupationOfParents, setOccupationOfParents] = useState({
    father: null,
    mother: null,
    name_of_father: null,
    name_of_mother: null,
  });
  const [contactAddresses, setContactAddresses] = useState({
    residential_address: "",
    postal_address: null,
    home_phone: null,
    business_phone: null,
  });
  const [culture, setCulture] = useState({
    church: null,
    home_language: null,
  });


  const updateFirestoreData = async (cur_id) => {
    const docRef = doc(db, "identification", cur_id);
    let payload = {
      std_id: selectedStudent.student_id,
      name: personalDetails.firstname,
      other: personalDetails.othername,
      surname: personalDetails.surname,
      identity_number: personalDetails.identity_no,
      residential_address: "",
      postal_address: "", 
      gender: personalDetails.gender,
      name_of_guardian: "",
      name_of_mother: "",
      occupation_of_guardian: "",
      occupation_of_mother: "",
      home_phone: "",
      business_phone: "",
      church: "",
      home_language: "",
      dob: {
        month: personalDetails.dob.month,
        day: personalDetails.dob.day,
        year: personalDetails.dob.year,
      },
    }
    await setDoc(docRef, payload);
  }

  return (
    <div className="instructions_container">
      <div className="top_main_title">
        <h1 className="section_title">Identification</h1>
        <div className="editing_controls">
          <div
            className="enable_editing editing_controls_btns"
            style={{ display: editingMode ? "none" : "block" }}
            onClick={() => toggleEditingMode("editing")}
          >
            Enable editing
          </div>
          <div
            className="disable_editing editing_controls_btns"
            style={{ display: editingMode ? "block" : "none" }}
            onClick={() => toggleEditingMode("not_editing")}
          >
            Disable editing
          </div>
          <div
            className="save_edited editing_controls_btns"
            style={{ display: editingMode ? "block" : "none" }}
            onClick={() => {
              toggleEditingMode("not_editing");
              updateFirestoreData(selectedStudent.student_id);
              console.log("sending function triggered");
            }}
          >
            Save changes
          </div>
        </div>
      </div>
      <form className="information_quadrants">
        <div className="personal_quadrant">
          <div className="quad_names">
            <div className="quad_first quad_box">
              <label htmlFor="firstname" className="lebler">
                FirstName
              </label>
              <input
                type="text"
                className="first_name"
                disabled={!editingMode}
                onChange={(e) => {
                  setPersonalDetails({
                    ...personalDetails,
                    firstname: e.target.value,
                  });
                }}
                value={personalDetails.firstname}
              />
            </div>
            <div className="quad_other_names quad_box">
              <label htmlFor="othername" className="lebler">
                Other
              </label>
              <input
                type="text"
                className="first_name quad_input"
                disabled={!editingMode}
                onChange={(e) => {
                  setPersonalDetails({
                    ...personalDetails,
                    othername: e.target.value,
                  });
                }}
                value={personalDetails.othername}
              />
            </div>
          </div>
          <div className="quad_surnames quad_box">
            <label htmlFor="surname" className="lebler">
              Surname
            </label>
            <input
              type="text"
              className="surname quad_input"
              disabled={!editingMode}
              onChange={(e) => {
                setPersonalDetails({
                  ...personalDetails,
                  surname: e.target.value,
                });
              }}
              value={personalDetails.surname}
            />
          </div>
          <div className="quad_identity quad_box">
            <label htmlFor="identity" className="lebler">
              Identity
            </label>
            <input
              type="text"
              className="identity quad_input"
              disabled={!editingMode}
              onChange={(e) => {
                setPersonalDetails({
                  ...personalDetails,
                  identity_no: e.target.value,
                });
              }}
              value={personalDetails.identity_no}
            />
          </div>
          <div className="quad_gender quad_box">
            <label htmlFor="gender" className="lebler">
              Gender
            </label>
            <select
              name="gender"
              className="gender"
              disabled={!editingMode}
              onChange={(e) => {
                setPersonalDetails({
                  ...personalDetails,
                  gender: e.target.value,
                });
              }}
              value={personalDetails.gender}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="quad_dob quad_box">
            <label htmlFor="dob" className="lebler">
              D.O.B
            </label>
            <div className="dob_container">
              <div className="quad_dob_month quad_dob_cont">
                <label htmlFor="dob_month" className="lebler">
                  Month
                </label>
                <input
                  type="text"
                  className="dob_month_input"
                  disabled={!editingMode}
                  onChange={(e) => {
                    setPersonalDetails({
                      ...personalDetails,
                      dob: {
                        month: e.target.value,
                      },
                    });
                  }}
                  value={personalDetails.dob.month}
                />
              </div>
              <div className="quad_dob_day quad_dob_cont">
                <label htmlFor="dob_day" className="lebler">
                  Day
                </label>
                <input
                  type="text"
                  className="dob_day_input"
                  disabled={!editingMode}
                  onChange={(e) => {
                    setPersonalDetails({
                      ...personalDetails,
                      dob: {
                        day: e.target.value,
                      },
                    });
                  }}
                  value={personalDetails.dob.day}
                />
              </div>
              <div className="quad_dob_year quad_dob_cont">
                <label htmlFor="dob_year" className="lebler">
                  Year
                </label>
                <input
                  type="text"
                  className="dob_year_input"
                  disabled={!editingMode}
                  onChange={(e) => {
                    setPersonalDetails({
                      ...personalDetails,
                      dob: {
                        year: e.target.value,
                      },
                    });
                  }}
                  value={personalDetails.dob.year}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="addressing_quadrant">
          <div className="res_address quad_address_box">
            <label htmlFor="residential_address" className="lebler">
              Residential Address
            </label>
            <textarea
              name="res_address"
              disabled={!editingMode}
              onChange={(e) => {
                setContactAddresses({
                  ...contactAddresses,
                  residential_address: e.target.value,
                });
              }}
              value={contactAddresses.residential_address}
            ></textarea>
          </div>
          <div className="postal_address quad_address_box">
            <label htmlFor="postal_address" className="lebler">
              Postal Address
            </label>
            <textarea
              name="postal_address"
              disabled={!editingMode}
              onChange={(e) => {
                setContactAddresses({
                  ...contactAddresses,
                  postal_address: e.target.value,
                });
              }}
              value={contactAddresses.postal_address}
            ></textarea>
          </div>
          <div className="home_phone quad_contacts">
            <label htmlFor="home_phone" className="lebler">
              Home Phone
            </label>
            <input
              type="text"
              className="home_phome"
              disabled={!editingMode}
              onChange={(e) => {
                setContactAddresses({
                  ...contactAddresses,
                  home_phone: e.target.value,
                });
              }}
              value={contactAddresses.home_phone}
            />
          </div>
          <div className="business_phone quad_contacts">
            <label htmlFor="business_phone" className="lebler">
              Business Phone
            </label>
            <input
              type="text"
              className="business_phome"
              disabled={!editingMode}
              onChange={(e) => {
                setContactAddresses({
                  ...contactAddresses,
                  business_phone: e.target.value,
                });
              }}
              value={contactAddresses.business_phone}
            />
          </div>
        </div>
        <div className="occupation_quadrant">
          <p className="occupation_title">Occupation</p>
          <div className="father_occupation quad_occupation_boxes">
            <label htmlFor="f_occupation" className="lebler">
              Father
            </label>
            <input
              type="text"
              className="father_occupation_text"
              disabled={!editingMode}
              onChange={(e) => {
                setOccupationOfParents({
                  ...occupationOfParents,
                  father: e.target.value,
                });
              }}
              value={occupationOfParents.father}
            />
          </div>
          <div className="mother_occupation quad_occupation_boxes">
            <label htmlFor="m_occupation" className="lebler">
              Mother
            </label>
            <input
              type="text"
              className="mother_occupation_text"
              disabled={!editingMode}
              onChange={(e) => {
                setOccupationOfParents({
                  ...occupationOfParents,
                  mother: e.target.value,
                });
              }}
              value={occupationOfParents.mother}
            />
          </div>
          <div className="name_of_father quad_occupation_boxes">
            <label htmlFor="f_name" className="lebler">
              Name of father
            </label>
            <input
              type="text"
              className="father_name_text"
              disabled={!editingMode}
              onChange={(e) => {
                setOccupationOfParents({
                  ...occupationOfParents,
                  name_of_father: e.target.value,
                });
              }}
              value={occupationOfParents.name_of_father}
            />
          </div>
          <div className="name_of_mother quad_occupation_boxes">
            <label htmlFor="f_name" className="lebler">
              Name of mother
            </label>
            <input
              type="text"
              className="mother_name_text"
              disabled={!editingMode}
              onChange={(e) => {
                setOccupationOfParents({
                  ...occupationOfParents,
                  name_of_mother: e.target.value,
                });
              }}
              value={occupationOfParents.name_of_mother}
            />
          </div>
        </div>
        <div className="culture_quadrant">
          <div className="quad_church_box quad_culture_box">
            <label htmlFor="church" className="lebler">
              Church
            </label>
            <input
              type="text"
              className="quad_church"
              disabled={!editingMode}
              onChange={(e) => {
                setCulture({
                  ...culture,
                  church: e.target.value,
                });
              }}
              value={culture.church}
            />
          </div>
          <div className="quad_language_box quad_culture_box">
            <label htmlFor="language" className="lebler">
              Home language
            </label>
            <input
              type="text"
              className="quad_language"
              disabled={!editingMode}
              onChange={(e) => {
                setCulture({
                  ...culture,
                  home_language: e.target.value,
                });
              }}
              value={culture.home_language}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    exIdentificationData: state.exIdentification,
    selectedStudent: state.selectedStudent,
    identificationReducer: state.identificationReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleEditingMode: (current) => dispatch(toggleEditingMode(current)),
    sendToFirestore: (data) => dispatch(addIdentificationDataToFirestore(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Identification);

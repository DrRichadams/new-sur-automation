import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import { connect } from "react-redux";
import "./styles/information.css";
import { switchObSection } from "../../../../store/actions/sectionActions";

const Observations = ({ observeData, toggleObserve }) => {
  //console.log(observeData, toggleObserve);
  const [psychologicalData, setPsychologicalData] = useState({
    section1: {
      obID: "1.1",
      obName: "Cognitive Aspect",
      active: true,
      obData: [
        "( a ) Readiness for minimum demands of grade.",
        "( b ) Average, above average, below average",
        "( c ) Progress - is he/she progressing according to his/her ability?",
        "      Is the problem language / maths / content of subject ?",
        "      What is being done to overcome the problem, etc?",
      ],
    },
    section2: {
      obID: "1.2",
      obName: "Emotional Aspect",
      active: false,
      obData: [
        "( a ) Self-confident.",
        "( b ) Reserved.",
        "( c ) Aggressive or domineering",
        "( d ) Independent",
        "( e ) Defends property rights",
        "( f ) Looks for sympathy and love",
        "( g ) Obscene language",
        "( h ) Tells tales to enhance prestige",
        "( i ) Positive, neutral of negative towards possessions, peers, animals, plants, staff member, group games, school work, books, religion, etc",
      ],
    },
    section3: {
      obID: "1.3",
      obName: "Motivational Aspect",
      active: false,
      obData: [
        "( a ) Strong, average, weak.",
        "( b ) Easily put off.",
        "( c ) Desire to do well in school",
        "( d ) Is motivated to work",
        "( e ) What school subject does learner do / not do readily?",
        "( f ) Does learner desire to make a good impression?",
        "( g ) Good behaviour towards peers, etc",
      ],
    },
  });
  const [socialData, setSocialData] = useState({
    section1: {
      obID: "2.1",
      obName: "Home",
      active: true,
      obData: [
        "( a ) Happy at home or in hostel",
        "( b ) Healthy relationships between child and other members of family",
        "( c ) Is family positively intergrated in community?",
      ],
    },
    section2: {
      obID: "2.2",
      obName: "School",
      active: false,
      obData: [
        "( a ) Positively integrated in class group ?",
        "( b ) Positively integrated towards peers ?",
        "( c ) Adjastment problems",
      ],
    },
    section3: {
      obID: "2.3",
      obName: "Environment",
      active: false,
      obData: [
        "( a ) Specific group of companions with which learner associates outside school",
      ],
    },
  });

  const [mainBtnTrigger, setMainBtnTrigger] = useState({
    psyc: true,
    socio: false,
  });

  return (
    <div className="instructions_container">
      <h1 className="section_title">
        Observation in connection with personality development
      </h1>
      <div className="combined_title">
        <div className="cm_num">{mainBtnTrigger.psyc ? 1 : 2}</div>
        <div className="cm_name">
          {mainBtnTrigger.psyc ? "PSYCHOLOGY" : "SOCIAL"}
        </div>
      </div>
      <div className="observations_section">
        <div className="left_observations_panel">
          <div className="vertical_bar">
            <div
              className="first_dot dot"
              style={{
                backgroundColor: mainBtnTrigger.psyc ? "#fff" : "transparent",
              }}
            ></div>
            <div className="first_pipe pipe"></div>
            <div
              className="second_dot dot"
              style={{
                backgroundColor: mainBtnTrigger.socio ? "#fff" : "transparent",
              }}
            ></div>
            <div className="second_pipe pipe"></div>
          </div>
          <div className="observations_controls">
            <button
              className="ob_btn btn_psychology"
              onClick={() => setMainBtnTrigger({ psyc: true, scocio: false })}
              style={{
                backgroundColor: mainBtnTrigger.psyc ? "#fff" : "transparent",
                color: mainBtnTrigger.psyc ? "rgb(36,40,80)" : "#fff",
              }}
            >
              Psychology
            </button>
            <button
              className="ob_btn btn_social"
              onClick={() => setMainBtnTrigger({ psyc: false, socio: true })}
              style={{
                backgroundColor: mainBtnTrigger.socio ? "#fff" : "transparent",
                color: mainBtnTrigger.socio ? "rgb(36,40,80)" : "#fff",
              }}
            >
              Social
            </button>
          </div>
        </div>
        <div className="right_observations_panel">
          <div
            className="psychological_box"
            style={{ display: mainBtnTrigger.psyc ? "block" : "none" }}
          >
            <div
              className="orb_box"
              onClick={() =>
                setPsychologicalData({
                  ...psychologicalData,
                  section1: {
                    ...psychologicalData.section1,
                    active: true,
                  },
                  section2: {
                    ...psychologicalData.section2,
                    active: false,
                  },
                  section3: {
                    ...psychologicalData.section3,
                    active: false,
                  },
                })
              }
            >
              <div className="ob_main_btn">
                <div className="ob_left_num">
                  {psychologicalData.section1.obID}
                </div>
                <div className="ob_title_name">
                  {psychologicalData.section1.obName}
                </div>
                <div className="ob_icon">
                  {psychologicalData.section1.active ? (
                    <FiChevronDown size={28} />
                  ) : (
                    <FiChevronRight size={28} />
                  )}
                </div>
              </div>
              <div
                className="ob_children"
                style={{
                  display: psychologicalData.section1.active ? "block" : "none",
                }}
              >
                {psychologicalData.section1.obData.map((one) => {
                  return <p key={Math.random()}>{one}</p>;
                })}
              </div>
            </div>
            <div
              className="orb_box"
              onClick={() =>
                setPsychologicalData({
                  ...psychologicalData,
                  section1: {
                    ...psychologicalData.section1,
                    active: false,
                  },
                  section2: {
                    ...psychologicalData.section2,
                    active: true,
                  },
                  section3: {
                    ...psychologicalData.section3,
                    active: false,
                  },
                })
              }
            >
              <div className="ob_main_btn">
                <div className="ob_left_num">
                  {psychologicalData.section2.obID}
                </div>
                <div className="ob_title_name">
                  {psychologicalData.section2.obName}
                </div>
                <div className="ob_icon">
                  {psychologicalData.section2.active ? (
                    <FiChevronDown size={28} />
                  ) : (
                    <FiChevronRight size={28} />
                  )}
                </div>
              </div>
              <div
                className="ob_children"
                style={{
                  display: psychologicalData.section2.active ? "block" : "none",
                }}
              >
                {psychologicalData.section2.obData.map((one) => {
                  return <p key={Math.random()}>{one}</p>;
                })}
              </div>
            </div>
            <div
              className="orb_box"
              onClick={() =>
                setPsychologicalData({
                  ...psychologicalData,
                  section1: {
                    ...psychologicalData.section1,
                    active: false,
                  },
                  section2: {
                    ...psychologicalData.section2,
                    active: false,
                  },
                  section3: {
                    ...psychologicalData.section3,
                    active: true,
                  },
                })
              }
            >
              <div className="ob_main_btn">
                <div className="ob_left_num">
                  {psychologicalData.section3.obID}
                </div>
                <div className="ob_title_name">
                  {psychologicalData.section3.obName}
                </div>
                <div className="ob_icon">
                  {psychologicalData.section3.active ? (
                    <FiChevronDown size={28} />
                  ) : (
                    <FiChevronRight size={28} />
                  )}
                </div>
              </div>
              <div
                className="ob_children"
                style={{
                  display: psychologicalData.section3.active ? "block" : "none",
                }}
              >
                {psychologicalData.section3.obData.map((one) => {
                  return <p key={Math.random()}>{one}</p>;
                })}
              </div>
            </div>
          </div>

          <div
            className="social_box"
            style={{ display: mainBtnTrigger.socio ? "block" : "none" }}
          >
            <div
              className="orb_box"
              onClick={() =>
                setSocialData({
                  ...socialData,
                  section1: {
                    ...socialData.section1,
                    active: true,
                  },
                  section2: {
                    ...socialData.section2,
                    active: false,
                  },
                  section3: {
                    ...socialData.section3,
                    active: false,
                  },
                })
              }
            >
              <div className="ob_main_btn">
                <div className="ob_left_num">{socialData.section1.obID}</div>
                <div className="ob_title_name">
                  {socialData.section1.obName}
                </div>
                <div className="ob_icon">
                  {socialData.section1.active ? (
                    <FiChevronDown size={28} />
                  ) : (
                    <FiChevronRight size={28} />
                  )}
                </div>
              </div>
              <div
                className="ob_children"
                style={{
                  display: socialData.section1.active ? "block" : "none",
                }}
              >
                {socialData.section1.obData.map((one) => {
                  return <p key={Math.random()}>{one}</p>;
                })}
              </div>
            </div>
            <div
              className="orb_box"
              onClick={() =>
                setSocialData({
                  ...socialData,
                  section1: {
                    ...socialData.section1,
                    active: false,
                  },
                  section2: {
                    ...socialData.section2,
                    active: true,
                  },
                  section3: {
                    ...socialData.section3,
                    active: false,
                  },
                })
              }
            >
              <div className="ob_main_btn">
                <div className="ob_left_num">{socialData.section2.obID}</div>
                <div className="ob_title_name">
                  {socialData.section2.obName}
                </div>
                <div className="ob_icon">
                  {socialData.section2.active ? (
                    <FiChevronDown size={28} />
                  ) : (
                    <FiChevronRight size={28} />
                  )}
                </div>
              </div>
              <div
                className="ob_children"
                style={{
                  display: socialData.section2.active ? "block" : "none",
                }}
              >
                {socialData.section2.obData.map((one) => {
                  return <p key={Math.random()}>{one}</p>;
                })}
              </div>
            </div>
            <div
              className="orb_box"
              onClick={() =>
                setSocialData({
                  ...socialData,
                  section1: {
                    ...socialData.section1,
                    active: false,
                  },
                  section2: {
                    ...socialData.section2,
                    active: false,
                  },
                  section3: {
                    ...socialData.section3,
                    active: true,
                  },
                })
              }
            >
              <div className="ob_main_btn">
                <div className="ob_left_num">{socialData.section3.obID}</div>
                <div className="ob_title_name">
                  {socialData.section3.obName}
                </div>
                <div className="ob_icon">
                  {socialData.section3.active ? (
                    <FiChevronDown size={28} />
                  ) : (
                    <FiChevronRight size={28} />
                  )}
                </div>
              </div>
              <div
                className="ob_children"
                style={{
                  display: socialData.section3.active ? "block" : "none",
                }}
              >
                {socialData.section3.obData.map((one) => {
                  return <p key={Math.random()}>{one}</p>;
                })}
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
    observeData: state.observe,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleObserve: (id) => dispatch(switchObSection(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Observations);

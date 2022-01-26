import React, { useState } from "react";
import { connect } from "react-redux";
import "./styles/observation_report.css";
import {
  toggleOBbtns,
  triggerEditingMode,
} from "../../../../store/actions/studentDataActions/observationReportActions";

const ObservationReport = (props) => {
  const { overal, psych, social } = props.mainBtns;
  const { changeSect, editingMode, changeEditingMode } = props;
  const { student_id } = props.selectedStudent;
  console.log("oB props", changeEditingMode);
  //const editingMode = false;

  const [observationReportData, setObservationReportData] = useState({
    psychological: {
      grade: null,
      year: null,
      report: null,
    },
    social: {
      grade: null,
      year: null,
      report: null,
    },
    overall_impression: {
      grade: null,
      year: null,
      report: null,
    },
  });

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
            onClick={() => changeEditingMode("not_editing")}
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
          {new Array(1).fill(1).map((cn) => {
            return (
              <div className="ob_section_content">
                <input
                  type="text"
                  className="ob_grade"
                  disabled={!editingMode}
                  onChange={(e) => {
                    setObservationReportData({
                      ...observationReportData,
                      psychological: {
                        ...observationReportData.psychological,
                        grade: e.target.value,
                      },
                    });
                  }}
                  value={observationReportData.psychological.grade}
                />
                <input
                  type="text"
                  className="ob_year"
                  disabled={!editingMode}
                  onChange={(e) => {
                    setObservationReportData({
                      ...observationReportData,
                      psychological: {
                        ...observationReportData.psychological,
                        year: e.target.value,
                      },
                    });
                  }}
                  value={observationReportData.psychological.year}
                />
                <input
                  type="text"
                  className="ob_report"
                  disabled={!editingMode}
                  onChange={(e) => {
                    setObservationReportData({
                      ...observationReportData,
                      psychological: {
                        ...observationReportData.psychological,
                        report: e.target.value,
                      },
                    });
                  }}
                  value={observationReportData.psychological.report}
                />
              </div>
            );
          })}
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
          {new Array(1).fill(1).map((cn) => {
            return (
              <div className="ob_section_content">
                <input
                  type="text"
                  className="ob_grade"
                  disabled={!editingMode}
                  onChange={(e) => {
                    setObservationReportData({
                      ...observationReportData,
                      social: {
                        ...observationReportData.social,
                        grade: e.target.value,
                      },
                    });
                  }}
                  value={observationReportData.social.grade}
                />
                <input
                  type="text"
                  className="ob_year"
                  disabled={!editingMode}
                  onChange={(e) => {
                    setObservationReportData({
                      ...observationReportData,
                      social: {
                        ...observationReportData.social,
                        year: e.target.value,
                      },
                    });
                  }}
                  value={observationReportData.social.year}
                />
                <input
                  type="text"
                  className="ob_report"
                  disabled={!editingMode}
                  onChange={(e) => {
                    setObservationReportData({
                      ...observationReportData,
                      social: {
                        ...observationReportData.social,
                        report: e.target.value,
                      },
                    });
                  }}
                  value={observationReportData.social.report}
                />
              </div>
            );
          })}
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
          {new Array(1).fill(1).map((cn) => {
            return (
              <div className="ob_section_content">
                <input
                  type="text"
                  className="ob_grade"
                  disabled={!editingMode}
                  onChange={(e) => {
                    setObservationReportData({
                      ...observationReportData,
                      overall_impression: {
                        ...observationReportData.overall_impression,
                        grade: e.target.value,
                      },
                    });
                  }}
                  value={observationReportData.overall_impression.grade}
                />
                <input
                  type="text"
                  className="ob_year"
                  disabled={!editingMode}
                  onChange={(e) => {
                    setObservationReportData({
                      ...observationReportData,
                      overall_impression: {
                        ...observationReportData.overall_impression,
                        year: e.target.value,
                      },
                    });
                  }}
                  value={observationReportData.overall_impression.year}
                />
                <input
                  type="text"
                  className="ob_report"
                  disabled={!editingMode}
                  onChange={(e) => {
                    setObservationReportData({
                      ...observationReportData,
                      overall_impression: {
                        ...observationReportData.overall_impression,
                        report: e.target.value,
                      },
                    });
                  }}
                  value={observationReportData.overall_impression.report}
                />
              </div>
            );
          })}
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

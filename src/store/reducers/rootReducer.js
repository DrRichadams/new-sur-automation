import { combineReducers } from "redux";
import studentsReducer from "./studentsReducer";
import classTeacherReducer from "./classTeacherReducer";
import sectionsReducer from "./sectionsReducer";
import observationsReducer from "./observationsReducer";
import studentsBoardReducer from "./studentsBoardReducer";
import toggleLDBtnReducer from "./studentDataReducers/learningDisabilitiesReducer";
import togglePBBtnReducer from "./studentDataReducers/problematicBehaviourReducer";
import observationReportReducer from "./studentDataReducers/observationReportReducer";
import generalInformationReducer from "./studentDataReducers/generalInformationReducer";
import scholasticAchievementsReducer from "./studentDataReducers/scholasticAchievementsReducer";
import mainExReducer from "./externalDataReducers/mainExReducer";
import exIdentificationReducer from "./externalDataReducers/exIdentification/exIdentificationReducer";
import exSchoolsAttendedReducer from "./externalDataReducers/exSchoolsAttended/exSchoolsAttendedReducer";
import exPhysicalConditionReducer from "./externalDataReducers/exPhysicalCondition/exPhysicalConditionReducer";
import exSchoolsPsychometricDataReducer from "./externalDataReducers/exPsychometricData/exPsychometricDataReducer";
import exLearningDisabilitiesReducer from "./externalDataReducers/exLearningDisabilities/exLearningDisabilitiesReducer";
import exProblematicBehaviourReducer from "./externalDataReducers/exProblematicBehaviour/exProblematicBehaviourReducer";
import exObservationReportReducer from "./externalDataReducers/exObservationReport/exObservationReportReducer";
import exScholasticAchievementsReducer from "./externalDataReducers/exScholasticAchievements/exScholasticAchievementsReducer";
import exGeneralInformationReducer from "./externalDataReducers/exGeneralInformation/exGeneralInformationReducer";
import exGeneralRemarksReducer from "./externalDataReducers/exGeneralRemarks/exGeneralRemarksReducer";
import currentlyLoggedInReducer from "./cerrentlyLoggedInReducer";
import currentlySelectedStudentReducer from "./currentlySelectedStudentReducer";
import identificationReducer from "./studentDataReducers/identificationReducer";
import schoolsAttendedReducer from "./studentDataReducers/schoolsAttendedReducer";
import physicalConditionReducer from "./studentDataReducers/physicalConditionReducer";
import psychometricDataReducer from "./studentDataReducers/psychometricDataReducer";
//import togglePBBtnReducer from "./studentDataReducers/problematicBehaviourReducer"
import generalRemarksReducer from "./studentDataReducers/generalRemarksReducer";
import NavbarReducer from "./NavbarReducer"

const rootReducer = combineReducers({
  students: studentsReducer,
  classTeacher: classTeacherReducer,
  instructions: sectionsReducer,
  observe: observationsReducer,
  studentsBoard: studentsBoardReducer,
  learningDisability: toggleLDBtnReducer,
  problematicBehaviour: togglePBBtnReducer,
  obReport: observationReportReducer,
  general_info: generalInformationReducer,
  schola_store: scholasticAchievementsReducer,
  mainExReducer,
  //EXTERNAL DATA REDUCERS
  exIdentification: exIdentificationReducer,
  exSchoolsAttended: exSchoolsAttendedReducer,
  exPhysicalCondition: exPhysicalConditionReducer,
  exSchoolsPsychometricData: exSchoolsPsychometricDataReducer,
  exLearningDisabilities: exLearningDisabilitiesReducer,
  exProblematicBehaviour: exProblematicBehaviourReducer,
  exObservationReport: exObservationReportReducer,
  exScholasticAchievements: exScholasticAchievementsReducer,
  exGeneralInformation: exGeneralInformationReducer,
  exGeneralRemarks: exGeneralRemarksReducer,
  //LOGGED IN USER REDUCER
  loggedIn: currentlyLoggedInReducer,
  selectedStudent: currentlySelectedStudentReducer,
  //EDITING ISSUES
  identificationReducer,
  schoolsAttendedReducer,
  physicalConditionReducer,
  psychometricDataReducer,
  togglePBBtnReducer,
  generalRemarksReducer,
  //NAV BAR DISPLAY
  NavbarReducer,

});
 
export default rootReducer;

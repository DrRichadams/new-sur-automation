//import { QuerySnapshot } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
//import db from "./firebase";
import MainNavTop from "./components/navigation/MainNavTop";
import Dashboard from "./components/class_teacher/Dashboard";
import StudentsBoard from "./components/class_teacher/student_information/StudentsBoard";
import StudentSelect from "./components/class_teacher/student_information/StudentSelect";
// import {
//   collection,
//   onSnapshot,
//   doc,
//   setDoc,
//   getDocs,
// } from "firebase/firestore";

const App = (props) => {
  console.log(props);
  //const [data, setData] = useState(null);

  // const addNew = async () => {
  //   const docRef = doc(db, "schools_attended", "test12345");
  //   const payload = {
  //     name: "Richard",
  //     goals: [
  //       { id: 11, task: "eat memo", subGoal: [{ isTrue: true }] },
  //       { id: 12, task: "find dora", subGoal: [{ isTrue: false }] },
  //       { id: 13, task: "eat dora", subGoal: [{ isTrue: true }] },
  //     ],
  //   };
  //   await setDoc(docRef, payload);
  // };

  // useEffect(() => {
  //   const mydata = onSnapshot(
  //     collection(db, "schools_attended"),
  //     (snapshot) => {
  //       console.log(snapshot.docs.map((doc) => doc.data()));
  //     }
  //   );

  // const unsub = onSnapshot(
  //   doc(db, "schools_attended", "JJGETuhwPLMTGRJ0gHsD"),
  //   (doc) => {
  //     console.log("Current data: ", doc.data());
  //   }
  // );

  /*const colRef = collection(db, "schools_attended");
    getDocs(colRef).then((snapshot) =>
      console.log(snapshot.docs.map((doc) => doc.data()))
    );*/
  //}, []);

  return (
    <BrowserRouter>
      <div className="App">
        <MainNavTop />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/students_board" element={<StudentsBoard />} />
          <Route path="/students_select" element={<StudentSelect />} />
        </Routes>
        {/* <button onClick={() => addNew()}>CLICK CLICK</button> */}
      </div>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    exIdentification: state.exIdentification,
    exSchoolsAttended: state.exSchoolsAttended,
    exPhysicalCondition: state.exPhysicalCondition,
    exSchoolsPsychometricData: state.exSchoolsPsychometricData,
    exLearningDisabilities: state.exLearningDisabilities,
    exProblematicBehaviour: state.exProblematicBehaviour,
    exObservationReport: state.exObservationReport,
    exScholasticAchievements: state.exScholasticAchievements,
    exGeneralInformation: state.exGeneralInformation,
    exGeneralRemarks: state.exGeneralRemarks,
  };
};

export default connect(mapStateToProps)(App);

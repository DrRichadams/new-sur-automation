//import { QuerySnapshot } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import db, { signup, useAuth, logout } from "./firebase";
import MainNavTop from "./components/navigation/MainNavTop";
import Dashboard from "./components/class_teacher/Dashboard";
import StudentsBoard from "./components/class_teacher/student_information/StudentsBoard";
import StudentSelect from "./components/class_teacher/student_information/StudentSelect";
import Login from "./auth/Login"
import CreateAccount from "./auth/CreateAccount"
import AdminDashboard from "./components/admin/AdminDashboard";
import HasAccessControlPage from "./components/class_teacher/HasAccessControlPage";
import Setup from "./components/Setup";
import ErrorPage from "./components/ErrorPage";
import { upddateData } from "./store/actions/studentDataActions/schoolsAttendedActions"
import ForgotPassword from "./auth/ForgotPassword";
import {
  collection, 
  onSnapshot,
  doc,
  setDoc,
  getDocs,
} from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';

const App = (props) => {

  const current_user = useAuth()

  //const currentUse = useAuth()

  async function handleLogout() {
    try{
      await logout()
    } catch{
      alert("Error!")
    }
  }

  // console.log("This is my real user: ", currentUse?.email)

  // useEffect(() => {
  //   localStorage.setItem("isLoggedIn", "false")
  // }, [])

  // console.log(props);
  // console.log("The uuid", uuidv4());
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

  // const toFire = {
  //   std_id: uuidv4(),
  //   compulsory: {
  //     exempted: false,
  //     date: {
  //       month: "06",
  //       day: "28",
  //       year: "98",
  //     },
  //   },
  //   ageOnInitial: "9",
  //   schoolsLeft: [
  //     {
  //       id: uuidv4(),
  //       admission_no: "112233",
  //       name_of_school: "Mufakose high2",
  //       medium: null,
  //       date_of_admission: "06/30/01",
  //       grade_of_admission: "8",
  //       date_of_departure: null,
  //       grade_of_departure: null,
  //     },
  //   ],
  // }

  // const [fromData, setfromData] = useState([]);
  
  // useEffect(() => {
  //   onSnapshot(collection(db, "schools_attended"),(snapshot) => {
  //           console.log("From Firebase",snapshot.docs.map((doc) => doc.data()));
  //           let tempData = snapshot.docs.map((doc) => doc.data())
  //           setfromData([
  //               ...tempData
  //           ])
  //         }
  //       );
        
  // },[])

  // const { feedSchoolsAttended } = props

  // useEffect(() => {
  //   console.log("temporary data", fromData)
  //   feedSchoolsAttended(fromData)
  // }, [fromData]);

  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  const [fromUsers, setfromUsers] = useState([]); 

  useEffect(() => { 
    
    let unmounted = false
    
      onSnapshot(collection(db, "zx_users"),(snapshot) => {
            //console.log("From Firebase",snapshot.docs.map((doc) => doc.data()));
            let tempData = snapshot.docs.map((doc) => doc.data())
            if(!unmounted) {
            setfromUsers([
                ...tempData
            ])
            }
          }
        )

        return () => unmounted = true
        
  },[])

  let current_auth_user
  try {
    current_auth_user = fromUsers.find(sin => sin.email === current_user.email)
  } catch (error) {
    
  }

  useEffect(() => { console.log("Authed user", current_auth_user) }, [fromUsers])
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////

  const [studentsBoardData, setstudentsBoardData] = useState([]);

  let gradedStudents;
  try{
    gradedStudents = studentsBoardData.filter(student => student.class === current_auth_user.class)
  } catch(err){}

    useEffect(() => {
      let unload = false
      onSnapshot(
        collection(db, "identification"),
        (snapshot) => {
          if(!unload) {
            //console.log(snapshot.docs.map((doc) => doc.data()));
            setstudentsBoardData([
              ...snapshot.docs.map((doc) => doc.data())
            ])
          }
        }
      );

      return () => unload = false
    }, [])

    useEffect(() => console.log("Got it", gradedStudents), [studentsBoardData])
  

  return (
    <BrowserRouter>
      <div className="App">
        <MainNavTop />
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/create_account" exact element={<CreateAccount />} />
          {
            current_user && (
              <>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route 
                  path="/students_board" 
                  element={<StudentsBoard studentsBoardData={gradedStudents} cur_class={current_auth_user && current_auth_user.class || "..."} />}
                   />
                <Route path="/students_select" element={<StudentSelect />} />
                <Route path="/admin_dashboard" element={<AdminDashboard />} />
                <Route path="/no_access" element={<HasAccessControlPage />} />
                <Route path="/030fe9ffb0-2dbf2-40ffc-884f6-c8fff0cc0dfc1b" element={<Setup />} />
              </>
            )
          }
          <Route path="forgot_password" element = {<ForgotPassword />} />
          <Route path="*" element={<ErrorPage />} /> 
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

const mapDispatchToProps = (dispatch) => {
  return {
    feedSchoolsAttended: (data) => dispatch(upddateData(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

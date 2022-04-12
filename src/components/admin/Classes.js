import React, { useState } from "react"
import "./styles/classes.css"
import UnassignTeacher from "../class_teacher/modals/UnassignTeacher";
import db from "../../firebase"
import {
    collection,
    onSnapshot, 
    doc,
    setDoc,
    getDocs,
  } from "firebase/firestore";
  import { v4 as uuidv4 } from 'uuid';

const Classes = () => {

    //////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////
    const [fromData, setfromData] = React.useState([]);
  
    React.useEffect(() => {
        
        let unmounted = false
        
        onSnapshot(collection(db, "zx_users"),(snapshot) => {
                //console.log("From Firebase",snapshot.docs.map((doc) => doc.data()));
                let tempData = snapshot.docs.map((doc) => doc.data())
                if(!unmounted) {
                setfromData([
                    ...tempData
                ])
                }
            }
            )

            return () => unmounted = true
            
    },[])

  let unassignedUsers = [];
  try {
    unassignedUsers = fromData.filter(item => item.hasAcess === true)
  } catch (err) {
      console.log(err)
  }

  React.useEffect(() => { 
    console.log("Thir", fromData)
    console.log("Un_users", unassignedUsers)
   }, [fromData])
    //////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////
    const [fromGrades, setfromGrades] = React.useState([]);
  
    React.useEffect(() => {
        
        let unmount = false
        
        onSnapshot(collection(db, "zx_grades"),(snapshot) => {
                //console.log("From Firebase",snapshot.docs.map((doc) => doc.data()));
                let tempData = snapshot.docs.map((doc) => doc.data())
                if(!unmount) {
                    setfromGrades([
                    ...tempData
                ])
                }
            }
            )

            return () => unmount = true
            
    },[])

  let rawGrades = [];

  try {
    rawGrades = fromGrades.find(item => item.user_id === "66581ef9-84bd-4fe0-860b-397e120fc2a7")
  } catch (err) {
      console.log(err)
  }

  React.useEffect(() => { 
    console.log("Mydo grades", fromGrades)
    console.log("raw grades", rawGrades)
   }, [fromGrades])
    //////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////
    const cl = "rgb(1,161,231)"
    const cles = "transparent"
    const wh = "#fff"
    const bl = "#111"

   const [ isRemovable, setIsRemovable ] = useState(false)
   const [ un_id, setUn_id ] = useState("")

   const triggerUnassign = (id) => {
    setUn_id(id)
    setIsRemovable(true)
   }

   const current_user = unassignedUsers.find(item => item.user_id === un_id)

   const unassignHandler = (id, className) => {
       let tempUsers = fromData
       tempUsers.forEach(item => {
           if (item.user_id === id) {
               item.class = "";
               item.hasAcess = false
           }
       })
       setfromData([...tempUsers])
       let toUpload = tempUsers.find(item => item.user_id === id)
       sendUsersToFirestore(toUpload, id)
       console.log("Good measure", tempUsers)

        if(className.length < 3 && className.length > 0) {
            let newGrade = className.charAt(0)
            let tempGrades = rawGrades.grades
            let cur_grade = tempGrades.find(item => item.name == newGrade)

            let tempClasses = cur_grade.classes
            tempClasses.forEach(item => {
                if(item.class === className) {
                    item.isAssigned = false
                }
            })

            rawGrades.grades.forEach(item => {
                if(item.name === className) {
                    item.classes = tempClasses
                }
            })

            //fromGrades && console.log("Grades 1 to 9", newGrade, rawGrades)
            sendGradesToFirestore(rawGrades)

        } else if (className.length > 2 && className.length < 4) {
            let newGrade = className.charAt(0) + className.charAt(1)
            let tempGrades = rawGrades.grades
            let cur_grade = tempGrades.find(item => item.name == newGrade)

            let tempClasses = cur_grade.classes
            tempClasses.forEach(item => {
                if(item.class === className) {
                    item.isAssigned = false
                }
            })
            rawGrades.grades.forEach(item => {
                if(item.name === className) {
                    item.classes = tempClasses
                }
            })
            //console.log("Grades 10 to 12", newGrade, rawGrades)
            sendGradesToFirestore(rawGrades)
        }
   }

   const sendUsersToFirestore = (data, id) => {
    setIsRemovable(false)
    updateUsersFirestore(data, id)
    //console.log("Refresh user data: ", data)
   }

   const sendGradesToFirestore = (data) => {
    setIsRemovable(false)
    updateGradesFirestore(data)
    //console.log("Refresh grades data: ", data)
   }

   const updateGradesFirestore = async(data) => {
    const payload = {
        grades: data.grades,
        user_id: data.user_id
    }

    const docRef = doc(db, "zx_grades", data.user_id);
    await setDoc(docRef, payload);
    alert("Data updated successfully")
    console.log("Refresh grades data: ", payload)
  }

  const updateUsersFirestore = async(data, cur_id) => {
    const payload = {
        class: data.class,
        email: data.email,
        gender: data.gender,
        hasAcess: data.hasAcess,
        name: data.name,
        surname: data.surname,
        userType: data.userType,
        user_id: data.user_id,
    }

    const docRef = doc(db, "zx_users", cur_id);
    await setDoc(docRef, payload);
    //alert("Data updated successfully")
    console.log("Refresh user data: ", payload)
  }

    return (<>
            <UnassignTeacher unassignHandler={unassignHandler} isRemovable={isRemovable} setIsRemovable={setIsRemovable} current_user={current_user} />
        <div className="unassigned_container">
            <div className="classes_main_title">
                <p>CLASSES</p>
            </div>
            {/* <div className="select_grade_bar">
                <div className="select_grade_title">Select grade</div>
                <div className="select_grade_choices">
                    <div className="grade_sin_box" style={{ 
                        backgroundColor: selected.one ? "rgb(1,161,231)":"transparent", color: selected.one ? "#fff":"#111"
                     }} id="one" onClick ={(e) => resetBtnStyles(e)}>1</div>

                    <div className="grade_sin_box" style={{ backgroundColor: selected.two ? cl:cles, color: selected.two ? wh:bl }}
                     id="two" onClick ={(e) => resetBtnStyles(e)} >2</div>
                     <div className="grade_sin_box" style={{ backgroundColor: selected.three ? cl:cles,color: selected.three ? wh:bl}} 
                     id="three" onClick ={(e) => resetBtnStyles(e)} >3</div>
                    <div className="grade_sin_box" style={{ backgroundColor: selected.four ? cl:cles,color: selected.four ? wh:bl }}
                     id="four" onClick ={(e) => resetBtnStyles(e)} >4</div>
                    <div className="grade_sin_box" style={{ backgroundColor: selected.five ? cl:cles,color: selected.five ? wh:bl }} 
                     id="five" onClick ={(e) => resetBtnStyles(e)} >5</div>
                    <div className="grade_sin_box" style={{ backgroundColor: selected.six ? cl:cles,color: selected.six ? wh:bl}} 
                     id="six" onClick ={(e) => resetBtnStyles(e)} >6</div>
                      <div className="grade_sin_box" style={{ backgroundColor: selected.seven ? cl:cles,color: selected.seven ? wh:bl}} 
                     id="seven" onClick ={(e) => resetBtnStyles(e)} >7</div>
                      <div className="grade_sin_box" style={{ backgroundColor: selected.eight ? cl:cles,color: selected.eight ? wh:bl}} 
                     id="eight" onClick ={(e) => resetBtnStyles(e)} >8</div>
                      <div className="grade_sin_box" style={{ backgroundColor: selected.nine ? cl:cles,color: selected.nine ? wh:bl }} 
                     id="nine" onClick ={(e) => resetBtnStyles(e)} >9</div>
                    <div className="grade_sin_box" style={{ backgroundColor: selected.ten ? cl:cles,color: selected.ten ? wh:bl}} 
                     id="ten" onClick ={(e) => resetBtnStyles(e)} >10</div>
                    <div className="grade_sin_box" style={{ backgroundColor: selected.eleven ? cl:cles,color: selected.eleven ? wh:bl }} 
                     id="eleven" onClick ={(e) => resetBtnStyles(e)} >11</div>
                      <div className="grade_sin_box" style={{ backgroundColor: selected.twelve ? cl:cles,color: selected.twelve ? wh:bl }} 
                     id="twelve" onClick ={(e) => resetBtnStyles(e)} >12</div>
                </div>
            </div> */}
            <div className="all_classes">
                {
                    unassignedUsers && unassignedUsers.map(sin => (
                        <div className="sin_class" key={sin.user_id}>
                            <div className="sin_class_title_bar">
                                <p>Class {sin.class}</p>
                                {/* <button className="sin_class_view_btn">View</button> */}
                            </div>
                                <div className="sin_class_details">
                                    <div className="sin_class_username">{sin.name}</div>
                                    <div className="sin_class_userType">{sin.userType}</div>
                                    <div className="sin_class_unassign_btn">
                                        <button 
                                            className="sin_class_unassign"
                                            id={sin.user_id}
                                            onClick={() => triggerUnassign(sin.user_id)}>Unassign class</button>
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default Classes
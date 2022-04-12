import React, { useState, useEffect } from "react"
import "./styles/unassigned.css"
import db from "../../firebase"
import {
    collection,
    onSnapshot, 
    doc,
    setDoc,
    getDocs,
  } from "firebase/firestore";
  import { v4 as uuidv4 } from 'uuid';
 
const Unassigned = () => {

     const current_id = "66581ef9-84bd-4fe0-860b-397e120fc2a7";

     const [fromData, setfromData] = useState([]);
  
  useEffect(() => {
    
    let unmounted = false
    
      onSnapshot(collection(db, "zx_grades"),(snapshot) => {
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

   const current_data = fromData.find(sin => sin.user_id === current_id)

   useEffect(() => { current_data && console.log("From grader filtered", current_data.grades) }, [fromData])

    const [ grades ] = React.useState([ 1,2,3,4,5,6,7,8,9,10,11,12 ])
    // const [ sampleClasses ] = React.useState(["9A", "10B", "8C", "11A"])
    // const [ teachers ] = React.useState([
    //     "Jake Kobe", "Daniel Marie", "Ferguson Chuck", "Jonas Arwin", "Thomas Edison", "Silence Meandyou",
    // ])

    const [ currentSelectedGrade, setCurrentSelectedGrade ] = React.useState({})
    const [ selectedGrade, setSelectedGrade ] = React.useState("")
    React.useEffect(() => {
        let tempCurrent = current_data && current_data.grades
        tempCurrent = current_data && tempCurrent.find(item => item.name === selectedGrade)
        setCurrentSelectedGrade({...tempCurrent})
        //console.log("My temp",tempCurrent)
        //setCurrentSelectedGrade()
    }, [selectedGrade])

    //useEffect(() => { current_data && console.log("Const", currentSelectedGrade.classes) }, [currentSelectedGrade])

     let unAssignedClasses_current = []
     try {
        unAssignedClasses_current = current_data && currentSelectedGrade.classes.filter(item => item.isAssigned !== true)
     } catch (err) {
        //console.log(err)
     }
    //console.log("unass", unAssignedClasses_current)

    React.useEffect(() => {
        if(selectedGrade === "select_grade" || selectedGrade === "") {
            setChosenGrade(false)
        } else {
            setChosenGrade(true)
        }
    }, [selectedGrade])

    const [ chosenGrade, setChosenGrade ] = React.useState(false)

    /////////////////////GETTING UNASSIGNED USERS/////////////////

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

  const unassignedUsers = fromUsers && fromUsers.filter(item => !item.hasAcess)

  //React.useEffect(() => console.log("From users", unassignedUsers), [unassignedUsers])


  const updateClasses = (class_name) => {
      let tempGradesRetun = current_data
      let tempGrades = current_data
    tempGrades = current_data.grades.find(item => item.name === selectedGrade)
      try {
          tempGrades.classes.forEach(item => {
              if(item.class === class_name) {
                  item.isAssigned = true
              }
          })
      } catch (err) {
          console.log(err)
      }

      tempGradesRetun.grades.forEach(item => {
          if(item.name === selectedGrade) {
              item = tempGrades
          }
      })

      classesFirestoreUpdate(tempGradesRetun.grades, tempGradesRetun.user_id)
    
      console.log("Working on ", tempGrades)
      console.log("Worked on ", tempGradesRetun)
  }

  const classesFirestoreUpdate = async (grades, id) => {

    const payload = {
        grades: [...grades],
        user_id: id
    }
    //console.log("To be uploaded", payload)
    const docRef = doc(db, "zx_grades", id);
    await setDoc(docRef, payload);
    //alert("Grades updated")
    //console.log("My payload", payload)

    console.log("My firestore", grades, id)
  }

  const handleSelectChange = (e) => {
      let tempUsers = fromUsers.find(item => item.user_id === e.target.id)
      
      tempUsers.class = e.target.value
      tempUsers.hasAcess = true

      updateClasses(e.target.value)
      uploadSelection(tempUsers, e.target.id)
    //   console.log(e.target.value)
    //   console.log("Changed", tempUsers)
  }

  const uploadSelection = async (data, id) => {
    //console.log("Display from inner function", data, id)
    ////////////////UPLOADING TO FIRESTORE////////////////////
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
        //console.log("To be uploaded", payload)
        const docRef = doc(db, "zx_users", id);
        await setDoc(docRef, payload);
        alert("Class assigned")
        //console.log("My payload", payload)
        window.location.reload(false)
  }

    return (
        <div className="unassigned_container">
            <div className="unassigned_main_title">
                <p>Assign classes to teachers</p>
                <select onChange={(e) => {
                    setSelectedGrade(e.target.value)
                }}>
                    <option value="select_grade">Select grade</option>
                    { grades.map(grade => <option>{grade}</option>) }
                </select>
            </div>
            <div className="unassigned_second_title">Available teachers</div>
            <div className="available_teacher">
                {
                    unassignedUsers && unassignedUsers.map(sin => (
                        <div className="sin_teacher_box"> 
                    <div className="teacher_name">
                        <p>{sin.name} {sin.surname}</p>
                    </div>
                    {/* <div className="select_title">Select class</div> */}
                    <select 
                        className="available_classes" 
                        disabled={!chosenGrade}
                        id={sin.user_id}
                        onChange={(e) => handleSelectChange(e)}
                        >
                        <option value="no_select">Select class</option>
                        { unAssignedClasses_current && 
                          unAssignedClasses_current.map(sin => (
                            <option key={sin.id}>{sin.class}</option>
                          )) }
                    </select>
                    <button className="assign_btn">ASSIGN</button>
                </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Unassigned
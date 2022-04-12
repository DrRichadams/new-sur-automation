import React from "react"
import { useState, useEffect } from "react"
import "./styles/define_classes.css"
import db from "../../firebase"
import {
    collection,
    onSnapshot, 
    doc,
    setDoc,
    getDocs,
  } from "firebase/firestore";
  import { v4 as uuidv4 } from 'uuid';

const DefineClasses = () => {
    const [ gradeBtns, setGradeBtns ] = React.useState([
        // { id: "gd1", name: "1", atv: true, classes: [ { id: "grd1", grade: 1, class: "1A", isEditing: false }, { id: "grd2", grade: 1, class: "1B", isEditing: false } ]}, 
        // { id: "gd2", name: "2", atv: false, classes: [ { id: "grd2", grade: 2, class: "2A", isEditing: false }, { id: "grd23", grade: 2, class: "2B", isEditing: false } ]}, 
        // { id: "gd3", name: "3", atv: false, classes: [ { id: "grd3", grade: 3, class: "3A", isEditing: false }, { id: "grd3", grade: 3, class: "3B", isEditing: false } ]}, 
        // { id: "gd4", name: "4", atv: false, classes: [ { id: "grd4", grade: 4, class: "4A", isEditing: false }, { id: "grd4", grade: 4, class: "4B", isEditing: false } ]},
        // { id: "gd5", name: "5", atv: false, classes: [ { id: "grd5", grade: 5, class: "5A", isEditing: false }, { id: "grd5", grade: 5, class: "5B", isEditing: false } ]}, 
        // { id: "gd6", name: "6", atv: false, classes: [ { id: "grd6", grade: 6, class: "6A", isEditing: false }, { id: "grd6", grade: 6, class: "6B", isEditing: false } ]}, 
        // { id: "gd7", name: "7", atv: false, classes: [ { id: "grd7", grade: 7, class: "7A", isEditing: false }, { id: "grd7", grade: 7, class: "7B", isEditing: false } ]}, 
        // { id: "gd8", name: "8", atv: false, classes: [ { id: "grd8", grade: 8, class: "8A", isEditing: false }, { id: "grd8", grade: 8, class: "8B", isEditing: false } ]},
        // { id: "gd9", name: "9", atv: false, classes: [ { id: "grd9", grade: 9, class: "9A", isEditing: false }, { id: "grd9", grade: 9, class: "9B", isEditing: false } ]}, 
        // { id: "gd10", name: "10", atv: false, classes: [ { id: "grd10", grade: 10, class: "10A", isEditing: false }, { id: "grd10", grade: 10, class: "10B", isEditing: false } ]}, 
        // { id: "gd11", name: "11", atv: false, classes: [ { id: "grd1", grade: 11, class: "11A", isEditing: false }, { id: "grd11", grade: 1, class: "11B", isEditing: false } ]}, 
        // { id: "gd12", name: "12", atv: false, classes: [ { id: "grd12", grade: 12, class: "12A", isEditing: false }, { id: "grd12", grade: 12, class: "12B", isEditing: false } ]},
    ])
    const [ currentlySelected, setCurrentlySelected ] = React.useState(
        //{  id: "gd1", name: "1", atv: true, classes: [ { id: "grd1", grade: 1, class: "1A", isEditing: true }, { id: "grd2", grade: 1, class: "1B", isEditing: false } ]}
     )

     const [fromData, setfromData] = useState([]);

    React.useEffect(() => {
        let unmounted = false
          onSnapshot(collection(db, "zx_grades"),(snapshot) => {
                console.log("From Firebase",snapshot.docs.map((doc) => doc.data()));
                let tempData = snapshot.docs.map((doc) => doc.data())
                if(!unmounted) {
                 setfromData([
                    ...tempData
                ])
                //setGradeInstantiation([...tempData])
                }
              }
            )
            return () => unmounted = true
      },[])

      const currentData = fromData.find(item => item.user_id === "66581ef9-84bd-4fe0-860b-397e120fc2a7")

      useEffect(() => console.log("My from data", currentData), [fromData, currentData])

      React.useEffect(() => {
        currentData && setGradeBtns([...currentData.grades])
      }, [fromData])

     const [ gradesInstantiation, setGradeInstantiation ] = useState([])
     const instantiateInitial = false

     React.useEffect(()=>{ setCurrentlySelected({...gradeBtns[0]}) }, [])
     //React.useEffect(()=>{ setCurrentlySelected({...gradeBtns[0]}) }, [gradeBtns])
    const handlebtnevent = (e) => {
        let tempArr = gradeBtns;
        tempArr.forEach(item => {
            if(item.id === e.target.id) {
                item.atv = true;
                setCurrentlySelected({...item})
            } else {
                item.atv = false
            }
        })
        setGradeBtns([...tempArr])
    }

    const handleEditingToggler = (e) => {
        let tempClasses = currentlySelected.classes
        tempClasses.forEach(item => {
            if(item.id === e.target.id) {
                item.isEditing = true
            } else {
                item.isEditing = false
            }
        })
        setCurrentlySelected({ ...currentlySelected, ...tempClasses.classes })
    }

    const handleDisableEditingToggler = (e) => {
        let tempClasses = currentlySelected.classes
        tempClasses.forEach(item => {
            if(item.id === e.target.id) {
                item.isEditing = false
            } else {
                item.isEditing = false
            }
        })
        setCurrentlySelected({ ...currentlySelected, ...tempClasses.classes })
    }

    const handleDeleteClass = (e) => {
        let tempClasses = currentlySelected.classes;
        let newClasses = tempClasses.filter(item => item.id !== e.target.id)
        setCurrentlySelected({ ...currentlySelected, classes: newClasses })

        let tempGrades = gradeBtns;
        tempGrades.forEach(item => {
            if(item.id === currentlySelected.id) {
                item.classes = [ ...newClasses ]
            }
        })
        setGradeBtns([
            ...tempGrades
        ])
        handleSave(gradeBtns)
    }

    const [ addingClass, setAddingClass ] = React.useState("")
    //React.useEffect(() => { setAddingClass(currentlySelected.name) }, [])

    const newClassInput = (e) => {
        setAddingClass(e.target.value)
    }

    const handleAddNewClass = () => {
       let tempData = gradeBtns
       tempData.forEach(item => {
           if(item.name === currentlySelected.name) {
               item.classes = [
                   ...currentlySelected.classes,
                   {
                       id: uuidv4(),
                       grade: currentlySelected.name,
                       atv: currentlySelected.atv,
                       class: addingClass,
                       isEditing: false,
                       isAssigned: false,
                   }
               ]
           }
       })
       handleGradesInstantiation(tempData)
       console.log(tempData)
    }

    const handleGradesInstantiation = async (data) => {
        const cur_id = "66581ef9-84bd-4fe0-860b-397e120fc2a7"
        const payload = {
            user_id: cur_id,
            grades: [
                ...data
            ]
        }
          const docRef = doc(db, "zx_grades", cur_id);
          await setDoc(docRef, payload);
          alert("Class added")
          console.log("My payload", payload)
    }

    const handleClassUpdate = (e) => {
        let tempClasses = currentlySelected.classes
        tempClasses.forEach(item => {
            if(item.id === e.target.id) {
                item.class = e.target.value
            }
        })
        setCurrentlySelected({
            ...currentlySelected,
            classes: [ ...tempClasses ]
        })
        console.log(tempClasses)
        console.log("My grades", gradeBtns)
    }

    const handleSave = async (data) => {
        const cur_id = "66581ef9-84bd-4fe0-860b-397e120fc2a7"
        const payload = {
            user_id: cur_id,
            grades: [
                ...data
            ]
        }
          const docRef = doc(db, "zx_grades", cur_id);
          await setDoc(docRef, payload);
          alert("Save successful")
          console.log("My payload", payload)
    }

    return (
        <div className="define_classes_container">
            <button 
                className="instantiate_grades"
                style={{ display: gradesInstantiation.length > 5 || instantiateInitial ? "block":"none"}}
                >INSTANTIATE GRADES</button>
            <div className="define_main_titles">DEFINE CLASSES</div>
            <div className="main_titles">
            <div className="select_grade_title_main">Select grade</div>
            <div className="select_grade_container">
                { gradeBtns.map(btn=>(<div key={btn.id} id={btn.id} onClick={(e) => handlebtnevent(e)} className="grade_box" style={{ backgroundColor: btn.atv ? "rgb(36,40,80)" : "transparent" }}>{btn.name}</div>)) }
            </div>
            </div>
            <div className="current_classes">
                <div className="current_grade_title">Selected grade { currentlySelected && currentlySelected.name }</div>
                <div className="add_class">
                            <input 
                                type="text" 
                                className="input_class" 
                                placeholder="Class: type in full class name ( eg, 1A)" 
                                value={addingClass} 
                                onChange={(e) => newClassInput(e)}/>
                            <button className="add_class_btn" onClick={() => handleAddNewClass()}>Add class</button>
                        </div>
                {
                    currentlySelected && currentlySelected.classes ?
                    <div className="current_classes">
                        <div className="class_listing">
                        {
                            currentlySelected && currentlySelected.classes.map(item => (
                                <div className="class_item">
                                    <input 
                                        type="text" 
                                        className="class_display" 
                                        id={item.id}
                                        value={item.class} 
                                        onChange={(e) => handleClassUpdate(e)}
                                        disabled = {!item.isEditing}
                                        />
                                    <button id={item.id} className="enable_editing_class" style={{ display: !item.isEditing ? "block":"none" }} onClick={(e)=>handleEditingToggler(e)}>Enable editing</button>
                                    <button id={item.id} className="save_changes" style={{ display: item.isEditing ? "block":"none" }} onClick={() => handleSave(gradeBtns)}>Save changes</button>
                                    <button id={item.id} className="delete_class" style={{ display: item.isEditing ? "block":"none" }} onClick={(e)=>handleDeleteClass(e)}>Delete class</button>
                                    <button id={item.id} className="discard_class" style={{ display: item.isEditing ? "block":"none" }} onClick={(e)=>handleDisableEditingToggler(e)}>Discard changes</button>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                    : <div className="no_classes">There are currently no classes for this </div>
                }
            </div>
        </div>
    )
}

export default DefineClasses
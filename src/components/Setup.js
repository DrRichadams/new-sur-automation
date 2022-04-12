import React from "react"
import "../app.css"
import db from "../firebase"
import {
    collection,
    onSnapshot, 
    doc,
    setDoc,
    getDocs,
  } from "firebase/firestore"; 
  import { v4 as uuidv4 } from 'uuid';

const Setup = () => {

    const handleGradesInstantiation = async () => {
        const cur_id = "66581ef9-84bd-4fe0-860b-397e120fc2a7"
        const payload = {
            user_id: cur_id,
            grades: [
                { id: "gd1", name: "1", atv: false, classes: []}, 
                { id: "gd2", name: "2", atv: false, classes: []}, 
                { id: "gd3", name: "3", atv: false, classes: []}, 
                { id: "gd4", name: "4", atv: false, classes: []},
                { id: "gd5", name: "5", atv: false, classes: []}, 
                { id: "gd6", name: "6", atv: false, classes: []}, 
                { id: "gd7", name: "7", atv: false, classes: []}, 
                { id: "gd8", name: "8", atv: false, classes: []},
                { id: "gd9", name: "9", atv: false, classes: []}, 
                { id: "gd10", name: "10", atv: false, classes: []}, 
                { id: "gd11", name: "11", atv: false, classes: []}, 
                { id: "gd12", name: "12", atv: false, classes: []},
            ]
        }
          const docRef = doc(db, "zx_grades", cur_id);
          await setDoc(docRef, payload);
          alert("Grades instantiation complete")
          console.log("My payload", payload)
    }

    return (
        <div className="setup_container">
            <div className="setup_btns">
                <h2 className="setup_title">THESE CONTROLS ARE FOR THE SUPER USER</h2>
                <p className="setup_brief">
                    Initial database setup is done here. <strong>Only make changes if you know what you are doing</strong>
                </p>
                <button className="instantiate_grades" onClick={() => handleGradesInstantiation()}>INSTANTIATE GRADES</button>
            </div>
        </div>
    )
}

export default Setup




/**
 * { id: "grd1", grade: 1, class: "1A", isEditing: false }, { id: "grd2", grade: 1, class: "1B", isEditing: false } 
{ id: "grd2", grade: 2, class: "2A", isEditing: false }, { id: "grd23", grade: 2, class: "2B", isEditing: false }
{ id: "grd3", grade: 3, class: "3A", isEditing: false }, { id: "grd3", grade: 3, class: "3B", isEditing: false } 
{ id: "grd4", grade: 4, class: "4A", isEditing: false }, { id: "grd4", grade: 4, class: "4B", isEditing: false } 
{ id: "grd5", grade: 5, class: "5A", isEditing: false }, { id: "grd5", grade: 5, class: "5B", isEditing: false } 
{ id: "grd6", grade: 6, class: "6A", isEditing: false }, { id: "grd6", grade: 6, class: "6B", isEditing: false } 
{ id: "grd7", grade: 7, class: "7A", isEditing: false }, { id: "grd7", grade: 7, class: "7B", isEditing: false } 
{ id: "grd8", grade: 8, class: "8A", isEditing: false }, { id: "grd8", grade: 8, class: "8B", isEditing: false } 
{ id: "grd9", grade: 9, class: "9A", isEditing: false }, { id: "grd9", grade: 9, class: "9B", isEditing: false }
{ id: "grd10", grade: 10, class: "10A", isEditing: false }, { id: "grd10", grade: 10, class: "10B", isEditing: false }
{ id: "grd1", grade: 11, class: "11A", isEditing: false }, { id: "grd11", grade: 1, class: "11B", isEditing: false }
{ id: "grd12", grade: 12, class: "12A", isEditing: false }, { id: "grd12", grade: 12, class: "12B", isEditing: false }
 */
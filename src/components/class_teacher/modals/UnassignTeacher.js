import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import "./styles/unassign_teacher.css"
import { IoWarning } from "react-icons/io5"

const UnassignTeacher = ({isRemovable, setIsRemovable, current_user, unassignHandler}) => {
    const [ userInfo, setUserInfo ] = useState({
        name: "",
        surname: "",
        email: "",
        class: "",
        gender: "",
        user_id: "",
    })
  
  useEffect(() => {
      try{
          setUserInfo({
            name: current_user.name,
            surname: current_user.surname,
            email: current_user.email,
            class: current_user.class,
            gender: current_user.gender,
            user_id: current_user.user_id
          })
      } catch(err) {}
  }, [ current_user])
    /////////////////////////////////////////////////////////////////////////

    const handleUnassign = (my_id, className) => {
        unassignHandler(my_id, className)
    }

    return ReactDOM.createPortal(
        <div className="unassign_teacher_container" style={{display: isRemovable?"flex":"none"}}>
           <div className="confirm_box_container">
               <div className="warning_title">
                   <IoWarning size={30} color="orangered" />
                   <p>Warning</p>
               </div>
               <div className="warning_descrip">
                   <p>You are about to unassign the following teacher</p>
                   <div className="user_name un_info_box"><span>Name: </span>{userInfo.name} {userInfo.surname}</div>
                   <div className="user_email un_info_box"><span>Email: </span>{userInfo.email}</div>
                   <div className="user_class un_info_box"><span>Class: </span>{userInfo.class}</div>
                   <div className="user_gender un_info_box"><span>Gender: </span>{userInfo.gender}</div>
               </div>
               <div className="unassign_controls">
                   <button className="un_unassign" onClick={() => handleUnassign(userInfo.user_id, userInfo.class)}>Unassign</button>
                   <button className="un_cancel" onClick={() => setIsRemovable(false)}>Cancel</button>
               </div>
           </div>
        </div>, 
        document.getElementById("unassign_teacher")
    )
}

export default UnassignTeacher
import React, { useState, useEffect } from "react"
import db, { useAuth, logout } from "../../firebase"
import { useNavigate } from "react-router-dom"
import "../../app.css"
import {
    collection,
    onSnapshot, 
    doc,
    setDoc,
    getDocs,
  } from "firebase/firestore";

const HasAccessControlPage = () => {

  const navigate = useNavigate()

  async function handleLogout() {
    try{
      await logout()
        navigate('/')
        window.location.reload(true)
    } catch{
      alert("Error!")
    }
  }

    const currentUser = useAuth()

    currentUser && console.log("Access user id", currentUser)

     /////////////////////////////////////////////////////////////////////
    /**////////////////////RETRIEVING USERS DATA////////////////////// */
    /////////////////////////////////////////////////////////////////////
    const [fromData, setfromData] = useState([]);
  
    useEffect(() => {
      
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
  
    const current_data = currentUser && fromData.find(sin => sin.email === currentUser.email)

    useEffect(() => { current_data && console.log("Login data", current_data) }, [fromData])

    /////////////////////////////////////////////////////////////////////
    /**////////////////////RETRIEVING USERS DATA////////////////////// */
    /////////////////////////////////////////////////////////////////////

    const [ isGo, setIsGo ] = useState(true)

    useEffect(() => {
      current_data && setIsGo(false)
    }, [current_data])

    const handleUserRouter = () => {
      current_data && current_data.userType === "teacher" ? navigate("/dashboard") : 
      current_data && current_data.userType === "admin" ? navigate("/admin_dashboard"):
      navigate("/")
    }



    const displayText = current_data && current_data.hasAcess ? 
    <div className="detail_cont">
      <p>You are authorised to continue</p>
      <button disabled={isGo} onClick={() => handleUserRouter()}>Continue</button>
    </div> : 
    <div className="detail_cont">
      <p>You are not yet authorised to continue</p>
      <p>Contact you systems admin</p>
      <button onClick={() => handleLogout()}>LOGOUT</button>
    </div>

    return (
        <div className="has_access_control_page_container">
            <h3>HELLO AND WELCOME</h3>
            <div>{displayText}</div>
        </div>
    )
}

export default HasAccessControlPage
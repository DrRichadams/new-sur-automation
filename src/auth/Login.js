import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { connect } from "react-redux"
import "./styles/login.css"
import { FiLock, FiUser, FiChevronRight } from "react-icons/fi"
import { makeDisplay } from "../store/actions/navbarActions"
import { login } from "../firebase"
import db, { useAuth } from "../firebase"
import {
    collection,
    onSnapshot, 
    doc,
    setDoc,
    getDocs,
  } from "firebase/firestore";
  import { v4 as uuidv4 } from 'uuid';

const Login = ({ changeDisplay }) => {

    const currentUser = useAuth()

    /////////////////////////////////////////////////////////////////////
    /**////////////////////RETRIEVING USERS DATA////////////////////// */
    /////////////////////////////////////////////////////////////////////
    //.....................................................................//

    // const [fromData, setfromData] = useState([]);
  
    // useEffect(() => {
      
    //   let unmounted = false
      
    //     onSnapshot(collection(db, "zx_users"),(snapshot) => {
    //           //console.log("From Firebase",snapshot.docs.map((doc) => doc.data()));
    //           let tempData = snapshot.docs.map((doc) => doc.data())
    //           if(!unmounted) {
    //           setfromData([
    //               ...tempData
    //           ])
    //           }
    //         }
    //       )
  
    //       return () => unmounted = true
          
    // },[])
  
    // const current_data = currentUser && fromData.find(sin => sin.email === currentUser.email)

    // useEffect(() => { current_data && console.log("Login data", fromData) }, [fromData])

    //.....................................................................//

    /////////////////////////////////////////////////////////////////////
    /**////////////////////RETRIEVING USERS DATA////////////////////// */
    /////////////////////////////////////////////////////////////////////

    const [ isLoading, setisLoading ] = React.useState(false)

    async function handleSignin(email, password) {
      try{
          setisLoading(true)
          await login(email, password)
          setErrorDisplay(false)
          navigate("/no_access")
        //   navigate("/dashboard")
        //   navigate("/no_access")
          //addNewUser(payload_firestore)
          //setIsDone(true)
      } catch{
          //setIsDuplicate(true)
          setErrorDisplay(true)
      }
      setisLoading(false)
  }

  //current_data && console.log("MY DATA ", current_data)

    const navigate = useNavigate()

    const [ errorDisplay, setErrorDisplay ] = React.useState(false)
    const [ credentialInputs, setCredentialInputs ] = React.useState({
        username: null,
        password: null
    })

    const handleChange = (e) => {
        setCredentialInputs({
            ...credentialInputs,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //changeDisplay("logged_in")
        localStorage.setItem("isLoggedIn", "true")

        handleSignin(credentialInputs.username, credentialInputs.password)
        
    }

    //console.log("Dispatch action", changeDisplay)

    //React.useEffect(() => console.log("Credentials", credentialInputs), [credentialInputs])

    return (
        <div className="login_container">
            <div className="login_main_box">
            <h3 className="login_main_title">Students' Cumulative Record Card Automation System</h3>
            <p className="login_second_title">LOGIN</p>
            
            <form className="login_inputs_container" onSubmit={(e) => handleSubmit(e)}>
            <p className="login_error_message" style={{ display: errorDisplay ? "block" : "none" }}>Access denied! Try again</p>
                <div className="inputs_box_container">
                    <div className="icon_box"><FiUser size={20} /></div>
                    <input 
                        type="text" 
                        className="login_in_username" 
                        placeholder="Username" 
                        required="required"
                        id="username"
                        onChange={(e) => handleChange(e)} 
                        />
                </div>
                <div className="inputs_box_container">
                    <div className="icon_box"><FiLock size={20} /></div>
                    <input 
                        type="password" 
                        className="login_in_password" 
                        placeholder="Password" 
                        required="required"
                        id="password"
                        onChange={(e) => handleChange(e)} 
                        />
                </div>
                <div className="inputs_box_container">
                    <button className="submit_btn" onClick={() => console.log("Logging in")} disabled={isLoading}>
                        <span>{ isLoading? "VERIFYING DETAILS":"LOGIN" }</span>
                        <FiChevronRight size={20} className="icona"/>
                    </button>
                </div>
                <div className="inputs_box_container" id="user_creation">
                    <div className="create_account_btn" onClick={() => navigate("create_account")}>Create account</div>
                    <div className="forgot_password_btn">Forgot password?</div>
                </div>
            </form>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeDisplay: (param) => dispatch(makeDisplay(param))
    }
}

export default connect(null, mapDispatchToProps)(Login)
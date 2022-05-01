import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom"
import "../../app.css";
import { logout } from "../../firebase"
import db, { useAuth } from "../../firebase"
import {
  collection,
  onSnapshot, 
  doc,
  setDoc,
  getDocs,
} from "firebase/firestore";

const SignedInClassTeacher = (props) => {

  const current_user = useAuth()

  ///////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////
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

  let current_data
  try {
    current_data = fromData.find(sin => sin.email === current_user.email)
  } catch(err) {}

  useEffect(() => { console.log("Prompt data", fromData, current_user,current_data) }, [fromData])
  ///////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////

  const { email, name, userID, userType } = props.userData;
  console.log("Nav bar data", props);

  const navigate = useNavigate()

  async function handleLogout() {
    try{
      await logout()
        localStorage.setItem("isLoggedIn", "false");
        navigate('/')
        window.location.reload(true)
        console.log("local storage has been set");
    } catch{
      alert("Error!")
    }
  }

  return (
    <>
      <div className="main_logo">SUR AUTOMATION</div>
      <div className="user_profile">
        <button
          className="logout_user_btn"
          onClick={() => {
            handleLogout()
            
          }}
        >
          LOG OUT
        </button>
        <div className="logged_in_user_details">
          {
            current_data ? <div className="name_type">
              <p className="user_name">{ current_data && current_data.name} { current_data && current_data.surname}</p>
            <p className="user_type">{ current_data && current_data.userType}</p>
            </div>:<div></div>
          }
          {/* <div className="name_type">
            
          </div> */}
          <div className="user_initials">
            { current_data && current_data.name.charAt(0)} { current_data && current_data.name.charAt( current_data && current_data.name.length - 1)}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.loggedIn.userInfo,
  };
};
 
export default connect(mapStateToProps)(SignedInClassTeacher);

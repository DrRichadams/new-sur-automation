import React from "react"
import { useNavigate } from "react-router-dom"
import { FiCheckCircle, FiAlertCircle } from "react-icons/fi"


const CreateSuccess = ({ isDone }) => {

    const navigate = useNavigate()

    return(
        <div className="create_details_container" style={{ display: isDone ? "block":"none" }}>
            <div className="success_box">
                <FiCheckCircle size={90} className="success_icon" />
                <p className="congrats_msg">Congratulations</p>
                <p className="main_success_msg">Account created successfully</p>
                <p>Take note of your email address, you will use it to login to the system</p>
                <div className="password_warning">
                    <FiAlertCircle size={40} />
                    <p className="psg_wrn_title">Write your password down somewhere in case you forget it</p>
                </div>
            </div>
            <button 
                className="return_to_login"
                onClick={() => {
                    console.log("clicked")
                    navigate("/")
                }}
                >Return to login</button>
        </div>
    )
}

export default CreateSuccess
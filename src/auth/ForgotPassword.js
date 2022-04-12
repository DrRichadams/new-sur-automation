import React, { useRef } from "react"
import "./styles/forgot_password.css"
import { forgotPassword } from "../firebase"
import { useNavigate } from "react-router-dom"

const ForgotPassword = () => {

    const navigate = useNavigate()

    const emailRef = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await forgotPassword(emailRef.current.value)
        // console.log(emailRef.current.value)
        alert("Check your email to preceed")
        navigate("/")
        window.location.reload(false)
        //.then(() => {emailRef.current.value = ""; alert("Check your email to proceed")}).catch(err => console.log(err))
        //alert("A password reset has been sent to your email, check your email and proceed from there")
        //console.log(emailRef.current.value)
    }

    return(
        <div className="forgot_password_container">
            <form className="forgot_password_box" onSubmit={(e) => handleSubmit(e)}>
                <h3 className="forgot_title">Resetting password</h3>
                <p className="forgot_descrip">
                    Provide the email address you used when you created your account
                </p>
                <div className="forgot_input_box">
                    <input 
                        type="email" 
                        className="forgot_input" 
                        required="required" 
                        placeholder="What's your email address?"
                        ref={emailRef}/>
                </div>
                <button className="forgot_submitter">Confirm</button>
            </form>
        </div>
    )
}

export default ForgotPassword
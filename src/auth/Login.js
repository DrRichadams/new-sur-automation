import React from "react";
import { useNavigate } from "react-router-dom"
import { connect } from "react-redux"
import "./styles/login.css"
import { FiLock, FiUser, FiChevronRight } from "react-icons/fi"
import { makeDisplay } from "../store/actions/navbarActions"

const Login = ({ changeDisplay }) => {

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

        setTimeout(() => {
            navigate("./dashboard")
            window.location.reload(true)
        }, 1000)
        
    }

    console.log("Dispatch action", changeDisplay)

    React.useEffect(() => console.log("Credentials", credentialInputs), [credentialInputs])

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
                    <button className="submit_btn" onClick={() => console.log("Logging in")}>
                        <span>LOGIN</span>
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
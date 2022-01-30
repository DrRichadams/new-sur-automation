import React from "react"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import { FiAlertTriangle, FiAlertCircle, FiChevronLeft, FiChevronRight } from "react-icons/fi"

const CreateDetails = ({ isDone, setIsDone }) => {

    const navigate = useNavigate()

    const [ isDuplicate, setIsDuplicate ] = React.useState(false)

    const [ errorState, setErrorState ] = React.useState({
        select_class: "",
        select_gender: "",
        new_password: ""
    })

    const [ inputCollector, setInputCollector ] = React.useState({
        name: "",
        surname: "",
        email: "",
        //class: "",
        gender: "",
        new_password: "",
        confirm_password: "",
    })

    const collectorManager = (e) => {
        if(e.target.value === "gender") {
            setInputCollector({
                ...inputCollector,
                [ e.target.id ]: "",
            })
        } else {
            setInputCollector({
                ...inputCollector,
                [ e.target.id ]: e.target.value
            })
        }
        
    }

    const collectionSubmit =(e) => {
        e.preventDefault()
        // if(inputCollector.class == "You are a class teacher of which class?" || inputCollector.class == "") {
        //     setErrorState({
        //         ...errorState,
        //         select_class: "You are suppossed to select your class to continue!"
        //     })
        // } else {
            if(inputCollector.gender === "Gender" || inputCollector.gender === "") {
                setErrorState({
                    ...errorState,
                    select_gender: "You did not select your gender!"
                })
            } else {
                if( inputCollector.new_password !== inputCollector.confirm_password ) {
                    setErrorState({
                        ...errorState,
                        new_password: "Your passwords do not match, try again!"
                    })
                } else {
                    console.log("Succeded")
                    setIsDone(true)
                }
            }
        }
    // }

    React.useEffect(() => { console.log("My collection",inputCollector) }, [inputCollector])

    const payload_firestore = {
        user_id: uuidv4(),
        name: inputCollector.name,
        surname: inputCollector.surname,
        email: inputCollector.email,
        gender: inputCollector.gender,
        password: inputCollector.new_password,
        userType: "class_teacher",
        class: "",
        isAllowed: false,
    }

    console.log("Ten rings", payload_firestore)

    return(
        <div className="create_details_container" style={{ display: isDone ? "none":"block" }}>
            <div className="error_box_container" style={{ display: isDuplicate ? "block":"none" }}>
            <div className="error_box">
                <FiAlertTriangle size={90} color="orangered" />
                <p className="error_box_warning">WARNING</p>
                <p className="error_box_message">
                    There is already an account created with the email you provided
                </p>
                <button 
                    className="error_box_try_again_btn"
                    onClick={() => {
                        setTimeout(() => {
                            setIsDuplicate(false)
                        }, 500)
                    }}
                    >
                    <FiChevronLeft className="chev_left" size={25}/>
                    <p>Try again</p>
                    <FiChevronRight className="chev_right" size={25}/>
                </button>
            </div>
            </div>
            <h3 className="create_account_main_title">Create account</h3>
                <p className="create_account_second_title">
                    Provide the following details
                </p>
                <form className="create_details_main_form" onSubmit={(e) => collectionSubmit(e)}>
                    <input 
                        type="text" 
                        className="create_name" 
                        placeholder="Name?" 
                        required="required" 
                        id="name"
                        onChange={(e) => collectorManager(e)}
                        />
                    <input 
                        type="text" 
                        className="create_surname" 
                        placeholder="Surname?" 
                        required="required" 
                        id="surname"
                        onChange={(e) => collectorManager(e)}
                        />
                    <input 
                        type="email" 
                        className="create_email" 
                        placeholder="Email?" 
                        required="required" 
                        id="email"
                        onChange={(e) => collectorManager(e)}
                        />

                    {/* <div className="no_input_message">{ errorState.select_class }</div>
                    <select 
                        className="class_select"
                        id="class"
                        onChange={(e) => collectorManager(e)}
                        >
                        <option value="class"></option>
                        <option value="9b">9B</option>
                        <option value="10A">10A</option>
                        <option value="10C">10C</option>
                        <option value="8D">8D</option>
                    </select> */}
                   
                    <div className="no_input_message">{ errorState.select_gender }</div>
                    <select 
                        className="gender_select"
                        id="gender"
                        onChange={(e) => {
                            collectorManager(e)
                            setErrorState({ ...errorState, select_gender: "" })
                        }}
                        >
                        <option value="gender">Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>

                    <div className="no_input_message">{ errorState.new_password }</div>
                    <input 
                        type="password" 
                        className="create_password" 
                        placeholder="New password?" 
                        required="required" 
                        id="new_password"
                        onChange={(e) => {
                            collectorManager(e)
                            setErrorState({
                                ...errorState,
                                new_password: ""
                            })
                        }}
                        />
                    <input 
                        type="password" 
                        className="confirm_password" 
                        placeholder="Confirm password?" 
                        required="required" 
                        id="confirm_password"
                        onChange={(e) => {
                            collectorManager(e)
                            setErrorState({
                                ...errorState,
                                new_password: ""
                            })
                        }}
                        />
                    <div className="create_details_btns">
                        <div className="cancel_create" onClick={() => navigate("/")}>Cancel</div>
                        <button className="aprove_create">Create</button>
                    </div>
                </form>
        </div>
    )
}

export default CreateDetails
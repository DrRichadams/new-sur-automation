import React from "react"
import { FiLogIn } from "react-icons/fi"
import "./styles/create_account.css"
import CreateDetails from "./CreateDetails"
import CreateSuccess from "./CreateSuccess"

const CreateAccount = () => {

    const [ isDone, setIsDone ] = React.useState(false)

    return (
        <div className="create_account_container">
            <div className="create_account_main_box">
                <CreateDetails isDone={isDone} setIsDone={setIsDone}/>
                <CreateSuccess isDone={isDone} />
            </div>
        </div>
    ) 
}

export default CreateAccount
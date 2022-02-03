import React from "react"
import "./styles/unassigned.css"

const Unassigned = () => {

    const [ grades ] = React.useState([ 1,2,3,4,5,6,7,8,9,10,11,12 ])
    const [ sampleClasses ] = React.useState(["9A", "10B", "8C", "11A"])
    const [ teachers ] = React.useState([
        "Jake Kobe", "Daniel Marie", "Ferguson Chuck", "Jonas Arwin", "Thomas Edison", "Silence Meandyou",
    ])

    const [ selectedGrade, setSelectedGrade ] = React.useState("")

    React.useEffect(() => {
        if(selectedGrade === "select_grade" || selectedGrade === "") {
            setChosenGrade(false)
        } else {
            setChosenGrade(true)
        }
    }, [selectedGrade])

    const [ chosenGrade, setChosenGrade ] = React.useState(false)
    return (
        <div className="unassigned_container">
            <div className="unassigned_main_title">
                <p>Assign classes to teachers</p>
                <select onChange={(e) => {
                    setSelectedGrade(e.target.value)
                }}>
                    <option value="select_grade">Select grade</option>
                    { grades.map(grade => <option>{grade}</option>) }
                </select>
            </div>
            <div className="unassigned_second_title">Available teachers</div>
            <div className="available_teacher">
                {
                    teachers.map(sin => (
                        <div className="sin_teacher_box"> 
                    <div className="teacher_name">
                        <p>{sin}</p>
                    </div>
                    {/* <div className="select_title">Select class</div> */}
                    <select className="available_classes" disabled={!chosenGrade}>
                        <option value="no_select">Select class</option>
                        { sampleClasses.map(sin => <option key={Math.random()}>{sin}</option>) }
                    </select>
                    <button className="assign_btn">ASSIGN</button>
                </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Unassigned
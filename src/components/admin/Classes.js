import React from "react"
import "./styles/classes.css"

const Classes = () => {
    const [ selected, setSelected ] = React.useState({ 
        one: false, two: false, three: false, four: false, five: false, six: true, seven: false, eight: false, nine: false, ten: false, eleven: false, twelve: false,
    })

    const resetBtnStyles = (e) => {
        setSelected({
            ...selected, one: false, two: false, three: false, four: false, five: false, six: false, seven: false, eight: false, nine: false, ten: false, eleven: false, twelve: false, [ e.target.id ]: true
        })
    }

    const [ users ] = React.useState([
        { name: "Jack Ma", class: "6A", userType: "class_teacher" },
        { name: "Mary Gobles", class: "6B", userType: "class_teacher" },
        { name: "Sabastiam Manrol", class: "6C", userType: "class_teacher" },
        { name: "Sally Gunda", class: "6D", userType: "class_teacher" },
        { name: "Jackson Fury", class: "6E", userType: "class_teacher" },
        { name: "Michael Rodriguez", class: "6F", userType: "class_teacher" },
        { name: "Feicia Malitia", class: "6G", userType: "class_teacher" },
        { name: "John Wick", class: "6H", userType: "class_teacher" },
        { name: "Pharrel Williams", class: "6I", userType: "class_teacher" },
        { name: "MArvel Captain", class: "6J", userType: "class_teacher" },
    ])

    return (
        <div className="unassigned_container">
            <div className="classes_main_title">
                <p>CLASSES</p>
            </div>
            <div className="select_grade_bar">
                <div className="select_grade_title">Select grade</div>
                <div className="select_grade_choices">
                    <div className="grade_sin_box" style={{ 
                        backgroundColor: selected.one ? "rgb(1,161,231)":"transparent",
                        color: selected.one ? "#fff":"#111"
                     }} id="one" onClick ={(e) => resetBtnStyles(e)}>1</div>

                    <div className="grade_sin_box" style={{ 
                        backgroundColor: selected.two ? "rgb(1,161,231)":"transparent",
                        color: selected.two ? "#fff":"#111"
                     }}
                     id="two"
                     onClick ={(e) => resetBtnStyles(e)}
                     >2</div>
                     <div className="grade_sin_box" style={{ 
                        backgroundColor: selected.three ? "rgb(1,161,231)":"transparent",
                        color: selected.three ? "#fff":"#111"
                     }} id="three" onClick ={(e) => resetBtnStyles(e)} >3</div>
                    <div className="grade_sin_box" style={{ 
                        backgroundColor: selected.four ? "rgb(1,161,231)":"transparent",
                        color: selected.four ? "#fff":"#111"
                     }} id="four" onClick ={(e) => resetBtnStyles(e)} >4</div>
                    <div className="grade_sin_box" style={{ 
                        backgroundColor: selected.five ? "rgb(1,161,231)":"transparent",
                        color: selected.five ? "#fff":"#111"
                     }} id="five" onClick ={(e) => resetBtnStyles(e)} >5</div>
                    <div className="grade_sin_box" style={{ 
                        backgroundColor: selected.six ? "rgb(1,161,231)":"transparent",
                        color: selected.six ? "#fff":"#111"
                     }} id="six" onClick ={(e) => resetBtnStyles(e)} >6</div>
                      <div className="grade_sin_box" style={{ 
                        backgroundColor: selected.seven ? "rgb(1,161,231)":"transparent",
                        color: selected.seven ? "#fff":"#111"
                     }} id="seven" onClick ={(e) => resetBtnStyles(e)} >7</div>
                      <div className="grade_sin_box" style={{ 
                        backgroundColor: selected.eight ? "rgb(1,161,231)":"transparent",
                        color: selected.eight ? "#fff":"#111"
                     }} id="eight" onClick ={(e) => resetBtnStyles(e)} >8</div>
                      <div className="grade_sin_box" style={{ 
                        backgroundColor: selected.nine ? "rgb(1,161,231)":"transparent",
                        color: selected.nine ? "#fff":"#111"
                     }} id="nine" onClick ={(e) => resetBtnStyles(e)} >9</div>
                    <div className="grade_sin_box" style={{ 
                        backgroundColor: selected.ten ? "rgb(1,161,231)":"transparent",
                        color: selected.ten ? "#fff":"#111"
                     }} id="ten" onClick ={(e) => resetBtnStyles(e)} >10</div>
                    <div className="grade_sin_box" style={{ 
                        backgroundColor: selected.eleven ? "rgb(1,161,231)":"transparent",
                        color: selected.eleven ? "#fff":"#111"
                     }} id="eleven" onClick ={(e) => resetBtnStyles(e)} >11</div>
                      <div className="grade_sin_box" style={{ 
                        backgroundColor: selected.twelve ? "rgb(1,161,231)":"transparent",
                        color: selected.twelve ? "#fff":"#111"
                     }} id="twelve" onClick ={(e) => resetBtnStyles(e)} >12</div>
                </div>
            </div>
            <div className="all_classes">
                {
                    users.map(sin => (
                        <div className="sin_class">
                            <div className="sin_class_title_bar">
                                <p>Class {sin.class}</p>
                                <button className="sin_class_view_btn">View</button>
                            </div>
                                <div className="sin_class_details">
                                    <div className="sin_class_username">{sin.name}</div>
                                    <div className="sin_class_userType">{sin.userType}</div>
                                    <div className="sin_class_unassign_btn">
                                        <button className="sin_class_unassign">Unassign class</button>
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Classes
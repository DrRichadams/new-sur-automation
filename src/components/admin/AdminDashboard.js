import React from "react"
import "./styles/admin.css"
import Unassigned from "./Unassigned"
import Classes from "./Classes"
import DefineClasses from "./DefineClasses"

const AdminDashboard = () => { 

    const [ selection, setselection ] = React.useState({
        unassigned: true,
        classes: false
    })

    return (
        <div className="admin_dashboard_container">
            <div className="admin_side_panel">
                <div className="admin_school_name">Windhoek High School</div>
                <button className="define_classes_btn"
                    style={{ 
                        backgroundColor: !selection.unassigned && !selection.classes ? "#fff":"transparent", color: !selection.unassigned && !selection.classes ? "rgb(36,40,80)":"#fff"
                     }}
                     onClick={() => {
                         setselection({ unassigned: false, classes: false })
                     }}
                >Define classes</button>
                <button className="unassigned_btn"
                    style={{ 
                        backgroundColor: selection.unassigned ? "#fff":"transparent", color: selection.unassigned ? "rgb(36,40,80)":"#fff"
                     }}
                     onClick={() => {
                         setselection({ unassigned: true, classes: false })
                     }}
                >Unassigned teachers</button>
                <button 
                    className="classes_btn"
                    style={{ backgroundColor: selection.classes ? "#fff":"transparent", color: selection.classes ? "rgb(36,40,80)":"#fff"}}
                    onClick={() => {setselection({ unassigned: false, classes: true })
                    }}
                >Classes</button>
            </div>
            <div className="admin_right_contents">
                <div className="classes_box" style={{
                    display: selection.unassigned ? "block":"none"
                }}><Unassigned /></div>
                <div className="unassigned_box" style={{
                    display: selection.classes ? "block":"none"
                }}><Classes /></div>
                <div className="unassigned_box" style={{
                    display: !selection.classes && !selection.unassigned ? "block":"none"
                }}><DefineClasses /></div>
            </div>
        </div>
    )
}

export default AdminDashboard
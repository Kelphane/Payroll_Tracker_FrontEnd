/* Imports */
import React from "react";

/* CSS Import */
import "./EmployeeNav.css";

const EmployeeNav = (props) => {

    const handleClick = (event) => {
        props.getNavVariable(event.target.name);
    }
    
    return(
        <nav className="employee-nav">
            <button name="all" onClick={handleClick}>All Employees</button>
            <button name="create" onClick={handleClick}>Create Employee</button>
        </nav>
    );
}

export default EmployeeNav;
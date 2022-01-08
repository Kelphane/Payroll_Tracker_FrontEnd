import React from "react";

const EmployeeNav = (props) => {

    const handleClick = (event) => {
        props.getNavVariable(event.target.name);
    }
    
    return(
        <nav>
            <button name="create" onClick={handleClick}>Create Employee</button>
            <button name="all" onClick={handleClick}>All Employees</button>
        </nav>
    );
}

export default EmployeeNav;
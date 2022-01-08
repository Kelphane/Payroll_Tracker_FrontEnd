/* Imports */
import React, { useEffect, useState } from "react";
import axios from "axios";

/* Component Imports */
import EmployeeNav from "./EmployeeNav/EmployeeNav";

const Employees = ({ userId }) => {

    /* Employee List Related Functions */
    const [employeeList, setEmployeeList] = useState();
    const [nav, setNav] = useState("all");

    useEffect(() => {getEmployees();}, []);

    /* GETS All Employees by User ID */
    const getEmployees = async () => {
        try {
            let response = await axios.get(`http://localhost:5000/api/employee/user/${userId}`);
            setEmployeeList(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    /* Gets Nav Variable */
    const getNavVariable = (navigation) => {
        setNav(navigation);
    }

    return(
        <div>
            <EmployeeNav getNavVariable={getNavVariable}/>
            {nav === "create" && <h1>Create Employee!</h1>}
            {nav === "all" && <h1>All Employee!</h1>}
        </div>
    );
}

export default Employees;
/* Imports */
import React, { useEffect, useState } from "react";
import axios from "axios";

/* Component Imports */
import EmployeeNav from "./EmployeeNav/EmployeeNav";
import CreateEmployee from "./CreateEmployee/CreateEmployee";
import EmployeeDisplay from "./EmployeeDisplay/EmployeeDisplay";

const Employees = ({ userId }) => {

    /* STATE */
    const [nav, setNav] = useState("all");

    /* Creates a New Employee in DB */
    const createEmployee = async (employee) => {
        let id = userId;

        try {
            await axios.post(`http://localhost:5000/api/employee`, 
                {
                    userId: id,
                    name: employee.name,
                    payRate: employee.payrate,
                    overTime: employee.overtime,
                    status: employee.status,
                    daysAvail: employee.daysavail
                }
            );
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
            {nav === "all" && <EmployeeDisplay userId={userId} />}
            {nav === "create" && <CreateEmployee createEmployee={createEmployee} />}
        </div>
    );
}

export default Employees;
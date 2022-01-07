/* Imports */
import React, { useEffect, useState } from "react";
import axios from "axios";

const Employees = ({ userId }) => {
    /* Employee List Related Functions */
    const [employeeList, setEmployeeList] = useState();
    useEffect(() => {getEmployees();});

    /* GETS All Employees by User ID */
    const getEmployees = async () => {
        try {
            let response = await axios.get(`http://localhost:5000/api/employee/user/${userId}`);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div>
            
        </div>
    );
}

export default Employees;
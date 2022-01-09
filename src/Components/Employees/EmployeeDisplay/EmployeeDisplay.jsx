/* Imports */
import React, { useState, useEffect} from "react";
import axios from "axios";

const EmployeeDisplay = ({ userId }) => {
    /* STATE */
    const [employeeList, setEmployeeList] = useState();

    /* EFFECT */
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

    const validateList = () => {
        if(employeeList === undefined || employeeList === []){
            return false;
        }else{
            return true;
        }
    }

    return(
        <div>
            {validateList() && <h1>Success!</h1>}
        </div>
    );
}

export default EmployeeDisplay;
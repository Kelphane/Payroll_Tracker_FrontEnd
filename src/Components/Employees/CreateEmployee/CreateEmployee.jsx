import React, { useState } from "react";

const CreateEmployee = ({ id }) => {
    const [employee, setEmployee] = useState({
        userId: "",
        name: "",
        payRate: 0,
        overTime: 0,
        status: "AVAILABLE",
        daysAvail: []
    });

    return(
        <form>
            <label htmlFor="employeeName">Name:</label>
            <input id="employeeName"/>

            <label htmlFor="employeePay">Pay Rate:</label>
            <input id="employeePay"/>

            <label htmlFor="employeeOT">Over Time Rate:</label>
            <input id="employeeOT"/>

            <h5>Status</h5>
            <input type="radio" id="available" name="status" />
            <label htmlFor="available">Available</label>

            <input type="radio" id="unavailable" name="status" />
            <label htmlFor="unavailable">Unavailable</label>
            <label></label>
        </form>
    );
}

export default CreateEmployee;
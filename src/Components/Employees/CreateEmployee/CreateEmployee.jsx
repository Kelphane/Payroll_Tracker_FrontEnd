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

            <h5>Days Available to Work</h5>
            <input type="checkbox" id="mon" value="mon" />
            <label htmlFor="mon">Monday</label>

            <input type="checkbox" id="tue" value="tue" />
            <label htmlFor="tue">Tuesday</label>

            <input type="checkbox" id="wed" value="wed"/>
            <label htmlFor="wed">Wednesday</label>

            <input type="checkbox" id="thu" value="thu" />
            <label htmlFor="thu">Thursday</label>

            <input type="checkbox" id="fri" value="fri" />
            <label htmlFor="fri">Friday</label>

            <input type="checkbox" id="sat" value="sat" />
            <label htmlFor="sat">Saturday</label>

            <input type="checkbox" id="sun" value="sun"/>
            <label htmlFor="sun">Sunday</label>
        </form>
    );
}

export default CreateEmployee;
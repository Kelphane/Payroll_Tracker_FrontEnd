import React, { useState, useEffect } from "react";

const CreateEmployee = ({ userId }) => {
    const [employee, setEmployee] = useState({
        name: "",
        payrate: 0,
        overtime: 0,
        status: "available",
        daysavail: []
    });

    const handleChange = (event) => {
        let newEmployee = {}

        switch(event.target.name){
            case "name":
                newEmployee = {
                    name: event.target.value,
                    payrate: employee.payrate,
                    overtime: employee.overtime,
                    status: employee.status,
                    daysavail: employee.daysavail
                }
                break;
            case "payrate":
                newEmployee = {
                    name: employee.name,
                    payrate: event.target.value,
                    overtime: employee.overtime,
                    status: employee.status,
                    daysavail: employee.daysavail
                }
                break;
            case "overtime":
                newEmployee = {
                    name: employee.name,
                    payrate: employee.payrate,
                    overtime: event.target.value,
                    status: employee.status,
                    daysavail: employee.daysavail
                }
                break;
            case "status":
                newEmployee = {
                    name: employee.name,
                    payrate: employee.payrate,
                    overtime: employee.overtime,
                    status: event.target.value,
                    daysavail: employee.daysavail
                }
                break;
            case "daysavail":
                let dayList = validateDay(event);
                newEmployee = {
                    name: employee.name,
                    payrate: employee.payrate,
                    overtime: employee.overtime,
                    status: employee.status,
                    daysavail: dayList
                }
                break;
        }
        setEmployee(newEmployee);
    }

    /* Validates the User Inputted Day */
    const validateDay = (event) => {
        let currentDays = employee.daysavail;
        let newDay = event.target.value;
        let isChecked = event.target.checked;
        
        if(currentDays === undefined || currentDays === []){
            return [newDay];
        }else if(!currentDays.includes(newDay) && isChecked === true){
            return currentDays.concat([newDay]);
        }else if(currentDays.includes(newDay) && isChecked === false){
            return currentDays.filter(d => {
                if(d !== newDay){
                    return true;
                }else{
                    return false;
                }
            });
        }

    }

    return(
        <form>
            <label htmlFor="employeeName">Name:</label>
            <input type="text" id="employeeName" name="name" onChange={handleChange} />

            <label type="number" htmlFor="employeePay">Pay Rate:</label>
            <input id="employeePay" name="payrate" onChange={handleChange} />

            <label type="number" htmlFor="employeeOT">Over Time Rate:</label>
            <input id="employeeOT" name="overtime" onChange={handleChange} />

            <h5>Status</h5>
            <input type="radio" id="available" name="status" value="available" onChange={handleChange} />
            <label htmlFor="available">Available</label>

            <input type="radio" id="unavailable" name="status" value="unavailable" onChange={handleChange} />
            <label htmlFor="unavailable">Unavailable</label>

            <h5>Days Available to Work</h5>
            <input type="checkbox" id="mon" name="daysavail" value="mon" onChange={handleChange} />
            <label htmlFor="mon">Monday</label>

            <input type="checkbox" id="tue" name="daysavail" value="tue" onChange={handleChange} />
            <label htmlFor="tue">Tuesday</label>

            <input type="checkbox" id="wed" name="daysavail" value="wed" onChange={handleChange} />
            <label htmlFor="wed">Wednesday</label>

            <input type="checkbox" id="thu" name="daysavail" value="thu" onChange={handleChange} />
            <label htmlFor="thu">Thursday</label>

            <input type="checkbox" id="fri" name="daysavail" value="fri" onChange={handleChange} />
            <label htmlFor="fri">Friday</label>

            <input type="checkbox" id="sat" name="daysavail" value="sat" onChange={handleChange} />
            <label htmlFor="sat">Saturday</label>

            <input type="checkbox" id="sun" name="daysavail" value="sun" onChange={handleChange} />
            <label htmlFor="sun">Sunday</label>
        </form>
    );
}

export default CreateEmployee;
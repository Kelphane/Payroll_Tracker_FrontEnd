/* Imports */
import React, { useState, useEffect } from "react";

/* CSS Imports */
import "./CreateEmployee.css";

const CreateEmployee = (props) => {
    const [employee, setEmployee] = useState({
        name: "",
        payrate: 0,
        overtime: 0,
        status: "",
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

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createEmployee(employee);
    }

    return(
        <form onSubmit={handleSubmit} className="employee-form">
            <div>
                <label>
                    Name:
                    <input type="text" name="name" onChange={handleChange} />
                </label>
                

                <label>
                    Pay Rate:
                    <input type="number" name="payrate" onChange={handleChange} />
                </label>
               

                <label  htmlFor="employeeOT">
                    Over Time:
                    <input type="number" name="overtime" onChange={handleChange} />
                </label>
            </div>

            <div>
                <h5>Status</h5>
                <input type="radio" id="available" name="status" value="available" onChange={handleChange} />
                <label htmlFor="available">Available</label>

                <input type="radio" id="unavailable" name="status" value="unavailable" onChange={handleChange} />
                <label htmlFor="unavailable">Unavailable</label>
            </div>

            <div>
                <h5>Days Available to Work</h5>
                
                <label>
                    Monday
                    <input type="checkbox" name="daysavail" value="mon" onChange={handleChange} />
                </label>

                
                <label>
                    Tuesday
                    <input type="checkbox" name="daysavail" value="tue" onChange={handleChange} />
                </label>

                
                <label>
                    Wednesday
                    <input type="checkbox" name="daysavail" value="wed" onChange={handleChange} />
                </label>

                
                <label>
                    Thursday
                    <input type="checkbox" name="daysavail" value="thu" onChange={handleChange} />
                </label>

                
                <label>
                    Friday
                    <input type="checkbox" name="daysavail" value="fri" onChange={handleChange} />
                </label>

                
                <label>
                    Saturday
                    <input type="checkbox" name="daysavail" value="sat" onChange={handleChange} />
                </label>

                
                <label>
                    Sunday
                    <input type="checkbox" name="daysavail" value="sun" onChange={handleChange} />
                </label>
            </div>

            <button type="submit">Create</button>
        </form>
    );
}

export default CreateEmployee;
import React from "react";

const EmployeeCard = ({ employeeList }) => {

    return(
        <div>
            {employeeList.map(employee => {
                return(
                    <div>
                        {employee.name}
                    </div>
                );
            })}
        </div>
    );
}

export default EmployeeCard;
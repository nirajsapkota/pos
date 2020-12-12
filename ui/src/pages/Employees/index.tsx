import React, { FC, useState, useEffect } from "react";
import axios from "axios";

import { ReactComponent as EmployeeManagementIcon } from "../../assets/icons/employee-management.svg";

const Employees: FC = () => {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {

    axios({
      method: "GET",
      url: "http://localhost:4000/employees"
    })
    .then(response => {
      setEmployees(response.data.employees);
    })
    .catch(error => {
      console.log(`An error occurred while fetching the employees: ${error}`);
    });

  }, []);

  return (
    <div className="content-container">
      <div className="content-wrapper">
        
        {/* Page Title */}
        <div className="employee-wrapper flex-row align-center spacer-md-bottom">
          <EmployeeManagementIcon width={64} height={64} style={{marginRight: 15}} />
          <div className="typography-bold" style={{fontSize: 24}}>Employee Management </div>
        </div>

        {/* Table Headers */}
        <div className="employee-header-container">
          <div className="employee-header-image"></div>        
          <div className="employee-image-wrapper"> </div>
          <div className="employee-name-position-wrapper">
            <div className="typography-bold">Name</div>
          </div>
          <div className="employee-status-wrapper">
            <div className="typography-bold">Status</div>
          </div>
          <div className="employee-email-wrapper">
            <div className="typography-bold">Email</div>
          </div>
          <div className="employee-contact-number-wrapper">
            <div className="typography-bold">Contact</div>
          </div>
        </div>

        {/* Table Data */}
        <div>
          {employees.map((employee: any) =>       
            <div className="employee-container" key={employee._id}>
              <div className="employee-image-wrapper">
                <div className="employee-image typography-bold">NS</div>
              </div>
              <div className="employee-name-position-wrapper">
                <div>
                  <div className="employee-name typography-normal">{employee.name}</div>
                  <div className="employee-position typography-light">{employee.position}</div>
                </div>
              </div>
              <div className="employee-status-wrapper">
                <div className="employee-status typography-light">{employee.status}</div>
              </div>
              <div className="employee-email-wrapper">
                <div className="employee-email typography-light">{employee.mail}</div>
              </div>
              <div className="employee-contact-number-wrapper">
                <div className="employee-contact-number typography-light">{employee.contactNumber}</div>
              </div>
            </div>
          )}
        </div>

        
      </div>
    </div>
  );
}

export default Employees;
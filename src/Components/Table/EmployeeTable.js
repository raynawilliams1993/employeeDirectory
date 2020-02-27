import React from 'react';
import { Table } from 'reactstrap';
import "./style.css"

const EmployeeTable = (props) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Image</th>
          <th>Phone</th>
          <th>DOB</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map(employee => (
        <tr key={employee.id}>
          <th scope="row">{employee.id}</th>
          <td>{employee.name}</td>
          <td>
            <img src={employee.image} alt="emp"/>
            </td>
          <td>{employee.phone}</td>
          <td>{employee.dob}</td>
          <td>{employee.email}</td>
        </tr>
          
        ))}
      </tbody>
    </Table>
  );
}


export default EmployeeTable;
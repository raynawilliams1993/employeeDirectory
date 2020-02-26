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
        <tr>
          <th scope="row">{props.id}</th>
          <td>{props.name}</td>
          <td>{props.image}</td>
          <td>{props.phone}</td>
          <td>{props.dob}</td>
          <td>{props.email}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default EmployeeTable;
import React from "react";

const Table = (props) => {
  const { body } = props;
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>EmployeeID</th>
          <th>Department</th>
          <th>Email id</th>
          <th>DOJ</th>
        </tr>
      </thead>
      <tbody>
        {body.map((item) => {
          <tr>
            <td>X</td>
            <td>{item.name}</td>
            <td>{item.employeeId}</td>
            <td>{item.department}</td>
            <td>{item.email}</td>
            <td>{item.doj}</td>
          </tr>;
        })}
      </tbody>
    </table>
  );
};

export default Table;

import { connect } from "react-redux";
import { deleteTableRow } from "../../redux/action";
import React from "react";
import styles from "./table.module.css";

const Table = (props) => {
  // Destructure employee array and delete function
  const { data, deleteTableRow } = props;
  return (
    <div className={styles.tableContainer}>
      <table className={styles.Table}>
        <thead>
          <tr>
            <th>
              <i class="fas fa-calendar-minus"></i>
            </th>
            <th>Name</th>
            <th>EmployeeID</th>
            <th>Department</th>
            <th>Email id</th>
            <th>DOJ</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <button
                    className="del-btn size-sm"
                    onClick={() => deleteTableRow(item.id)}
                  >
                    <i>
                      <strong>X</strong>
                    </i>
                  </button>
                </td>
                <td>{item.name}</td>
                <td>{item.employeeId}</td>
                <td>{item.department}</td>
                <td>{item.email}</td>
                <td>{item.doj}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
const mapStateToProps = (state) => ({
  data: state.data || [],
});

const mapDispatchToProps = {
  deleteTableRow,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);

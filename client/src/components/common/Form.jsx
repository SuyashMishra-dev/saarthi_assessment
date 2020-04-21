import Button from "./Button";
import { connect } from "react-redux";
import { loadingFormHide } from "../../redux/action";
import React from "react";

export const Form = (props) => {
  // Destructure all fields
  const {
    name,
    employeeId,
    department,
    email,
    doj,
    submitBtn,
    clearForm,
    inputChange,
    loadingFormHide,
  } = props;
  return (
    <div className="modal-container">
      <form className="modal">
        <div>
          <button onClick={loadingFormHide} className="close-btn">
            <i>
              <strong>X</strong>
            </i>
          </button>
        </div>
        <h3 className="center">Fill Employee Details</h3>
        <div className="form-body">
          <div>
            <label>Name</label>
            <input
              type="text"
              onChange={inputChange}
              name="name"
              value={name}
              required
            />
          </div>
          <div>
            <label>Employee ID</label>
            <input
              type="number"
              onChange={inputChange}
              name="employeeId"
              value={employeeId}
              required
            />
          </div>
          <div>
            <label>Department</label>
            <select
              onChange={inputChange}
              name="department"
              value={department}
              required
            >
              <option value="">Select Department</option>
              <option value="HR">HR</option>
              <option value="Research">Research</option>
              <option value="Front-End">Front-End</option>
              <option value="Back-End">Back-End</option>
              <option value="Full-Stack">Full-Stack</option>
            </select>
          </div>
          <div>
            <label>Email Id</label>
            <input
              type="email"
              onChange={inputChange}
              name="email"
              value={email}
              required
            />
          </div>
          <div>
            <label>Date Of Joining</label>
            <input
              type="date"
              onChange={inputChange}
              name="doj"
              value={doj}
              required
            />
          </div>
          <div>
            <Button
              type="submit"
              classes="light-btn"
              submit={submitBtn}
              title="Submit"
            />
            <Button
              type="reset"
              classes="dark-btn"
              submit={clearForm}
              title="Clear"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  loadingFormHide,
};

export default connect(null, mapDispatchToProps)(Form);

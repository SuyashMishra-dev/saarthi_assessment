import React from "react";
import Button from "./Button";

export const Form = () => {
  const {
    name,
    employeeId,
    department,
    email,
    doj,
    submitBtn,
    clearForm,
    inputChange,
  } = props;
  return (
    <div>
      <form>
        <div>
          <label>Name</label>
          <input
            type="text"
            onChange={(e) => inputChange()}
            name="name"
            value={name}
          />
        </div>
        <div>
          <label>Employee ID</label>
          <input
            type="number"
            onChange={(e) => inputChange()}
            name="employeeId"
            value={employeeId}
          />
        </div>
        <div>
          <label>Department</label>
          <input
            type="text"
            onChange={(e) => inputChange()}
            name="department"
            value={department}
          />
        </div>
        <div>
          <label>Email Id</label>
          <input
            type="email"
            onChange={(e) => inputChange()}
            name="email"
            value={email}
          />
        </div>
        <div>
          <label>Date Of Joining</label>
          <input
            type="date"
            onChange={(e) => inputChange()}
            name="doj"
            value={doj}
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
      </form>
    </div>
  );
};

export default Form;

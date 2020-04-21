import React, { Component } from "react";
import "./App.css";
import Button from "./components/common/Button";
import From from "./components/common/Form";
import Table from "./components/common/Table";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      employeeId: "",
      department: "",
      email: "",
      doj: "",
      showForm: false,
    };
  }
  // input box handle
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // Submit form handle
  formSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({
      showForm: false,
    });
  };

  // Clear from inputs
  clearFormInputs = () => {
    this.setState({
      name: "",
      employeeId: "",
      department: "",
      email: "",
      doj: "",
      showForm: false,
    });

    // Show / Hide Form
    loadForm = () => {
      this.setState({
        showForm: true,
      });
    };
  };

  render() {
    return (
      <>
        <Button
          classes="dark-btn"
          submit={this.loadForm}
          title="New Employee"
        />
        {this.state.showForm ? (
          <From
            name={this.state.name}
            employeeId={this.state.employeeId}
            department={this.state.department}
            email={this.state.email}
            doj={this.state.doj}
            submitBtn={this.formSubmitHandler}
            clearForm={this.clearFormInputs}
          />
        ) : (
          <></>
        )}
        <Table
          body={[
            {
              name: "Suyash",
              employeeId: "21",
              department: "IT",
              email: "sam@121",
              doj: "21/04/2020",
            },
          ]}
        />
      </>
    );
  }
}

export default App;

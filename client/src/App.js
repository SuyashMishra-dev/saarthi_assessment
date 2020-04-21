import "./App.css";
import Button from "./components/common/Button";
import { connect } from "react-redux";
import From from "./components/common/Form";
import nextId from "react-id-generator";
import React, { Component } from "react";
import { submitForm, loadingFormShow, loadingFormHide } from "./redux/action";
import Table from "./components/common/Table";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      name: "",
      employeeId: "",
      department: "",
      email: "",
      doj: "",
    };
  }

  // input function
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // Submit form function
  formSubmitHandler = (e) => {
    // Set to prevent default
    e.preventDefault();

    // Destructure action functions
    const { submitForm, loadingFormHide } = this.props;

    // Generate and set unique id for each employee
    this.setState(
      {
        id: nextId(),
      },
      () => {
        // Check all type of form validation
        if (
          this.state.name === "" &&
          this.state.employeeId === "" &&
          this.state.department === "" &&
          this.state.email === "" &&
          this.state.doj === ""
        ) {
          alert("Check Input Credentials");
        } else if (
          !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
            this.state.email
          )
        ) {
          alert(`${this.state.email} is not a valid email.`);
        } else if (this.state.name.length < 3) {
          alert("Name must be have 3 characters.");
        } else if (this.state.name === "") {
          alert("Name field required");
        } else if (this.state.employeeId === "") {
          alert("Employee id required");
        } else if (this.state.department === "") {
          alert("Department field required");
        } else if (this.state.doj === "") {
          alert("Select date of joining");
        } else {
          // Dispatch data to action
          submitForm(this.state);

          // Clear all input fields
          this.clearFormInputs();

          // Dispatch action for hiding form
          loadingFormHide();
        }
      }
    );
  };

  // Clear from inputs function
  clearFormInputs = () => {
    this.setState({
      name: "",
      employeeId: "",
      department: "",
      email: "",
      doj: "",
    });
  };

  // Show Form function
  loadForm = () => {
    const { loadingFormShow } = this.props;
    // Dispatch action for showing form
    loadingFormShow();
  };

  render() {
    // Destructure employee array and form loading state from props
    const { formLoading, data } = this.props;

    return (
      <>
        <div className="add-employee">
          <Button
            classes="light-btn emp-btn"
            submit={this.loadForm}
            icon={<i className="fas fa-user-plus"></i>}
            title="New Employee"
            type="button"
          />
        </div>
        {formLoading ? (
          <From
            name={this.state.name}
            employeeId={this.state.employeeId}
            department={this.state.department}
            email={this.state.email}
            doj={this.state.doj}
            submitBtn={this.formSubmitHandler}
            clearForm={this.clearFormInputs}
            inputChange={this.handleChange}
          />
        ) : null}
        {data.length > 0 ? <Table /> : null}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  formLoading: state.formLoading,
  data: state.data || [],
});

const mapDispatchToProps = {
  submitForm,
  loadingFormShow,
  loadingFormHide,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

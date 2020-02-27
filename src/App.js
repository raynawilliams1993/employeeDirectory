import React, { Component } from "react";
import Jumbotron from "./Components/Jumbotron";
import Searchbar from "./Components/Searchbar";
import EmployeeTable from "./Components/Table/EmployeeTable"
import employees from "./Components/employees.json"


// import EmployeeTable from "./Components/Table/EmployeeTable";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees: employees,
    search: ""
  };
  componentDidMount = () => {
    console.log(employees)
  }
  removeEmployee = id => {
    // Filter this.state.employees for employees with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee.id !== id);
    // Set this.state.employees equal to the new employees array
    this.setState({ employees });
  };

  handleFormSubmit = () => {
      if (this.state.search == "") {
      this.setState({ employees: employees })
    } else {
      const filterTable = employees.filter(emp => emp.id == this.state.search)
      this.setState({ employees: filterTable })
    }
  };

  handleInputChange = event => {
    console.log(event.target.value);
    this.setState({ search: event.target.value })
  }



  // Map over this.state.employees and render a EmployeeCard component for each employee object
  render = () => {
    return (
      <div>
        <Jumbotron>Employees List</Jumbotron>
        <Searchbar
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <EmployeeTable
          employees={this.state.employees}
        />
        {/* {this.state.employees.map(employee => (

          <EmployeeTable
            removeFriend={this.removeEmployee}
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            phone={employee.phone}
            dob={employee.dob}
            email={employee.email}
          />

        ))} */}
      </div>
    );
  }
}

export default App;


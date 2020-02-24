import React, { Component } from "react";
import EmployeeCard from "./Components/EmployeeCard";
import Jumbotron from "./Components/Jumbotron";
import Searchbar from "./Components/Searchbar";
import employees from "./Components/employees.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees: employees
  };
    componentDidMount =() => {
      console.log(employees)
    }
  removeEmployee = id => {
    // Filter this.state.employees for employees with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee.id !== id);
    // Set this.state.employees equal to the new employees array
    this.setState({ employees });
  };

  // Map over this.state.employees and render a EmployeeCard component for each employee object
  render=() => {
    return (
      <div>
        <Jumbotron>Employees List</Jumbotron>
        <Searchbar>Search an Employee</Searchbar>
        {this.state.employees.map(employee => (
          <EmployeeCard
            removeFriend={this.removeEmployee}
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            phone={employee.phone}
            dob={employee.dob}
            email={employee.email}
          />
        ))}
      </div>
    );
  }
}

export default App;


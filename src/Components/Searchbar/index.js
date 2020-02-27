import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.employees
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="employee"> Search </label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="employee"
          list="employees"
          type="text"
          className="form-control"
          placeholder="type an id!"
          id="employee"
        />
        <button type="button" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
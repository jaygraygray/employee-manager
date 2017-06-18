import React, { Component } from 'react';

class EmployeeList extends Component {
  render() {
    return (
      <div>
        <ul className="listContainer">
          { 
            this.props.employees.map((employee,i) => {
              return (
                <li className="listText" key={i} onClick={ () => { this.props.selectEmployee(employee) }}> { employee.name } </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default EmployeeList;
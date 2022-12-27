import React from "react";

import axios from "axios";
import "./EmpGetUser.css";
const apiUrl = "https://localhost:7006/api/EmpFamilys";

class EmpGetUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      users: [],
      response: {},
    };
  }

  componentDidMount() {
    axios
      .get(apiUrl + "/GetAllEmp")
      .then((response) => response.data)
      .then(
        (result) => {
          this.setState({
            users: result,
          });
        },
        (error) => {
          this.setState({ error });
        }
      );
  }

  deleteUser(id) {
    const { users } = this.state;
    axios.delete(apiUrl + "/DeleteEmpDetails/" + id).then((result) => {
      alert(result.data);
      this.setState({
        response: result,
        users: users.filter((user) => user.id !== id),
      });
    });
  }

  render() {
    const { error, users } = this.state;
    if (error) {
      return <div>Error:{error.message}</div>;
    } else {
      return (
        
        <div id="container">
          <table>
            <thead className="btn-primary">
              <tr>
                <th>EmployeeCode</th>
                <th>DependencyType</th>
                <th>DependencyDob</th>
                <th>Age</th>
                <th>DependencyOccupation</th>
               
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} data-testid="userrow">

                  <td>{user.employeeCode}</td>
                  <td>{user.dependencyType}</td>
                  <td>{user.dependencyDob}</td>
                  <td>{user.age }</td>
                  <td>{user.dependencyOccupation}</td>
                  
                  <td>
                    <div>
                    <button id="del" empid="del"
                      variant="danger"
                      onClick={() => this.deleteUser(user.id)}
                    >
                      Delete
                    </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default EmpGetUser;

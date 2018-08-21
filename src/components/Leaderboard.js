import React, { Component } from "react";
import "../css/Main.css";
import "../css/Leaderboard.css";

class Leaderboard extends Component {
  render() {
    return (
      <table className="table">
        <tr>
          <th>Level</th>
          <th>Name</th>
        </tr>
        {this.props.users.map(user => {
          return (
            <tr>
              <td>{user.level}</td>
              <td>
                <img src={user.pic} alt="" className="userPic" />
                {user.name}
              </td>
            </tr>
          );
        })}
      </table>
    );
  }
}
export default Leaderboard;

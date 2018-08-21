import React, { Component } from "react";
import "../css/Main.css";
import "../css/Leaderboard.css";
import Icon from "@material-ui/core/Icon";

class Leaderboard extends Component {
  render() {
    return (
      <div className="tableDiv">
        <Icon className="closeLeader">
          close
        </Icon>
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
      </div>
    );
  }
}
export default Leaderboard;

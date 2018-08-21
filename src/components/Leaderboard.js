import React, { Component } from "react";
import Sidebar from "./Sidebar";
import "../css/Main.css";
import "../css/Leaderboard.css";
import GoogleLogin from "react-google-login";
import MailRow from "./MailRow";
import MailTemplate from "./MailTemplate";
import Modal from "@material-ui/core/Modal";
import Icon from "@material-ui/core/Icon";

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobileSidebarOpen: true,
      users : [
        {
          name: "aswing",
          pic: "https://avatars0.githubusercontent.com/u/22353313?s=400&v=4"
        }
      ]
    };
  }

  toggleSidebar = () => {
    this.setState(
      {
        isMobileSidebarOpen: !this.state.isMobileSidebarOpen
      },
      () => {
        let sidebar_mobile = document.getElementsByClassName(
          "sidebar_mobile"
        )[0];
        let overlay = document.getElementsByClassName("overlay")[0];
        if (this.state.isMobileSidebarOpen) {
          sidebar_mobile.style.left = 0;
          overlay.style.zIndex = 9;
          overlay.style.opacity = 0.5;
        } else {
          sidebar_mobile.style.left = "-250px";
          overlay.style.zIndex = -1;
          overlay.style.opacity = 0.0;
        }
      }
    );
  };

  render() {
    return (
      <div className="Login">
        <div className="overlay" onClick={this.toggleSidebar} />
        <div className="sidebar" id="sidebar_wrapper">
          <Sidebar
            page={"main"}
            logout={this.logout}
            isLoggedIn={this.state.isLoggedIn}
          />
        </div>
        <div className="sidebar_mobile">
          <Sidebar
            page={"main"}
            logout={this.logout}
            isLoggedIn={this.state.isLoggedIn}
          />
        </div>
        <div className="mainbox">
          <table className="table">
            <tr>
              <th>Rank</th>
              <th>Name</th> 
            </tr>
            { this.state.users.map( (user, rank) => {
              return (
                <tr>
                  <td>{rank+1}</td>
                  <td><img src={user.pic} alt="" className="userPic"/>{user.name}</td> 
                </tr>
              )
            } ) }
          </table>
        </div>
      </div>
    );
  }
}

export default Leaderboard;

import React, { Component } from "react";
import "../css/Sidebar.css";
import sherlock from "../assets/sherDone.png";
import treasure from "../assets/treasureNew.png";
import Button from "@material-ui/core/Button";

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  login = () => {
    return (
      <div>
        <div className="sherlock">
          <img src={sherlock} />
        </div>
        <div className="GameOn">
          <div style={{ color: "white" }}>
            The Game is <span style={{ color: "tomato" }}>ON</span>!
          </div>
          <img src={treasure} />
        </div>
      </div>
    );
  };

  main = () => {
    return (
      <div className="loginSidebar">
        <div className="logo">
          <img src={treasure} style={{ width: "15em" }} />
        </div>
        <div className="userDetails">
          <div id="userName">
            <span id="userPic">PIC</span>
            Joyal A Johney
          </div>
        </div>
        <div className="level">
          <strong>Level:</strong> 1
        </div>
        <div className="logout">
          <Button
            variant="raised"
            color="primary"
            style={{
              fontWeight: "bold"
            }}
          >
            How to Play
          </Button>
          <Button
            variant="contained"
            style={{
              marginTop: "2em",
              backgroundColor: "white",
              color: "purple",
              fontWeight: "bold"
            }}
          >
            logout
          </Button>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="sidebar">
        {this.props.page === "main" ? this.main() : this.login()}
      </div>
    );
  }
}

export default Sidebar;

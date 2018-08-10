import React, { Component } from "react";
import "../css/Sidebar.css";
import sherlock from "../assets/sherDone.png";
import Button from '@material-ui/core/Button';

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  login = () => {
    return (
      <div className="sherlock">
        <img src={sherlock} />
      </div>
    );
  } 
  
  main = () => {
    return(
      <div className="loginSidebar">
        <div className="logo">
          LOGO
        </div>
        <div className="userDetails">
          <p id="userName"> 
            <span id='userPic'>PIC</span>
            Joyal A Johney
          </p>
        </div>
        <div className="points">
          <p><strong>Points</strong>: 30</p>
        </div>
        <div className="logout">
          <Button variant="contained">
            logout
          </Button> 
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="sidebar">
       {
         this.props.page === "main" ? this.main() : this.login()
       }
      </div>
    );
  }
}

export default Sidebar;

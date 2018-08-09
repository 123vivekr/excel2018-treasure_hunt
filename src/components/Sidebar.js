import React, { Component } from "react";
import "../css/Sidebar.css";
import sherlock from "../assets/sherDone.png";

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar">
        <div className="sherlock">
          <img src={sherlock} style={{ backgroundSize: "cover" }} />
          <div className="GameOn" style={{ color: "white", zIndex: 1 }}>
            The Game is <span style={{ color: "tomato" }}>ON</span>!
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;

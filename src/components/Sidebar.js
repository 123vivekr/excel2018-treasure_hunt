import React, { Component } from "react";
import "../css/Sidebar.css";
import sherlock from "../assets/sherDone.png";
import treasure from "../assets/treasureChest.jpg";

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar">
        <div className="sherlock">
          <img src={sherlock} />
        </div>
        <div className="GameOn">
          <img src={treasure} />
        </div>
      </div>
    );
  }
}

export default Sidebar;

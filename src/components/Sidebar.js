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
        </div>
      </div>
    );
  }
}

export default Sidebar;

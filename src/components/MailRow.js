import React, { Component } from "react";
import Sidebar from "./Sidebar";
import "../css/MailStyles.css";

const styles = {
  mailRow: {
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.87)",
    height: "50px",
    display: "flex",
    alignItems: "center",
    color: "rgba(255,255,255,0.87)",
    paddingLeft: "24px",
    margin: "4px",
    borderRadius: "15px"
  },
  title: {
    color: "yellow",
    overflow: "ellipsis"
  },
  timestamp: {
    fontWeight: 700
  }
};

class MailRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, timestamp } = this.props;
    return (
      <div style={styles.mailRow}>
        <span style={styles.title}>{title}</span>
        <span style={styles.timestamp}>{timestamp}</span>
      </div>
    );
  }
}
export default MailRow;

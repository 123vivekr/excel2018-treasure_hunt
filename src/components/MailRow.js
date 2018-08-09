import React, { Component } from "react";
import Sidebar from "./Sidebar";
import "../css/MailStyles.css";

const styles = {
  mailRow: {
    backgroundColor: "rgba(0,0,0,0.87)",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "rgba(255,255,255,0.87)",
    padding: "0px 24px 0px 24px",
    margin: "4px",
    borderRadius: "15px"
  },
  title: {
    color: "yellow",
    overflow: "ellipsis"
  },
  timestamp: {
    fontWeight: 700,
    overflow: "ellipsis"
  }
};

class MailRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, timestamp, index, onClick } = this.props;
    return (
      <div style={styles.mailRow} onClick={onClick(index)}>
        <span style={styles.title}>{title}</span>
        <span style={styles.timestamp}>{timestamp}</span>
      </div>
    );
  }
}
export default MailRow;

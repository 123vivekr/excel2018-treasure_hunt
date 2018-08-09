import React, { Component } from "react";
import Sidebar from "./Sidebar";
import "../css/MailStyles.css";

const styles = {
  mailDiv: {
    backgroundColor: "rgba(0,0,0,0.87)",
    height: "50px",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(255,255,255,0.87)",
    paddingLeft: "24px",
    paddingRight: "24px",
    margin: "4px",
    borderRadius: "15px"
  },
  title: {
    color: "yellow",
    overflow: "ellipsis",
    padding: "4px",
    paddingTop: "16px"
  },
  timestamp: {
    fontWeight: 700,
    padding: "4px"
  },
  content: {
    flex: 1,
    padding: "4px"
  },
  fullWidth: {
    width: "100%"
  }
};

class MailTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, timestamp, content } = this.props;
    return (
      <div style={styles.mailDiv}>
        <span style={styles.title}>{title}</span>
        <span style={styles.timestamp}>{timestamp}</span>
        <hr style={styles.fullWidth} />
        <span style={styles.content}>{content}</span>
      </div>
    );
  }
}
export default MailTemplate;

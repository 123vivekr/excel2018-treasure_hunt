import React, { Component } from "react";
import "../css/MailStyles.css";

class MailTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, timestamp, content } = this.props;
    return (
      <div className="mailDiv">
        <span className="expandedtitle">{title}</span>
        <span className="expandedtimestamp">{timestamp}</span>
        <hr className="fullWidth" />
        <span className="content">{content}</span>
      </div>
    );
  }
}

export default MailTemplate;

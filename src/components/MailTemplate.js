import React, { Component } from "react";
import "../css/MailStyles.css";
import Button from "@material-ui/core/Button";

class MailTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, timestamp, content } = this.props;
    return (
      <div className="mailDiv">
        <div>
          <span className="expandedtitle">{title}</span>
          <span className="expandedtimestamp">{timestamp}</span>
          <hr className="fullWidth" />
        </div>
        <div className="contentWrapper">
          <span className="content">{content}</span>
        </div>
        <div className="inputWrapper">
          <input type="text" id="ans" placeholder="Your answer" />
          <Button variant="outlined" color="secondary">
            Submit
          </Button>
        </div>
      </div>
    );
  }
}

export default MailTemplate;

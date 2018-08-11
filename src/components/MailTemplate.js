import React, { Component } from "react";
import "../css/MailStyles.css";
import Button from "@material-ui/core/Button";

class MailTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = () => {
    let answer = document.getElementById("ans").value;
    //Send the answer to backend
  };

  render() {
    const { title, timestamp, content, attachment, image } = this.props;
    console.log(attachment);
    return (
      <div className="mailDiv">
        <div>
          <span className="expandedtitle">{title}</span>
          <span className="expandedtimestamp">{timestamp}</span>
          <hr className="fullWidth" />
        </div>
        <div className="contentWrapper">
          <span className="content">{content}</span>
          {attachment ? (
            <span>
              <a href={attachment}> Click here to download attachment</a>
            </span>
          ) : null}
          <img className="q_image" src={image} />
        </div>
        <div className="inputWrapper">
          <input type="text" id="ans" placeholder="Your answer" />
          <Button
            variant="outlined"
            color="secondary"
            onClick={this.handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    );
  }
}

export default MailTemplate;

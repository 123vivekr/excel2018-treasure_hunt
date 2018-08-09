import React, { Component } from "react";
import Sidebar from "./Sidebar";
import "../css/Main.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import GoogleButton from "react-google-button";
import MailRow from "./MailRow";
import MailTemplate from "./MailTemplate";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authStatus: false,
      name: "",
      email: "",
      mailList: [
        {
          mailHeader: {
            title: "Dummy challenge",
            timestamp: "2018-8-16 2:30PM"
          },
          mailBody: {
            content: "lorem ipsum"
          }
        },
        {
          mailHeader: {
            title: "Another one",
            timestamp: "2018-9-1 11:30PM"
          },
          mailBody: {
            content: "dolor sit amet"
          }
        }
      ]
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  challenges = () => {
    const mails = this.state.mailList.map(mail => {
      return (
        <MailRow
          title={mail.mailHeader.title}
          timestamp={mail.mailHeader.timestamp}
        />
      );
    });

    return <div id="challengecard">{mails}</div>;
  };

  viewmail = () => {
    const mails = this.state.mailList.map(mail => {
      return (
        <MailTemplate
          title={mail.mailHeader.title}
          timestamp={mail.mailHeader.timestamp}
          content={mail.mailList.mailBody.content}
        />
      );
    });
  };

  authenticate = () => {
    return (
      <div id="logincard">
        <div className="design1 design" />
        <div className="design2 design" />
        <div id="logodiv">
          <img
            id="logo"
            src="http://excelmec.org/partners/img/excel2018.14bdbf062ab3f85e249a4d31cd4f0584.png"
          />
        </div>
        <div className="btn">
          <GoogleButton
            onClick={() => {
              console.log("Google button clicked");
            }}
          />
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="Login">
        <div className="sidebar">
          <Sidebar page={"login"} />
        </div>
        <div className="mainbox">
          {this.challenges()}
          {/* {this.authenticate()} */}
          {/* {this.viewmail()} */}
        </div>
      </div>
    );
  }
}

export default Main;

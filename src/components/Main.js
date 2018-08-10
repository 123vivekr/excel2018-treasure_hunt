import React, { Component } from "react";
import Sidebar from "./Sidebar";
import "../css/Main.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import GoogleButton from "react-google-button";
import MailRow from "./MailRow";
import MailTemplate from "./MailTemplate";
import Modal from '@material-ui/core/Modal';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open:false,
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

 handlePopupOpen = () => {
    this.setState({ open: true });
  };

  handlePopupClose = () => {
    this.setState({ open: false });
  };

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
          onClick={(index) => {
            this.setState({open:true});
          }}
          index={this.state.mailList.indexOf(mail)}
        />
      );
    });

    return <div id="challengecard">{mails}</div>;
  };

  viewmail = index => {
    const mail = this.state.mailList[index];
    return (
      <MailTemplate
        title={mail.mailHeader.title}
        timestamp={mail.mailHeader.timestamp}
        content={mail.mailBody.content}
      />
    );
  };

  expandMail = index => {
    this.setState({open:true})
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
          <Modal
            open={this.state.open}
            onClose={this.handlePopupClose}
          >
            <div>joyal magic here</div>
          </Modal>
          {this.challenges()}
          { /* this.authenticate() */}
        </div>
      </div>
    );
  }
}

export default Main;

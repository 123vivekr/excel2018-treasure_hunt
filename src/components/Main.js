import React, { Component } from "react";
import Sidebar from "./Sidebar";
import "../css/Main.css";
import GoogleButton from "react-google-button";
import MailRow from "./MailRow";
import MailTemplate from "./MailTemplate";
import Modal from "@material-ui/core/Modal";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
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
            content: "lorem ipsum",
            image:
              "https://avatars1.githubusercontent.com/u/22353313?s=460&v=4",
            attachment:
              "https://avatars1.githubusercontent.com/u/22353313?s=460&v=4"
          }
        },
        {
          mailHeader: {
            title: "Another one",
            timestamp: "2018-9-1 11:30PM"
          },
          mailBody: {
            content: "dolor sit amet",
            image:
              "https://avatars0.githubusercontent.com/u/31545426?s=460&v=4",
            attachment:
              "https://avatars0.githubusercontent.com/u/31545426?s=460&v=4"
          }
        }
      ],
      modalContent: "",
      modalTitle: "",
      modalTimestamp: "",
      modalAttachment: "",
      modalImage: ""
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
          onClick={index => {
            this.setState({
              open: true,
              modalContent: mail.mailBody.content,
              modalTitle: mail.mailHeader.title,
              modalTimestamp: mail.mailHeader.timestamp,
              modalAttachment: mail.mailBody.attachment,
              modalImage: mail.mailBody.image
            });
          }}
          index={this.state.mailList.indexOf(mail)}
        />
      );
    });

    return (
      <div id="challengecard">
        {/* <div className="userProfile">dc</div> */}
        {mails}
      </div>
    );
  };

  // viewmail = index => {
  //   const mail = this.state.mailList[index];
  //   return (
  //     <MailTemplate
  //       title={mail.mailHeader.title}
  //       timestamp={mail.mailHeader.timestamp}
  //       content={mail.mailBody.content}
  //       attachment={mail.mailBody.attachment}
  //     />
  //   );
  // };

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

          <Sidebar page={"mains"} />

        </div>
        <div className="mainbox">
          <Modal open={this.state.open} onClose={this.handlePopupClose}>
            <MailTemplate
              title={this.state.modalTitle}
              timestamp={this.state.modalTimestamp}
              content={this.state.modalContent}
              attachment={this.state.modalAttachment}
              image={this.state.modalImage}
            />
          </Modal>

          {/* {this.challenges()} */}
          {this.authenticate()}
        </div>
      </div>
    );
  }
}

export default Main;

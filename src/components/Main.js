import React, { Component } from "react";
import Sidebar from "./Sidebar";
import "../css/Main.css";
import GoogleLogin from "react-google-login";
import MailRow from "./MailRow";
import MailTemplate from "./MailTemplate";
import Leaderboard from "./Leaderboard";
import Modal from "@material-ui/core/Modal";
import Icon from "@material-ui/core/Icon";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      isMobileSidebarOpen: false,
      isLoggedIn: false,
      showLeaderboard: false,
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
      modalImage: "",
      users: [
        {
          name: "",
          pic: "",
          level: ""
        }
      ]
    };
  }

  componentDidMount() {
    let authToken = localStorage.getItem("auth_token");
    if (authToken) {
      fetch("http://localhost:8000/api/session_check/", {
        headers: {
          Authorization: `token ${authToken}`
        }
      })
        .then(res => {
          return res.text();
        })
        .then(data => {
          if (data == "true") {
            this.setState(
              {
                auth_token: authToken,
                isLoggedIn: true
              },
              () => {
                this.fetchInfo();
              }
            );
          }
        });
    }
    fetch("http://localhost:8000/api/leaderboard/")
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        let leaderboard = [],
          user = {};
        if (!data.detail) {
          data.leaderboard.forEach(e => {
            user = {
              name: e.name,
              pic: e.profile,
              level: e.level
            };
            leaderboard.push(user);
          });
        }
        this.setState({ users: leaderboard });
      });
  }

  fetchInfo = () => {
    fetch("http://localhost:8000/api/ask/", {
      headers: {
        Authorization: `token ${this.state.auth_token}`
      }
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          mailList: [
            {
              mailHeader: {
                title: `Level ${data.level}`,
                timestamp: data.timestamp
              },
              mailBody: {
                content: data.soure_hint,
                image: data.image,
                attachment: data.data_url
              }
            }
          ]
        });
      });

    fetch("http://localhost:8000/api/leaderboard/")
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        let leaderboard = [],
          user = {};
        if (!data.detail) {
          data.leaderboard.forEach(e => {
            user = {
              name: e.name,
              pic: e.profile,
              level: e.level
            };
            leaderboard.push(user);
          });
        }
        this.setState({ users: leaderboard });
      });
  };

  handlePopupOpen = () => {
    this.setState({ open: true });
  };

  handlePopupClose = () => {
    this.setState({ open: false });
  };

  closeLeaderbaord = () => {
    this.setState({
      showLeaderboard: false
    });
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

    if (!this.state.showLeaderboard) {
      return (
        <div id="challengecard">
          {/* <div className="userProfile">dc</div> */}
          {mails}
        </div>
      );
    }
    return (
      <Leaderboard
        users={this.state.users}
        closeLeaderboard={this.closeLeaderbaord}
      />
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

  logout = () => {
    fetch("http://localhost:8000/api/logout/").then(res => {
      this.setState(
        {
          isLoggedIn: false
        },
        () => {
          localStorage.clear();
          window.location.reload();
        }
      );
    });
  };

  showLeaderboard = () => {
    this.setState({
      showLeaderboard: true
    });
  };

  authenticate = () => {
    const auth = (
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
          <GoogleLogin
            clientId="515285485076-3dcier9qalkst9pc830p8kskj94k4qgh.apps.googleusercontent.com"
            buttonText="Login with google"
            className="loginBtn"
            onSuccess={this.responseGoogleSuccess}
            onFailure={this.responseGoogleFailure}
          />
        </div>
      </div>
    );
    if (!this.state.showLeaderboard) {
      return auth;
    }
    return (
      <Leaderboard
        users={this.state.users}
        closeLeaderboard={this.closeLeaderbaord}
      />
    );
  };

  responseGoogleSuccess = res => {
    let main = this;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      let res = xhr.responseText;
      console.log(res);
      if (res && JSON.parse(res).login) {
        main.setState(
          {
            isLoggedIn: true,
            auth_token: JSON.parse(res).token
          },
          () => {
            localStorage.setItem("auth_token", main.state.auth_token);
            main.fetchInfo();
          }
        );
      }
    };
    xhr.open("POST", "http://localhost:8000/api/social/google-oauth2/"); //CHANGE URL IF NEEDED
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify({ access_token: res.accessToken }));
  };

  responseGoogleFailure = res => {
    console.log(res);
  };

  toggleSidebar = () => {
    this.setState(
      {
        isMobileSidebarOpen: !this.state.isMobileSidebarOpen
      },
      () => {
        let sidebar_mobile = document.getElementsByClassName(
          "sidebar_mobile"
        )[0];
        let overlay = document.getElementsByClassName("overlay")[0];
        if (this.state.isMobileSidebarOpen) {
          sidebar_mobile.style.left = 0;
          overlay.style.zIndex = 9;
          overlay.style.opacity = 0.5;
        } else {
          sidebar_mobile.style.left = "-250px";
          overlay.style.zIndex = -1;
          overlay.style.opacity = 0.0;
        }
      }
    );
  };

  render() {
    return (
      <div className="Login">
        <div className="overlay" onClick={this.toggleSidebar} />
        <div className="sidebar" id="sidebar_wrapper">
          <Sidebar
            page={"main"}
            logout={this.logout}
            showLeaderboard={this.showLeaderboard}
            isLoggedIn={this.state.isLoggedIn}
            authToken={this.state.auth_token}
          />
        </div>
        <div className="sidebar_mobile">
          <Sidebar
            page={"main"}
            logout={this.logout}
            isLoggedIn={this.state.isLoggedIn}
            showLeaderboard={this.showLeaderboard}
            authToken={this.state.auth_token}
          />
        </div>
        <div className="mainbox">
          <Icon className="ham" onClick={this.toggleSidebar}>
            menu
          </Icon>
          <Modal open={this.state.open} onClose={this.handlePopupClose}>
            <MailTemplate
              title={this.state.modalTitle}
              timestamp={this.state.modalTimestamp}
              content={this.state.modalContent}
              attachment={this.state.modalAttachment}
              image={this.state.modalImage}
              authToken={this.state.auth_token}
            />
          </Modal>
          {this.state.isLoggedIn ? this.challenges() : this.authenticate()}
        </div>
      </div>
    );
  }
}

export default Main;

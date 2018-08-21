import React, { Component } from "react";
import "../css/Sidebar.css";
import sherlock from "../assets/sherDone.png";
import treasure from "../assets/treasureNew.png";
import Button from "@material-ui/core/Button";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      propic: "",
      rank: ""
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.authToken !== this.props.authToken) {
      fetch("http://localhost:8000/api/profile/", {
        headers: {
          Authorization: `token ${this.props.authToken}`
        }
      })
        .then(res => {
          return res.json();
        })
        .then(data => {
          console.log(data);
          this.setState({
            firstname: data.first_name,
            lastname: data.last_name,
            email: data.email,
            propic: data.profile
          });
        });
      fetch("http://localhost:8000/api/rank/", {
        headers: {
          Authorization: `token ${this.props.authToken}`
        }
      })
        .then(res => {
          return res.json();
        })
        .then(data => {
          this.setState({
            rank: data.rank
          });
        });
    }
  }

  main = () => {
    return (
      <div className="loginSidebar">
        <div className="logo">
          <img src={treasure} style={{ width: "15em" }} />
        </div>

        {this.props.isLoggedIn ? (
          <div>
            <div className="userDetails">
              <div id="userName">
                <img
                  src={this.state.propic}
                  alt="loading..."
                  className="propic"
                />
                <br />
                <span>
                  {this.state.firstname} {this.state.lastname}
                </span>
              </div>
            </div>
            <div className="level">
              <strong>Rank : {this.state.rank}</strong>
            </div>
          </div>
        ) : null}

        <div className="logout">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button
              variant="raised"
              color="primary"
              style={{
                fontWeight: "bold"
              }}
              onClick={this.props.showLeaderboard}
            >
              Leaderboard
            </Button>
            {this.props.isLoggedIn ? (
              <Button
                variant="contained"
                style={{
                  marginTop: "2em",
                  backgroundColor: "white",
                  color: "purple",
                  fontWeight: "bold"
                }}
                onClick={this.props.logout}
              >
                logout
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    );
  };

  render() {
    return <div>{this.main()}</div>;
  }
}

export default Sidebar;

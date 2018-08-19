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

  componentDidMount() {
    fetch("http://localhost:8000/api/profile/")
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
    fetch("http://localhost:8000/api/rank/")
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          rank: data.rank
        });
      });
  }

  main = () => {
    return (
      <div className="loginSidebar">
        <div className="logo">
          <img src={treasure} style={{ width: "15em" }} />
        </div>
        <div className="userDetails">
          <div id="userName">
            <img src={this.state.propic} alt="loading..." className="propic" />
            <br />
            <span>
              {this.state.firstname} {this.state.lastname}
            </span>
          </div>
        </div>
        <div className="level">
          <strong>Rank : {this.state.rank}</strong>
        </div>
        <div className="logout">
          <Button
            variant="raised"
            color="primary"
            style={{
              fontWeight: "bold"
            }}
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
    );
  };

  render() {
    return <div>{this.main()}</div>;
  }
}

export default Sidebar;

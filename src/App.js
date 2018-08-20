import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/Main";
import Leaderboard from "./components/Leaderboard";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Main} />
          <Route exact path="/leaderboard" component={Leaderboard} />
        </div>
      </Router>
    );
  }
}

export default App;

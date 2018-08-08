import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <Router>
        <Router>
          <div>
            <Route exact path="/" component={ Login } />
            <Route exact path="/main" component={ Main } />
          </div>
        </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Sidebar from './Sidebar';
import '../css/Login.css';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className="sidebar">
          <Sidebar page={ "login" } />
        </div>
        <div className="loginbox">
           
        </div>
      </div>
    );
  }
}

export default Login;

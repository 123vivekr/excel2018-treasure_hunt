import React, { Component } from 'react';
import Sidebar from './Sidebar';
import '../css/Main.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import GoogleButton from 'react-google-button'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authStatus: false,
      name: '',
      email: '',
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
 

  authenticate = () => {
    return(
      <div id="logincard">
        <GoogleButton
          onClick={() => { console.log('Google button clicked') }}
        />
      </div>
    );
  }

  render() {
    
    return (
      <div className="Login">
        <div className="sidebar">
          <Sidebar page={ "login" } />
        </div>
        <div className="mainbox">
            {this.authenticate()}
        </div>
      </div>
    );
  }
}

export default Main;

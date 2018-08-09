import React, { Component } from 'react';
import Sidebar from './Sidebar';
import '../css/Main.css';
import '../css/Sidebar.css';
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
 
  challenges = () => {
    return(
      <div id="challengecard">
      </div>   
    )
   
  }

  authenticate = () => {
    return(
      <div id="logincard">
      <div className="design1 design"></div>
      <div className="design2 design"></div>
        <div id="logodiv">
          <img id='logo' src="http://excelmec.org/partners/img/excel2018.14bdbf062ab3f85e249a4d31cd4f0584.png"/>
        </div>
        <div className="btn">
        <GoogleButton
          onClick={() => { console.log('Google button clicked') }}
        />
        </div>
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
          {/* { this.challenges() } */}
          {this.authenticate()}
        </div>
      </div>
    );
  }
}

export default Main;

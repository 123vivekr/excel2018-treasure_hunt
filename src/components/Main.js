import React, { Component } from 'react';
import Sidebar from './Sidebar';
import '../css/Main.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
        <div id="logodiv">
          <img id='logo' src="http://excelmec.org/partners/img/excel2018.14bdbf062ab3f85e249a4d31cd4f0584.png"/>
        </div>
        <div className="btn">
        <button className="btnGoogle" >Log in with Google</button>
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
            {this.authenticate()}
        </div>
      </div>
    );
  }
}

export default Main;

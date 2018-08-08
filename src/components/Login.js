import React, { Component } from 'react';
import Sidebar from './Sidebar';
import '../css/Login.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className="sidebar">
          <Sidebar page={ "login" } />
        </div>
        <div className="loginbox">
          <div id="logincard">
            <div id="logodiv">
              <br />
              <br />
              <br />
              <br />
              <img id='logo' src="http://excelmec.org/partners/img/excel2018.14bdbf062ab3f85e249a4d31cd4f0584.png"/>
            </div>
            <br />
            <br />
            <div id="authentication">
              <TextField
                id="email"
                label="Email"
                className='email'
                // value={'Email'}
                // onChange={this.handleChange('name')}
                fullWidth
                margin="normal"
              />
              <br />
              <TextField
                id="pass"
                label="Passowrd"
                // value={this.state.name}
                // onChange={this.handleChange('name')}
                fullWidth
                margin="normal"
              />
              <br />
              <br />
              <br />
              <center>
              <Button color="primary"  variant="contained">
                Log In
              </Button> 
              </center>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

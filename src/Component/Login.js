import React, { Component } from 'react';
import './Login.css';
import { connect } from 'react-redux';
import { handleClick } from '../Actions/LoginAction';
import browserHistory from '../Utils/browserHistory';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      name: '',
      pswd: ''
    }
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handlepress = () => {
    browserHistory.push('/Register')
  }

  handleclick = () => {
    let temp = 0;
    let reg_name = /^[A-Za-z]{4,10}$/;
    let reg_pswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
    let username = this.state.username.length, pswd = this.state.password.length;

    if (username === 0) this.setState({ name: '*Username is required' });
    else if (!reg_name.test(this.state.username)) this.setState({ name: '*Invalid Username' });
    else temp++;

    if (pswd === 0) { this.setState({ pswd: '*Password is required' }); }
    else if (!reg_pswd.test(this.state.password)) { this.setState({ pswd: '*Invalid Password' }); }
    else temp++;

    if (temp > 1) {
      browserHistory.push('Home');
    }
  }

  render() {
    return (
      <div className="div1">
        <div class="container">
          <div class="row">
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4 frm">
              <form>
                <h3 className="heading">Login</h3>
                <label className="l1"><b>Username</b></label><br></br>
                <input className="i1" type='text' name='username' onChange={this.handleChange}></input><br></br>
                <p className='p4'>{this.state.name}</p>
                <label className="l2"><b>Password</b></label><br></br>
                <input className="i2" type='password' name='password' onChange={this.handleChange}></input><br></br>
                <p className='p3'>{this.state.pswd}</p>
              </form><br></br>
              <button className="button" onClick={this.handleclick}>Login</button>
              <p className="p1" onClick={this.handlepress}>Register</p>
            </div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { name } = state.LoginReducer;
  const { password } = state.LoginReducer;
  return { name, password };
};

export default connect(mapStateToProps, { handleClick })(Login);
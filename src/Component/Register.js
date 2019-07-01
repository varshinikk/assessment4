import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Register.css';
import { REGISTER } from '../Actions/RegisterAction';
import browserHistory from '../Utils/browserHistory';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      fname: '',
      lname: '',
      name: '',
      pswd: '',
      array: []
    }
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handlepress = () => {
    browserHistory.push('/Login')
  }

  handleClick = (e) => {
    let temp1 = 0;
    let fname = this.state.firstname.length, lname = this.state.lastname.length, name = this.state.username.length, pswd = this.state.password.length;
    let reg_name = /^[A-Za-z]{2,10}$/;
    let reg_pswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;

    if (fname === 0) this.setState({ fname: '*Firstname is required' });
    else if (!reg_name.test(this.state.firstname)) this.setState({ fname: '*Invalid Firstname' });
    else temp1++;

    if (lname === 0) this.setState({ lname: '*Lastname is required' });
    else if (!reg_name.test(this.state.lastname)) this.setState({ lname: '*Invalid Lastname' });
    else temp1++;

    if (name === 0) this.setState({ name: '*Username is required' });
    else if (!reg_name.test(this.state.username)) this.setState({ name: '*Invalid Username' });
    else temp1++;

    if (pswd === 0) this.setState({ pswd: '*Password is required' });
    else if (!reg_pswd.test(this.state.password)) this.setState({ pswd: '*Invalid Password' });
    else temp1++;

    if (temp1 > 3) {
      browserHistory.push('Login');
    }
  }

  render() {
    return (
      <div className="div2">
        <div class="container">
          <div class="row">
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4 frm">
              <form>
                <h3 className="head">Register</h3>
                <label className="label1"><b>First Name</b></label>
                <input className="input1" type='text' name="firstname" onChange={this.handleChange}></input><br></br>
                <p className='p5'>{this.state.fname}</p>
                <label className="label2"><b>Last Name</b></label>
                <input className="input2" type='text' name="lastname" onChange={this.handleChange}></input><br></br>
                <p className='p5'>{this.state.lname}</p>
                <label className="label3"><b>Username</b></label>
                <input className="input3" type='text' name="username" onChange={this.handleChange}></input><br></br>
                <p className='p5'>{this.state.name}</p>
                <label className="label4"><b>Password</b></label>
                <input className="input4" type='password' name="password" onChange={this.handleChange}></input><br></br>
                <p className='p5'>{this.state.pswd}</p>
              </form><br></br>
              <button className="b1" onClick={this.handleClick}>Register</button>
              <p className="p2" onClick={this.handlepress}>Cancel</p>
            </div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { fname } = state.RegisterReducer;
  const { lname } = state.RegisterReducer;
  const { name } = state.RegisterReducer;
  const { password } = state.RegisterReducer;
  return { fname, lname, name, password };
};
export default connect(mapStateToProps, { REGISTER })(Register);
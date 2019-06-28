import React, { Component } from 'react';
import './Login.css';
import {connect} from 'react-redux';
import {handleClick} from '../Actions/LoginAction';
import browserHistory from '../Utils/browserHistory';

class Login extends Component{

  handlepress=()=>{
        browserHistory.push('/Register')
  }

  handleclick=()=>{
          browserHistory.push('/Home1')
  }

  render(){
    return(
        <div className="div1"> 
        <div class="container">
         <div class="row">
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4 frm"> 
        <form>
            <h3 className="heading">Login</h3>
            <label className="l1"><b>Username</b></label><br></br>
            <input className="i1" type='text' name='username'></input><br></br>
            <label className="l2"><b>Password</b></label><br></br>
            <input className="i2" type='text' name='password'></input><br></br>
        </form><br></br>
        <button className="button" onClick={this.props.handleClick} onClick={this.handleclick}>Login</button>
        <p className="p1" onClick={this.handlepress}>Register</p>
        </div>
        <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
        </div>
        </div>
        </div>
      );
    }
}
const mapStateToProps=(state)=>{
    const{name}=state.LoginReducer;
    const{password}=state.LoginReducer;
    return{name,password};
};
export default connect(mapStateToProps,{handleClick})(Login);

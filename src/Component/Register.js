import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Register.css';
import {handleClick} from '../Actions/RegisterAction';
import browserHistory from '../Utils/browserHistory';

class Register extends Component{

   handleClick=()=>{
        browserHistory.push('/Login')
       }

  render(){
    return(
        <div className="div2"> 
        <div class="container">
         <div class="row">
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4 frm"> 
        <form>
            <h3 className="head">Register</h3>
            <label className="label1"><b>First Name</b></label>
            <input className="input1" type='text'></input><br></br>
            <label className="label2"><b>Last Name</b></label>
            <input className="input2" type='text'></input><br></br>
            <label className="label3"><b>Username</b></label>
            <input className="input3" type='text'></input><br></br>
            <label className="label4"><b>Password</b></label>
            <input className="input4" type='text'></input><br></br>
        </form><br></br>
        <button className="b1" onClick={this.props.handleClick}>Register</button>
        <p className="p2" onClick={this.handleClick}>Cancel</p>
        </div>
        <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
        </div>
        </div>
        </div>
      );
    }
}
const mapStateToProps=(state)=>{
    const{fname}=state.RegisterReducer;
    const{lname}=state.RegisterReducer;
    const{name}=state.RegisterReducer;
    const{password}=state.RegisterReducer;
    return{fname,lname,name,password};
};
export default connect(mapStateToProps,{handleClick})(Register);
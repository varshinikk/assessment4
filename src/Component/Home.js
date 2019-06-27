import React, { Component } from 'react';
import './Home.css';
import browserHistory from '../Utils/browserHistory';

class Home extends Component {
    constructor(props) { 
    super(props); 
    this.state={
        name:'',
        username:''
    }
}

handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
}

// handleClick=(e)=>{
//     const reqobj={
//         name: this.state.name,
//         username: this.state.username
//     }
//     console.log(reqobj);
//   }

handleclick=()=>{
    browserHistory.push('/Login')
}

render() {
    return (
        <div>
        <div class="container">
        <div class="row">
        <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6 frm">
        <h2 className="head1"><b>React Application</b></h2>
        <h4 className="head2" onClick={this.handleclick}><b>Logout</b></h4>
        </div> 
        </div> 
        <div class="row"> 
        <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6 frm">
        <form>
            <h3 className="head3"><b>Add user</b></h3>
            <label className="head5"><b>Name</b></label><br></br>
            <input className="ip1" type='text' name='name' onChange={this.handleChange} value={this.state.value}></input><br></br>
            <label className="head6"><b>Username</b></label><br></br>
            <input className="ip2" type='text' name='username' onChange={this.handleChange} value={this.state.value}></input><br></br>
            <button className="button1" onClick={this.handleClick}>Add new user</button>
        </form>
        </div>
        <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6 frm">
             <h3 className="head4"><b>View users</b></h3>
        </div>
        </div>
        </div>
        </div>
    );
}
}

export default Home;
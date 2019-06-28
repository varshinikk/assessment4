import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from'react-router-dom';
import Login from './Component/Login';
import Register from './Component/Register';
import Home from './Component/Home';
import Home1 from './Component/Home1';

function App() {
  return (
  <div>
  <Router>
    <switch>
    <Route exact path = "/Login" component = {Login}></Route>
    <Route exact path = "/Register" component = {Register}></Route>
    <Route exact path = "/Home" component = {Home}></Route>
    <Route exact path = "/Home1" component = {Home1}></Route>
    </switch>
  </Router>
  </div>
  )
}

export default App;

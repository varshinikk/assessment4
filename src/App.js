import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './Component/Login';
import Register from './Component/Register';
import Home from './Component/Home';

function App() {
  return (
    <div>
      <Router>
        <switch>
          <Route exact path="/Login" component={Login}></Route>
          <Route exact path="/Register" component={Register}></Route>
          <Route exact path="/Home" component={Home}></Route>
        </switch>
      </Router>
    </div>
  )
}

export default App;

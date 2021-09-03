import React, { Component } from "react";
import reactDOM from "react-dom";
import Increment from "./components/Increment";
import Login from "./components/Login";
import './App.css';


class App extends Component {
  render() {
    return(
      <div className="wrapper">
        <div className="increment-section">
          <Increment />
        </div>

        <div className="login-section">
          <Login />
        </div>

        <div className="form-section"></div>

        <div className="api-section"></div>
      </div>
    )
  }
} 

export default App;

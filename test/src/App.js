import React, { Component } from "react";
import reactDOM from "react-dom";
import Increment from "./components/Increment";
import './App.css';


class App extends Component {
  render() {
    return(
      <div className="wrapper">
        <div className="increment-section">
          <h1>Hello</h1>
          <Increment />
        </div>

        <div className="login-section"></div>

        <div className="form-section"></div>

        <div className="api-section"></div>
      </div>
    )
  }
} 

export default App;

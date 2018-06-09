import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Add from "./Add";


class App extends Component {
  render() {
  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ADD and REMOVE</h1>
        </header> 
        <Add />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Add from "./Add";
import HighOrder from "./Hoc";
import Tag from "./Tag";
import CurrentUser from "./User";

class App extends Component {
  render() {
    const Order = HighOrder(CurrentUser(Tag));
    console.log("====================================");
    console.log(Order);
    console.log("====================================");
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ADD and REMOVE</h1>
        </header>
        <Order/>
        <Add />
      </div>
    );
  }
}

export default App;

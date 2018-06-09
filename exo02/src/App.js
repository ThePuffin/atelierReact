import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import Horloge from "./components/Horloge";
import Plusoumoins from "./components/Plusoumoins";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <i class="far fa-clock" /> React clock
          </h1>
        </header>
        <Horloge />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <hr />
        <Plusoumoins />
      </div>
    );
  }
}

export default App;

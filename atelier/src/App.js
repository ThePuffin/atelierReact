import React, { Component } from "react";

import "./App.css";
import Display from "./Display";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <i class="fas fa-clock" style="color:white" /> */}
          <h1 className="App-title">REACT CLOCKs</h1>
        </header>
        <Display />
      </div>
    );
  }
}

export default App;

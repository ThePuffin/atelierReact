import React, { Component } from "react";

class Recommence extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

 

  render() {
    return (
      <div>
        <btn onClick={this.handleClick}>recommence</btn>
      </div>
    );
  }
}

export default Recommence;

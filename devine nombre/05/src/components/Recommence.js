import React, { Component } from "react";

class Recommence extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.recommence = this.recommence.bind(this);
  }

  recommence() {
    window.location.reload();
  }

  render() {
    return (
      <div>
        <img
          src="https://media.giphy.com/media/3o7WTDhY6SMw36LWve/giphy.gif"
          alt="win gif"
        />
        <br />
        <button className="btn btn-warning" onClick={this.recommence}>
          recommence
        </button>
      </div>
    );
  }
}

export default Recommence;

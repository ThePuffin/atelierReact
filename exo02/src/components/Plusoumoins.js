import React, { Component } from "react";

class Plusoumoins extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chiffre: 0
    };

    this.handleLess = this.handleLess.bind(this);
    this.handleMore = this.handleMore.bind(this);
    this.handleZero = this.handleZero.bind(this);
  }
  handleMore() {
    // console.log(this.state.chiffre);
    let more = this.state.chiffre + 1;
    this.setState({ chiffre: more });
  }

  handleLess() {
    let less = this.state.chiffre - 1;
    this.setState({ chiffre: less });
  }

  handleZero() {
    this.setState({ chiffre: 0 });
  }

  render() {
    return (
      <div>
        <p>{this.state.chiffre}</p>
        <button className="btn" onClick={this.handleMore}>
          +
        </button>
        <button className="btn" onClick={this.handleZero}>
          remise à zero
        </button>
        <button className="btn" onClick={this.handleLess}>
          -
        </button>
      </div>
    );
  }
}

export default Plusoumoins;

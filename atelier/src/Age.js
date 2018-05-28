import React, { Component } from "react";

class Age extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.rajeunir = this.rajeunir.bind(this);
  }

  rajeunir(e) {
    e.preventDefault();
    this.props.rajeunir();
  }

  render() {
    return (
      <div>
        <button onClick={this.rajeunir}>Rajeunir</button>
        <button onClick={this.props.vieillir}>Vieillir</button>
      </div>
    );
  }
}

export default Age;

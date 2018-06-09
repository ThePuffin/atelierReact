import React, { Component } from "react";

const HighOrder = ClassComponent =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        connected: false
      };
      this.authorize = this.authorize.bind(this);
    }

    componentDidMount() {
      this.authorize();
    }

    authorize() {
      this.setState({ connected: true });
    }

    render() {
      return (
        <ClassComponent
          connected={this.state.connected}
          onClick={() => this.setState({ connected: false })}
        />
      );
    }
  };

export default HighOrder;

import React, { Component } from "react";
import HighOrder from "./Hoc";

const CurrentUser = TagComponent =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        user: {
          name: "vincent",
          type: "h1",
          style: {
            color: "blue"
          }
        }
      };
    }
    render() {
      const user = this.props.connected
        ? this.state.user
        : { name: "antho", type: "h3" };
      return (
        <TagComponent
          name={user.name}
          Type={user.type}
          style={user.style}
          {...this.props}
        />
      );
    }
  };

export default CurrentUser;

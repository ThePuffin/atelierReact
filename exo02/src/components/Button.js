import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.switcher()
    
  }

  render() {
    return (
      <div>
        <label class="switch">
          <input type="checkbox" onChange={this.handleChange} />
          <span class="slider round"> </span>
        </label>
      </div>
    );
  }
}

export default Button;

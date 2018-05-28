import React, { Component } from "react";
import "./Textearea.css";

class LaTextarea extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange(event) {
    this.props.txtArea(event.target.value);
  }
  handleBlur(event) {
    let phrase = event.target.value.toLowerCase().split(" ").join("");
    console.log(phrase);
    event.target.value=phrase
  }

  render() {
    return (
      <div>
        <label>Zone de texte</label>
        <br />
        <textarea
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        />
      </div>
    );
  }
}

export default LaTextarea;

import React, { Component } from "react";

class Devinette extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }



  render() {
    
    return (
      <div>
{this.state.bouton.map(btn => (
          <button
            className={btn.type}
            value={btn.value}
            onClick={this.handleClick}
          >
            {btn.text}
          </button>
        ))}
        <form className="row">
          <input
            type="number"
            class="form-control game-display offset-5 col-2"
            placeholder="enter number"
            value={this.state.valeurEntree}
            onChange={this.changeValeur}
          />
        </form>
        <br />
        <button
          type="submit"
          disabled={this.state.disabled}
          className="btn btn-dark"
          onClick={this.handleSubmit}
        >
          GUESS
        </button>
        {this.state.phrase !== "" ? (
          <p>
            {this.state.phrase}, {this.state.proche}
          </p>
        ) : null}
        {this.state.icon !== "" ? <i class={this.state.icon} /> : null}
      </div>
    );
  }
}

export default Devinette;

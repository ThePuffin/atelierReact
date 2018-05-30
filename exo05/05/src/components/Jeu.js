import React, { Component } from "react";

class Jeu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nbrDevine: 0,
      disabled: true,
      phrase: "",
      icon: "",
      valeurEntree: 0,
      bouton: [
        { type: "btn btn-primary", value: 10, text: "easy" },
        { type: "btn btn-secondary", value: 100, text: "medium" },
        { type: "btn btn-warning", value: 1000, text: "hard" }
      ]
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeValeur = this.changeValeur.bind(this);
    this.nombreAleatoire = this.nombreAleatoire.bind(this);
  }

  nombreAleatoire(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  handleClick(e) {
    e.preventDefault();
    //   alert(e.target.value);

    let alea = this.nombreAleatoire(e.target.value);
    this.setState({ nbrDevine: alea, disabled: false });
}
changeValeur(e) {
    console.log("a deviner :", this.state.nbrDevine);
      console.log("entree :", e.target.value);
    this.setState({ valeurEntree: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let devine = this.state.nbrDevine;
    let propose = this.state.valeurEntree;

    if (propose < devine) {
      this.setState({ phrase:"trop bas" });
    } else if (propose > devine) {
      this.setState({ phrase: "trop haut" });
    } else {
      this.setState({ phrase: "bravo" });
    }
  }

  render() {
    // let icon = [battery - empty, battery - quarter, battery - three - quarters];

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
        {this.state.phrase !== "" ? <p>{this.state.phrase}</p> : null}
        {this.state.icon !== "" ? <i class="fas fa-{this.state.icon}" /> : null}
      </div>
    );
  }
}

export default Jeu;

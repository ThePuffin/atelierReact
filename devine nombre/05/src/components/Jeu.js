import React, { Component } from "react";
import Recommence from "./Recommence";
import Historique from "./Historique";

class Jeu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      win: false,
      nbrDevine: 0,
      disabled: true,
      phrase: "",
      proche: "",
      icon: "",
      valeurEntree: 0,
      max: 0,
      historique:0,
      bouton: [
        { type: "btn btn-primary", value: 10, text: "easy" },
        { type: "btn btn-secondary", value: 100, text: "medium" },
        { type: "btn btn-warning", value: 1000, text: "hard" }
      ]
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeValeur = this.changeValeur.bind(this);
  }

  nombreAleatoire(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  handleClick(e) {
    e.preventDefault();
    //   alert(e.target.value);

    let alea = this.nombreAleatoire(e.target.value);
    this.setState({ nbrDevine: alea, disabled: false, max: e.target.value });
  }
  changeValeur(e) {
    console.log("a deviner :", this.state.nbrDevine);
    console.log("entree :", e.target.value);
    this.setState({ valeurEntree: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({historique : this.state.valeurEntree})
    let devine = this.state.nbrDevine;
    let propose = this.state.valeurEntree;
    let difference = Math.abs(propose - devine);
    // alert(difference);

    if (difference === 0) {
      this.setState({
        icon: "fas fa-trophy",
        proche: "tu as trouvé la solution",
        win: true
      });
    } else if (difference < 0.05 * this.state.nbrDevine) {
      this.setState({
        icon: "fas fa-battery-full",
        proche: "tu es bouillant"
      });
    } else if (difference < 0.25 * this.state.nbrDevine) {
      console.log(0.25 * this.state.nbrDevine);
      this.setState({
        icon: "fas fa-battery-three-quarters",
        proche: "tu es chaud"
      });
    } else if (difference < 0.5 * this.state.nbrDevine) {
      console.log(0.5 * this.state.nbrDevine);
      this.setState({ icon: "fas fa-battery-half", proche: "tu es tiède" });
    } else if (difference < 0.75 * this.state.nbrDevine) {
      console.log(0.75 * this.state.nbrDevine);
      this.setState({
        icon: "fas fa-battery-quarter",
        proche: "tu es froid"
      });
    } else if (difference <= 0.9 * this.state.nbrDevine) {
      this.setState({
        icon: "fas fa-battery-empty",
        proche: "tu es glacé"
      });
    } else {
      this.setState({
        icon: "fab fa-safari",
        proche: "Tu es dans une galaxie très très lointaine"
      });
    }

    if (propose < devine) {
      this.setState({ phrase: "trop bas" });
    } else if (propose > devine) {
      this.setState({ phrase: "trop haut" });
    } else {
      this.setState({ phrase: "bravo" });
    }
  }

  render() {
    return (
      <div>
        {this.state.win === false ? (
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
            <hr />
            {this.state.disabled !== true ? (
              <div>
                <p>Choisi une valeur entre 0 et {this.state.max}</p>
                <form className="row" onSubmit={this.handleSubmit}>
                  <input
                    type="number"
                    class="form-control game-display offset-5 col-2"
                    placeholder="enter number"
                    value={this.state.valeurEntree}
                    onChange={this.changeValeur}
                  />
                <br />
                <button
                  type="submit"
                  disabled={this.state.disabled}
                  className="btn btn-dark"
                >
                  GUESS
                </button>
                </form>
                {this.state.phrase !== "" ? (
                  <p>
                    {this.state.phrase}, {this.state.proche}
                  </p>
                ) : null}
                {this.state.icon !== "" ? <i class={this.state.icon} /> : null}
                <hr />
              </div>
            ) : (
              <h3>Choisi un niveau</h3>
            )}

            {this.state.disabled !== true ? (
              <div>
                <Historique />
              </div>
            ) : null}
          </div>
        ) : (
          <Recommence />
        )}
      </div>
    );
  }
}

export default Jeu;

// ajouter l'historique
// ajouter un nombre d'essai par difficulté
// bloquer le bouton proposition de chiffre si niveau pas choisi
// faire une page de win
// afficher le temps pour résoudre la solution au win

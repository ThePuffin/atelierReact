import React, { Component } from "react";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liste: ["click", "on", "me", "to", "remove"]
    };
    this.ajout = this.ajout.bind(this);
    this.remove = this.remove.bind(this);
  }

  ajout(e) {
    e.preventDefault();
    let liste = this.state.liste;

    let motAjouter = window.prompt("mot à ajouter");
    if (motAjouter !== "") {
      liste.push(motAjouter);
    }
    this.setState({ liste: liste });
  }

  remove(e) {
    e.preventDefault();
    let sauvegarde = [];

    // console.log(e.target)
    let liste = this.state.liste;
    liste.map(elt => sauvegarde.push(elt));
    // console.log(liste);
    let supprime = liste.splice(e.target.id, 1);
    let ok = window.confirm(`voulez-vous supprimer le mot ${supprime} ?`);
    console.log(ok);
    ok === true
      ? this.setState({
          liste: liste
        })
      : this.setState({ liste: sauvegarde });
  }

  render() {
    return (
      <div>
        <button onClick={this.ajout}>Add item</button>
        <hr />
        <ul>
          {this.state.liste.map((mot, index) => (
            <li>
              <p
                id={index}
                onClick={this.remove}
                style={{
                  listStyleType: "none",
                  backgroundColor: "#DDD",
                  width: "10%"
                }}
              >
                {mot}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Add;

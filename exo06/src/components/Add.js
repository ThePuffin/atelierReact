import React, {
  Component
} from "react";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liste: ["click", "on", "me", "to", "remove"]
    };
    this.ajout = this.ajout.bind(this);
    this.remove = this.remove.bind(this);
    this.reinitialize = this.reinitialize.bind(this);
    this.saved = [];

  }


  componentDidMount() {
    let start = this.state.liste;
    (start===undefined) ? console.log("etat vide"): start.map(elt=> this.saved.push(elt) );
    // console.log(this.saved)
  
  }
  
  
  ajout(e) {
    
    e.preventDefault();
    let liste = this.state.liste;

    let motAjouter = window.prompt("mot à ajouter");
    console.log(motAjouter);
    if (motAjouter !== null && motAjouter !=="") {
      liste.push(motAjouter);
    }
    this.setState({
      liste: liste
    });
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
    // console.log(ok);
    ok === true ?
      this.setState({
        liste: liste
      }) :
      this.setState({
        liste: sauvegarde
      });

  }

  reinitialize(e) {
    // console.log(this.saved);
    this.setState({liste : this.saved})
  }


  render() {
        return ( < div >
      <button onClick = {
        this.ajout
      } > Add item < /button> <
      hr / >
      <
      ul > {
        this.state.liste.map((mot, index) => ( <
          li >
          <
          p id = {
            index
          }
          onClick = {
            this.remove
          }
          style = {
            {
              listStyleType: "none",
              backgroundColor: "#DDD",
              width: "10%"
            }
          } > {
            mot
          } <
          /p> < /
          li >
        ))
      } <
      /ul> <
      hr / >
      <
      button onClick = {
        this.reinitialize
      } > Reinitialiser < /button> < /
      div >
    );
  }
}

export default Add;
import React, { Component } from "react";
import Age from "./Age";
import LaTextarea from "./Textarea";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prenom: "Vincent",
      nom: "Ballut",
      age: 36,
      ville: "Villeurbanne",
      adresse: "3 boulevard eugene reguillon",
      GPS: { long: 4.36665, lat: 45.75666 },
      chanteurs: ["Ibeyi", "Angel Olsen", "Bjork"],
      url:
        "http://www.laroutedurock.com/wp-content/uploads/2015/03/AngelOlsen_540x420_5-1024x1024.jpg",
      site: "http://www.google.fr",
      textearea: "",
      message: "tada"
    };

    this.rajeunir = this.rajeunir.bind(this);
    this.vieillir = this.vieillir.bind(this);
    this.txtArea = this.txtArea.bind(this);
  }

  rajeunir() {
    this.setState({ age: this.state.age - 1 });
  }

  vieillir() {
    this.setState({ age: this.state.age + 1 });
  }

  txtArea(e) {
    // console.log(e);
    this.setState({ textearea: e });
    if (e.length > 0 && e.length <= 3) {
      this.setState({ message: "" });
    } else {
      this.setState({ message: "tada" });
    }
  }

  render() {
    let tableauTxtArea= this.state.textearea.split(" ");
    let nombre = tableauTxtArea.length
    return (
      <div>
        <h3>
          {this.state.nom} {this.state.prenom}
        </h3>
        {/* <h5>Age : {this.state.age} ans</h5> */}
        {this.state.age <= 15 ? (
          <h5>"trop jeune"</h5>
        ) : (
          <h5> {this.state.age} ans </h5>
        )}
        <Age rajeunir={this.rajeunir} vieillir={this.vieillir} />
        <ul>{this.state.chanteurs.map(user => <li>{user}</li>)}</ul>
        <img style={{ width: "20vh" }} src={this.state.url} alt="angel olsen" />
        <br />
        <a href={this.state.site}> {this.state.site} </a>
        <hr />
        <LaTextarea txtArea={this.txtArea} />
        <p>{this.state.textearea}</p>
        <p className={this.state.message}>Ce message est trop court</p>
        <p> Le nom de mot dans la page est : {nombre}</p>
        <hr />
      </div>
    );
  }
}

export default Display;

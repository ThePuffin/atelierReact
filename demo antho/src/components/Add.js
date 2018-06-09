import React, { Component } from "react";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liste: ["click", "on", "me", "to", "remove"],
      animaux: {}
    };
    this.ajout = this.ajout.bind(this);
  }

  componentDidMount() {
    this.setState({
      animaux: {
        quatre: "chien",
        deux: { un: ["click", "on", "me", "to", "remove"] }
      }
    });
  }
  ajout(e) {
    e.preventDefault();
    // let liste = this.state.liste;
    alert(this.state.animaux.quatre);
    // let motAjouter = window.prompt("mot à ajouter");
    // if (motAjouter !== "") {
    //   liste.push(motAjouter);
    // }
    // this.setState({liste : {liste}})
  }
  
  render() {
    const newState = this.state.animaux;
    newState? console.log(newState.deux) : null;
    // const { un } = newState.deux;
    // console.log("====================================");
    // console.log(un);
    // console.log("====================================");
    return (
      <div>
        <button onClick={this.ajout}>Add item</button>
        <hr />
        <ul>
          {this.state.liste.map(mot => (
            <li>
              <p
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

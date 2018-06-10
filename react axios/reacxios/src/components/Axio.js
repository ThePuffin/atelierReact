import React, { Component } from 'react';

import axios from "axios";

class Axio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      search: ""
    };
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=200`).then(res => {
      const pokemons = res.data.results;
      this.setState({
        pokemons
      });
    });
  }

  handleChange(e){
  // console.log(e.target.value);
  this.setState({search:e.target.value})
  }

  render() {
      let pokemonster = this.state.pokemons
      pokemonster.map(el => <li> {el.name} </li>);
      let regex = new RegExp(`${this.state.search}`, "gi");
      return <div>
          <form>
            <input type="name" placeholder="recherche" onChange={this.handleChange} />{" "}
          </form> <ul>
            {this.state.search === ""
              ? pokemonster.map(el => <li> {el.name} </li>)
              : pokemonster
                  .filter(nom => regex.test(nom.name))
                  .map(el => <li> {el.name} </li>)}
          </ul>{" "}
        </div>;
          }
        }

      export default Axio;



// {
//   this.state.search;
// }




      { /* {pokemonster.length > 0 ? JSON.stringify(pokemonster) : console.log("pas de données")} */ }
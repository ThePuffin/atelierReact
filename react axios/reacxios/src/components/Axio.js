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
    axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=20`).then(res => {
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
      console.log(pokemonster.length);
      return <div >
        <
        form >
        <
        input type = "name"
      placeholder = "recherche"
      onChange = {
        this.handleChange
      }
      /> < /
      form > <
        ul > {
          pokemonster.length > 0 ? pokemonster.map(el => < li > {
              el.name
            } < /li>): console.log("pas de données")} < /
            ul > <
            /div>;
          }
        }

      export default Axio;








      { /* {pokemonster.length > 0 ? JSON.stringify(pokemonster) : console.log("pas de données")} */ }
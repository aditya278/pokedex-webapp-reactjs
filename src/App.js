import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import bgImage from './images/pattern.png';

import Navbar from './components/layout/Navbar';
import Dashboard from './components/layout/Dashboard';
import Pokemon from './components/pokemon/Pokemon';

function App() {

  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState(null);
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
      setPokemons(res.data.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  const getPokemonDetails = async (pokemonIndex) => {
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
    const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`;
    
    setLoading(true);

    const pokemonRes = await axios.get(pokemonUrl);
    let [hp, attack, defense, speed, specialAttack, specialDefense] = '';

    pokemonRes.data.stats.map((stat) => {
      switch(stat.stat.name) {
        case 'hp':
          hp = stat['base_stat'];
          break;
        case 'attack':
          attack = stat['base_stat'];
          break;
        case 'defense':
          defense = stat['base_stat'];
          break;
        case 'speed':
          speed = stat['base_stat'];
          break;
        case 'special-attack':
          specialAttack = stat['base_stat'];
          break;
        case 'special-defense':
          specialDefense = stat['base_stat'];
          break;
        default:
          return;
      }
    })

    //convert decimeter to feet... the +0.0001 * 100) / 100 is for rounding to 2 decimal places
    const height = Math.round((pokemonRes.data.height * 0.32804 + 0.0001) * 100) / 100;

    //Convert hectograms to kgs
    const weight = Math.round((pokemonRes.data.height * 0.1 + 0.0001) * 100) / 100;

    const types = pokemonRes.data.types.map((type) => type.type.name);

    const abilities = pokemonRes.data.abilities.map((ability) => {
      return ability.ability.name
        .toLowerCase()
        .split('-')
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
    })

    const evs = pokemonRes.data.stats.filter((stat) => {
      if(stat.effort > 0) return true;
      return false;
    }).map(stat => {
      return `${stat.effor} ${stat.stat.name}`.toLowerCase()
      .split('-')
      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');
    }).join(', ')

    const pokemon = {
      name : pokemonRes.data.name,
      imageUrl : pokemonRes.data.sprites.front_default,
      types : types,
      description : '',
      stats : {
        hp : hp,
        attack: attack,
        defense: defense,
        speed: speed,
        specialAttack: specialAttack,
        specialDefense: specialDefense
      },
      height : height,
      weight : weight,
      eggGroup: '',
      abilities: abilities,
      genderRatioMale: '',
      genderRatioFemale: '',
      evs: evs,
      hatchSteps: ''
    }

    setPokemonDetails(pokemon);
    setLoading(false);
  }

  return (
    <Router>
      <div className="topDiv" style={{background : `url(${bgImage})`}}>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" render={() => (<Dashboard pokemons = {pokemons} loading = {loading} />)} />
            <Route exact path="/pokemon/:pokemonIndex" render={(params) => (<Pokemon {...params} getPokemonDetails={getPokemonDetails} loading={loading} pokemonDetails={pokemonDetails} />)} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
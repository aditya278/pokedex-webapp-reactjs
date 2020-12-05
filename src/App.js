import React, {useState, useEffect} from 'react';

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import bgImage from './images/pattern.png';

import Navbar from './components/layout/Navbar';
import Dashboard from './components/layout/Dashboard';

function App() {

  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
      setPokemons(res.data.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="topDiv" style={{background : `url(${bgImage})`}}>
      <div className="App">
        <Navbar />
        <Dashboard pokemons = {pokemons} loading = {loading} />
      </div>
    </div>
  );
}

export default App;
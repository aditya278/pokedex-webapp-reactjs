import React from 'react'

import PokemonList from '../pokemon/PokemonList';

export default function Dashboard({pokemons}) {
    return (
        <div className="row">
            <div className="col">
                <PokemonList pokemons={pokemons}/>
            </div>
        </div>
    )
}

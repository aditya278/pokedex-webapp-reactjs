import React from 'react'

import PokemonCard from './PokemonCard';

export default function PokemonList({pokemons}) {
    return (
        <div className="row">
            {
                pokemons.map(pokemon => (
                    <PokemonCard pokemon={pokemon} />
                ))
            }
        </div>
    )
}

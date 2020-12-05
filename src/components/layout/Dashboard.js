import React from 'react'

import PokemonList from '../pokemon/PokemonList';
import Loading from './Loading';

export default function Dashboard({pokemons, loading}) {
    if(loading) {
        return <Loading />
    }

    return (
        <div className="row">
            <div className="col">
                <PokemonList pokemons={pokemons}/>
            </div>
        </div>
    )
}

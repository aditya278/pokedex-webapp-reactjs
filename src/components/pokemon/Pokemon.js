import React, { useEffect } from 'react'

import Loading from '../layout/Loading';

export default function Pokemon({match, getPokemonDetails, loading}) {
    
    const pokemonIndex = match.params.pokemonIndex;

    useEffect(() => {
        getPokemonDetails(pokemonIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if(loading) {
        return <Loading />
    }

    return (
        <div>
            {pokemonIndex}
        </div>
    )
}

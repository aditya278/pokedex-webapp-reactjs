import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

const Sprite = styled.img`
    width : 5em;
    height : 5em;
`;

export default function PokemonCard({pokemon}) {

    const {name, url} = pokemon;
    const [pokemonIndex, setPokemonIndex] = useState('');
    const [pokeImgUrl, setPokeImgUrl] = useState('');

    useEffect(() => {
        setPokemonIndex(url.split('/')[url.split('/').length - 2]);
        if(pokemonIndex)
            setPokeImgUrl(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pokemonIndex]);


    return (
        <div className="col-md-3 col-sm-6 mb-5">
            <div className="card">
                <h5 className="card-header">{pokemonIndex}</h5>
                <Sprite className="card-img-top reounded mx-auto mt-2"
                        src={pokeImgUrl}>
                </Sprite>
                <div className="card-body mx-auto">
                    <h6 className="card-title">{name.toLowerCase().split(" ").map(letter => letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ')}</h6>
                </div>
            </div>
        </div>
    )
}

import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import pokeballSpinner from '../../images/pokeball.gif';

const Sprite = styled.img`
    width : 5em;
    height : 5em;
    display : none;
`;

const Card = styled.div`
    box-shadow : 0 1px 3px rgba(0,0,0, 0.5), 0 1px 2px rgba(0,0,0,0.6);
    transition : all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.65), 0 10px 10px rgba(0,0,0,0.5);
    }
    -mox-user-select:none;
    -website-user-select:none;
    -o-user-select:none;
`;

export default function PokemonCard({pokemon}) {

    const {name, url} = pokemon;
    const [pokemonIndex, setPokemonIndex] = useState('');
    const [pokeImgUrl, setPokeImgUrl] = useState('');
    const [imgLoading, setImgLoading] = useState(true);

    useEffect(() => {
        setPokemonIndex(url.split('/')[url.split('/').length - 2]);
        if(pokemonIndex)
            setPokeImgUrl(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pokemonIndex]);

    const updateLoading = (value) => {
        setImgLoading(value);
    }

    return (
        <div className="col-md-3 col-sm-6 mb-5">
            <Card className="card">
                <h5 className="card-header">{pokemonIndex}</h5>
                {
                    imgLoading ? (
                        <img
                            src={pokeballSpinner}
                            style={{width: '5em', height: '5em'}}
                            className="card-img-top rounded mx-auto mt-2"
                            alt="loading"
                        />
                    ) : null
                }
                <Sprite className="card-img-top rounded mx-auto mt-2"
                        onLoad = {() => updateLoading(false)}
                        src={pokeImgUrl}
                        style={
                            imgLoading ? null : {display : 'block'}
                        }>
                </Sprite>
                <div className="card-body mx-auto">
                    <h6 className="card-title">{name.toLowerCase().split(" ").map(letter => letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ')}</h6>
                </div>
            </Card>
        </div>
    )
}

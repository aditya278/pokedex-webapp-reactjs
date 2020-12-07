import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import Loading from "../layout/Loading";
import pokeballSpinner from "../../images/pokeball.gif";

const TYPE_COLORS = {
    bug: "B1C12E",
    dark: "4F3A2D",
    dragon: "755EDF",
    electric: "FCBC17",
    fairy: "F4B1F4",
    fighting: "823551D",
    fire: "E73B0C",
    flying: "A3B3F7",
    ghost: "6060B2",
    grass: "74C236",
    ground: "D3B357",
    ice: "A3E7FD",
    normal: "C8C4BC",
    poison: "934594",
    psychic: "ED4882",
    rock: "B9A156",
    steel: "B5B5C3",
    water: "3295F6",
};

export default function Pokemon({
    match,
    getPokemonDetails,
    loading,
    pokemonDetails,
}) {
    const pokemonIndex = match.params.pokemonIndex;
    const [imgLoading, setImgLoading] = useState(true);

    useEffect(() => {
        getPokemonDetails(pokemonIndex);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const updateLoading = (value) => {
        setImgLoading(value);
    };

    if (loading) {
        return <Loading />;
    }

    if (!pokemonDetails) return <Loading />;

    return (
        <div className="col">
            <Link to="/">
                <button className="btn btn-primary mb-4">Go to Home</button>
            </Link>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-5">
                            <h5>{pokemonIndex}</h5>
                        </div>
                        <div className="col-7">
                            <div className="float-right">
                                {
                                    //console.log(pokemonDetails.types)
                                    pokemonDetails.types.map((type) => (
                                        <span
                                            key={type}
                                            className="badge badge-primary badge-pill mr-1"
                                            style={{
                                                backgroundColor: `#${TYPE_COLORS[type]}`,
                                                color: "white",
                                            }}
                                        >
                                            {type
                                                .toLowerCase()
                                                .split(" ")
                                                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                                                .join(" ")}
                                        </span>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row align-items-center">
                        <div className="col-md-3">
                            {imgLoading ? (
                                <img
                                    src={pokeballSpinner}
                                    style={{ width: "5em", height: "5em" }}
                                    className="card-img-top rounded mx-auto mt-2"
                                    alt="loading"
                                />
                            ) : null}
                            <img
                                src={pokemonDetails.imageUrl}
                                className="card-img-top rounded mx-auto mt-2"
                                onLoad={() => updateLoading(false)}
                                alt="pokemonImg"
                            />
                        </div>
                        <div className="col-md-9">
                            <h4 className="mx-auto">
                                {pokemonDetails.name
                                    .toLowerCase()
                                    .split(" ")
                                    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                                    .join(" ")}
                            </h4>
                            <div className="row align-items-center">
                                <div className="col-12 col-md-3">HP</div>
                                <div className="col-12 col-md-9">
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressBar"
                                            style={{
                                                width: `${pokemonDetails.stats.hp}%`,
                                            }}
                                            aria-valuenow="25"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            <small>{pokemonDetails.stats.hp}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-12 col-md-3">Attack</div>
                                <div className="col-12 col-md-9">
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressBar"
                                            style={{
                                                width: `${pokemonDetails.stats.attack}%`,
                                            }}
                                            aria-valuenow="25"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            <small>{pokemonDetails.stats.attack}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-12 col-md-3">Defence</div>
                                <div className="col-12 col-md-9">
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressBar"
                                            style={{
                                                width: `${pokemonDetails.stats.defence}%`,
                                            }}
                                            aria-valuenow="25"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            <small>{pokemonDetails.stats.defence}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-12 col-md-3">Speed</div>
                                <div className="col-12 col-md-9">
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressBar"
                                            style={{
                                                width: `${pokemonDetails.stats.speed}%`,
                                            }}
                                            aria-valuenow="25"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            <small>{pokemonDetails.stats.speed}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-12 col-md-3">Special Attack</div>
                                <div className="col-12 col-md-9">
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressBar"
                                            style={{
                                                width: `${pokemonDetails.stats.specialAttack}%`,
                                            }}
                                            aria-valuenow="25"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            <small>{pokemonDetails.stats.specialAttack}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-12 col-md-3">Special Defence</div>
                                <div className="col-12 col-md-9">
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressBar"
                                            style={{
                                                width: `${pokemonDetails.stats.specialDefense}%`,
                                            }}
                                            aria-valuenow="25"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            <small>{pokemonDetails.stats.specialDefense}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col">
                            <p className="p-2">{pokemonDetails.description}</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="card-body">
                    <h5 className="card-title text-center">Profile</h5>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <h6 className="float-right">Height:</h6>
                                </div>
                                <div className="col-md-6">
                                    <h6 className="float-left">{pokemonDetails.height} ft.</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <h6 className="float-right">Weight:</h6>
                                </div>
                                <div className="col-md-6">
                                    <h6 className="float-left">{pokemonDetails.weight} kgs</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <h6 className="float-right">Catch Rate:</h6>
                                </div>
                                <div className="col-md-6">
                                    <h6 className="float-left">{pokemonDetails.catchRate}%</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <h6 className="float-right">Gender Ratio:</h6>
                                </div>
                                <div className="col-md-6">
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressBar"
                                            style={{
                                                width: `${pokemonDetails.genderRatioFemale}%`,
                                                backgroundColor: "#C2185B",
                                            }}
                                            aria-valuenow="15"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            <small>{pokemonDetails.genderRatioFemale}</small>
                                        </div>
                                        <div
                                            className="progress-bar"
                                            role="progressBar"
                                            style={{
                                                width: `${pokemonDetails.genderRatioMale}%`,
                                                backgroundColor: "#1976D2",
                                            }}
                                            aria-valuenow="30"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            <small>{pokemonDetails.genderRatioMale}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <h6 className="float-right">Egg Groups:</h6>
                                </div>
                                <div className="col-md-6">
                                    <h6 className="float-left">
                                        {
                                            pokemonDetails.eggGroups.join(', ')
                                        }</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <h6 className="float-right">Hatch Steps:</h6>
                                </div>
                                <div className="col-md-6">
                                    <h6 className="float-left">{pokemonDetails.hatchSteps}</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <h6 className="float-right">Abilities:</h6>
                                </div>
                                <div className="col-md-6">
                                    <h6 className="float-left">{pokemonDetails.abilities.join(', ')}</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <h6 className="float-right">EVs:</h6>
                                </div>
                                <div className="col-md-6">
                                    <h6 className="float-left">{pokemonDetails.evs}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

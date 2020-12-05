import React from 'react'

export default function PokemonCard({pokemon}) {
    return (
        <div className="col-md-3 col-sm-6 mb-5">
            <div className="card">
                <div className="card-header">
                    <h1>{pokemon.name}</h1>
                </div>
            </div>
        </div>
    )
}

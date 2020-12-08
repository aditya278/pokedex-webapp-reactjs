import React, {useState} from 'react'

export default function Navbar({searchPokemon}) {

    const [searchPoke, setSearchPoke] = useState('');

    const onChange = (event) => {
        setSearchPoke(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(searchPoke !== '') {
            searchPokemon(searchPoke);
            setSearchPoke('');
        }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <b><a href="/pokedex-webapp-reactjs" className="navbar-brand col-sm-3 col-md-2 mt-0 align-items-center">Pokedex</a></b>
                <form className="form-inline my-2 my-lg-0" onSubmit={onSubmit}>
                    <input className="form-control mr-sm-2" name="searchPoke" value={searchPoke} type="search" placeholder="Search" aria-label="Search" onChange={onChange} />
                    <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        </div>
    )
}

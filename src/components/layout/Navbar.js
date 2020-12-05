import React from 'react'
import styled from 'styled-components';


export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <b><a href="/" className="navbar-brand col-sm-3 col-md-2 mt-0 align-items-center">Pokedex</a></b>
            </nav>
        </div>
    )
}

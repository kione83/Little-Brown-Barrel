import React from 'react';
import logo from "../src/bbl-logo.jpeg"
import Menu from "./Menu"

function Banner() {
    return(
        <div id="banner">
            <img id="banner-logo" src={logo} alt="Brown Barrel Logo" />
            <div id="banner-text">
                <h1>Little Brown Barrel</h1>
                <h2>Schuylkill County's home for the best whiskeys around.</h2>
            </div>
            <Menu />
        </div>
    )
}


export default Banner
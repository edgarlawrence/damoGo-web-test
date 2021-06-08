import React from 'react';
import '../css/Navbarrr.css';

function Navbar () {
    return (
    <div className="Navbar">
        <img src="https://static.wixstatic.com/media/1eda4b_018c9552700c4861b8338b7e9bfb7f2a~mv2.png/v1/fill/w_176,h_44,al_c,q_85,usm_0.66_1.00_0.01/DAMOGO-Logo-PMS299_opt.webp" />
        <ul>
            <li> <a href="#"> Beranda </a> </li>
            <li> <a href="#"> Restoran </a> </li>
            <li> <a href="#"> Supplier </a> </li>
        </ul>
        <div className="Navbar-Ellipse"> </div>
    </div>
    )
}

export default Navbar;
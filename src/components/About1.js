import React from 'react';
import '../css/about1.css';
import hape1 from '../img/damago-hape-1.png';

function About1 () {
    return (
        <div className="About-1">
            <div className="About-1-title">
                <h3> DAMOGO </h3>
                <h1> Demo Aplikasi </h1>
            </div>
            <div className="About-1-content">
                 <div className="About-1-image">
                     <img src={hape1} />
                 </div>
                 <div className="About-1-text">
                    <p> <span> DamoGo </span> adalah sistem yang membantu proses pengadaan <br /> 
                      bahan makanan lebih mudah dan efisien <br /> <br />
                      Atur semua pesanan dari supplier maupun bahan dari kamu <br /> ke franchise secara online </p> 
                 </div>
            </div>
        </div>
    )
}

export default About1;
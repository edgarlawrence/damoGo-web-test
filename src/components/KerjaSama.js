import React from 'react';
import '../css/kerjaSama.css'
import alfaLogo from '../img/Alfamidi.png'
import plazaLogo from '../img/Plaza_Ambarrukmo.png'
import masKobisLogo from '../img/ayamMasKobis.png'
import hakataLogo from '../img/hakataIkkousha.png'

function KerjaSama () {
    return (
        <div className ="KerjaSama">
            <h3> DAMOGO </h3>
            <h1> Kerjasama </h1>
            <div className="KerjaSama-logo">
                <img src={alfaLogo} />
                <img src={plazaLogo}  style={{marginTop: 70}}/>
                <img src={masKobisLogo} />
                <img src={hakataLogo} />
            </div>
        </div>
    )
}

export default KerjaSama;
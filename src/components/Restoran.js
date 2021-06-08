import React from 'react'
import  '../css/restoran.css'
import damogoPhone from '../img/damogo5.png'
function Restoran() {
    return (
        <div className="Restoran">
            <div className="Restoran-img">
            <img src={damogoPhone} />
            </div>
            <div className="Restoran-Content">
                <h3> Damogo </h3>
                <h1> Untuk Restoran </h1>
                <p> Aplikasi gratis kami adalah cara paling efisien untuk memesan <br /> dari semua pemasok Anda. Selesaikan pesanan lebih cepat, <br /> tidur lebih awal.</p>
                <div className="About-2-button">
                  <div className="button-1">
                     <a href="#">  Pelajari selengkapnya </a>
                  </div>
                  </div>
            </div>
        </div>
    )
}

export default Restoran;
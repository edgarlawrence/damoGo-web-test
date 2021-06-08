import React from 'react'
import '../css/restoran2.css'
import damogo4 from '../img/damogo4.png'
function Restoran2 () {
    return (
        <div className="Restoran2">
            <div className="Restoran2-content">
                <h3> DAMOGO </h3>
                <h1> Untuk Supplier </h1>
                <p> Baik Anda adalah pertanian milik keluarga atau distributor <br />
                    nasional, platform khusus kami akan mengubah cara Anda <br /> 
                    berbisnis. Hemat waktu untuk tugas manual, kurangi kesalahan <br />
                     pesanan, dan jual lebih banyak produk. </p>
                <div className="Restoran2-button">
                    <a href="#">Pelajari selengkapnya </a>
                </div>
            </div>
            <div className="Restoran2-img">
                <img src={damogo4} />
            </div>
        </div>
    )
}

export default Restoran2;
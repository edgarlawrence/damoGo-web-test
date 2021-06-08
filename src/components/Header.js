import React from 'react';
import '../css/Header.css';
import damagoBuah from '../img/damago-buah.png';

function Header() {
    return (
        <div className="header">
            <div className="header-pt-1">
                 <div className="header-title">
                    <h1> Create taste, <br/> not <span className="waste"> waste </span> </h1>
                 </div>
                 <div className="header-paraf">
                     Selamatkan makanan lezat, makanan tidak terjual dari restaurant <br />
                     favoritmu, toko, dan pertanian agar tidak terbuang sia-sia serta <br />
                     dapatkan harga hemat hingga 90% dari harga reguler!
                 </div>
                 <div className="header-button">
                     <div className="header-button-1"> <a href="#">Buat janji temu! </a> </div>
                     <div className="header-button-2"> <a href="#"> Bertemu tim kami </a> </div>
                 </div>
            </div>
            <div className="header-img">
                <img src={damagoBuah} />
            </div>
        </div>
    )
}

export default Header;
import React from 'react';
import '../css/about2.css';
import cekerAyam from '../img/ceker-ayam.PNG';

function About2 () {
    return(
        <div className="About-2">
            <div className="About-2-title">
                <h3>Blog</h3>
                <p>Cara menyimpan daging agar awet <br /> dan segar tanpa Freezer</p>
            </div>
            <div className="About-2-content">
          <p> Sudah banyak orang yang tahu jika menyimpan daging <br />
             dalam freezer menjadi cara mudah menyimpan stok daging <br />
              supaya awet dan tahan lama. Tapi bagaimana ya jika tidak <br />
              memiliki kulkas atau freezer? Tenang! Ada kok caranya, <br />
              <span> yuk disimak! </span> </p>
                <div className="About-2-pic">
                    <img src={cekerAyam} />
                </div>
                <div className="About-2-button">
                  <div className="button-1">
                     <a href="#">  Baca selengkapnya </a>
                  </div>
            </div>
              </div>
        </div>
    )
}

export default About2;
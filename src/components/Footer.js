import React from 'react'
import '../css/footer.css';
import googlePlay from '../img/google-play.png'
import appStore from '../img/appstore.png'

function Footer() {
    return(
        <div className="Footer">
            <div className="Footer-img">
                <img src="https://static.wixstatic.com/media/1eda4b_018c9552700c4861b8338b7e9bfb7f2a~mv2.png/v1/fill/w_176,h_44,al_c,q_85,usm_0.66_1.00_0.01/DAMOGO-Logo-PMS299_opt.webp" />
            </div>
            <div className="Footer-list">
                <div className="Footer-list-1">
                    <h1> Ikuti Kami </h1>
                        <ul>
                            <li> Terms of Use </li>
                            <li> Privacy </li>
                            <li> Careers </li>
                            <li> About  </li>
                            <li> CA Supply Chains Act  </li>
                            <li> Sustainability  </li>
                            <li> Affiliates  </li>
                            <li> Recall Info  </li>
                            <li> Inclusion and Diversity  </li>
                        </ul>
                </div>
                <div className="Footer-list-2">
                    <h1> Hubungi kami </h1>
                        <p> Alamat <br />
                        Jl. Prof. Herman Yohanes No.1212, <br />
                        Terban, Kec. Gondokusuman, Kota Yogyakarta, <br />
                        Daerah Istimewa Yogyakarta 55223
                        </p>
                        <p> 
                            Jam buka <br />
                            Mon-Fri 6:00 am - 8:00 pm <br />
                            Sat & Sun 9:30 - 6:00 pm
                        </p>
                </div>
                <div className="Footer-Logo">
                <h1> Download DamoGo App </h1>
                <div className="Footer-Logo-Icon">
                    <img src={googlePlay} style={{paddingBottom: 50, paddingRight: 50}}/>
                    <img src={appStore} />
                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer;
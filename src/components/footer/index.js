import React, { Component } from 'react';
import './styles.css';
import logo from '../../assets/logo-branco.png';
import facebookAmarelo from '../../assets/facebookAmarelo.png';
import twitterAmarelo from '../../assets/twitterAmarelo.png';
import instagramAmarelo from '../../assets/instagramAmarelo.png';
import githubAmarelo from '../../assets/githublogo.png';
import logoBaoba from '../../assets/logo-baoba.png';
import youtube from '../../assets/youtube_logo.png';


class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <div className='box-main-apoio'>
                    <img className='logo-footer' src={logo} alt="logo" />
                    <div className='box-apoio'>
                        <p>apoio:</p>
                        <a target='blank' href='https://baoba.org.br/'><img className='img-baobar' src={logoBaoba} alt="logo-baobar" /></a>
                    </div>
                </div>
                <div className="icon-redes-footer">
                    <div className='box-redes-footer'>
                        <a target='blank' href='https://twitter.com/MNdecidem'><img src={twitterAmarelo} alt="logo-twitter" /></a>
                        <a target='blank' href='https://www.facebook.com/mulheresnegrasdecidem'><img src={facebookAmarelo} alt="logo-facebook" /></a>
                        <a target='blank' href='https://www.instagram.com/mulheresnegrasdecidem/'><img src={instagramAmarelo} alt="logo-facebook" /></a>
                        <a target='blank' href='https://www.youtube.com/watch?v=l5kMEzwOGVY'><img src={youtube} alt="logo-youtube" /></a>
                    </div>
                    <p>Desenvolvido por Renata de A. Andrade</p>
                    {/*<div className="icon-rede-git">
                        <p>GitHub Organização Mulheres Negras Decidem</p>
                        <a target='blank' href='https://github.com/MulheresNegrasDecidem'><img className='img-gitHub' src={githubAmarelo} alt="logo-github" /></a>
                    </div>*/}
                </div>
            </div>
        );
    }
}

export default Footer
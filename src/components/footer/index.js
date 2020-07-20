import React, { Component } from 'react';
import './styles.css';
import logo from '../../assets/logo-branco.png';
import facebookAmarelo from '../../assets/facebookAmarelo.png';
import twitterAmarelo from '../../assets/twitterAmarelo.png';
import instagramAmarelo from '../../assets/instagramAmarelo.png';
import githubAmarelo from '../../assets/githublogo.png';
import logoBaoba from '../../assets/logo-baoba.png';




class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <img src={logo} alt="logo" />
                <div className="box-icon-redes">
                    <div className="icon-redes-footer">
                        <a target='blank' href='https://twitter.com/MNdecidem'></a><img className='img-footer' src={twitterAmarelo} alt="logo-twitter" />
                        <a target='blank' href='https://www.facebook.com/mulheresnegrasdecidem'><img className='img-footer' src={facebookAmarelo} alt="logo-facebook" /></a>
                        <a target='blank' href='https://www.instagram.com/mulheresnegrasdecidem/'><img className='img-footer' src={instagramAmarelo} alt="logo-facebook" /></a>
                    </div>
                </div>
                <p>Desenvolvido por Renata de A. Andrade</p>
                <div className="icon-redes">
                    <p>GitHub Organização Mulheres Negras Decidem</p>
                    <a target='blank' href='https://github.com/MulheresNegrasDecidem'><img className='img-gitHub' src={githubAmarelo} alt="logo-github" /></a>
                </div>
                <div className="icon-site-baoba">
                    <p>Apoio</p>
                    <a target='blank' href='https://baoba.org.br/'><img className='img-baobar' src={logoBaoba} alt="logo-baobar" /></a>
                </div>
            </div>
        );
    }
}

export default Footer
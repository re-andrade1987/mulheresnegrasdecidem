import React, { useState } from 'react';
import MainTitle from '../../components/layoutPieces/mainTitle';
import './styles.css';
import firebase from '../../config/firebase';
import { Link } from 'react-router-dom';
import artigoImg from '../../assets/artigo.png';
import twitter from '../../assets/twitterRed.png';
import facebook from '../../assets/facebookRed.png';
import instagram from '../../assets/instagramRed.png';
import 'firebase/auth';

function Artigos() {

    return (
        <section className="section-artigos">
            <MainTitle value="Artigos" />
            <div className='box-conteudo'>
                <img src={artigoImg} alt="logo" />
                <div className='box-texts-artigo'>
                    <h3>Apoiadores de Bolsonaro realizam pelo menos 50 ataques em todo o país</h3>
                    <p>
                        commodo pulvinaar,convallis aliquam pharetra eleifend tincidunt odio nam vehicula, metus nibh aenean sit cras adipiscing luctus.
                    </p>
                    <div className="icon-redes-nav">
                        <a target='blank' href='https://twitter.com/MNdecidem'><img src={twitter} alt="logo-twitter" /></a>
                        <a target='blank' href='https://www.facebook.com/mulheresnegrasdecidem'><img src={facebook} alt="logo-facebook" /></a>
                        <a target='blank' href='https://www.instagram.com/mulheresnegrasdecidem/'><img src={instagram} alt="logo-facebook" /></a>
                    </div>
                    <a className='link-podcast' href='https://twitter.com/MNdecidem'>+ Leia Mais</a>
                </div>
            </div>
            <div className='box-conteudo'>
                <img src={artigoImg} alt="logo" />
                <div className='box-texts-artigo'>
                    <h3>Apoiadores de Bolsonaro realizam pelo menos 50 ataques em todo o país</h3>
                    <p>
                        gravida neque at augue leo euismod, potenti vel tempus quis proin tincidunt consectetur id, aptent cubilia tempus turpis justo lacinia placerat aptent.
                    </p>
                    <div className="icon-redes-nav">
                        <a target='blank' href='https://twitter.com/MNdecidem'><img src={twitter} alt="logo-twitter" /></a>
                        <a target='blank' href='https://www.facebook.com/mulheresnegrasdecidem'><img src={facebook} alt="logo-facebook" /></a>
                        <a target='blank' href='https://www.instagram.com/mulheresnegrasdecidem/'><img src={instagram} alt="logo-facebook" /></a>
                    </div>
                    <a className='link-podcast' target='blank' href='https://twitter.com/MNdecidem'>+ Leia Mais</a>
                </div>
            </div>
        </section>
    );
}

export default Artigos
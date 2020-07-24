import React, { useState } from 'react';
import MainTitle from '../../components/layoutPieces/mainTitle';
import './styles.css';
import firebase from '../../config/firebase';
import { Link } from 'react-router-dom';
import artigo1 from '../../assets/artigo1.png';
import artigo2 from '../../assets/artigo2.png';
import artigo3 from '../../assets/artigo3.png';


import twitter from '../../assets/twitterRed.png';
import facebook from '../../assets/facebookRed.png';
import instagram from '../../assets/instagramRed.png';
import 'firebase/auth';

function Artigos() {

    return (
        <section className="section-artigos">
            <MainTitle value="Artigos" />
            <div className='box-conteudo'>
                <img src={artigo1} alt="logo" />
                <div className='box-texts-artigo'>
                    <h3>Corpos que pautam: a relação entre representatividade e pautas legislativas </h3>
                    <p>7/7/2020 Estadão</p>
                    <div className="icon-redes-nav">
                        <a target='blank' href='https://twitter.com/MNdecidem'><img src={twitter} alt="logo-twitter" /></a>
                        <a target='blank' href='https://www.facebook.com/mulheresnegrasdecidem'><img src={facebook} alt="logo-facebook" /></a>
                        <a target='blank' href='https://www.instagram.com/mulheresnegrasdecidem/'><img src={instagram} alt="logo-facebook" /></a>
                    </div>
                    <a className='link-podcast' href='https://politica.estadao.com.br/blogs/legis-ativo/corpos-que-pautam-a-relacao-entre-representatividade-e-pautas-legislativas/'>+ Leia Mais</a>
                </div>
            </div>
            <div className='box-conteudo'>
                <img src={artigo2} alt="logo" />
                <div className='box-texts-artigo'>
                    <h3>Mulheres negras na dianteira da transição que precisamos</h3>
                    <p>14/04/20 Cult</p>
                    <div className="icon-redes-nav">
                        <a target='blank' href='https://twitter.com/MNdecidem'><img src={twitter} alt="logo-twitter" /></a>
                        <a target='blank' href='https://www.facebook.com/mulheresnegrasdecidem'><img src={facebook} alt="logo-facebook" /></a>
                        <a target='blank' href='https://www.instagram.com/mulheresnegrasdecidem/'><img src={instagram} alt="logo-facebook" /></a>
                    </div>
                    <a className='link-podcast' target='blank' href='https://revistacult.uol.com.br/home/mulheres-negras-na-dianteira-da-transicao-que-precisamos/'>+ Leia Mais</a>
                </div>
            </div>
            <div className='box-conteudo'>
                <img src={artigo3} alt="logo" />
                <div className='box-texts-artigo'>
                    <h3>Como garantir o acesso das mulheres à Política</h3>
                    <p>1/9/2019 Carta Capital Laura</p>
                    <div className="icon-redes-nav">
                        <a target='blank' href='https://twitter.com/MNdecidem'><img src={twitter} alt="logo-twitter" /></a>
                        <a target='blank' href='https://www.facebook.com/mulheresnegrasdecidem'><img src={facebook} alt="logo-facebook" /></a>
                        <a target='blank' href='https://www.instagram.com/mulheresnegrasdecidem/'><img src={instagram} alt="logo-facebook" /></a>
                    </div>
                    <a className='link-podcast' target='blank' href='https://www.cartacapital.com.br/justica/como-garantir-o-acesso-das-mulheres-a-politica/'>+ Leia Mais</a>
                </div>
            </div>
        </section>
    );
}

export default Artigos
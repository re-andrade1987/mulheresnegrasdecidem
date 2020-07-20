import React from 'react';
import './styles.css';
import MainTitle from '../../components/layoutPieces/mainTitle';
import rioOn from '../../assets/rio-on.png';
import globo from '../../assets/globo.png';
import agencia from '../../assets/agencia.png';


function Noticias() {
    return (
        <section className="box-contact">
            <MainTitle value="Noticias" />
            <div className="box-news">
                <div className="box-img-banner">
                    <img src={rioOn} alt="rio-on" />
                    <p>Plataforma ‘Mulheres Negras Decidem’ Lançada em Apoio a
                    Representatividade Da Mulher Negra Na Política [VÍDEO]
                </p>
                </div>
                <div className="box-img-banner">
                    <img src={agencia} alt="rio-on" />
                    <p>Lançamento da plataforma mulheres negras decidem – Rio de janeiro/RJ, 21/07/2018</p>
                </div>
                <div className="box-img-banner">
                    <img src={globo} alt="rio-on" />
                    <p>Marielle Franco: conheça seis mulheres negras que se inspiram no legado da vereadora
                    assassinada há 2 anos
                </p>
                </div>
            </div>
        </section>
    )
}



export default Noticias
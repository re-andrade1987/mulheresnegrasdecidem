import React, { Component } from 'react';
import './styles.css';
import MainTitle from '../../components/layoutPieces/mainTitle';
import banner from '../../assets/paraondevamos.png';
import bannerResponsivo from '../../assets/paraondevamosResponsivo.png';



class Relatorio extends Component {

    render() {
        return (
            <section className="section-relatorios">
                <MainTitle value="RELATÓRIOS" />
                <div className="first-box-relatorios">
                <a target='blank' href='https://www.paraondevamos.org/'>
                    <img className='img-desktop' src={banner} alt="banner-para-onde-vamos" />
                </a>
                </div>
                <div className="box-contact-publicacao">
                    <h3>Entre em contato</h3>
                    <p>mulheresnegrasdecidem@gmail.com</p>
                </div>
            </section>

        );

    }

}

export default Relatorio
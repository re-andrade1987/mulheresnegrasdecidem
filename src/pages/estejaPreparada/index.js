import React, { Component } from 'react';
import './styles.css';
import banner from '../../assets/banner_estejaPreparada.png';
import rectangle from '../../assets/rectangle.png';
import kitFormacao from '../../assets/kitdeformacao.png';

import MainTitle from '../../components/layoutPieces/mainTitle';


class KitFormacao extends Component {

    render() {
        return (
            <section className="section-esteja-preparada">
                <img className="banner-preparada" src={banner} alt="banner-mulheres" />
                <MainTitle value="Dados" />
                <div className="box-formacao">
                    <div className="box-subtitle">
                        <p> Kits de Formação Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut venenatis
                        tellus in metus vulputate eu scelerisque felis. Orci dapibus ultrices in iaculis
                        nunc sed augue. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis.
                        tellus in metus vulputate eu scelerisque felis. Orci dapibus ultrices in iaculis
                        nunc sed augue. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis.
                        </p>
                    </div>
                </div>
                <section className="box-partidos">
                    <div className="box-partidos-main">
                        <img src={kitFormacao} alt="img-kit-formacao" />
                        <div className="box-partidos-texts">
                            <h3>1. Partidos Políticos</h3>
                            <p> 1. Partidos Políticos Nec ullamcorper sit amet risus. Tristique senectus
                            et netus et malesuada fames ac. Auctor urna nunc id cursus. Malesuada nunc
                            vel risus commodo viverra maecenas accumsan lacus vel. Massa vitae tortor
                            condimentum lacinia quis vel. Pellentesque habitant morbi tristique senectus
                            et netus et malesuada fames. Quam id leo in vitae turpis massa sed. Quis vel
                            eros donec ac odio tempor orci dapibus. Faça download da publicação.
                            </p>
                        </div>
                    </div>
                    <div className="box-partidos-main">
                        <img src={rectangle} alt="banner-mulheres" />
                        <div className="box-partidos-texts">
                            <h3>1. Partidos Políticos</h3>
                            <p> 1. Partidos Políticos Nec ullamcorper sit amet risus. Tristique senectus
                            et netus et malesuada fames ac. Auctor urna nunc id cursus. Malesuada nunc
                            vel risus commodo viverra maecenas accumsan lacus vel. Massa vitae tortor
                            condimentum lacinia quis vel. Pellentesque habitant morbi tristique senectus
                            et netus et malesuada fames. Quam id leo in vitae turpis massa sed. Quis vel
                            eros donec ac odio tempor orci dapibus. Faça download da publicação.
                            </p>
                        </div>
                    </div>
                </section>
            </section>
        );

    }

}

export default KitFormacao
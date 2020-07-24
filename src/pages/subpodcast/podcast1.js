import React, { Component } from 'react';
import banner1 from '../../assets/bannerpodcast1.png';
import { Link } from 'react-router-dom';

import './styles.css';

class Podcast1 extends Component {

    render() {
        return (
            <section className="section-podcast">
                <div className="box-subpodcast-banner">
                    <img src={banner1} alt="logo" />
                    <p>
                        No primeiro episódio de 2020, vamos conversar sobre as novas regras das eleições deste
                        ano! Vamos debater também as prévias eleitorais, importante fase na corrida eleitoral.
                        Alistamento de títulos também será parte do nosso papo. Ou seja, muita informação!
                        Tudo isso com os comentários de Laura, Carol e Gabi, nossas articuladoras"
                    </p>

                    <Link to="./podcast">
                        <button className="button">Voltar</button>
                    </Link>
                </div>

            </section>
        );

    }

}

export default Podcast1
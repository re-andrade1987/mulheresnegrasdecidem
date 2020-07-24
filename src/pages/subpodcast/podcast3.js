import React, { Component } from 'react';
import banner1 from '../../assets/bannerpodcast1.png';
import { Link } from 'react-router-dom';

import './styles.css';

class Podcast3 extends Component {

    render() {
        return (
            <section className="section-podcast">
                <div className="box-subpodcast-banner">
                    <img src={banner1} alt="logo" />
                    <p>
                        Quando completa um ano do assassinato da vereadora Marielle Franco, o podcast Mulheres Negras Decidem faz um
                        balanço das reações da sociedade civil sobre o crime político e busca entender de que forma a execução recolocou
                        alguns debates sobre direitos humanos no processo eleitoral brasileiro. Ana Carolina Lourenço, Gabriele Roza e Juliana Marques
                        conversam também sobre crise política do governo Bolsonaro, sobre a polêmica envolvendo José de Abreu e sobre o legado político
                        para as mulheres negras.
                    </p>
                    <Link to="./podcast">
                        <button className="button">Voltar</button>
                    </Link>
                </div>

            </section>
        );

    }

}

export default Podcast3
import React, { Component } from 'react';
import banner1 from '../../assets/bannerpodcast1.png';
import { Link } from 'react-router-dom';

import './styles.css';

class Podcast4 extends Component {

    render() {
        return (
            <section className="section-podcast">
                <div className="box-subpodcast-banner">
                    <img src={banner1} alt="logo" />
                    <p>
                    No primeiro programa da série Mulheres Negras Decidem, da Rede Umunna, a socióloga Ana Carolina Lourenço e a estatística
                    Juliana Marques conversam sobre regras eleitorais, mapas de votação e ativismo nas eleições a partir das campanhas de Lélia
                    Gonzalez, Benedita da Silva, Jurema Batista e Marielle Franco. Dica: Em cumprimento ao que determina a Lei de Acesso
                    à Informação (Lei nº 12.527/2011), em 2012, o Tribunal Superior Eleitoral (TSE) criou o Projeto Memória Eleitoral que
                    disponibiliza dados brutos e detalhados das eleições realizadas em todo o país. O projeto possibilita a pesquisa on-line
                    sobre resultados de pleitos e informações de candidatos no período de 1945 até 1990. Os dados que mencionamos no podcast 
                    estão disponíveis no site do projeto."</p>
                    <Link to="./podcast">
                        <button className="button">Voltar</button>
                    </Link>
                </div>

            </section>
        );

    }

}

export default Podcast4
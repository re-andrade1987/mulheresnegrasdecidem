import React, { Component } from 'react';
import banner1 from '../../assets/bannerpodcast1.png';
import { Link } from 'react-router-dom';

import './styles.css';

class Podcast2 extends Component {

    render() {
        return (
            <section className="section-podcast">
                <div className="box-subpodcast-banner">
                    <img src={banner1} alt="logo" />
                    <p>
                        Se você acompanha o Mulheres Negras Decidem nas redes sociais, já deve ter visto que a gente acabou de lançar junto ao Instituto Marielle Franco o relatório Para Onde Vamos. Neste episódio vamos falar do relatório, no primeiro bloco, a gente vai fazer uma leve apresentação da pesquisa e da metodologia pra todo mundo ficar na mesma página. No segundo bloco vamos falar de alguns dados levantados que são muito relevantes pra gente entender quem são essas mulheres. E finalizando, no terceiro bloco, vamos juntas acessar o futuro pautado por ativistas negras no pós-pandemia. Dicas do podcast: Curso Instituto Alziras em parceria com a Fundaçāo Konrad Adenauer. Inscrições até 28 de junho pelo link bit.ly/cursomaismulheres Pesquisa Azmina https://www.elasnocongresso.com.br/                    </p>

                    <Link to="./podcast">
                        <button className="button">Voltar</button>
                    </Link>
                </div>

            </section>
        );

    }

}

export default Podcast2
import React from 'react';
import './styles.css';
import MainTitle from '../../components/layoutPieces/mainTitle';
import rioOn from '../../assets/rio-on.png';
import globo from '../../assets/globo.png';
import correio from '../../assets/correioBraziliense.png';
import hypeness from '../../assets/hypeness.png';
import forum from '../../assets/forum.png';
import folhaSãoPaulo from '../../assets/folhaSãoPaulo.png';
import senac from '../../assets/senac.png';
import generoNumero from '../../assets/generoNumero.png';
import universa from '../../assets/universa.png';


function Noticias() {
    return (
        <section className="box-contact">
            <MainTitle value="Notícias" />
            <div className="box-news">
                <div className="box-img-banner">
                    <img src={folhaSãoPaulo} alt="rio-on" />
                    <div className="box-textos-noticias">
                        <p>Instituto Marielle Franco anuncia Pane para fortalecer candidaturas negras nas eleições municipais deste ano</p>
                        <strong>13/07/2020 Folha de SP</strong>
                        <a className='link-noticias' target='blank' href='https://pretapretopretinhos.blogfolha.uol.com.br/2020/07/13/instituto-anielle-franco-anuncia-pane-para-fortalecer-candidaturas-negras-nas-eleicoes-municipais-deste-ano//'>Leia mais</a>
                    </div>
                </div>

                <div className="box-img-banner">
                    <img src={generoNumero} alt="rio-on" />
                    <div className="box-textos-noticias">
                        <p>Pesquisa revela que 25% de ativistas negras consideram se candidatar a cargo público nas eleições municipais de 2020</p>
                        <strong>25/06/20 Gênero e número</strong>
                        <a className='link-noticias' target='blank' href='http://www.generonumero.media/pesquisa-revela-que-25-de-ativistas-negras-consideram-se-candidatar-cargo-publico-nas-eleicoes-municipais-de-2020/.br/universa/noticias/azmina/2020/06/18/mulheres-sao-principais-autoras-de-texto-sobre-atuacao-feminina-na-politica.htm.media/pesquisa-revela-que-25-de-ativistas-negras-consideram-se-candidatar-cargo-publico-nas-eleicoes-municipais-de-2020/.uol.com.br/2020/07/13/instituto-anielle-franco-anuncia-pane-para-fortalecer-candidaturas-negras-nas-eleicoes-municipais-deste-ano//'>Leia mais</a>
                    </div>
                </div>

                <div className="box-img-banner">
                    <img src={universa} alt="rio-on" />
                    <div className="box-textos-noticias">
                        <p>Mulheres são principais autoras de texto sobre atuação feminina na política </p>
                        <strong>18/06/20 Uol</strong>
                        <a className='link-noticias' target='blank' href='https://www.uol.com.br/universa/noticias/azmina/2020/06/18/mulheres-sao-principais-autoras-de-texto-sobre-atuacao-feminina-na-politica.htm'>Leia mais</a>
                    </div>
                </div>

                <div className="box-img-banner">
                    <img src={senac} alt="rio-on" />
                    <div className="box-textos-noticias">
                        <p>Pesquisa com 245 mulheres negras de todo país</p>
                        <strong>6/6/2020 Senac</strong>
                        <a className='link-noticias' target='blank' href='http://setor3.com.br/pesquisa-com-245-mulheres-negras-de-todo-pais/'>Leia mais</a>
                    </div>
                </div>

                <div className="box-img-banner">
                    <img src={forum} alt="rio-on" />
                    <div className="box-textos-noticias">
                        <p>Mulheres defendem direito a 50% de reservas no Legislativo</p>
                        <strong>21/09/19 Revista Forum</strong>
                        <a className='link-noticias' target='blank' href='https://revistaforum.com.br/mulher/mulheres-defendem-direito-a-50-de-reservas-no-legislativo/'>Leia mais</a>
                    </div>
                </div>

                <div className="box-img-banner">
                    <img src={globo} alt="rio-on" />
                    <div className="box-textos-noticias">
                        <p>Estudo encontra 100 iniciativas para aproximar política da população mais pobre</p>
                        <strong>28/08/18 O Globo</strong>
                        <a className='link-noticias' target='blank' href='https://pretapretopretinhos.blogfolha.uol.com.br/2020/07/13/instituto-anielle-franco-anuncia-pane-para-fortalecer-candidaturas-negras-nas-eleicoes-municipais-deste-ano//'>Leia mais</a>

                    </div>
                </div>

                <div className="box-img-banner">
                    <img src={hypeness} alt="rio-on" />
                    <div className="box-textos-noticias">
                        <p>Sementes de Marielle: Talíria Petrone leva a política de mulheres negras para Brasília</p>
                        <strong>1/11/2018 Hypeness</strong>
                        <a className='link-noticias' target='blank' href='https://www.hypeness.com.br/2018/11/sementes-de-marielle-taliria-petrone-leva-a-politica-de-mulheres-negras-para-brasilia/'>Leia mais</a>

                    </div>
                </div>

                <div className="box-img-banner">
                    <img src={correio} alt="rio-on" />
                    <div className="box-textos-noticias">
                        <p>Subrepresentada, bancada de mulheres negras crescerá 30% em 2019</p>
                        <strong>20/10/18 Correio Braziliense</strong>
                        <a className='link-noticias' target='blank' href='https://www.correiobraziliense.com.br/app/noticia/politica/2018/10/20/interna_politica'>Leia mais</a>
                    </div>
                </div>

                <div className="box-img-banner">
                    <img src={hypeness} alt="rio-on" />
                    <div className="box-textos-noticias">
                        <p>Seis iniciativas que estão ajudando a eleger mais mulheres em 2018</p>
                        <strong>1/9/2018 Hypeness</strong>
                        <a className='link-noticias' target='blank' href='https://pretapretopretinhos.blogfolha.uol.com.br/2020/07/13/instituto-anielle-franco-anuncia-pane-para-fortalecer-candidaturas-negras-nas-eleicoes-municipais-deste-ano//'>Leia mais</a>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default Noticias
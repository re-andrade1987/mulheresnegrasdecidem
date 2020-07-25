import React from 'react';
import { Link } from 'react-router-dom';
import Mito1 from '../../assets/mito1-branco.png';
import Mito2 from '../../assets/mito2-branco.png';
import Mito3 from '../../assets/mito3-branco.png';
import Mito4 from '../../assets/mito4-branco.png';
import Mito5 from '../../assets/mito5-branco.png';
import Mito6 from '../../assets/mito6-branco.png';
import Mito7 from '../../assets/mito7-branco.png';
import Mito8 from '../../assets/mito.jpeg';
import bannerMito from '../../assets/banner-mitos.png';
import grafico from '../../assets/grafico_mulheres.png';
import infoGrafico from '../../assets/infografico.png';
import grafico4 from '../../assets/grafico4.png';

import MainTitle from '../../components/layoutPieces/mainTitle';
import Subtitle from '../../components/layoutPieces/subTitle'

import './styles.css';

function Mitos() {

    return (
        <section className="section-mitos">
            <div className="box-mitos-banner">
                <img id="agni" onclick="trocar()" class="img-gods expand" src={bannerMito} alt="banner-mito" />
            </div>
            <MainTitle value="Mitos" />
            <div className='main-text-mito'>
                <p>A partir das trocas que tivemos em 2018 com as candidaturas de mulheres negras, dos nossos trânsitos
                 nos espaços de debate político e dos acúmulos prévios sobre a temática, produzimos uma série de cards 
                 sobre os mitos que são disseminados à relação entre mulheres negras e política
                </p>
                <p>A série compõe nossa primeira experiência com dados e narrativas e foi idealizado como ferramenta
                para superarmos parte das barreiras que impedem mais mulheres negras de atuarem na política institucional.

                </p>
            </div>
            <Subtitle value="Clique nos mitos e entenda mais:" />
            <div className="box-mitos">
                <Link to="/Mito1">
                    <img className='img1' onclick="marcar(this)" src={Mito1} alt="mito1" />
                </Link>
                <Link to="/Mito2">
                    <img className='img1' onclick="marcar(this)" src={Mito2} alt="mito2" />
                </Link>
                <Link to="/Mito3">
                    <img className='img1' onclick="marcar(this)" src={Mito3} alt="mito3" />
                </Link>
                <Link to="/Mito4">
                    <img className='img1' onclick="marcar(this)" src={Mito4} alt="mito4" />
                </Link>
            </div>
            <div className="box-mitos">
                <Link to="/Mito5">
                    <img className='img1' onclick="marcar(this)" src={Mito5} alt="mito5" />
                </Link>
                <Link to="/Mito6">
                    <img className='img1' onclick="marcar(this)" src={Mito6} alt="mito6" />
                </Link>
                <Link to="/Mito7">
                    <img className='img1' onclick="marcar(this)" src={Mito7} alt="mito7" />
                </Link>
                <Link to="/Mito8">
                    <img className='img1' onclick="marcar(this)" src={Mito8} alt="mito8" />
                </Link>
            </div>
            <div className="box-dados">
                <MainTitle value="DIAGNÓSTICO" />
                <div className='box-text-dados'>
                    <p>As nossas trajetórias, enquanto mulheres negras, falam sobre nós. Os dados também falam sobre nós! Mas não são olhados. Muitos deles, inclusive produzidos por órgãos oficiais de pesquisa, não realizam o recorte racial e de gênero.</p>
                    <p><strong>Vamos entender o problema para construirmos juntos um futuro no qual as mulheres negras decidem!</strong></p>
                </div>
                <div className="box-mitos-textos">
                    <div className="textos">
                        <h3>Duas fases entre existirmos e sermos representadas</h3>
                        <p>Somos mais de <strong>27%</strong> da população brasileira e somos menos de <strong>2%</strong>no congresso nacional.</p>
                        <p> Total Congresso 513 / Mulheres Negras 10</p>
                        <img src={grafico} alt="grafico-mulheres" />
                    </div>
                    <div className="textos">
                        <h3>Investimos em candidaturas de mulheres negras</h3>
                        <p>Apenas <strong>2,51%</strong> das despesas de todos os candidatos ao Legislativo estava relacionada a candidaturas de mulheres negras, em 2014.</p>
                        <img src={infoGrafico} alt="infografico" />
                    </div>
                </div>
                <div className="box-mitos-textos">
                    <div className="textos">
                        <h3>Qual a chance de sermos eleitas?</h3>
                        <p>Elegibilidade total de mulheres negras para o legislativo em 2014 foi de apenas <strong>1,6.</strong></p>
                        <p>Além disso, o indicador aparece zerado para algumas formações abaixo do nível superior, diferente de outros grupos demográficos.</p>
                    </div>
                    <div className="textos">
                        <img src={grafico4} alt="infografico" />
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Mitos
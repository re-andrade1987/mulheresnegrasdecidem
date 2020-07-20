import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Mito1 from '../../assets/mito1-branco.png';
import Mito2 from '../../assets/mito2-branco.png';
import Mito3 from '../../assets/mito3-branco.png';
import Mito4 from '../../assets/mito4-branco.png';
import Mito5 from '../../assets/mito5-branco.png';
import Mito6 from '../../assets/mito6-branco.png';
import Mito7 from '../../assets/mito7-branco.png';
import Mito8 from '../../assets/mito.png';
import bannerMito from '../../assets/banner-mitos.png';
import grafico from '../../assets/grafico_mulheres.png';
import infoGrafico from '../../assets/infografico.png';

import MainTitle from '../../components/layoutPieces/mainTitle'
import './styles.css';

var imagens = [
    "https://www.cleverfiles.com/howto/wp-content/uploads/2016/08/mini.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/e/e0/JPEG_example_JPG_RIP_050.jpg",
    "https://image.freepik.com/fotos-gratis/hrc-tigre-siberiano-2-jpg_21253111.jpg"
];


function Mitos() {

    return (
        <section className="section-mitos">
            <div className="box-mitos-banner">
                <img id="agni" onclick="trocar()" class="img-gods expand" src={bannerMito} alt="banner-mito" />
            </div>
            <MainTitle value="Mitos" />
            <div className='main-text-mito'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut venenatis tellus in metus vulputate eu scelerisque
                felis. Orci dapibus ultrices in iaculis nunc sed augue. Sit
                amet nisl suscipit adipiscing bibendum est ultricies integer
                quis. Arcu non sodales neque sodales ut etiam sit amet nisl.
                Adipiscing enim eu turpis egestas pretium. Non tellus orci ac
                auctor augue mauris augue. Sed lectus vestibulum mattis
                ullamcorper velit sed. Ut morbi tincidunt augue interdum.
                Volutpat sed cras ornare arcu dui vivamus arcu. Metus vulputate
                eu scelerisque felis imperdiet proin fermentum. Neque sodales ut
                etiam sit. Ante metus dictum at tempor. Tellus elementum sagittis
                vitae et leo duis. Suscipit tellus mauris a diam. Integer quis auctor
                </p>
            </div>
            <MainTitle value="Clique nos mitos e entenda mais:" />
            <div className="box-mitos">
                <Link to="/Mito1">
                    <img className='img1' onclick="marcar(this)" src={Mito1} alt="mito1" />
                </Link>
                <Link to="/Mito1">
                    <img className='img1' onclick="marcar(this)" src={Mito2} alt="mito2" />
                </Link>
                <Link to="/Mito1">
                    <img className='img1' onclick="marcar(this)" src={Mito3} alt="mito3" />
                </Link>
                <Link to="/Mito1">
                    <img className='img1' onclick="marcar(this)" src={Mito4} alt="mito4" />
                </Link>
            </div>
            <div className="box-mitos">
                <Link to="/Mito1">
                    <img className='img1' onclick="marcar(this)" src={Mito5} alt="mito5" />
                </Link>
                <Link to="/Mito1">
                    <img className='img1' onclick="marcar(this)" src={Mito6} alt="mito6" />
                </Link>
                <Link to="/Mito1">
                    <img className='img1' onclick="marcar(this)" src={Mito7} alt="mito7" />
                </Link>           
                <Link to="/Mito1">
                    <img className='img1' onclick="marcar(this)" src={Mito8} alt="mito8" />
                </Link>  
            </div>
            <div className="box-dados">
                <MainTitle value="DIAGNÓSTICO" />
                <p>As nossas trajetórias, enquanto mulheres negras, falam sobre nós. Os dados também falam sobre nós! Mas não são olhados. Muitos deles, inclusive produzidos por órgãos oficiais de pesquisa, não realizam o recorte racial e de gênero.</p>
                <p><strong>Vamos entender o problema para construirmos juntos um futuro no qual as mulheres negras decidem!</strong></p>

                <div className="box-mitos-textos">
                    <div className="textos">
                        <h3>Duas fases entre existirmos e sermos representadas</h3>
                        <p>Duas fases entre existirmos e sermos representadas Somos mais de 27% da população brasileira e somos menos de 2% no congresso nacional. Total Congresso 513 / Mulheres Negras 10 Sugestão representação com proporção de bonecas pretas</p>
                        <p>Investimento em candidaturas de mulheres negras Apenas 2,51% das despesas de todos os candidatos ao Legislativo estava relacionada a candidaturas de mulheres negras, em 2014.</p>
                    </div>
                    <div className="textos">
                        <h3>Investimos em candidaturas de mulheres negras</h3>
                        <p>Duas fases entre existirmos e sermos representadas Somos mais de 27% da população brasileira e somos menos de 2% no congresso nacional. Total Congresso 513 / Mulheres Negras 10 Sugestão representação com proporção de bonecas pretas</p>
                        <p>Investimento em candidaturas de mulheres negras Apenas 2,51% das despesas de todos os candidatos ao Legislativo estava relacionada a candidaturas de mulheres negras, em 2014.</p>
                    </div>
                </div>
                <div className="box-mitos">
                    <img src={grafico} alt="grafico-mulheres" />
                    <img src={infoGrafico} alt="infografico" />
                </div>
            </div>
        </section>
    );

}

export default Mitos
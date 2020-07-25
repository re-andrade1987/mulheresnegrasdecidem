import React from 'react';
import ImgP1 from '../../assets/img1Pd.png';
import ImgP2 from '../../assets/img2Pd.png';
import ImgP3 from '../../assets/img3Pd.png';
import ImgP4 from '../../assets/img4Pd.png';

import MainTitle from '../../components/layoutPieces/mainTitle';
import { Link } from 'react-router-dom';

import './styles.css';

function Podcast() {
    return (
        <section className='section-podcast'>
            <MainTitle value="Podcast" />
            <div className='box-conteudo'>
                <img src={ImgP4} alt="logo" />
                <div className='box-texts-podcast'>
                    <h2>Mulheres Negras Decidem Para Onde Vamos</h2>
                    {/*<Link to="/Podcast4">Leia Mais...</Link>*/}
                    <a target='blank'className='link-podcast' href='https://soundcloud.com/mulheresnegrasdecidem/mnd2020-ep-02-mulheres-negras-decidem-para-onde-vamos'>Ouça agora</a>
                </div>
            </div>
            <div className='box-conteudo'>
                <img src={ImgP2} alt="logo" />
                <div className='box-texts-podcast'>
                    <h2>O que são as prévias eleitorais?</h2>
                    {/*<Link to="/Podcast2">Leia Mais...</Link>*/}
                    <a target='blank'className='link-podcast'  href='https://soundcloud.com/mulheresnegrasdecidem/mnd2020-ep-01-o-que-sao-as'>Ouça agora</a>
                </div>
            </div>
            <div className='box-conteudo'>
                <img src={ImgP3} alt="logo" />
                <div className='box-texts-podcast'>
                    <h2>Marielle Franco: Reações da sociedade civil pós assassinato e o novo cenário da política brasileira</h2>
                    {/*<Link to="/Podcast3">Leia Mais...</Link>*/}
                    <a target='blank' className='link-podcast'  href='https://soundcloud.com/mulheresnegrasdecidem/marielle-franco-reacoes-da-sociedade-civil-pos-assasinato-e-o-novo-cenario-da-politica-brasileira'>Ouça agora</a>
                </div>
            </div>
            <div className='box-conteudo'>
                <img src={ImgP1} alt="logo" />
                <div className='box-texts-podcast'>
                    <h2>Quais foram as estratégias políticas utilizadas por figuras expressivas dos movimentos de mulheres negras?</h2>
                    {/*<Link to="/Podcast1">Leia Mais...</Link>*/}
                    <a target='blank'className='link-podcast' href='https://soundcloud.com/mulheresnegrasdecidem/mulheres-negras-decidem-ep-1'>Ouça agora</a>
                </div>
            </div>
        </section>
    )
}

export default Podcast
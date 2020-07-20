import React from 'react';
import ImgP1 from '../../assets/img1Pd.png';
import ImgP2 from '../../assets/img2Pd.png';
import SubTitle from '../../components/layoutPieces/subTitle';
import bannerPodcast from '../../assets/banner-podcast.png';

import './styles.css';

function Podcast() {
    return (
        <section className='section-podcast'>
            <div className="first-box-banner">
                <img src={bannerPodcast} alt="banner-mulheres" />
            </div>
            <SubTitle value="Podcast" />
            <div className='box-conteudo'>
                <img src={ImgP1} alt="logo" />
                <div className='box-texts'>
                    <h2>#MND2020 - Ep. 01: O que são as prévias eleitorais?</h2>
                    <p>
                        No primeiro episódio de 2020, vamos conversar sobre as novas regras das eleições deste
                        ano! Vamos debater também as prévias eleitorais, importante fase na corrida eleitoral.
                        Alistamento de títulos também será parte do nosso papo. Ou seja, muita informação!
                        Tudo isso com os comentários de Laura, Carol e Gabi, nossas articuladoras"
                    </p>
                    <a className='link-podcast' href='https://soundcloud.com/mulheresnegrasdecidem/mulheres-negras-decidem-ep-1'>Ouça agora</a>
                </div>
            </div>
            <div className='box-conteudo'>
                <img src={ImgP2} alt="logo" />
                <div className='box-texts'>
                    <h2>#MND2020 - Ep. 02: Mulheres Negras Decidem Para Onde Vamos</h2>
                    <p>
                        Se você acompanha o Mulheres Negras Decidem nas redes sociais, já deve ter visto que a gente acabou de lançar junto ao Instituto Marielle Franco o relatório Para Onde Vamos. Neste episódio vamos falar do relatório, no primeiro bloco, a gente vai fazer uma leve apresentação da pesquisa e da metodologia pra todo mundo ficar na mesma página. No segundo bloco vamos falar de alguns dados levantados que são muito relevantes pra gente entender quem são essas mulheres. E finalizando, no terceiro bloco, vamos juntas acessar o futuro pautado por ativistas negras no pós-pandemia.
                        Dicas do podcast:
                        Curso Instituto Alziras em parceria com a Fundaçāo Konrad Adenauer. Inscrições até 28 de junho pelo link bit.ly/cursomaismulheres
                        Pesquisa Azmina https://www.elasnocongresso.com.br/"</p>
                    <a className='link-podcast' target='blank' href='https://soundcloud.com/mulheresnegrasdecidem/mnd2020-ep-01-o-que-sao-as'>Ouça agora</a>
                </div>
            </div>
            <div className='box-conteudo'>
                <img src={ImgP2} alt="logo" />
                <div className='box-texts'>
                    <h2>"Marielle Franco: Reações da sociedade civil pós assassinato e o novo cenário da política brasileira"</h2>
                    <p>
                        Quando completa um ano do assassinato da vereadora Marielle Franco, o podcast Mulheres Negras Decidem faz um
                        balanço das reações da sociedade civil sobre o crime político e busca entender de que forma a execução recolocou
                        alguns debates sobre direitos humanos no processo eleitoral brasileiro. Ana Carolina Lourenço, Gabriele Roza e Juliana Marques
                        conversam também sobre crise política do governo Bolsonaro, sobre a polêmica envolvendo José de Abreu e sobre o legado político
                        para as mulheres negras.
                    </p>
                    <a className='link-podcast' target='blank' href='https://soundcloud.com/mulheresnegrasdecidem/marielle-franco-reacoes-da-sociedade-civil-pos-assasinato-e-o-novo-cenario-da-politica-brasileira'>Ouça agora</a>
                </div>
            </div>
            <div className='box-conteudo'>
                <img src={ImgP2} alt="logo" />
                <div className='box-texts'>
                    <h2>"Título: Mulheres Negras Decidem EP 1: Quais foram as estratégias políticas utilizadas por figuras expressivas
                         dos movimentos de mulheres negras?</h2>
                    <p>
                    No primeiro programa da série Mulheres Negras Decidem, da Rede Umunna, a socióloga Ana Carolina Lourenço e a estatística
                    Juliana Marques conversam sobre regras eleitorais, mapas de votação e ativismo nas eleições a partir das campanhas de Lélia
                    Gonzalez, Benedita da Silva, Jurema Batista e Marielle Franco. Dica: Em cumprimento ao que determina a Lei de Acesso
                    à Informação (Lei nº 12.527/2011), em 2012, o Tribunal Superior Eleitoral (TSE) criou o Projeto Memória Eleitoral que
                    disponibiliza dados brutos e detalhados das eleições realizadas em todo o país. O projeto possibilita a pesquisa on-line
                    sobre resultados de pleitos e informações de candidatos no período de 1945 até 1990. Os dados que mencionamos no podcast 
                    estão disponíveis no site do projeto."</p>
                    <a className='link-podcast' target='blank' href='https://soundcloud.com/mulheresnegrasdecidem/mulheres-negras-decidem-ep-1'>Ouça agora</a>
                </div>
            </div>
        </section>
    )
}

export default Podcast
import React from 'react';
import './styles.css';
import MainTitle from '../../components/layoutPieces/mainTitle';
import mapa_mnd from '../../assets/mapa_mnd.png';
import banner from '../../assets/banner.png'



function ArticulacaoLocal() {
    return (
        <section className="section-atividades">
            <div className="box-img-banner-atividades">
                <img className="box-img-banner-atividades" src={banner} alt="logo" />
            </div>
            <div className="atividades-presenciais">
                <MainTitle value="Articulação Local" />
                <div className="box-texts-atividades">
                <p>Atualmente, o MND está presente em 16 estados, com preponderância na região Sudeste pelo histórico
                de fundação das ações, mas em expansão para os demais estados brasileiros. Estamos articuladas
                em AL, AM, BA, DF, ES, MA, MG, PB, PE, PI, PR, RO, RJ, SC, SP e TO. Se você é uma mulher negra
                e gostaria de atuar no movimento, entre em contato pelo Instagram ou pelo nosso e-mail: <strong>mulheresnegrasdecidem@gmail.com</strong>
                </p>
                <img className="img-mapa" src={mapa_mnd} alt="mapa" />
                <p> O Movimento Mulheres Negras Decidem, surge, a
                partir da união de 5 mulheres negras de 3 estados do Brasil: Bahia, São
                Paulo e Rio de Janeiro. Desde sua concepção enquanto movimento, entendemos
                a potencialidade existente nas diferentes formas, arranjos, e especificidades
                do movimento de mulheres negras do Brasil em todas as suas unidades federativas
                e mais de 5 mil municípios. Por isso, nosso desejo sempre foi coordenar e articular
                mulheres negras que, em suas comunidades, cidades e estados, já estivessem construindo
                formas de incidir na política institucional de nosso país e construindo sua própria forma
                de fazer política, considerando a sua realidade local.
                </p>
                <p> Em 2018, nossa campanha de incidência nas eleições “Mulheres Negras Decidem” alcançou
                não só mulheres negras de todos os cantos do Brasil e nossos dados sobre mulheres negras 
                na política, bem como nossa narrativa e todo nosso conteúdo sobre a importância das
                mulheres negras em espaços de tomada de decisão foram de forma orgânica disseminados,
                absorvidos e apropriados nacionalmente por mulheres negras que disputavam a política,
                que incidiam na construção de políticas públicas e que construiam naquele momento, um
                ativismo de base, além das pessoas que desejam fortalecer essa narrativa, ou seja, sobre 
                a população que é força eleitoral dessas mulheres. 
                </p>
                <p> Nós ajudamos a visibilizar o dado de que já em 2016 éramos mais de 27% da
                população brasileira, o maior grupo demográfico do Brasil e por isso, mas não
                somente, deveríamos também ser maioria nos espaços de tomada de decisão.
                </p>
                <p> Em nosso segundo ano de atuação, já contávamos com articuladoras nos cinco estados
                com a maior concentração de população negra do Brasil: Bahia, Pernambuco, Rio de Janeiro, 
                Minas Gerais, e São Paulo e começamos então a estruturar e programar esse grande desafio
                que era, construir um movimento nacional, capaz de auxiliar mulheres negras na produção
                de uma potente tese de mudança para a política brasileira. 
                </p>
                <p> Em nosso segundo ano de atuação, já contávamos com articuladoras nos cinco estados com 
                a maior concentração de população negra do Brasil: Bahia, Pernambuco, Rio de Janeiro, Minas Gerais,
                e São Paulo e começamos então a estruturar e programar esse grande desafio que era, construir
                um movimento nacional, capaz de auxiliar mulheres negras na produção de uma potente tese de mudança
                para a política brasileira.
                </p>
                <p> Então, em 2019, voltamos nossos esforços para que mais mulheres negras pudessem se somar a nós,
                entendendo, também, que o movimento Mulheres Negras Decidem deveria funcionar como um impulsionador
                dessas mudanças que já estavam sendo produzidas por mulheres negras em todo o país e que, já estavam 
                alinhadas com o que pretendiamos construir como projeto de sociedade e utilizavam com nossos dados,
                narrativas e conteúdos. 
                </p>
                <p> Em 2020, nosso projeto de mudança estava estruturado, porém  fomos surpreendidas pela pandemia da
                COVID-19 e pela necessidade de estabelecermos um distanciamento social umas das outras. Com isso,
                tivemos o importante desafio de seguir com nosso processo de nacionalização de forma remota. Inclusive,
                em meio a uma crise que tem como linha de frente as mulheres negras. 
                </p>
                <p> Ao enxergarmos esse cenário, decidimos realizar uma pesquisa que buscasse explorar a atuação e a
                percepção das ativistas negras frente ao atual contexto brasileiro e também, visibilizar e preservar 
                a memória da atuação dessas mulheres em mais uma crise, contando suas histórias. 
                </p>
                <p> Um movimento que se constrói a partir da visão de ativistas negras do Tocantins, Roraima,
                Santa Catarina, Maranhão e vários outros estados brasileiros, nos permite acessar experiências
                específicas, de comunidades quilombolas, ribeirinhas e povos de terreiro, por exemplo, aprimorar
                a produção de soluções, vislumbrando formatos de enfrentamento de problemas estruturais no contexto
                brasileiro, mas que são construídos localmente por mulheres negras. 
                </p>
                <p>Para além de ampliarmos nossa rede de mulheres negras ativistas e articuladoras políticas do
                movimento Mulheres Negras Decidem, por um ponto de vista geopolítico, também ampliamos nosso horizonte
                de reflexões, com um conjunto de novas preocupações e soluções inovadoras a partir de nossas visões.
                </p>
                </div>
            </div>
        </section>
    )
}

export default ArticulacaoLocal
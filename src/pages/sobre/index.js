import React from 'react';
import './styles.css';
import banner from '../../assets/banner.png';
import ReactPlayer from 'react-player';
import SubTitle from '../../components/layoutPieces/subTitle';


function Sobre() {
    return (
        <section className='section-sobre'>
            <div className="first-box-banner">
                <img src={banner} alt="banner-mulheres" />
            </div>
            <div className='second-box-banner'>
                <div className='efeito-mark'>
                    {/*<marquee behavior="up">*/}
                    <p>#MulheresNegrasDecidem</p>
                    {/*</marquee>*/}
                </div>
                <div className='efeito-mark'>
                    {/*<marquee behavior="up">*/}
                    <p>#MndEleições2020</p>
                    {/*</marquee>*/}
                </div>
                <div className='box-title-banner'>
                    <SubTitle value="Quem é o Movimento Mulheres Negras Decidem?" />
                    <p>O movimento Mulheres Negras Decidem (MND) busca fortalecer a democracia brasileira usando como estratégia a superação da sub representação de mulheres negras nas instâncias de poder.</p>
                    <p>Nossa missão é qualificar e promover a agenda política liderada por mulheres negras na política institucional. Acreditamos que a disputa de narrativa é premente e precisa incluir as mulheres negras já que nós somos mais de 28% da população, ou seja, somos o maior grupo demográfico do país.</p>
                    <p>Queremos visibilizar e impulsionar a atuação de mulheres negras, sobretudo diante da crise, para que tenhamos representatividade plena do nosso pensamento político.</p>
                    <p>As mulheres negras candidatas nos pleitos eleitorais são um dos nossos focos de atuação. Muitas das nossas atividades e engajamentos possuem o objetivo de acessar o universo dessas mulheres e potencializar suas incidências na sociedade. Articulamos e coordenamos atrizes que visam incidir no debate da política institucional.</p>
                    <p>Atuamos por meio de formação política, reposicionamento de temas na agenda pública e pesquisas centradas em dados.</p>
                    <p>Acreditamos que nós, mulheres negras, oferecemos um repertório político estrutural, criativo, singular e fundamental no fortalecimento de uma democracia tão fragilizada como a brasileira. </p>
                    <p>Entendemos que estamos vivendo uma democracia vulnerável, pois ela não atende todos os grupos sociais que a compõem. Com racismo e machismo, não há democracia. </p>

                    <SubTitle value="Por que somos?" />

                    <p>Existimos a partir dos  desafios encontrados por mulheres negras que buscam participar de maneira mais efetiva dos processos eleitorais. Somos mais de 28% da população brasileira, porém somos apenas 2% no Congresso Nacional. A conta não fecha. </p>
                    <p>São as mulheres negras que menos recebem investimentos em suas campanhas. Apenas 2,51% das despesas de todos os candidatos ao Legislativo estava relacionada a candidaturas de mulheres negras, em 2014. Como o financiamento em campanhas possui  grande correlação com maior elegibilidade, o percentual de mulheres negras eleitas no legislativo em 2014 foi de apenas 1,6%. A elegibilidade de homens brancos, também no pleito de 2014, chegou à 12,60%. Ou seja, um déficit expressivo que tem se repetido a cada eleição e se apresenta enquanto barreira para que as mulheres negras sejam eleitas, de fato.  </p>
                    <p>Contudo, não buscamos falar apenas das ausências: carregamos conosco o longo e precioso legado de mulheres negras como Lélia Gonzalez, Luiza de Bairros, Benedita da Silva, Jurema Batista, Leci Brandão, Marielle Franco e muitas outras. Mulheres negras que, mesmo em meio aos obstáculos, reivindicaram suas presenças no espaço público e nos deixaram um histórico de estratégias políticas sofisticadas e de muitas conquistas.</p>
                    <p>Queremos contribuir com a narrativa potente sobre o legado das mulheres negras que vieram antes de nós, das que hoje pisam nossas terras e das que virão. Para isso, produzimos análises de dados sobre a política com essa lente de gênero, raça e classe.</p>

                    <SubTitle value="Para que somos?" />

                    <p>Nossos passos vêm de longe. Para nós, é imprescindível resgatar a atuação política do movimento de
                    mulheres negras que, com sua imaginação vibrante e única, garante nossa sobrevivência numa sociedade
                     marcada pelo racismo estrutural e pela misoginia.</p>

                    <p>Pautamos a construção de um novo modelo de sociedade a partir do fortalecimento de princípios democráticos. Reivindicamos a ampla participação
                    de mulheres negras porque somos atrizes mais que necessárias no contexto de enfrentamento ao racismo, ao machismo e ao conservadorismo que assolam
                    a sociedade brasileira há séculos.
                    </p>

                    <p>Cabe mais uma vez ressaltar: confiar, construir e fortalecer mulheres negras representa qualificar o percurso democrático brasileiro.
                    Mulheres Negras Decidem é uma declaração de crença no poder das gerações atuais em cumprir a promessa democrática.
                    </p>

                    <SubTitle value="Primeiros passos" />
                    <p>O Mulheres Negras Decidem nasce da reunião de 5 mulheres negras mobilizadas pela ideia de criar espaços políticos seguros e confortáveis para mulheres negras participarem.

                    </p>

                    <p>Em 2018, fomos selecionadas para o programa Minas de Dados realizado pela Transparência Brasil, Olabi e Data_Labe, com apoio da OEA, para uma imersão de 4 semanas em dados abertos, narrativas e tecnologia para governos abertos. Nessa formação, concebemos o que o MND poderia ser e agir diante de um cenário árduo  de sub representação de mulheres negras na política institucional.
                    </p>
                    <p>Prosseguimos em  2018 com ciclos de formação política, nos quais discutimos regras do jogo eleitoral, reconstituímos a participação de diversas mulheres negras na política bem como os sistemas políticos que serviram de pano de fundo para essas candidaturas. Em julho, lançamos nossa plataforma, onde trouxemos um  diagnóstico da presença de mulheres negras na política. Os resultados desta pesquisa você pode conferir na seção ‘Esteja Preparada-> Mitos’’.

                    </p>
                    <p>Em 2019 não houve eleições, mas não paramos! Idealizamos o Fórum Mulheres Negras Decidem onde, periodicamente, nos reunimos para debater os principais assuntos em curso na política brasileira sob um olhar antirracista e feminista. Além disso, lançamos novo episódio do nosso podcast, discutimos bibliografias importantes e participamos de inúmeros eventos.

                    </p>
                    <p>Atualmente, uma pandemia global atinge nossas vidas, mas entendemos que é necessário seguir atuando a pleno vapor. Inspiradas pela intensa mobilização de mulheres negras a fim de mitigar os impactos negativos da pandemia em suas comunidades, concebemos a pesquisa Para Onde Vamos. Nela, acessamos 245 mulheres negras de todo o território brasileiro e apresentamos um panorama do ativismo de mulheres negras no Brasil. Mais uma vez, comprovamos a riqueza do nosso pensamento político e o quanto as mulheres negras dão o tom de soluções estruturais para as crises. A pesquisa Para Onde Vamos está disponível na aba ‘Relatório’.</p>
                    <p> comunidades, concebemos a pesquisa Para Onde Vamos. Nela, acessamos 245 mulheres negras de todo o território brasileiro e apresentamos um panorama do ativismo de mulheres negras no Brasil. Mais uma vez, comprovamos a riqueza do nosso pensamento político e o quanto as mulheres negras dão o tom de soluções estruturais para as crises. A pesquisa Para Onde Vamos está disponível na aba ‘Relatório’.

                    </p>
                    <p> Além do relatório, lançamos novos episódios do podcast Mulheres Negras Decidem, participamos de lives e demais encontros online e demos início ao nosso ciclo de formação 2020, desta vez em formato virtual.
                    </p>
                   <p> No segundo semestre de 2020, vamos lançar um livro onde reuniremos boa parte dos projetos de lei apresentados por parlamentares negras ao longo dos anos e também artigos inéditos. Nossas propostas e recomendações para as eleições de 2020 virão sistematizadas neste livro.                    </p>

                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=l5kMEzwOGVY&feature=youtu.be"
                        className='react-player'
                        width='100%' controls={true}
                    />
                </div>
            </div>
        </section>
    )
}



export default Sobre
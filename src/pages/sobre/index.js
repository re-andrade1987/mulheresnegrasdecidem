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
                    <p>O Mulheres Negras Decidem tem na sua razão de ser a luta pela
                    superação da sub representação de mulheres negras nas instâncias
                    de poder e, em especial, na política institucional. Acreditamos que
                    este é um espaço urgente de disputa, já que é na arena política queremos
                    se discutem políticas públicas para toda a sociedade. São as mulheres negras
                    que compõem o maior grupo demográfico do país! Já somos mais de 28% da população
                    brasileira e é por isso que cobramos pela representatividade plena do nosso
                    pensamento político.
                    </p>
                    <p>As mulheres negras candidatas nos pleitos eleitorais são o foco
                    da nossa atuação. Muitas das nossas atividades e engajamentos
                    possuem o objetivo de acessar o universo dessas mulheres e
                    potencializar suas incidências na sociedade. Acreditamos que nós,
                    mulheres negras, oferecemos um repertório político extremamente criativo,
                    singular e fundamental no fortalecimento de uma democracia tão fragilizada
                    como a brasileira.
                    </p>
                    <p>Reforçamos que uma democracia que não atende todos os grupos sociais que a
                    compõem, é uma democracia vulnerável. Com racismo e machismo, não há democracia.
                    </p>
                    <SubTitle value="Por que somos?" />

                    <p>Existimos a partir das dificuldades encontradas por mulheres negras que buscam participar
                    de maneira mais ativa dos processos eleitorais. Somos mais de 28% da população brasileira,
                    porém somos apenas 2% no Congresso Nacional.</p>

                    <p>São as mulheres negras que menos recebem investimentos em suas campanhas. Apenas 2,51% das
                    despesas de todos os candidatos ao Legislativo estava relacionada a candidaturas de mulheres negras,
                    em 2014. Como o financiamento em campanhas têm grande correlação com maior elegibilidade, o percentual
                    de mulheres negras eleitas no legislativo em 2014 foi de apenas 1,6%. A elegibilidade de homens brancos,
                    também no pleito de 2014, chegou à 12,60%. Ou seja, um déficit enorme que tem se repetido a cada eleição e
                    se apresenta enquanto barreira para a elegibilidade de mulheres negras.</p>

                    <p>Contudo, não queremos falar apenas das ausências: carregamos conosco o longo e precioso legado de mulheres
                    negras como Lélia Gonzalez, Benedita da Silva, Jurema Batista, Marielle Franco e muitas outras. Mulheres 
                    negras que, mesmo em meio aos obstáculos, reivindicaram suas presenças no espaço público e nos deixaram um 
                    histórico de estratégias políticas sofisticadas e de muitas conquistas.
                    </p>

                    <SubTitle value="Para que somos?" />

                    <p>Por um novo modelo de sociedade reafirmar nossas posições progressistas, costurada com a continuidade
                     da luta históricado Movimento de Mulheres Negras</p>

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

                    <SubTitle value="Primeiros passos"/>
                    <p>O Mulheres Negras Decidem nasce da reunião de cinco mulheres negras mobilizadas pela ideia de criar espaços
                    políticos seguros e confortáveis para mulheres negras participarem. 
                    </p>

                    <p>Em 2018, fomos selecionadas para o programa Minas de Dados da Transparência Brasil, Olabi e Data_Labe para
                    uma imersão de 4 semanas em dados abertos, narrativas e tecnologia para governos abertos. Nessa formação,
                    solidificamos o que o MND deveria ser e agir diante de um cenário drástico de subrepresentação de mulheres
                    negras na política institucional. 
                    </p>
                    <p>Em março de 2018, ocorre o assassinato de Marielle Franco, vereadora na cidade do Rio de Janeiro e exemplo
                    para nós do quanto mulheres negras são potentes e carregam consigo maneiras especiais de fazer política.
                    A infeliz morte de Marielle se torna a materialização do porquê tornar a política um ambiente menos hostil 
                    para mulheres negras é tão importante. De fato, Marielle se tornou semente. 
                    </p>
                    <p>Seguimos o ano de 2018 com o ciclo de formação política onde discutimos regras do jogo eleitoral, reconstituímos
                     a participação de diversas mulheres negras na política, bem como os sistemas políticos que serviram de pano de fundo
                     para essas candidaturas. Em julho, lançamos nossa plataforma, onde trazíamos diagnósticos inéditos da presença de mulheres
                     negras na política. Os resultados desta pesquisa você pode conferir na seção X.
                    </p>
                    <p>No ano de 2019 não houveram eleições, mas não paramos! Idealizamos o Fórum Mulheres Negras Decidem onde, periodicamente,
                    nos reunimos para debater os principais assuntos em curso na política brasileira sob um olhar antirracista e feminista.
                    Além do Fórum, lançamos novo episódio do nosso podcast, discutimos bibliografias importantes e participamos de inúmeros eventos.
                    </p>
                    <p>Em 2020, uma pandemia global pairou sobre nossas vidas e seguimos atuando a pleno vapor. Inspiradas pela intensa
                    mobilização de mulheres negras a fim de mitigar os impactos negativos da pandemia em suas comunidades, concebemos
                    a pesquisa Para Onde Vamos. Nela, acessamos 245 mulheres negras de todo o território brasileiro e damos um panorama
                    do ativismo de mulheres negras no Brasil. Mais uma vez, comprovamos a riqueza do nosso pensamento político e indicamos
                    o quanto as mulheres negras dão o tom de solução para todas as crises. O relatório Para Onde Vamos está disponível na aba X.
                    </p>
                    <p>Além do relatório, lançamos novos episódios do podcast Mulheres Negras Decidem, participamos de lives e demais
                    encontros online, demos início ao nosso ciclo de formação 2020, desta vez em formato virtual.
                    </p>
                    <p>No segundo semestre de 2020, vamos lançar um livro onde reuniremos boa parte dos projetos de lei apresentados por parlamentares negras ao longo dos anos e também 
                    artigos inéditos. Nossas propostas e recomendações para as eleições de 2020 virão sistematizadas neste livro.
                    </p>
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
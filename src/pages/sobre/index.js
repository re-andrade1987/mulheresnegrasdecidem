import React, { useState } from 'react';
import './styles.css';
import banner from '../../assets/banner.png';
import ReactPlayer from 'react-player';
import SubTitle from '../../components/layoutPieces/subTitle';
import Modal from 'react-modal';
import mndIlustra2 from '../../assets/MND_ilustra_MND_2.png';
import mndIlustraInt from '../../assets/Ilustra_MND_card_intelectuais.png';
import mndIlustraV1 from '../../assets/MND_ilustra_MND_v1.png';
import linhaDoTempo from '../../assets/Linha do tempo v2.png';


function Sobre() {
    const [modalIsopen, seModalIsopen] = useState(false)

    return (
        <section className='section-sobre'>
            <div className="first-box-banner">
                <img src={banner} alt="banner-mulheres" />
            </div>
            <div className='second-box-banner'>
               {/*<button onClick={() => seModalIsopen(true)}>Clique aqui</button>
                <div>
                    <Modal isOpen={modalIsopen}>
                        <h1>Modal title</h1>
                        <button onClick={() => seModalIsopen(false)}>Clique aqui</button>
                    </Modal>
                </div>*/}
                <div className='box-title-banner'>
                    <SubTitle value="Quem é o MND?" />
                    <p>Qualificamos e promovemos a agenda liderada por mulheres negras na política institucional, fortalecendo a democracia brasileira usando como estratégia a superação da falta representatividade de mulheres negras nas instâncias de poder.</p>
                    <p>Acreditamos que a disputa de narrativa é fundamental e precisa incluir as mulheres negras urgente, já que nós somos o maior grupo demográfico do país, mais de 28% segundo a PNAD Contínua de 2019, e ocupamos menos de 2% de cadeiras no congresso nacional. Com racismo e machismo, não há democracia. Nós, mulheres negras, oferecemos um repertório político estrutural, criativo, singular e fundamental no fortalecimento de uma democracia tão fragilizada como a brasileira.</p>
                    <img src={mndIlustra2} alt="logo" />

                    <SubTitle value="Por que somos?" />

                    <p>São as mulheres negras que menos recebem investimentos em suas campanhas. Em 2014, apenas 2,5% das despesas de todos os candidatos ao Legislativo estava relacionada a candidaturas de mulheres negras. Como o financiamento em campanhas possui  grande correlação com maior elegibilidade, o percentual de mulheres negras eleitas no legislativo no ano  foi de apenas 1,6%. A elegibilidade de homens brancos, também no pleito de 2014, chegou à 12,6%.  Percebemos um déficit expressivo que tem se repetido a cada eleição e se apresenta como barreira para que as mulheres negras sejam eleitas de fato.</p>
                    <p>Contudo, não buscamos falar apenas das ausências: carregamos conosco o longo e precioso legado de mulheres negras como Lélia Gonzalez, Luiza de Bairros, Benedita da Silva, Almerinda Gama, Olivia Santana, Leci Brandão, Marielle Franco e muitas outras. Mulheres negras que, mesmo em meio aos obstáculos, reivindicaram suas presenças no espaço público e nos deixaram um histórico de estratégias políticas sofisticadas e de muitas conquistas.</p>
                    <p>Queremos contribuir com a narrativa potente sobre o legado das mulheres negras que vieram antes de nós, das que hoje pisam nossas terras e das que virão. Para isso, produzimos análises de dados sobre a política com a lente de gênero, de raça e de classe.</p>

                    <img src={mndIlustraInt} alt="logo" />

                    <SubTitle value="Para que somos?" />

                    <p>Nossos passos vêm de longe. Para nós, é imprescindível resgatar a atuação política do movimento de mulheres negras que, com sua determinação, dinamismo e intelecto, garante nossa sobrevivência numa sociedade marcada pelo racismo estrutural e pela misoginia.</p>

                    <p>Pautamos a construção de uma sociedade a partir da ampla participação de mulheres negras na democracia. Confiar, construir e fortalecer mulheres negras  é qualificar o percurso democrático brasileiro. Mulheres Negras Decidem é uma declaração de crença no poder das gerações atuais em cumprir a promessa democrática.
                    </p>
                    <img src={mndIlustraV1} alt="logo" />

                    <SubTitle value="Nossa construção até aqui" />
                    <img src={linhaDoTempo} alt="logo" />

                   
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
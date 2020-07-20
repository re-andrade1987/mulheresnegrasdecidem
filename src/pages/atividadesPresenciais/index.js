import React from 'react';
import './styles.css';
import MainTitle from '../../components/layoutPieces/mainTitle';
import mapa_mnd from '../../assets/mapa_mnd.png';
import banner_atividades from '../../assets/banner_atividades.png'



function AtividadesPresenciais() {
    return (
        <section className="section-atividades">
            <div className="box-img-banner-atividades">
                <img className="box-img-banner-atividades" src={banner_atividades} alt="logo" />
            </div>
            <div className="atividades-presenciais">
                <MainTitle value="Atividades Presenciais" />
                <di className="box-texts-atividades">
                    <p> O grupo Mulheres Negras Decidem está em cinco estados: Bahia, Minas Gerais,
                    Pernambuco, Rio de Janeiro e São Paulo. Faça parte da nossa rede e nos acompanhe
                    virtual e presencialmente.
                </p>
                    <p>
                        <strong> mulheresnegrasdecidem@gmail.com ex. de assunto: [estado]
                        Quero participar!
                </strong>
                    </p>
                </di>
                <img className="img-mapa" src={mapa_mnd} alt="mapa" />
            </div>
        </section>
    )
}

export default AtividadesPresenciais
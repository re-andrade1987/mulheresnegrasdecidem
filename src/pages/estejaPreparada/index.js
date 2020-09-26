import React, { Component } from 'react';
import './styles.css';
import MainTitle from '../../components/layoutPieces/mainTitle';


class KitFormacao extends Component {

    render() {
        return (
            <section className="section-esteja-preparada">
                <MainTitle value="Dados" />
                <div className="box-formacao">
                    <iframe src="https://public.tableau.com/views/MNDEleicoes2016/MND?:showVizHome=no&:embed=true" width="800" height="600">
                    </iframe> 
                </div>
            </section>
        );

    }

}

export default KitFormacao
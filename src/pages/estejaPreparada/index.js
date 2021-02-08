import React, { Component } from 'react';
import './styles.css';
import MainTitle from '../../components/layoutPieces/mainTitle';


class EstejaPreaparada extends Component {

    render() {
        return (
            <section className="section-esteja-preparada">
                <MainTitle value="Dados" />
                <div className="box-formacao">
                    <iframe src="https://public.tableau.com/views/MNDEleicoes2016/MND?:showVizHome=no&:embed=true" frameBorder="0" width="800px" height="1450px">
                    </iframe> 
                </div>
            </section>
        );

    }

}

export default EstejaPreaparada
import React from 'react';
import './styles.css';
import MainTitle from '../../components/layoutPieces/mainTitle';

function KitFormacao() {
    return (
        <section className="section-esteja-preparada">
            <MainTitle value="Dados" />
            <div className="box-formacao">
            <iframe src="https://public.tableau.com/views/MNDEleicoes2016/MND?:showVizHome=no&:embed=true" width="800" height="600"></iframe>
            </div>
        </section>
    );


};

export default KitFormacao
import React, { Component } from 'react';
import cartelaMito2 from '../../assets/cartela_mito_2.png';

import './styles.css';

class Mito2 extends Component {

    render() {
        return (
            <section className="section-mito1">
                <div className="box-mitos-banner">
                    <img src={cartelaMito2} alt="logo" />
                </div>
            </section>
        );

    }

}

export default Mito2
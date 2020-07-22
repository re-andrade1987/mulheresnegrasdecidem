import React, { Component } from 'react';
import cartelaMito7 from '../../assets/cartela_mito_7.png';

import './styles.css';

class Mito7 extends Component {

    render() {
        return (
            <section className="section-mito1">
                <div className="box-mitos-banner">
                    <img src={cartelaMito7} alt="logo" />
                </div>
            </section>
        );

    }

}

export default Mito7
import React, { Component } from 'react';
import cartelaMito3 from '../../assets/cartela_mito_3.png';

import './styles.css';

class Mito3 extends Component {

    render() {
        return (
            <section className="section-mito1">
                <div className="box-mitos-banner">
                    <img src={cartelaMito3} alt="logo" />
                </div>
            </section>
        );

    }

}

export default Mito3
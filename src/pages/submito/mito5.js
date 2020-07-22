import React, { Component } from 'react';
import cartelaMito5 from '../../assets/cartela_mito_5.png';

import './styles.css';

class Mito5 extends Component {

    render() {
        return (
            <section className="section-mito1">
                <div className="box-mitos-banner">
                    <img src={cartelaMito5} alt="logo" />
                </div>
            </section>
        );

    }

}

export default Mito5
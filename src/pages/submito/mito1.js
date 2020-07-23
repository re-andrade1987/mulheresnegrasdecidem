import React, { Component } from 'react';
import cartelaMito1 from '../../assets/cartela_mito_1.png';
import { Link } from 'react-router-dom';

import './styles.css';

class Mito1 extends Component {

    render() {
        return (
            <section className="section-mito1">
                <div className="box-mitos-banner">
                    <img src={cartelaMito1} alt="logo" />
                </div>
                
                <Link to="./mitos">
                    <button className="button">Voltar</button>
                </Link>
            </section>
        );

    }

}

export default Mito1
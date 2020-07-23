import React, { Component } from 'react';
import cartelaMito6 from '../../assets/cartela_mito_6.png';
import { Link } from 'react-router-dom';

import './styles.css';

class Mito6 extends Component {

    render() {
        return (
            <section className="section-mito1">
                <div className="box-mitos-banner">
                    <img src={cartelaMito6} alt="logo" />
                </div>
                <Link to="./mitos">
                    <button className="button">voltar</button>
                </Link>
            </section>
        );

    }

}

export default Mito6
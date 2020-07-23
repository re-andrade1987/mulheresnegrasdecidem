import React, { Component } from 'react';
import cartelaMito4 from '../../assets/cartela_mito_4.png';
import { Link } from 'react-router-dom';

import './styles.css';

class Mito4 extends Component {

    render() {
        return (
            <section className="section-mito1">
                <div className="box-mitos-banner">
                    <img src={cartelaMito4} alt="logo" />
                </div>
                <Link to="./mitos">
                    <button className="button">voltar</button>
                </Link>
            </section>
        );

    }

}

export default Mito4
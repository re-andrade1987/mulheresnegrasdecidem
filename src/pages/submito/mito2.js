import React, { Component } from 'react';
import cartelaMito2 from '../../assets/cartela_mito_2.png';
import { Link } from 'react-router-dom';

import './styles.css';

class Mito2 extends Component {

    render() {
        return (
            <section className="section-mito1">
                <div className="box-mitos-banner">
                    <img src={cartelaMito2} alt="logo" />
                </div>
                <Link to="./mitos">
                    <button className="button">voltar</button>
                </Link>
            </section>
        );

    }

}

export default Mito2
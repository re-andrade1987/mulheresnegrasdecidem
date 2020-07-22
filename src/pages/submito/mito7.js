import React, { Component } from 'react';
import cartelaMito7 from '../../assets/cartela_mito_7.png';
import { Link } from 'react-router-dom';

import './styles.css';

class Mito7 extends Component {

    render() {
        return (
            <section className="section-mito1">
                <div className="box-mitos-banner">
                    <img src={cartelaMito7} alt="logo" />
                </div>
                <Link to="./mitos">
                    <button className="btn-jumper">voltar</button>
                </Link>
            </section>
        );

    }

}

export default Mito7
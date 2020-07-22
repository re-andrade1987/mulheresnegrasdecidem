import React, { Component } from 'react';
import cartelaMito3 from '../../assets/cartela_mito_3.png';
import { Link } from 'react-router-dom';

import './styles.css';

class Mito3 extends Component {

    render() {
        return (
            <section className="section-mito1">
                <div className="box-mitos-banner">
                    <img src={cartelaMito3} alt="logo" />
                </div>
                <Link to="./mitos">
                    <button className="btn-jumper">voltar</button>
                </Link>
            </section>
        );

    }

}

export default Mito3
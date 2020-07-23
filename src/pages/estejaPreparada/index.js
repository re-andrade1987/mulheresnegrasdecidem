import React, { Component } from 'react';
import './styles.css';
//import rectangle from '../../assets/rectangle.png';

import MainTitle from '../../components/layoutPieces/mainTitle';


class KitFormacao extends Component {

    render() {
        return (
            <section className="section-esteja-preparada">
                {/*<img className="banner-preparada" src={} alt="banner-mulheres" />*/}
                <MainTitle value="Dados" />
                <div className="box-formacao">
                    <div className="box-subtitle">
                        <p> Kits de Formação Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut venenatis
                        tellus in metus vulputate eu scelerisque felis. Orci dapibus ultrices in iaculis
                        nunc sed augue. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis.
                        tellus in metus vulputate eu scelerisque felis. Orci dapibus ultrices in iaculis
                        nunc sed augue. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis.
                        </p>
                    </div>
                </div>
            </section>
        );

    }

}

export default KitFormacao
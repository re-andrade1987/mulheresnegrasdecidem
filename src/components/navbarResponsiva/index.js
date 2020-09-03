import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import twitter from '../../assets/twitter.png';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';

import './styles.css';
import { Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";

class NavbarHeader extends Component {

  render() {
    return (
      <Navbar className="nav-main" expand="lg">
        <Navbar.Brand className="nav"><img src={logo} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" id="nav-fixa">
            <NavLink><Link to="/"><li>Sobre</li></Link></NavLink>
            <NavLink><Link to="/relatorio"><li>Relatórios</li></Link></NavLink>
            <NavDropdown title="Recursos Mnd" id="basic-nav-dropdown">
              {/*<NavDropdown.Item><Link to="/estejaPreparada"><li className="item-lista">Dados</li></Link></NavDropdown.Item>*/}
              <NavDropdown.Item><Link to="/mitos" ><li className="item-lista">Mitos</li></Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/artigos"><li className="item-lista">Artigos</li></Link></NavDropdown.Item>
            </NavDropdown>
            <NavLink><Link to="/podcast"><li>Podcast</li></Link></NavLink>
            <NavDropdown title="Onde Estamos" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/noticias"><li className="item-lista">Notícias</li></Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/atividadesPresenciais"><li className="item-lista">Articulação local</li></Link></NavDropdown.Item>
            </NavDropdown>
            <div className="icon-redes-nav">
              <a target='blank' href='https://twitter.com/MNdecidem'><img src={twitter} alt="logo-twitter" /></a>
              <a target='blank' href='https://www.facebook.com/mulheresnegrasdecidem'><img src={facebook} alt="logo-facebook" /></a>
              <a target='blank' href='https://www.instagram.com/mulheresnegrasdecidem/'><img src={instagram} alt="logo-facebook" /></a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}


export default NavbarHeader
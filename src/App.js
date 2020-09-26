import React from 'react';
import Routes from './routes';
import NavbarResponsiva from './components/navbarResponsiva';
import Footer from './components/footer';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <Router>
      <NavbarResponsiva />
      <Routes />
      <Footer />
    </Router>
  )
}

export default App;
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Sobre from '../pages/sobre';
import OndeEstamos from '../pages/ondeEstamos';
import AtividadesPresenciais from '../pages/atividadesPresenciais';
import Noticias from '../pages/noticias';
import Relatorio from '../pages/relatorio';
import Podcast from '../pages/podcast';
import EstejaPreparada from '../pages/estejaPreparada';
import Mitos from '../pages/mitos';
import Artigos from '../pages/artigos';
import CadastrarArtigos from '../pages/artigos/cadastrarArtigos';
import Login from '../pages/login';
import UsuarioNovo from '../pages/usuarioNovo';
import Mito1 from '../pages/submito/mito1';


const Routes = () => (
  <Switch>
    <Route exact path='/' component={Sobre} />
    <Route exact path='/estejaPreparada' component={EstejaPreparada} />
    <Route exact path='/mitos' component={Mitos} />
    <Route exact path='/artigos' component={Artigos} />
    <Route exact path='/ondeEstamos' component={OndeEstamos} />
    <Route exact path='/atividadesPresenciais' component={AtividadesPresenciais} />
    <Route exact path='/noticias' component={Noticias} />
    <Route exact path='/Relatorio' component={Relatorio} />
    <Route exact path='/podcast' component={Podcast} />
    <Route exact path='/Login' component={Login} />
    <Route exact path='/UsuarioNovo' component={UsuarioNovo} />
    <Route exact path='/CadastrarArtigos' component={CadastrarArtigos} />
    <Route exact path='/Mito1' component={Mito1} />
  </Switch>
);

export default Routes;
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Sobre from '../pages/sobre';
import OndeEstamos from '../pages/ondeEstamos';
import ArticulacaoLocal from '../pages/articulacaoLocal';
import Noticias from '../pages/noticias';
import Relatorio from '../pages/relatorio';
import Podcast from '../pages/podcast';
import Dados from '../pages/estejaPreparada';
import Mitos from '../pages/mitos';
import Artigos from '../pages/artigos';
import CadastrarArtigos from '../pages/artigos/cadastrarArtigos';
import Login from '../pages/login';
import UsuarioNovo from '../pages/usuarioNovo';
import Mito1 from '../pages/submito/mito1';
import Mito2 from '../pages/submito/mito2';
import Mito3 from '../pages/submito/mito3';
import Mito4 from '../pages/submito/mito4';
import Mito5 from '../pages/submito/mito5';
import Mito6 from '../pages/submito/mito6';
import Mito7 from '../pages/submito/mito7';
import Mito8 from '../pages/submito/mito8';
import Podcast1 from '../pages/subpodcast/podcast1';



const Routes = () => (
  <Switch>
    <Route exact path='/' component={Sobre} />
    <Route exact path='/estejaPreparada' component={Dados} />
    <Route exact path='/mitos' component={Mitos} />
    <Route exact path='/artigos' component={Artigos} />
    <Route exact path='/ondeEstamos' component={OndeEstamos} />
    <Route exact path='/atividadesPresenciais' component={ArticulacaoLocal} />
    <Route exact path='/noticias' component={Noticias} />
    <Route exact path='/Relatorio' component={Relatorio} />
    <Route exact path='/podcast' component={Podcast} />
    <Route exact path='/Login' component={Login} />
    <Route exact path='/UsuarioNovo' component={UsuarioNovo} />
    <Route exact path='/CadastrarArtigos' component={CadastrarArtigos} />
    <Route exact path='/Mito1' component={Mito1} />
    <Route exact path='/Mito2' component={Mito2} />
    <Route exact path='/Mito3' component={Mito3} />
    <Route exact path='/Mito4' component={Mito4} />
    <Route exact path='/Mito5' component={Mito5} />
    <Route exact path='/Mito6' component={Mito6} />
    <Route exact path='/Mito7' component={Mito7} />
    <Route exact path='/Mito8' component={Mito8} />
    <Route exact path='/podcast1' component={Podcast1} />

  </Switch>
);

export default Routes;
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Comidas from './components/Comidas';
import ComidasProvider from './context/ComidasProvider';
import Perfil from './components/Perfil';
import Bebidas from './components/Bebidas';
import Explorar from './components/Explorar';


function App() {
  return (
    <div id="meals">
      <Switch>
        <Route exact path="/" component={Login} />
        <ComidasProvider>
          <Route path="/comidas/:id?" component={Comidas} />
          <Route path="/bebidas/:id?" component={Bebidas} />
          <Route exact path="/comidas/:id/in-progress" component={Comidas} />
          <Route path="/bebidas/:id/in-progress" />
          <Route exact path="/explorar" component={Explorar} />
          <Route path="/explorar/comidas" component={Explorar} />
          <Route path="/explorar/bebidas" component={Explorar} />
          <Route path="/explorar/comidas/ingredientes" />
          <Route path="/explorar/bebidas/ingredientes" />
          <Route path="/explorar/comidas/area" />
          <Route path="/perfil" component={Perfil} />
          <Route path="/receitas-feitas" />
          <Route path="/receitas-favoritas" />
        </ComidasProvider>
      </Switch>
    </div>
  );
}

export default App;

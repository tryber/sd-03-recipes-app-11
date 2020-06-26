import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Comidas from './components/Comidas';
import ComidasProvider from './context/ComidasProvider';


function App() {
  return (
    <div id="meals">
      <Switch>
        <Route exact path="/" component={Login} />
        <ComidasProvider>
          <Route path="/comidas" component={Comidas} />
          <Route path="/bebidas" />
          <Route path="/comidas/:id" />
          <Route path="/bebidas/:id" />
          <Route path="/comidas/:id/in-progress" />
          <Route path="/bebidas/:id/in-progress" />
          <Route path="/explorar" />
          <Route path="/explorar/comidas" />
          <Route path="/explorar/bebidas" />
          <Route path="/explorar/comidas/ingredientes" />
          <Route path="/explorar/bebidas/ingredientes" />
          <Route path="/explorar/comidas/area" />
          <Route path="/perfil" />
          <Route path="/receitas-feitas" />
          <Route path="/receitas-favoritas" />
        </ComidasProvider>
      </Switch>
    </div>
  );
}

export default App;

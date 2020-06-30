import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Meals from './components/Meals';
import ComidasProvider from './context/ComidasProvider';
import Perfil from './components/Perfil';
import Explorar from './components/Explorar';

import './styles/styles.css';

function App() {
  return (
    <center>
      <div className="Container" id="meals">
        <Switch>
          <Route exact path="/" component={Login} />
          <ComidasProvider>
            <Route path="/comidas/:id?" render={(props) => <Meals {...props} type="meal" />} />
            <Route path="/bebidas/:id?" render={(props) => <Meals {...props} type="cocktail" />} />
            <Route exact path="/comidas/:id/in-progress" component={Meals} />
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
    </center>
  );
}

export default App;

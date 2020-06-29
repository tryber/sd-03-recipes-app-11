import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Meals from './components/Meals';
import ComidasProvider from './context/ComidasProvider';
import RecipeDetails from './components/RecipeDetails';

import './styles/styles.css';

function App() {
  return (
    <center>
      <div className="Container" id="meals">
        <Switch>
          <Route exact path="/" component={Login} />
          <ComidasProvider>
            <Route exact path="/comidas" render={(props) => <Meals {...props} type="meal" />} />
            <Route exact path="/bebidas" render={(props) => <Meals {...props} type="cocktail" />} />
            <Route exact path="/comidas/:id" render={(props) => <RecipeDetails {...props} type="meal" />} />
            <Route exact path="/bebidas/:id" />
            <Route exact path="/comidas/:id/in-progress" />
            <Route exact path="/bebidas/:id/in-progress" />
            <Route exact path="/explorar" />
            <Route exact path="/explorar/comidas" />
            <Route exact path="/explorar/bebidas" />
            <Route exact path="/explorar/comidas/ingredientes" />
            <Route exact path="/explorar/bebidas/ingredientes" />
            <Route exact path="/explorar/comidas/area" />
            <Route exact path="/perfil" />
            <Route exact path="/receitas-feitas" />
            <Route exact path="/receitas-favoritas" />
          </ComidasProvider>
        </Switch>
      </div>
    </center>
  );
}

export default App;

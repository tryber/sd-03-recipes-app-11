import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Meals from './components/Meals';
import ComidasProvider from './context/ComidasProvider';
import Perfil from './components/Perfil';
import Explorar from './components/Explorar';
import RecipeDetailsMeals from './components/RecipeDetailsMeals';
import RecipeDetailsCockTails from './components/RecipeDetailsCockTails';
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
            <Route
              exact
              path="/comidas/:id"
              render={(props) => <RecipeDetailsMeals {...props} type="meal" />}
            />
            <Route
              exact
              path="/bebidas/:id"
              render={(props) => <RecipeDetailsCockTails {...props} type="cocktail" />}
            />
            <Route exact path="/bebidas/:id/in-progress" />
            <Route exact path="/explorar" component={Explorar} />
            <Route exact path="/explorar/comidas" component={Explorar} />
            <Route exact path="/explorar/bebidas" component={Explorar} />
            <Route exact path="/explorar/comidas/ingredientes" />
            <Route exact path="/explorar/bebidas/ingredientes" />
            <Route exact path="/explorar/comidas/area" />
            <Route exact path="/perfil" component={Perfil} />
            <Route exact path="/receitas-feitas" />
            <Route exact path="/receitas-favoritas" />
          </ComidasProvider>
        </Switch>
      </div>
    </center>
  );
}

export default App;

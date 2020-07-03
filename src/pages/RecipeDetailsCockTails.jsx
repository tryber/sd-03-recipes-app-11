import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Clipboard from 'react-clipboard.js';
import { Link } from 'react-router-dom';
import { lookupFullCocktailDetailsById } from '../services/requestCocktailApi';
import { filterIngredientsCockTails, auxiliarFuncition } from '../services/filterIngredients';
import ComidasContext from '../context/ComidasContext';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import Recomendations from '../components/Recomendations';
import '../styles/details.css';
import ShowIngredients from '../components/Ingredients/ShowIngredients';

// const showIngredients = (recipe, iniciouReceita) => {
//   return iniciouReceita && recipe.ingredients
//     ? recipe.ingredients.map((el) => <IngredientsCheckBox el={el} id={Math.random()} />)
//     : <Ingredients value={recipe} />;
// };

const RecipeDetailsCockTails = ({ match: { params: { id } } }) => {
  const iniciouReceita = window.location.pathname.includes(`${id}/in-progress`);
  const {
    recipe,
    setRecipe,
    fetchRecipe,
    setFetchRecipe,
    linkCopie,
    setLinkCopie,
  } = useContext(ComidasContext);
  useEffect(() => {
    lookupFullCocktailDetailsById(id)
      .then((data) => {
        const allIngredients = filterIngredientsCockTails({ ...data.drinks[0] });
        const filteredAllIngredients = auxiliarFuncition(allIngredients);
        setRecipe({ ...data.drinks[0], ingredients: filteredAllIngredients });
      });
  }, []);
  return (
    <section>
      <div>
        <img
          className="Image-Details"
          data-testid="recipe-photo"
          src={recipe.strDrinkThumb}
          alt={`${recipe.strDrink}`}
        />
      </div>
      <div className="Description">
        <h2 data-testid="recipe-title">{recipe.strDrink}</h2>
        <div>
          <Clipboard
            name="CopieCocktailLink"
            data-testid="share-btn"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              setLinkCopie(true);
            }}
          >
            <img
              src={shareIcon}
              alt="share button"
            />
          </Clipboard>
          <button
            name="favorite1"
            onClick={() => setFetchRecipe(!fetchRecipe)}
          >
            {fetchRecipe
              ? <img data-testid="favorite-btn" src={blackHeartIcon} alt="favButton" />
              : <img data-testid="favorite-btn" src={whiteHeartIcon} alt="favButton" />}
          </button>
          {linkCopie && <span>Link copiado!</span>}
        </div>
      </div>
      <section>
        <h5 className="Title-List" data-testid="recipe-category">{recipe.strAlcoholic}</h5>
        {ShowIngredients(recipe, iniciouReceita)}
        <p data-testid="instructions">{recipe.strInstructions}</p>
      </section>
      <Recomendations type="meal" />
      <div className="Progresse">
        <Link
          to={`/bebidas/${id}/in-progress`}
        >
          <button
            data-testid={`${iniciouReceita ? 'finish-recipe-btn' : 'start-recipe-btn'}`}
            className="Button-Progresse"
          >
            {iniciouReceita ? 'Finalizar Receita' : 'Iniciar Receita'}
          </button>
        </Link>
      </div>
    </section>
  );
};

RecipeDetailsCockTails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default RecipeDetailsCockTails;

import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Clipboard from 'react-clipboard.js';
import { Link } from 'react-router-dom';
import { lookupFullCocktailDetailsById } from '../services/requestCocktailApi';
import { filterIngredientsCockTails, auxiliarFuncition } from '../services/filterIngredients';
import ComidasContext from '../context/ComidasContext';
import Ingredients from '../components/Ingredients';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import Recomendations from '../components/Recomendations';

const RecipeDetailsCockTails = ({ match: { params: { id } } }) => {
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
    <div>
      <img
        width="20"
        height="20"
        data-testid="recipe-photo"
        src={recipe.strDrinkThumb}
        alt={`${recipe.strDrink}`}
      />
      <Clipboard
        name="CopieMealLink"
        data-testid="share-btn"
        className="Icon"
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
        className="Icon"
      >
        {fetchRecipe
          ? <img data-testid="favorite-btn" src={blackHeartIcon} alt="favButton" />
          : <img data-testid="favorite-btn" src={whiteHeartIcon} alt="favButton" /> }
      </button>
      {linkCopie && <span>Link copiado!</span>}
      <h2 data-testid="recipe-title">{recipe.strDrink}</h2>
      <h5 data-testid="recipe-category">{recipe.strAlcoholic}</h5>
      {<Ingredients value={recipe} />}
      <p data-testid="instructions">{recipe.strInstructions}</p>
      <Recomendations type="meal" />
      <button
        className="Button-Login"
      >
        <Link
          to={`/bebidas/${id}/in-progress`}
          data-testid="start-recipe-btn"
        >
          Iniciar Receita
        </Link>
      </button>
    </div>
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

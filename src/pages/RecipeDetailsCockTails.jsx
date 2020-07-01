import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { lookupFullCocktailDetailsById } from '../services/requestCocktailApi';
import { filterIngredientsCockTails, auxiliarFuncition } from '../services/filterIngredients';
import ComidasContext from '../context/ComidasContext';
import Ingredients from '../components/Ingredients';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import Recomendations from '../components/Recomendations';

const RecipeDetailsCockTails = ({ match: { params: { id } } }) => {
  const { recipe, setRecipe, fetchRecipe, setFetchRecipe } = useContext(ComidasContext);
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
      <button data-testid="share-btn" className="Icon">
        <img
          src={shareIcon}
          alt="share button"
        />
      </button>
      <button
        name="favorite1"
        data-testid="favorite-btn"
        onClick={() => setFetchRecipe(!fetchRecipe)}
        className="Icon"
      >
        {fetchRecipe ? <img src={blackHeartIcon} alt="favButton" />
          : <img src={whiteHeartIcon} alt="favButton" /> }
      </button>
      <h2 data-testid="recipe-title">{recipe.strDrink}</h2>
      <h5 data-testid="recipe-category">{recipe.strAlcoholic}</h5>
      {<Ingredients value={recipe} />}
      <p data-testid="instructions">{recipe.strInstructions}</p>
      <Recomendations type="meal" />
      <button
        data-testid="start-recipe-btn"
        className="Button-Login"
      >
        Inciar Receita
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

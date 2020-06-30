import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import { lookupFullCocktailDetailsById } from '../services/requestCocktailApi';
import { filterIngredientsCockTails, auxiliarFuncition } from '../services/filterIngredients';
import ComidasContext from '../context/ComidasContext';
import Ingredients from '../components/Ingredients';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

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
        data-testid="favorite-btn"
        onClick={() => setFetchRecipe(!fetchRecipe)}
        className="Icon"
      >
        {fetchRecipe ? <img src={blackHeartIcon} alt="favButton" />
          : <img src={whiteHeartIcon} alt="favButton" /> }
      </button>
      <h2 data-testid="recipe-title">{recipe.strDrink}</h2>
      <h5 data-testid="recipe-category">{recipe.strCategory}</h5>
      {fetchRecipe && <Ingredients value={recipe} />}
      <p data-testid="instructions">{recipe.strInstructions}</p>
      {recipe.strVideo === null
        ? <span>No video to attemp</span>
        : <ReactPlayer data-testid="video" url={recipe.strVideo} />}
      <h2>Recomendadas</h2>
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

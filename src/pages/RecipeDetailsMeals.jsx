import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import { lookupFullMealDetailsById } from '../services/requestMealApi';
import ComidasContext from '../context/ComidasContext';
import { filterIngredientsMeals, auxiliarFuncition } from '../services/filterIngredients';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import Ingredients from '../components/Ingredients';

const RecipeDetailsMeals = ({ type, match: { params: { id } } }) => {
  const { recipe, setRecipe, fetchRecipe, setFetchRecipe } = useContext(ComidasContext);
  useEffect(() => {
    lookupFullMealDetailsById(id, type)
      .then((data) => {
        const allIngredients = filterIngredientsMeals({ ...data.meals[0] });
        const filteredAllIngredients = auxiliarFuncition(allIngredients);
        setRecipe({ ...data.meals[0], ingredients: filteredAllIngredients });
      });
  }, []);
  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={recipe.strMealThumb}
        alt={`${recipe.strMeal}`}
      />
      <button data-testid="share-btn" className="Icon">
        <img
          src={shareIcon}
          alt="share button"
        />
      </button>
      <button
        data-testid="share-btn"
        onClick={() => setFetchRecipe(!fetchRecipe)}
        className="Icon"
      >
        {fetchRecipe ? <img src={blackHeartIcon} alt="favButton" />
          : <img src={whiteHeartIcon} alt="favButton" /> }
      </button>
      <h2 data-testid="recipe-title">{recipe.strMeal}</h2>
      <h5 data-testid="recipe-category">{recipe.strCategory}</h5>
      {<Ingredients value={recipe} />}
      <p data-testid="instructions">{recipe.strInstructions}</p>
      {recipe.strYoutube === null
        ? <span>No video to attemp</span>
        : <ReactPlayer data-testid="video" url={recipe.strYoutube} />}
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

RecipeDetailsMeals.defaultProps = {
  type: '',
  id: 0,
};

RecipeDetailsMeals.propTypes = {
  type: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default RecipeDetailsMeals;

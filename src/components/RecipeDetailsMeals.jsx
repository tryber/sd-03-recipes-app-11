import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { lookupFullMealDetailsById } from '../services/requestMealApi';
import ComidasContext from '../context/ComidasContext';
import { filterIngredientsMeals }  from '../services/filterIngredients';

const RecipeDetailsMeals = ({ type, match: { params: { id } } }) => {
  const { recipe, setRecipe } = useContext(ComidasContext);
  const allIngredients = filterIngredientsMeals(recipe)
  useEffect(() => {
    lookupFullMealDetailsById(id, type)
      .then((data) => {
        setRecipe({ ...data.meals[0] });
      });
  }, []);
  console.log(recipe.strYoutube)
  return (
    <div>
      <img data-testid="recipe-photo" src={recipe.strMealThumb} alt={`${recipe.strMeal}`} />
      <button data-testid="share-btn" >Fav</button>
      <button data-testid="favorite-btn" >Share</button>
      <h2 data-testid="recipe-title">{recipe.strMeal}</h2>
      <h5 data-testid="recipe-category">{recipe.strCategory}</h5>
      {allIngredients.map((el, index) => (
        <p
          key={el[0]}
          data-testid={`${index}-ingredient-name-and-measure`}
        >
          {`${el[0]} - ${el[1]}`}
        </p>))}
      <p>{recipe.strInstructions}</p>
      <div>
        <iframe
          data-testid="video"
          width="560"
          height="315"
          src={recipe.strYoutube}
          frameBorder="0"
          allow="autoplay;encrypted-media"
          allowFullScreen
        >
        </iframe>
      </div>
    </div>
  );
};

RecipeDetailsMeals.propTypes = {
  type: PropTypes.string.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default RecipeDetailsMeals;

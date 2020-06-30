import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { lookupFullMealDetailsById } from '../services/requestMealApi';
import ComidasContext from '../context/ComidasContext';
import { filterIngredientsMeals, auxiliarFuncition } from '../services/filterIngredients';
import Ingredients from './Ingredients';

const RecipeDetailsMeals = ({ type, match: { params: { id } } }) => {
  const { recipe, setRecipe, fetchRecipe, setFetchRecipe } = useContext(ComidasContext);
  useEffect(() => {
    lookupFullMealDetailsById(id, type)
      .then((data) => {
        const allIngredients = filterIngredientsMeals({ ...data.meals[0] });
        const filteredAllIngredients = auxiliarFuncition(allIngredients);
        setFetchRecipe(true);
        setRecipe({ ...data.meals[0], ingredients: filteredAllIngredients });
      });
  }, []);
  console.log(recipe)
  return (
    <div>
      <img data-testid="recipe-photo" src={recipe.strMealThumb} alt={`${recipe.strMeal}`} />
      <button data-testid="share-btn" >Fav</button>
      <button data-testid="favorite-btn" >Share</button>
      <h2 data-testid="recipe-title">{recipe.strMeal}</h2>
      <h5 data-testid="recipe-category">{recipe.strCategory}</h5>
      {fetchRecipe && <Ingredients value={recipe}/>}
      <div>
        <iframe
          data-testid="video"
          width="560"
          height="315"
          src={recipe.strYoutube}
          frameBorder="0"
          allow="autoplay;encrypted-media"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default RecipeDetailsMeals;

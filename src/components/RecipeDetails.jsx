import React, { useEffect, useContext } from 'react';
import { lookupFullMealDetailsById } from '../services/requestMealApi';
import ComidasContext from '../context/ComidasContext';

const RecipeDetails = ({ type, match: { params: { id } } }) => {
  const { recipe, setRecipe } = useContext(ComidasContext)
  useEffect(() => {
     lookupFullMealDetailsById(id, type)
      .then((data) => {
        setRecipe({...data.meals[0]})
      })
  }, [type])
  return (
    <div>
      <img data-testid="recipe-photo" src={recipe.strMealThumb} alt={`${recipe.strMeal}`}/>
    </div>
  );
}

export default RecipeDetails;

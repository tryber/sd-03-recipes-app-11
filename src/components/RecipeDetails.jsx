import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { lookupFullMealDetailsById } from '../services/requestMealApi';
import ComidasContext from '../context/ComidasContext';

const RecipeDetails = ({ type, match: { params: { id } } }) => {
  const { recipe, setRecipe } = useContext(ComidasContext);
  useEffect(() => {
    lookupFullMealDetailsById(id, type)
      .then((data) => {
        setRecipe({ ...data.meals[0] });
      });
  }, [type]);
  return (
    <div>
      <img data-testid="recipe-photo" src={recipe.strMealThumb} alt={`${recipe.strMeal}`} />
    </div>
  );
};

RecipeDetails.propTypes = {
  type: PropTypes.string.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default RecipeDetails;

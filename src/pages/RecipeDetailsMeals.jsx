import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { lookupFullMealDetailsById } from '../services/requestMealApi';
import ComidasContext from '../context/ComidasContext';
import { filterIngredientsMeals, auxiliarFuncition } from '../services/filterIngredients';
import Ingredients from '../components/Ingredients';
import '../styles/details.css';

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
  return (
    <div>
      <img
        className="Image-Details"
        data-testid="recipe-photo"
        src={recipe.strMealThumb}
        alt={`${recipe.strMeal}`}
      /><br />
      <div className="Description">
        <h2 data-testid="recipe-title">{recipe.strMeal}</h2>
        <div>
          <button data-testid="share-btn" >Fav</button>
          <button data-testid="favorite-btn" >Share</button>
        </div>
      </div>
      <section>
        <h5 className="Title-List" data-testid="recipe-category">{recipe.strCategory}</h5>
      </section>
      {fetchRecipe && <Ingredients value={recipe} />}
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

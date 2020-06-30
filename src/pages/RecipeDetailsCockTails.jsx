import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { lookupFullCocktailDetailsById } from '../services/requestCocktailApi';
import { filterIngredientsCockTails, auxiliarFuncition } from '../services/filterIngredients';
import ComidasContext from '../context/ComidasContext';
import Ingredients from '../components/Ingredients';
import '../styles/details.css';

const RecipeDetailsCockTails = ({ match: { params: { id } } }) => {
  const { recipe, setRecipe, fetchRecipe, setFetchRecipe } = useContext(ComidasContext);
  useEffect(() => {
    lookupFullCocktailDetailsById(id)
      .then((data) => {
        const allIngredients = filterIngredientsCockTails({ ...data.drinks[0] });
        const filteredAllIngredients = auxiliarFuncition(allIngredients);
        setRecipe({ ...data.drinks[0], ingredients: filteredAllIngredients });
        setFetchRecipe(true);
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
      </div><br />
      <div className="Description">
        <h2 data-testid="recipe-title">{recipe.strDrink}</h2>
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
          src={recipe.strVideo}
          frameBorder="0"
          allow="autoplay;encrypted-media"
          allowFullScreen
        />
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

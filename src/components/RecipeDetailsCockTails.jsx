import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { lookupFullCocktailDetailsById } from '../services/requestCocktailApi';
import ComidasContext from '../context/ComidasContext';
import { filterIngredientsCockTails }  from '../services/filterIngredients';

const RecipeDetailsCockTails = ({ match: { params: { id } } }) => {
  const { recipe, setRecipe } = useContext(ComidasContext);
  const allIngredients = filterIngredientsCockTails(recipe)
  useEffect(() => {
    lookupFullCocktailDetailsById(id)
      .then((data) => {
        console.log(data)
        setRecipe({ ...data.drinks[0] });
      });
  }, []);
  console.log(allIngredients)
  return (
    <div>
      <img data-testid="recipe-photo" src={recipe.strDrinkThumb} alt={`${recipe.strDrink}`} />
      <button data-testid="share-btn" >Fav</button>
      <button data-testid="favorite-btn" >Share</button>
      <h2 data-testid="recipe-title">{recipe.strDrink}</h2>
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
          src={recipe.strVideo}
          frameBorder="0"
          allow="autoplay;encrypted-media"
          allowFullScreen
        >
        </iframe>
      </div>
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

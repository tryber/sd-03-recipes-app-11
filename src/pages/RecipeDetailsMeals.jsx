import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import Clipboard from 'react-clipboard.js';
import { Link } from 'react-router-dom';
import { lookupFullMealDetailsById } from '../services/requestMealApi';
import ComidasContext from '../context/ComidasContext';
import { filterIngredientsMeals, auxiliarFuncition } from '../services/filterIngredients';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import Ingredients from '../components/Ingredients';
import Recomendations from '../components/Recomendations';

const RecipeDetailsMeals = ({ type, match: { params: { id } } }) => {
  const {
    recipe,
    setRecipe,
    fetchRecipe,
    setFetchRecipe,
    linkCopie,
    setLinkCopie,
  } = useContext(ComidasContext);
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
        width="20"
        height="20"
        data-testid="recipe-photo"
        src={recipe.strMealThumb}
        alt={`${recipe.strMeal}`}
      />
      <Clipboard
        data-testid="share-btn"
        className="Icon"
        onClick={() => {
          navigator.clipboard.writeText(window.location.href)
          setLinkCopie(true)
        }}
      >
        <img
          src={shareIcon}
          alt="share button"
        />
      </Clipboard>
      <button
        name="favorite2"
        onClick={() => setFetchRecipe(!fetchRecipe)}
        className="Icon"
      >
        {fetchRecipe
          ? <img data-testid="favorite-btn" src={blackHeartIcon} alt="favButton" />
          : <img data-testid="favorite-btn" src={whiteHeartIcon} alt="favButton" /> }
      </button>
      {linkCopie && <span>Link copiado!</span>}
      <h2 data-testid="recipe-title">{recipe.strMeal}</h2>
      <h5 data-testid="recipe-category">{recipe.strCategory}</h5>
      {<Ingredients value={recipe} />}
      <p data-testid="instructions">{recipe.strInstructions}</p>
      <div>
        {recipe.strYoutube === null
          ? <span>No video to attemp</span>
          : <ReactPlayer data-testid="video" url={recipe.strYoutube} />}
      </div>
      <Recomendations type="cocktail" />
      <button
        className="Button-Login"
      >
        <Link to={`/comidas/${id}/in-progress`}
          data-testid="start-recipe-btn"
          >
          Inciar Receita
        </Link>
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

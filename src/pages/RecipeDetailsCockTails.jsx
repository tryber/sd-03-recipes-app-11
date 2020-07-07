import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { lookupFullMealDetailsById } from '../services/requestMealApi';
import { filterIngredientsCockTails, auxiliarFuncition } from '../services/filterIngredients';
import ComidasContext from '../context/ComidasContext';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import '../styles/details.css';
import ShowIngredients from '../components/Ingredients/ShowIngredients';
import Ingredients from '../components/Ingredients/Ingredients';
import Recomendations from '../components/Recomendations';
import '../styles/details.css';
import ShareButton from '../components/Buttons/ShareButton';
import FavoriteButton from '../components/Buttons/FavoriteButton';

const RecipeDetailsCockTails = ({ match: { params: { id } }, type }) => {
  const iniciouReceita = window.location.pathname.includes(`${id}/in-progress`);
  const {
    recipe,
    setRecipe,
    linkCopie,
  } = useContext(ComidasContext);
  useEffect(() => {
    lookupFullMealDetailsById(id, type)
      .then((data) => {
        const allIngredients = filterIngredientsCockTails({ ...data.drinks[0] });
        const filteredAllIngredients = auxiliarFuncition(allIngredients);
        setRecipe({ ...data.drinks[0], ingredients: filteredAllIngredients });
      });
  }, [id]);
  return (
    <section>
      <div>
        <img
          className="Image-Details"
          data-testid="recipe-photo"
          src={recipe.strDrinkThumb}
          alt={`${recipe.strDrink}`}
        />
      </div>
      <div className="Description">
        <h2 data-testid="recipe-title">{recipe.strDrink}</h2>
        <div>
          <ShareButton />
          {linkCopie && <span>Link copiado!</span>}
          <FavoriteButton data={recipe} type="cocktail" />
        </div>
      </div>
      <section>
        <h5 className="Title-List" data-testid="recipe-category">{recipe.strAlcoholic}</h5>
        {ShowIngredients(recipe, iniciouReceita)}
        <p data-testid="instructions">{recipe.strInstructions}</p>
      </section>
      <Recomendations type="meal" />
      <div className="Progresse">
        <Link
          to={`/bebidas/${id}/in-progress`}
        >
          <button
            data-testid={`${iniciouReceita ? 'finish-recipe-btn' : 'start-recipe-btn'}`}
            className="Button-Progresse"
          >
            {iniciouReceita ? 'Finalizar Receita' : 'Iniciar Receita'}
          </button>
        </Link>
      </div>
    </section>
  );
};

RecipeDetailsCockTails.defaultProps = {
  type: '',
  id: 0,
};

RecipeDetailsCockTails.propTypes = {
  type: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default RecipeDetailsCockTails;

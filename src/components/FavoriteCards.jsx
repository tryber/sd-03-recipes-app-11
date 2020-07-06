import React, { useEffect, useState, useContext } from 'react';
import ShareButtoon from '../components/Buttons/ShareButton';
import FavoriteButton from '../components/Buttons/FavoriteButton';
import { lookupFullMealDetailsById } from '../services/requestMealApi';
import ComidasContext from '../context/ComidasContext';

const MealCardFavorite = (recipe, index) => {
  const [testRicepe, setRecipeTest] = useState({});
  const { linkCopie } = useContext(ComidasContext);
  const { id, category, area, name, image } = recipe;
  useEffect(() => {
    lookupFullMealDetailsById(id, 'meal')
      .then((data) => {
        setRecipeTest({ ...data.meals[0] });
      });
  }, []);
  return (
    <div>
      <img
        height="50"
        width="50"
        src={image}
        alt="recipe"
        data-testid={`${index}-horizontal-image`}
      />
      <p data-testid={`${index}-horizontal-top-text`}>
        {`${area} - ${category}`}
      </p>
      <h3 data-testid={`${index}-horizontal-name`}>
        {name}
      </h3>
      <ShareButtoon local index={index} type="comidas" id={id} />
      {testRicepe.idMeal && <FavoriteButton
        data={testRicepe}
        type="meal"
        local
        index={index}
      />}
      {linkCopie ? <span>Link copiado!</span> : null}
    </div>
  );
};

const CockTailCardFavorite = (recipe, index) => {
  const [testRicepeCock, setRecipeTestCock] = useState({});
  const { id, alcoholicOrNot, name, image } = recipe;
  useEffect(() => {
    lookupFullMealDetailsById(id, 'cocktail')
      .then((data) => {
        setRecipeTestCock({ ...data.drinks[0] });
      });
  }, []);
  return (
    <div>
      <img
        data-testid={`${index}-horizontal-image`}
        width="50"
        height="50"
        src={image}
        alt="recipe"
      />
      <p data-testid={`${index}-horizontal-top-text`}>
        {alcoholicOrNot}
      </p>
      <h3 data-testid={`${index}-horizontal-name`}>
        {name}
      </h3>
      <ShareButtoon local index={index} type="bebidas" id={id} />
      {testRicepeCock.idDrink && <FavoriteButton
        data={testRicepeCock}
        type="cocktail"
        local
        index={index}
      />}
    </div>
  );
};

const FavoriteCards = ({ recipe, index }) => {
  const { type } = recipe;
  if (type === 'comida') return MealCardFavorite(recipe, index);
  if (type === 'bebida') return CockTailCardFavorite(recipe, index);
  return 'S2 codeClimate';
};

export default FavoriteCards;

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';

const saveFavoriteMeal = (recipe, setFav) => {
  const { idMeal, strArea, strCategory, strMeal, strMealThumb } = recipe;
  const newFavorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  const favoriteIndex = newFavorites.findIndex((el) => el.id === recipe.idMeal);
  if (favoriteIndex === -1) {
    newFavorites.push({
      id: idMeal,
      type: 'comida',
      area: strArea,
      category: strCategory,
      alcoholicOrNot: '',
      name: strMeal,
      image: strMealThumb,
    });
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
    setFav(blackHeartIcon);
  } else {
    newFavorites.splice(favoriteIndex, 1);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
    setFav(whiteHeartIcon);
  }
};

const saveFavoriteCocktail = (recipe, setFav) => {
  const { idDrink, strCategory, strAlcoholic, strDrink, strDrinkThumb } = recipe;
  const newFavorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  const favoriteIndex = newFavorites.findIndex((el) => el.id === recipe.idDrink);
  if (favoriteIndex === -1) {
    newFavorites.push({
      id: idDrink,
      type: 'bebida',
      area: '',
      category: strCategory,
      alcoholicOrNot: strAlcoholic,
      name: strDrink,
      image: strDrinkThumb,
    });
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
    setFav(blackHeartIcon)
  } else {
    newFavorites.splice(favoriteIndex, 1);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
    setFav(whiteHeartIcon);
  }
};

const FavoriteButton = ({ data, type }) => {
  const [FavDesFav, setFav] = useState(whiteHeartIcon);
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    if (data.length !== 0 && favorites
        .find((favorite) => favorite.id === data.idDrink || data.idMeal)) {
      setFav(blackHeartIcon);
    }
  }, [data]);
  return (
    <button
      onClick={() => {
        if (type === 'meal') saveFavoriteMeal(data, setFav);
        if (type === 'cocktail') saveFavoriteCocktail(data, setFav);
      }}
    >
      <img data-testid="favorite-btn" src={FavDesFav} alt="favorite-btn" />
    </button>
  );
};

FavoriteButton.propTypes = {
  data: PropTypes.object,
  type: PropTypes.string,
};

FavoriteButton.defaultProps = {
  data: {},
  type: '',
}

export default FavoriteButton;

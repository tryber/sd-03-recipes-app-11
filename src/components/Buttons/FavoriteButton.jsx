import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import ComidasContext from '../../context/ComidasContext';

const saveFavoriteMeal = (recipe, setFav, setMap) => {
  const { idMeal, strArea, strCategory, strMeal, strMealThumb } = recipe;
  const newFavorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  const favoriteIndex = newFavorites.findIndex((el) => el.id === recipe.idMeal);
  if (favoriteIndex === -1) {
    newFavorites.push({
      id: idMeal || '',
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
    setMap(newFavorites);
  }
};

const saveFavoriteCocktail = (recipe, setFav, setMap) => {
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
    setFav(blackHeartIcon);
  } else {
    newFavorites.splice(favoriteIndex, 1);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
    setFav(whiteHeartIcon);
    setMap(newFavorites);
  }
};

const FavoriteButton = ({ data, type, local, index }) => {
  const [FavDesFav, setFav] = useState(whiteHeartIcon);
  const { setMap } = useContext(ComidasContext);
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
        if (type === 'meal') saveFavoriteMeal(data, setFav, setMap);
        if (type === 'cocktail') saveFavoriteCocktail(data, setFav, setMap);
      }}
    >
      <img
        data-testid={local ? `${index}-horizontal-favorite-btn` : 'favorite-btn'}
        src={FavDesFav}
        alt="favorite-btn"
      />
    </button>
  );
};

FavoriteButton.propTypes = {
  data: PropTypes.shape(),
  type: PropTypes.string,
  local: PropTypes.bool,
  index: PropTypes.number,
};

FavoriteButton.defaultProps = {
  data: {},
  type: '',
  local: false,
  index: null,
};

export default FavoriteButton;

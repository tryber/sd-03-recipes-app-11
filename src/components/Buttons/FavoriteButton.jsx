import React, { useContext } from 'react';
import ComidasContext from '../../context/ComidasContext';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';

function addingFavorite(storage, type) {
  const favoriteRecipestest = localStorage.getItem('favoriteRecipes') || [];
  if (favoriteRecipestest.length === 0) {
    const testkk = JSON.stringify([])
    localStorage.setItem('favoriteRecipes', testkk)
  }
  const favoriteRecipes = localStorage.getItem('favoriteRecipes');
  if (type === 'cocktail') {
    if (favoriteRecipes.includes(storage.idDrink) === false) {
      const allFavorites = JSON.parse(favoriteRecipes);
      allFavorites.push({
        id: storage.idDrink,
        type: 'bebida',
        area: '',
        category: 'Cocktail',
        alcoholicOrNot: storage.strAlcoholic,
        name: storage.strDrink,
        image: storage.strDrinkThumb,
      });
      const favoriteRecipesAdd = JSON.stringify(allFavorites);
      localStorage.setItem('favoriteRecipes', favoriteRecipesAdd);
    } else {
      const allFavorites1 = JSON.parse(favoriteRecipes);
      const newFavorites = allFavorites1.filter(el => storage.idDrink !== el.id);
      const removedFavorites = JSON.stringify(newFavorites);
      localStorage.setItem('favoriteRecipes', removedFavorites);
    }
  }
  if (type === 'meal') {
    if (favoriteRecipes.includes(storage.idMeal) === false) {
      const allFavoritesMeal = JSON.parse(favoriteRecipes);
      allFavoritesMeal.push({
        id: storage.idMeal,
        type: 'comida',
        area: storage.strArea,
        category: storage.strCategory,
        alcoholicOrNot: '',
        name: storage.strMeal,
        image: storage.strMealThumb,
      });
      const favoriteRecipesAddMeal = JSON.stringify(allFavoritesMeal);
      localStorage.setItem('favoriteRecipes', favoriteRecipesAddMeal);
    } else {
      const allFavoritesMeal1 = JSON.parse(favoriteRecipes);
      const newFavorites = allFavoritesMeal1.filter(el => storage.idMeal !== el.id);
      const removedFavorites = JSON.stringify(newFavorites);
      localStorage.setItem('favoriteRecipes', removedFavorites);
    }
  }
}

const FavoriteButton = ({ data, type }) => {
  const favoriteRecipes = localStorage.getItem('favoriteRecipes')
  const { FavDesFav, setFav } = useContext(ComidasContext)
  return (
    <button
      name="favorite"
      onClick={() => {
        setFav(!FavDesFav)
        addingFavorite(data, type)
      }}
    >
      {favoriteRecipes && favoriteRecipes.includes(data.idDrink || data.idMeal)
        ? <img data-testid="favorite-btn" src={blackHeartIcon} alt="favButton" />
        : <img data-testid="favorite-btn" src={whiteHeartIcon} alt="favButton" />}
    </button>
  );
}

export default FavoriteButton;

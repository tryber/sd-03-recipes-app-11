import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ComidasContext from '../../context/ComidasContext';
import * as api from '../../services/requestMealApi';

const requestMeal = (type, meal, radio, push) => {
  switch (radio) {
    case 'ingredient':
      return api.searchMealByMainIngredient(meal, type);
    case 'name':
      return api.searchMealsByName(meal, type)
        .then((resp) => (resp.meals.length === 1) && push(`/comidas/${resp.meals[0].idMeal}`));
    case 'firstLetter':
      return api.searchAllMealsByFirstLetter(meal, type);
    default:
      return 'Erro';
  }
};

const requestCocktail = (type, meal, radio, push) => {
  switch (radio) {
    case 'ingredient':
      return api.searchMealByMainIngredient(meal, type);
    case 'name':
      return api.searchMealsByName(meal, type)
        .then((resp) => (resp.drinks.length === 1) && push(`/bebidas/${resp.drinks[0].idDrink}`));
    case 'firstLetter':
      return api.searchAllMealsByFirstLetter(meal, type);
    default:
      return '';
  }
};

const requestType = (type, meal, radio, pathname, push) => {
  const alertMessage = 'Sua busca deve conter somente 1 (um) caracter';

  if (radio === 'firstLetter' && meal.length > 1) return alert(alertMessage);
  switch (pathname) {
    case '/comidas':
      return requestMeal('meal', meal, radio, push);
    case '/bebidas':
      return requestCocktail('cocktail', meal, radio, push);
    default:
      return 'Erro';
  }
};

const SearchButton = () => {
  const { searchType } = useContext(ComidasContext);
  const { type, meal, radio } = searchType;
  const { pathname } = useHistory().location;
  const { push } = useHistory();

  return (
    <button
      data-testid="exec-search-btn"
      onClick={() => requestType(type, meal, radio, pathname, push)}
    >Buscar
    </button>
  );
};

export default SearchButton;

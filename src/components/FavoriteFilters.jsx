import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ComidasContext from '../context/ComidasContext';

const Allbutton = ({ localstorageAll, setlocalstorageAll }) => (
    <button
      data-testid="filter-by-all-btn"
      onClick={() => setlocalstorageAll(localstorageAll)}
    >
      All
    </button>
);

const FoodButton = ({ localstorageFood, setlocalstorageFood }) => {
  const filteredLocalFood = localstorageFood
    .filter((el) => el.type === 'comida');
  return (
    <button
      data-testid="filter-by-food-btn"
      onClick={() => setlocalstorageFood(filteredLocalFood)}
    >
      Food
    </button>
  );
};

const DrinksButton = ({ localstorageDrinks, setlocalstorageDrinks }) => {
  const filteredLocalDrinks = localstorageDrinks
    .filter((el) => el.type === 'bebida');
  return (
    <button
      data-testid="filter-by-drink-btn"
      onClick={() => setlocalstorageDrinks(filteredLocalDrinks)}
    >
      Drinks
    </button>
  );
};

const FavoriteFilters = () => {
  const { setMap } = useContext(ComidasContext);
  const mainStorage = JSON.parse(localStorage.getItem('favoriteRecipes'))
  return (
    <div>
      <Allbutton localstorageAll={mainStorage} setlocalstorageAll={setMap} />
      <FoodButton localstorageFood={mainStorage} setlocalstorageFood={setMap} />
      <DrinksButton localstorageDrinks={mainStorage} setlocalstorageDrinks={setMap} />
    </div>
  );
};

Allbutton.propTypes = {
  localstorageAll: PropTypes.array.isRequired,
  setlocalstorageAll: PropTypes.func.isRequired,
};

FoodButton.propTypes = {
  localstorageFood: PropTypes.array.isRequired,
  setlocalstorageFood: PropTypes.func.isRequired,
};

DrinksButton.propTypes = {
  localstorageDrinks: PropTypes.array.isRequired,
  setlocalstorageDrinks: PropTypes.func.isRequired,
};

export default FavoriteFilters;

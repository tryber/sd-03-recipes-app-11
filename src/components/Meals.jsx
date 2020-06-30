import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import SearchBar from './SearchBar';
import ComidasContext from '../context/ComidasContext';
import Loading from './Loading';
import '../styles/styles.css';
import { searchMealsByName } from '../services/requestMealApi';
import MealsCard from './MealsCard';
import MealsCategorys from './MealsCategorys';

function Meals({ type }) {
  const { searchValue, meals, setMeals, isFetching, setIsFetching } = useContext(ComidasContext);

  useEffect(() => {
    searchMealsByName('', type).then((data) => {
      setMeals((data.meals || data.drinks).slice(0, 12));
      setIsFetching(false);
    });
  }, [setMeals, setIsFetching, type]);

  const upperCase = {
    meal: 'Meal',
    cocktail: 'Drink',
  };

  if (isFetching) return <Loading />;
  return (
    <div>
      <Header title="Comidas" search />
      {searchValue && <SearchBar />}
      <div>
        <MealsCategorys type={type} />
      </div>
      <div className="Map">
        {meals.map((meal, index) => (
          <MealsCard key={meal[`id${upperCase[type]}`]} recipe={meal} index={index} type={type} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

Meals.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Meals;

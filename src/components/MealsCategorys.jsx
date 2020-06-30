import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { searchAllMealCategoriesDetails, searchMealByCategory } from '../services/requestMealApi';
import ComidasContext from '../context/ComidasContext';
import Loading from './Loading';

function MealsCategorys({ type }) {
  const { categories, setCategories, isFetching, setIsFetching, setMeals } = useContext(
    ComidasContext,
  );

  useEffect(() => {
    searchAllMealCategoriesDetails(type).then((data) => {
      setCategories((data.meals || data.drinks).slice(0, 5));
      setIsFetching(false);
    });
  }, [setCategories, setIsFetching, type]);

  const onHandlelistMealsByCategory = (category) => {
    searchMealByCategory(category, type).then((data) =>
      setMeals((data.meals || data.drinks).slice(0, 12)),
    );
  };

  if (isFetching) return <Loading />;
  return (
    <div className="Category">
      <button type="button">All</button>
      {categories.map((category) => (
        <button
          type="button"
          data-testid={`${category.strCategory}-category-filter`}
          onClick={() => onHandlelistMealsByCategory(category.strCategory)}
          key={category.strCategory}
        >
          {category.strCategory}
        </button>
      ))}
    </div>
  );
}

MealsCategorys.propTypes = {
  type: PropTypes.string.isRequired,
};

export default MealsCategorys;

import React from 'react';

const DoneRecipesFilters = () => {
  return (
    <div>
      <button data-testid="filter-by-all-btn">
        all
      </button>
      <button data-testid="filter-by-food-btn">
        meal
      </button>
      <button data-testid="filter-by-drink-btn">
        drinks
      </button>
    </div>
  );
}

export default DoneRecipesFilters;

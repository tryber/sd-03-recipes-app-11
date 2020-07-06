import React from 'react';

const FavoriteFilters = () => (
  <div>
    <button data-testid="filter-by-all-btn">
      All
    </button>
    <button data-testid="filter-by-food-btn">
      Food
    </button>
    <button data-testid="filter-by-drink-btn">
      Drinks
    </button>
  </div>
);

export default FavoriteFilters;

import React from 'react';
import '../styles/rec-feitas-fav.css';

const DoneRecipesFilters = () => (
  <div>
    <button className="Filter-Button" data-testid="filter-by-all-btn">
      all
    </button>
    <button className="Filter-Button" data-testid="filter-by-food-btn">
      meal
    </button>
    <button className="Filter-Button" data-testid="filter-by-drink-btn">
      drinks
    </button>
  </div>
);

export default DoneRecipesFilters;

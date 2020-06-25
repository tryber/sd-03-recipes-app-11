import React from 'react';

function Recipes() {
  return (
    <div>
      <h2>Página de receitas</h2>
      <input
        data-testid="search-input"
      />
      <input
        type="radio"
        data-testid="ingredient-search-radio"
      />
      <input
        type="radio"
        data-testid="name-search-radio"
      />
      <input
        type="radio"
        data-testid="first-letter-search-radio"
      />
      <button data-testid="exec-search-btn">Buscar</button>
    </div>
  );
}

export default Recipes;

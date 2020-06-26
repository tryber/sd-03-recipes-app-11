import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Recipes() {
  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  );
}

export default Recipes;

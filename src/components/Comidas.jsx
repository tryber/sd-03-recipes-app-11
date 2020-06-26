import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Recipes() {
  return (
    <div>
      <Header />
      <input
        type="search"
        data-testid="search-input"
        placeholder="Buscar Receita"
        className="Input-Search"
      /><br />
      <input
        type="radio"
        data-testid="ingredient-search-radio"
        name="food"
        id="Ingrediente"
        value="Ingrediente"
      />
      <label htmlFor="Ingrediente">Ingrediente</label>
      <input
        type="radio"
        data-testid="name-search-radio"
        name="food"
        id="Name"
        value="Name"
      />
      <label htmlFor="Name">Nome</label>
      <input
        type="radio"
        data-testid="first-letter-search-radio"
        name="food"
        id="Fist-Word"
        value="Fist-Word"
      />
      <label htmlFor="Fist-Word">Primeira letra</label>
      <button data-testid="exec-search-btn">Buscar</button>
      <Footer />
    </div>
  );
}

export default Recipes;

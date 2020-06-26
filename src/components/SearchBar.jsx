import React from 'react';

function SearchBar() {
  return (
    <div>
      <input
        type="search"
        data-testid="search-input"
        placeholder="Buscar Receita"
      />
      <input
        type="radio"
        data-testid="ingredient-search-radio"
        name="food"
        id="Ingrediente"
        value="Ingrediente"
      />
      <label htmlFor="Ingrediente">ingrediente</label>
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
    </div>
  );
}

export default SearchBar;

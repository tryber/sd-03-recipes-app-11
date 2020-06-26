import React from 'react';
import '../styles/styles.css'

function SearchBar() {
  return (
    <div>
      <input
        type="search"
        data-testid="search-input"
        placeholder="Buscar Receita"
        className="Input-Search"
      /><br />
      <div className="Radio">
        <label htmlFor="Ingrediente">
          <input
            type="radio"
            data-testid="ingredient-search-radio"
            name="food"
            id="Ingrediente"
            value="Ingrediente"
          />
          ingrediente
        </label>
        <label htmlFor="Name">
          <input
            type="radio"
            data-testid="name-search-radio"
            name="food"
            id="Name"
            value="Name"
          />
          Nome
        </label>
        <label htmlFor="Fist-Word">
          <input
            type="radio"
            data-testid="first-letter-search-radio"
            name="food"
            id="Fist-Word"
            value="Fist-Word"
          />
          Primeira letra
        </label>
      </div>
    </div>
  );
}

export default SearchBar;

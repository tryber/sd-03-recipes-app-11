import React from 'react';
import PropTypes from 'prop-types';

function Ingredients({ value: { ingredients } }) {
  // console.log(value.ingredients)
  return ingredients === undefined ? <div>looding...</div> : ingredients
    .map((el, index) => (
      <p
        key={el[0]}
        data-testid={`${index}-ingredient-name-and-measure`}
      >
        {`${el[0]} - ${el[1] || 'a gosto'}`}
      </p>));
}

Ingredients.propTypes = {
  value: PropTypes.shape({
    ingredients: PropTypes.array,
  }).isRequired,
};

export default Ingredients;

import React from 'react';

const Ingredients = ({ value }) => {
  // console.log(value.ingredients)
  return value.ingredients === undefined ? <div>looding...</div> : value.ingredients.map((el, index) => (
    <p
      key={el[0]}
      data-testid={`${index}-ingredient-name-and-measure`}
    >
      {`${el[0]} - ${el[1]}`}
    </p>))
};

export default Ingredients;

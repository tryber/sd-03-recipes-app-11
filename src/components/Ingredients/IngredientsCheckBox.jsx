import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/ingredients.css';
import Loading from '../Loading';

const verifyIfChecked = (id, recipeId) => {
  if (localStorage.getItem(`${recipeId}${id}`) !== null) {
    return true;
  }
  return false;
};

const toggleStorage = () => {
  const newObject = {
    cocktails: {},
    meals: {}
  };
  
};


function IngredientsCheckBox({ el, id, recipeId }) {
  const [risked, setRisked] = useState('notSelected');
  const setLine = () => {
    if (risked === 'selected') return setRisked('notSelected');
    return setRisked('selected');
  };

  return el
    ? (
      <div>
        <label
          htmlFor="options"
          className={risked}
        >
          <input
            // checked={verifyIfChecked(id, recipeId)}
            // onClick={() => toggleCheck(id, recipeId)}
            data-testid={`${id}-ingredient-step`}
            type="checkbox"
            key={el[0]}
            id="options"
            onChange={setLine}
          />
          {`-${el[0]} - ${el[1] || 'a gosto'}`}
        </label>
      </div>
    )
    : <Loading />;
}

IngredientsCheckBox.propTypes = {
  el: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
};

export default IngredientsCheckBox;

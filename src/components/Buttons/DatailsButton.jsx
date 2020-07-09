import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DetailsButton = ({ test, type, id }) => {
  const StartOrNot = JSON.parse(localStorage.getItem('inProgressRecipes')) || [];
  const { cocktails, meals } = StartOrNot;
  let defineButton = [];
  if (type === 'comidas' && meals) defineButton = meals[id];
  if (type === 'bebidas' && cocktails) defineButton = cocktails[id];
  return !test ? (
    <Link
      to={`/${type}/${id}/in-progress`}
    >
      <button
        data-testid="start-recipe-btn"
        className="Button-Progresse"
      >
        {defineButton && defineButton.length > 0 ? 'Continuar Receita' : 'Iniciar Receita'}
      </button>
    </Link>
  ) : <div />
};

DetailsButton.defaultProps = {
  test: null
};

DetailsButton.propTypes = {
  test: PropTypes.arrayOf(),
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default DetailsButton;

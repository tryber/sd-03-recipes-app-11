import React from 'react';
import { Link } from 'react-router-dom';

const DetailsButton = ({ type, id }) => {
  const StartOrNot = JSON.parse(localStorage.getItem('inProgressRecipes')) || [];
  const { cocktails, meals } = StartOrNot;
  let defineButton = [];
  if (type === 'comidas' && meals) defineButton = meals[id]
  if (type === 'bebidas' && cocktails) defineButton = cocktails[id]
  return (
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
  );
}

export default DetailsButton;

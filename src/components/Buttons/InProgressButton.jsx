import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

const InProgressButton = () => {
  return (
    <Link to="/receitas-feitas">
      <button
        data-testid="finish-recipe-btn"
        className="Button-Progresse"
      >
        Finalizar Receita
      </button>
    </Link>
  );
}

export default InProgressButton;

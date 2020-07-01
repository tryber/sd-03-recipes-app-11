import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RecomendationCard = ({ recipe, index, type }) => {
  const stringsObj = {
    meal: ['comidas', 'Meal'],
    cocktail: ['bebidas', 'Drink'],
  };
  return (
    <Link to={`/${stringsObj[type][0]}/${recipe[`id${stringsObj[type][1]}`]}`}>
      <div>
        <img
          width="50"
          height="50"
          data-testid={`${index}-recomendation-card`}
          alt="Recipe"
          src={recipe[`str${stringsObj[type][1]}Thumb`]}
        />
        <h4 data-testid={`${index}-recomendation-title`} className="recipe-title">
          {recipe[`str${stringsObj[type][1]}`]}
        </h4>
      </div>
    </Link>
  );
};

RecomendationCard.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default RecomendationCard;

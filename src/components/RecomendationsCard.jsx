import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RecomendationCard = ({ recipe, index, type }) => {
  const stringsObjRec = {
    meal: ['comidas', 'Meal'],
    cocktail: ['bebidas', 'Drink'],
  };
  return (
    <Link to={`/${stringsObjRec[type][0]}/${recipe[`id${stringsObjRec[type][1]}`]}`}>
      <div>
        <img
          width="50"
          height="50"
          data-testid={`${index}-recomendation-card`}
          alt="Recipe"
          src={recipe[`str${stringsObjRec[type][1]}Thumb`]}
        />
        <h4 data-testid={`${index}-recomendation-title`} className="recipe-title">
          {recipe[`str${stringsObjRec[type][1]}`]}
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

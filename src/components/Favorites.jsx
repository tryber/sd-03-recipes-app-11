import React from 'react';
import FavoriteCards from './FavoriteCards';

const Favorites = ({ data }) => {
  return data.map((el, i) => <FavoriteCards key={i+1} recipe={el} index={i} />)
}

export default Favorites;

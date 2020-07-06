import React, { useEffect, useState, useContext} from 'react';
import FavoriteFilters from '../components/FavoriteFilters';
import Header from '../components/Header';
import Favorites from '../components/Favorites';
import ComidasContext from '../context/ComidasContext';

const FavoriteRecipesPage = () => {
  const { mapDefine } = useContext(ComidasContext)
  useEffect(() => {
    
  }, [mapDefine]);
  return (
    <div>
      <Header />
      <FavoriteFilters />
      {!!mapDefine && <Favorites data={mapDefine} />}
    </div>
  );
};

export default FavoriteRecipesPage;

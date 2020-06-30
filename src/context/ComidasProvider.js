import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ComidasContext from './ComidasContext';


function ComidasProvider({ children }) {
  const [search, setSearch] = useState(false);
  const [meals, setMeals] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [recipe, setRecipe] = useState({});
  const [fetchRecipe, setFetchRecipe] = useState(false);
  const store = {
    searchValue: search,
    toggleSearch: () => setSearch(!search),
    meals,
    setMeals,
    isFetching,
    setIsFetching,
    recipe,
    setRecipe,
    fetchRecipe,
    setFetchRecipe,
  };
  return (
    <ComidasContext.Provider value={store}>
      {children}
    </ComidasContext.Provider>
  );
}

ComidasProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ComidasProvider;

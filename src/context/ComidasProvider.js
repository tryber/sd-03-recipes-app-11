import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ComidasContext from './ComidasContext';


function ComidasProvider({ children }) {
  const [search, setSearch] = useState(false);
  const [searchType, setSearchType] = useState({ type: '', meal: '', radio: '' });
  const [meals, setMeals] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [recipe, setRecipe] = useState({});
  const [fetchRecipe, setFetchRecipe] = useState(false);
  const [categories, setCategories] = useState([]);

  const store = {
    searchValue: search,
    searchType,
    setSearchType: (meal, type) => setSearchType(meal, type),
    toggleSearch: () => setSearch(!search),
    meals,
    setMeals,
    isFetching,
    setIsFetching,
    recipe,
    setRecipe,
    fetchRecipe,
    setFetchRecipe,
    categories,
    setCategories,

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

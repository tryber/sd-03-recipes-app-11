import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ComidasContext from './ComidasContext';


function ComidasProvider({ children }) {
  const [search, setSearch] = useState(false);

  const store = {
    searchValue: search,
    toggleSearch: () => setSearch(!search),
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
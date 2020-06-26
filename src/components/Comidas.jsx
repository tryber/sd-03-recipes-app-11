import React, { useContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import SearchBar from './SearchBar';
import ComidasContext from '../context/ComidasContext';

function Recipes() {
  const { searchValue } = useContext(ComidasContext);
  return (
    <div>
      <Header title="Comidas" search />
      {searchValue && <SearchBar />}
      <Footer />
    </div>
  );
}

export default Recipes;

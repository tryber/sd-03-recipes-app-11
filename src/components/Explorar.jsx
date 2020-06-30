import React, { useContext } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import ComidasContext from '../context/ComidasContext';
import Footer from './Footer';

function Explorar() {
  const { searchValue } = useContext(ComidasContext);

  return (
    <div>
      <Header />
      {searchValue && <SearchBar />}
      <Footer />
    </div>
  );
}


export default Explorar;

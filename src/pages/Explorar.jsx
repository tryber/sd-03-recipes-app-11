import React, { useContext } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import ComidasContext from '../context/ComidasContext';
import Footer from '../components/Footer';

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

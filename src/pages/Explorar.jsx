import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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
      <Link to="/explorar/comidas">
        <button type="button" data-testid="explore-food">
          Explorar Comidas
        </button>
      </Link>
      <Link to="/explorar/bebidas">
        <button type="button" data-testid="explore-drinks">
          Explorar Bebidas
        </button>
      </Link>
      <Footer />
    </div>
  );
}

export default Explorar;

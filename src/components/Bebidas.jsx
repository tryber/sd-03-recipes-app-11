import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import SearchBar from './SearchBar';
import ComidasContext from '../context/ComidasContext';
import Footer from './Footer';

function Bebidas(props) {
  const { searchValue } = useContext(ComidasContext);

  const { id } = props.match.params;
  console.log(props);
  return (
    <div>
      {!id && <Header search />}
      {searchValue && <SearchBar />}
      {!id && <Footer />}
    </div>
  );
}

Bebidas.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

Bebidas.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default Bebidas;

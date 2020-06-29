import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import SearchBar from './SearchBar';
import ComidasContext from '../context/ComidasContext';

function Comidas(props) {
  const { searchValue } = useContext(ComidasContext);

  const { id } = props.match.params;
  return (
    <div>
      {!id && <Header search />}
      {searchValue && <SearchBar />}
      {!id && <Footer />}
    </div>
  );
}

Comidas.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

Comidas.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default Comidas;

import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import ComidasContext from '../context/ComidasContext';

const headerTitle = (history) => {
  const local = history.location.pathname;
  switch (local) {
    case '/bebidas':
      return 'Bebidas';
    case '/comidas':
      return 'Comidas';
    case '/explorar':
      return 'Explorar';
    case '/explorar/comidas':
      return 'Explorar Comidas';
    case '/explorar/comidas/area':
      return 'Explorar Origem';
    case '/explorar/comidas/ingredientes':
      return 'Explorar Ingredientes';
    case '/explorar/bebidas/ingredientes':
      return 'Explorar Ingredientes';
    case '/explorar/bebidas':
      return 'Explorar Bebidas';
    case '/receitas-feitas':
      return 'Receitas Feitas';
    case '/perfil':
      return 'Perfil';
    default:
      return 'Teste';
  }
};

function Header({ search }) {
  const history = useHistory();
  const { toggleSearch } = useContext(ComidasContext);
  return (
    <header>
      <h2 data-testid="page-title">{headerTitle(history)}</h2>
      <button onClick={() => history.push('/perfil')} >
        <img data-testid="profile-top-btn" src={profileIcon} alt="Icone do Profile" />
      </button>
      {(search || history.location.pathname === '/explorar/comidas/area') && (
        <button onClick={toggleSearch} >
          <img
            data-testid="search-top-btn"
            src={searchIcon} alt="search icon"
          />
        </button>
      )}
    </header>
  );
}

Header.propTypes = {
  search: PropTypes.bool,
};

Header.defaultProps = {
  search: false,
};

export default Header;

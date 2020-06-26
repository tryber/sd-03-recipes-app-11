import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import ComidasContext from '../context/ComidasContext';

function Header({ title, search }) {
  const history = useHistory();
  const { toggleSearch } = useContext(ComidasContext);
  return (
    <header>
      <h2 data-testid="page-title">{title}</h2>
      <button onClick={() => history.push('/perfil')} >
        <img data-testid="profile-top-btn" src={profileIcon} alt="Icone do Profile" />
      </button>
      {search && (
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
  title: PropTypes.string.isRequired,
  search: PropTypes.bool.isRequired,

};

export default Header;

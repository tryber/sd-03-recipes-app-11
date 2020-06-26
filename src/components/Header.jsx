import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import ComidasContext from '../context/ComidasContext';

function Header({ title, search }) {
  const { toggleSearch } = useContext(ComidasContext);
  return (
    <header className="Header">
      <img
        src={profileIcon}
        data-testid="profile-top-btn"
        alt="profile button"
        className="Perfil-Icon"
      />
      <h2 data-testid="page-title">{title}</h2>
      {search && <button
        onClick={toggleSearch}
        data-testid="search-top-btn"
        className="Search-Icon"
      >
        <img src={searchIcon} alt="search icon" />
      </button>}
    </header >
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  search: PropTypes.bool.isRequired,

};

export default Header;

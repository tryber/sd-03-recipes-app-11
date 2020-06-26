import React, { useContext } from 'react';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import HeaderContext from '../context/HeaderContext';


function Header() {
  const title = useContext(HeaderContext);
  return (
    <header className="Header">
      <img
        src={profileIcon}
        data-testid="profile-top-btn"
        alt="profile button"
        className="Perfil-Icon"
      />
      <h3 data-testid="page-title">Comidas</h3>
      <img
        src={searchIcon}
        alt="search icon"
        className="Search-Icon"
      />
    </header>
  );
}

export default Header;

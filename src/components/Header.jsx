import React, { useContext } from 'react';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import HeaderContext from '../context/HeaderContext';


function Header() {
  const title = useContext(HeaderContext);
  return (
    <header>
      <img
        src={profileIcon}
        data-testid="profile-top-btn"
        alt="profile button"
      />
      <h2 data-testid="page-title">{title}</h2>
      <img
        src={searchIcon}
        alt="search icon"
      />
    </header>
  );
}

export default Header;

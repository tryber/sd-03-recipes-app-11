import React, { useContext } from 'react';
import shareIcon from '../../images/shareIcon.svg';
import ComidasContext from '../../context/ComidasContext';

const ShareButton = () => {
  const { setLinkCopie } = useContext(ComidasContext)  
  return (
    <button
      name="CopieCocktailLink"
      data-testid="share-btn"
      onClick={() => {
        navigator.clipboard.writeText(window.location.href);
        setLinkCopie(true);
      }}
    >
      <img
        src={shareIcon}
        alt="share button"
      />
    </button>
  );
}

export default ShareButton;

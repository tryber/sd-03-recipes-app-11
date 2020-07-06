import React, { useContext } from 'react';
import shareIcon from '../../images/shareIcon.svg';
import ComidasContext from '../../context/ComidasContext';

const ShareButton = ({ local, index , id, type}) => {
  const { setLinkCopie } = useContext(ComidasContext);
  return (
    <button
      name="CopieCocktailLink"
      onClick={() => {
        if (type === 'comidas' || type === 'bebidas') {
          navigator.clipboard.writeText(`http://localhost:3000/${type}/${id}`);
        } else {
          navigator.clipboard.writeText(window.location.href);
        }
        setLinkCopie(true);
      }}
    >
      <img
        data-testid={local ? `${index}-horizontal-share-btn` : "share-btn"}
        src={shareIcon}
        alt="share button"
      />
    </button>
  );
};

export default ShareButton;

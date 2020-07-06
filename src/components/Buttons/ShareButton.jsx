import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../../images/shareIcon.svg';
import ComidasContext from '../../context/ComidasContext';

const ShareButton = ({ local, index, id, type }) => {
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
        data-testid={local ? `${index}-horizontal-share-btn` : 'share-btn'}
        src={shareIcon}
        alt="share button"
      />
    </button>
  );
};

ShareButton.propTypes = {
  local: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default ShareButton;

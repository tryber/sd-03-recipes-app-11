import React from 'react';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <footer className="Footer">
      <img src={drinkIcon} alt="drink icon" />
      <img src={exploreIcon} alt="explore icon" />
      <img src={mealIcon} alt="meal icon" />
    </footer>
  );
}

export default Footer;

import React from 'react';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
function Footer() {
  return (
    <footer className="Footer" data-testid="footer">
      <button className="Icon">
        <img
          data-testid="drinks-bottom-btn"
          src={drinkIcon} alt="drink icon"
        />
      </button>
      <button className="Icon">
        <img
          data-testid="explore-bottom-btn"
          src={exploreIcon} alt="explore icon"
        />
      </button>
      <button className="Icon">
        <img
          data-testid="food-bottom-btn"
          src={mealIcon} alt="meal icon"
        />
      </button>
    </footer>
  );
}
export default Footer;

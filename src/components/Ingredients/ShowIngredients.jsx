import React from 'react';
import IngredientsCheckBox from './IngredientsCheckBox';
import Ingredients from './Ingredients';

function ShowIngredients(recipe, iniciouReceita) {
  const id = window.location.pathname.includes('bebidas') ? recipe.idDrink : recipe.idMeal;
  console.log(id);
  return iniciouReceita && recipe.ingredients
    ? recipe.ingredients.map((el, i) => <IngredientsCheckBox el={el} id={i} recipeId={id} />)
    : <Ingredients value={recipe} />;
}

export default ShowIngredients;


// const showIngredients = (recipe, iniciouReceita) => {
//   return iniciouReceita && recipe.ingredients
//     ? recipe.ingredients.map((el) => <IngredientsCheckBox el={el} id={Math.random()} />)
//     : <Ingredients value={recipe} />;
// };

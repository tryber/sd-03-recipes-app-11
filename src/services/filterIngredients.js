export const filterIngredientsMeals = (data) => {
  const results = {};
  const arrayIngredients = Object.entries(data)
    .reduce(({ ingredients, measure }, act) => {
      if (act[0].includes('strIngredient') && act[1].length > 1) ingredients.push(act[1]);
      if (act[0].includes('strMeasure') && act[1].length > 1) measure.push(act[1]);
      return { ingredients: [...ingredients], measure: [...measure] };
    }, { ingredients: [], measure: [] });
  const arrayIngredientsPos0 = Object.entries(arrayIngredients)[0];
  const arrayIngredientsPos1 = Object.entries(arrayIngredients)[1];
  arrayIngredientsPos0[1].forEach((el, i) => results[el] = arrayIngredientsPos1[1][i]);
  return Object.entries(results);
};

export const filterIngredientsCockTails = (data) => {
  const results = {};
  const arrayIngredients = Object.entries(data)
    .reduce(({ ingredients, measure }, act) => {
      if (act[0].includes('strIngredient') && act[1] !== null) ingredients.push(act[1]);
      if (act[0].includes('strMeasure') && act[1] !== null) measure.push(act[1]);
      return { ingredients: [...ingredients], measure: [...measure] };
    }, { ingredients: [], measure: [] });
  const arrayIngredientsPos0 = Object.entries(arrayIngredients)[0];
  const arrayIngredientsPos1 = Object.entries(arrayIngredients)[1];
  arrayIngredientsPos0[1].forEach((el, i) => results[el] = arrayIngredientsPos1[1][i]);
  return Object.entries(results);
};

// const test = {
//   "idMeal": "52977",
//   "strMeal": "Corba",
//   "strDrinkAlternate": null,
//   "strCategory": "Side",
//   "strArea": "Turkish",
//   "strInstructions": "Pick through your lentils for any foreign debris,
//   "strMealThumb": "https://wwmeals/58oia61564916529.jpg",
//   "strTags": "Soup",
//   "strYoutube": "https://www.youtube.com/watch?v=VVnZd8A84z4",
//   "strIngredient1": "Lentils",
//   "strIngredient2": "Onion",
//   "strIngredient3": "Carrots",
//   "strIngredient4": "Tomato Puree",
//   "strIngredient5": "Cumin",
//   "strIngredient6": "Paprika",
//   "strIngredient7": "Mint",
//   "strIngredient8": "Thyme",
//   "strIngredient9": "Black Pepper",
//   "strIngredient10": "Red Pepper Flakes",
//   "strIngredient11": "Vegetable Stock",
//   "strIngredient12": "Water",
//   "strIngredient13": "Sea Salt",
//   "strIngredient14": "",
//   "strIngredient15": "",
//   "strIngredient16": "",
//   "strIngredient17": "",
//   "strIngredient18": "",
//   "strIngredient19": "",
//   "strIngredient20": "",
//   "strMeasure1": "1 cup ",
//   "strMeasure2": "1 large",
//   "strMeasure3": "1 large",
//   "strMeasure4": "1 tbs",
//   "strMeasure5": "2 tsp",
//   "strMeasure6": "1 tsp ",
//   "strMeasure7": "1/2 tsp",
//   "strMeasure8": "1/2 tsp",
//   "strMeasure9": "1/4 tsp",
//   "strMeasure10": "1/4 tsp",
//   "strMeasure11": "4 cups ",
//   "strMeasure12": "1 cup ",
//   "strMeasure13": "Pinch",
//   "strMeasure14": " ",
//   "strMeasure15": " ",
//   "strMeasure16": " ",
//   "strMeasure17": " ",
//   "strMeasure18": " ",
//   "strMeasure19": " ",
//   "strMeasure20": " ",
//   "strSource": "https://findingtimeforcooking.com/main-dishes/red-lentil-soup-corba/",
//   "dateModified": null
// }

// console.log(filterIngredients(test))

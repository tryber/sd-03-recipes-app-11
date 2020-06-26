// faz o fetch da Api Meal
export const searchMealsByName = (meal) => fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
  .then((response) => response.json()
  .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

export const searchAllMealsByFirstLetter = (letter) => fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
    .then((response) => response.json()
    .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

export const lookupFullMealDetailsById = (id) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((response) => response.json()
    .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

export const lookupSingleRandomMeal = () => fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((response) => response.json()
    .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

export const searchAllMealCategories = () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then((response) => response.json()
    .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

export const searchAllMealCategoriesDetails = () => fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    .then((response) => response.json()
    .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

export const searchAllAreas = () => fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
    .then((response) => response.json()
    .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

export const searchAllIngredientsDetails = () => fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
    .then((response) => response.json()
    .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

export const searchMealByMainIngredient = (ingredient) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then((response) => response.json()
    .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

export const searchMealByCategory = (category) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then((response) => response.json()
    .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

export const searchMealByArea = (area) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    .then((response) => response.json()
    .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

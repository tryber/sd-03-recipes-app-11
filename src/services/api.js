export const MealsApi = (urlRecebida) => {
  const url = `https://www.themealdb.com/api/json/v1/1/${urlRecebida}`;
  fetch(url)
    .then((response) => response.json()
      .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data))));
};

export const DrinksApi = (urlRecebida) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/${urlRecebida}`;
  fetch(url)
    .then((response) => response.json()
      .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data))));
};

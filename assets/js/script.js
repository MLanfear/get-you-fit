const url = ("https://api.api-ninjas.com/v1/recipe?query=");
  headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'X-Api-Key': '15098ea48cmsh2b43d6524135209p13664ejsnd412390146b4'

};


const meal_container = document.getElementById("meal");
const get_meal_btn = document.getElementById("search_recipes");

if (get_meal_btn) {
  get_meal_btn.addEventListener("click", () => {
    console.log('btn clicked');
  });
}

get_meal_btn.addEventListener("click", function() {
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      createMeal(res.meals[0]);
    })
    .catch(e => {
      console.warn(e);
    });
});

const createMeal = (meal) => {
  const ingredients = [];
  // Get all ingredients from the object. Up to 20
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    } else {
      // Stop if no more ingredients
      break;
    }
  }


};

function  get_meal(){
  return url,
  {
    method: "GET",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-Api-Key': '15098ea48cmsh2b43d6524135209p13664ejsnd412390146b4'
    },
  }
}
meal_container().then(response => console.log(response));




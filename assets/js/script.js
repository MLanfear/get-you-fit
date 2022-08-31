<<<<<<< HEAD
const url = ("https://api.api-ninjas.com/v1/recipe?query=");
  headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'X-Api-Key': '15098ea48cmsh2b43d6524135209p13664ejsnd412390146b4'
=======
<<<<<<< HEAD
const Food_chicken = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "5ed11fb8cfmsh44a3a48e404d3fbp11502cjsn56f496b4d96a",
        "X-RapidAPI-Host": "recipe-by-api-ninjas.p.rapidapi.com"
    }
};
fetch("https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=chicken&query=beef&query=vegan", Food_chicken)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
    const Workout = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "5ed11fb8cfmsh44a3a48e404d3fbp11502cjsn56f496b4d96a",
            "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com"
        }
    };
    fetch("https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=biceps", Workout)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
window.$ = jQuery
=======
const search_recipe_btn = document.getElementById("search_recipes");
const meal_container = document.getElementById("meal")
>>>>>>> 9aa4cd16d182dd2bd86fe8d61431033b36b22db9

};


<<<<<<< HEAD
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



=======
    const Workout = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5ed11fb8cfmsh44a3a48e404d3fbp11502cjsn56f496b4d96a',
            'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=biceps', Workout)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
>>>>>>> a617fe60209a1c8c4f62e0f1e214870321509ba4
>>>>>>> 9aa4cd16d182dd2bd86fe8d61431033b36b22db9

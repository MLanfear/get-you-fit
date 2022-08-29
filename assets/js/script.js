const search_recipe_btn = document.getElementById("search_recipes");
const meal_container = document.getElementById("meal")


search_recipe_btn.addEventListener('click', () => {
	fetch('https://www.themealdb.com/api/json/v1/1/random.php')
		.then(res => res.json())
		.then(res => {
			createMeal(res.meals[0]);
		})
		.catch(e => {
			console.warn(e);
		});
});

var createMeal = meal => {
	const ingredients = [];

	// Get all ingredients from the object. Up to 20
	for (let i = 1; i <= 20; i++) {
		if (meal[`strIngredient${i}`]) {
			ingredients.push(
				`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
			);
		} else {
			// Stop if there are no more ingredients
			break;
		}
	}
}
var Food_chicken = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5ed11fb8cfmsh44a3a48e404d3fbp11502cjsn56f496b4d96a',
		'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=chicken&query=beef&query=vegan', Food_chicken)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

    var Workout = {
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

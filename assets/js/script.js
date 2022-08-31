const recipeInput = document.getElementById("meal")
const butn = document.getElementById("search_recipes")









butn.addEventListener('click', () => {
	fetch('https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=beef', foodRecipe)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
});
console.log("search-results")

var foodRecipe = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5ed11fb8cfmsh44a3a48e404d3fbp11502cjsn56f496b4d96a',
		'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
	}
};

const li = document.querySelector("div.card input[list-group-item]");


	

        
        
        
        
var Workout = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5ed11fb8cfmsh44a3a48e404d3fbp11502cjsn56f496b4d96a',
      'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
      }
    };
    
    fetch('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?', Workout)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));



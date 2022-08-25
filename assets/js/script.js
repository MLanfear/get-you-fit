












const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=biceps",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "15098ea48cmsh2b43d6524135209p13664ejsnd412390146b4",
		"X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com"
	}
};
    console.log(settings);


$.ajax(settings).done(function (response) {
	console.log(response);
});

//SEARCH APIS

const options = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByNutrients?limitLicense=false&minProtein=0&minVitaminC=0&minSelenium=0&maxFluoride=50&maxVitaminB5=50&maxVitaminB3=50&maxIodine=50&minCarbs=0&maxCalories=250&minAlcohol=0&maxCopper=50&maxCholine=50&maxVitaminB6=50&minIron=0&maxManganese=50&minSodium=0&minSugar=0&maxFat=20&minCholine=0&maxVitaminC=50&maxVitaminB2=50&minVitaminB12=0&maxFolicAcid=50&minZinc=0&offset=0&maxProtein=100&minCalories=0&minCaffeine=0&minVitaminD=0&maxVitaminE=50&minVitaminB2=0&minFiber=0&minFolate=0&minManganese=0&maxPotassium=50&maxSugar=50&maxCaffeine=50&maxCholesterol=50&maxSaturatedFat=50&minVitaminB3=0&maxFiber=50&maxPhosphorus=50&minPotassium=0&maxSelenium=50&maxCarbs=100&minCalcium=0&minCholesterol=0&minFluoride=0&maxVitaminD=50&maxVitaminB12=50&minIodine=0&maxZinc=50&minSaturatedFat=0&minVitaminB1=0&maxFolate=50&minFolicAcid=0&maxMagnesium=50&minVitaminK=0&maxSodium=50&maxAlcohol=50&maxCalcium=50&maxVitaminA=50&maxVitaminK=50&minVitaminB5=0&maxIron=50&minCopper=0&maxVitaminB1=50&number=10&minVitaminA=0&minPhosphorus=0&minVitaminB6=0&minFat=5&minVitaminE=0",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "15098ea48cmsh2b43d6524135209p13664ejsnd412390146b4",
		"X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
};

$.ajax(options).done(function (response) {
	console.log(response);
});

const ingredients = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=apples%2Cflour%2Csugar&number=5&ignorePantry=true&ranking=1",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "15098ea48cmsh2b43d6524135209p13664ejsnd412390146b4",
		"X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
};

$.ajax(ingredients).done(function (response) {
	console.log(response);
});

const information = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/479101/information",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "15098ea48cmsh2b43d6524135209p13664ejsnd412390146b4",
		"X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
};

$.ajax(information).done(function (response) {
	console.log(response);
});

const bulk = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk?ids=456%2C987%2C321",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "15098ea48cmsh2b43d6524135209p13664ejsnd412390146b4",
		"X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
};

$.ajax(bulk).done(function (response) {
	console.log(response);
});

const similar = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/156992/similar",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "15098ea48cmsh2b43d6524135209p13664ejsnd412390146b4",
		"X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
};

$.ajax(similar).done(function (response) {
	console.log(response);
});

const random = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=vegetarian%2Cdessert&number=1",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "15098ea48cmsh2b43d6524135209p13664ejsnd412390146b4",
		"X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
};

$.ajax(random).done(function (response) {
	console.log(response);
});

const autocomplete = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/autocomplete?query=chicken&number=10",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "15098ea48cmsh2b43d6524135209p13664ejsnd412390146b4",
		"X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
};

$.ajax(autocomplete).done(function (response) {
	console.log(response);
});

const taste = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/69095/tasteWidget.json?normalize=false",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "15098ea48cmsh2b43d6524135209p13664ejsnd412390146b4",
		"X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
};

$.ajax(taste).done(function (response) {
	console.log(response);
});

const equipment = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/1003464/equipmentWidget.json",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "15098ea48cmsh2b43d6524135209p13664ejsnd412390146b4",
		"X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
};

$.ajax(equipment).done(function (response) {
	console.log(response);
});

const breakdown = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/1003464/priceBreakdownWidget.json",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "15098ea48cmsh2b43d6524135209p13664ejsnd412390146b4",
		"X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
};

$.ajax(breakdown).done(function (response) {
	console.log(response);
});

const ingId = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/1003464/ingredientWidget.json",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "15098ea48cmsh2b43d6524135209p13664ejsnd412390146b4",
		"X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
};

$.ajax(ingId).done(function (response) {
	console.log(response);
});

const nutId = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/1003464/nutritionWidget.json",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "15098ea48cmsh2b43d6524135209p13664ejsnd412390146b4",
		"X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
};

$.ajax(nutId).done(function (response) {
	console.log(response);
});

const analyzerecipe = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/324694/analyzedInstructions?stepBreakdown=true",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "15098ea48cmsh2b43d6524135209p13664ejsnd412390146b4",
		"X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
};

$.ajax(analyzerecipe).done(function (response) {
	console.log(response);
});

const extract = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/extract?url=http%3A%2F%2Fwww.melskitchencafe.com%2Fthe-best-fudgy-brownies%2F",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "15098ea48cmsh2b43d6524135209p13664ejsnd412390146b4",
		"X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
};

$.ajax(extract).done(function (response) {
	console.log(response);
});


const summarize = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/4632/summary",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "15098ea48cmsh2b43d6524135209p13664ejsnd412390146b4",
		"X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
};

$.ajax(summarize).done(function (response) {
	console.log(response);
});

const recipeInstructions = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/analyzeInstructions",
	"method": "POST",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"X-RapidAPI-Key": "15098ea48cmsh2b43d6524135209p13664ejsnd412390146b4",
		"X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	},
	"data": {
		"instructions": "Put the garlic in a pan and then add the onion."
	}
};

$.ajax(recipeInstructions).done(function (response) {
	console.log(response);
});

const classify = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/cuisine",
	"method": "POST",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"X-RapidAPI-Key": "15098ea48cmsh2b43d6524135209p13664ejsnd412390146b4",
		"X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	},
	"data": {
		"ingredientList": "3 oz pork shoulder",
		"title": "Pork roast with green beans"
	}
};

$.ajax(classify).done(function (response) {
	console.log(response);
});

const recipequery = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/queries/analyze?q=salmon%20with%20fusilli%20and%20no%20nuts",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "15098ea48cmsh2b43d6524135209p13664ejsnd412390146b4",
		"X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
};

$.ajax(recipequery).done(function (response) {
	console.log(response);
});

const dish = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/guessNutrition?title=Spaghetti%20Aglio%20et%20Olio",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "15098ea48cmsh2b43d6524135209p13664ejsnd412390146b4",
		"X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
};

$.ajax(dish).done(function (response) {
	console.log(response);
});

// INGREDIENTS

const ingredientsearch = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/search?query=yogurt&addChildren=true&minProteinPercent=5&maxProteinPercent=50&minFatPercent=1&maxFatPercent=10&minCarbsPercent=5&maxCarbsPercent=30&metaInformation=false&intolerances=egg&sort=calories&sortDirection=asc&offset=0&number=10",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "15098ea48cmsh2b43d6524135209p13664ejsnd412390146b4",
		"X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
};

$.ajax(ingredientsearch).done(function (response) {
	console.log(response);
});

const getinfo = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/search?query=yogurt&addChildren=true&minProteinPercent=5&maxProteinPercent=50&minFatPercent=1&maxFatPercent=10&minCarbsPercent=5&maxCarbsPercent=30&metaInformation=false&intolerances=egg&sort=calories&sortDirection=asc&offset=0&number=10",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "15098ea48cmsh2b43d6524135209p13664ejsnd412390146b4",
		"X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
};

$.ajax(getinfo).done(function (response) {
	console.log(response);
});

const parse = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/parseIngredients",
	"method": "POST",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"X-RapidAPI-Key": "15098ea48cmsh2b43d6524135209p13664ejsnd412390146b4",
		"X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	},
	"data": {
		"ingredientList": "3 oz pork shoulder",
		"servings": "2"
	}
};

$.ajax(parse).done(function (response) {
	console.log(response);
});

window.$ = jQuery
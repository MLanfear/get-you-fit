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

const options = {
	"async": true,
	"crossDomain": true,
	"url": "https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=italian%20wedding%20soup",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "15098ea48cmsh2b43d6524135209p13664ejsnd412390146b4",
		"X-RapidAPI-Host": "recipe-by-api-ninjas.p.rapidapi.com"
	}
};

$.ajax(options).done(function (response) {
	console.log(response);
});


window.$ = jQuery
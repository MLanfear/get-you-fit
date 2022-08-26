var query = 'italian wedding soup'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/recipe?query=' + query,
    headers: { 'X-Api-Key': '+x5KWFt82vHMdy+BPrBIbw==VMmRfElnZsH4wS9Q'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

var muscle = 'biceps'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle,
    headers: { 'X-Api-Key': '+x5KWFt82vHMdy+BPrBIbw==VMmRfElnZsH4wS9Q'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});














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


window.$ = jQuery
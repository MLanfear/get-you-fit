//$(document).ready(function () {


	function getRecipeAPI () {
		var queryURL2 = "https://api.api-ninjas.com/v1/recipe?query=" + "+x5KWFt82vHMdy+BPrBIbw==VMmRfElnZsH4wS9Q";
		$.ajax({
			url:queryURL2,
			method: "GET"
		
			}).then(function(reponse){
				console.log(response);
			})
	}





	var query = 'chicken'
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
		success: function(results) {
			console.log(results);
		},
		error: function ajaxError(jqXHR) {
			console.error('Error: ', jqXHR.responseText);
		}
	});

//});
window.$ = jQuery
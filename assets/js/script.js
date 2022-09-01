const recipeInputEl = document.getElementById("meal");
const butnEl = document.getElementById("search_recipes");


const element = document.createElement('li');


element.textContent = recipeInputEl
//element.appendChild(recipeInputEl);

const container = document.querySelector('.container-to-put-the-items');
//container.appendChild(element);
//const searchFormEl = document.querySelector("#search-form");
//const recipeInputEl = document.querySelector("#recipe-input");
//
//
//var formSubmitHandler = function(event) {
//  event.preventDefault();
//  console.log(event);
//}
//
//searchFormEl.addEventListener("submit", formSubmitHandler);
//
////
var foodRecipe = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '15098ea48cmsh2b43d6524135209p13664ejsnd412390146b4',
    'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
  }
};
//
//
//
//
//
//
//
//
//var getTitleName = function() {
//  var queryString = document.location.search;
//  var titleName = queryString.split("=")[1];
//  if (titleName) {
//    repoNameEl.textContent = titleName;
//  } else {
//    document.location.replace('./index.html');
//  }
//};
butnEl.addEventListener('click', () => {
  var query = recipeInputEl.value;
  fetch('https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=' + query, foodRecipe)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
});

butnEl.appendChild(element)

  

//fetch ('https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=title')
//  .then(function() {
//  })
//  .catch(function() {
//  });






// butn.querySelector(".meal").appendChild(paragraph);
//
//const li = document.querySelector("div.card input[list-group-item]");
//
//
//  
//
//        
//        
//        
//        
//const Workout = {
//    method: 'GET',
//    headers: {
//      'X-RapidAPI-Key': '15098ea48cmsh2b43d6524135209p13664ejsnd412390146b4',
//      'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
//      }
//};
//    
//
//butn.addEventListener('click', function() {
//  fetch('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?', Workout) 
//  .then(response => response.json())
//  .then(response => console.log(response))
//  .catch(err => console.error(err));
//});
//
//async function postData(url = '', data = {}) {
//  const response = await fetch(url, {
//    method: 'POST',
//    mode: 'cors',
//    cache: 'no-cache',
//    credentials: 'same-origin',
//    headers: {
//      'Content-Type': 'application/json'
//    },
//    redirect: 'follow',
//    referrerPolicy: 'no-referrer',
//    body: JSON.stringify(data)
//  });
//}
//




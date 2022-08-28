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
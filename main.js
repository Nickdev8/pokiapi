const pokeminImage = document.getElementById('js--pokemon-image');
const catchButton = document.getElementById('js--catch-button');
const pokemonText = document.getElementById('js--pokemon-text');
let randomNum = Math.floor(Math.random() * 250 + 1);

let pokemon = fetch('https://pokeapi.co/api/v2/pokemon/' + randomNum)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        pokeminImage.src = data.sprites.front_default;
        return data;
    })
    .catch(function (error) {
        console.log(error);
    });

catchButton.onclick = function () {
    let catchNum = Math.floor(Math.random() * 2);
    if (catchNum === 0) {
        pokemonText.innerHTML = 'You caught the Pokemon!';
        catchButton.disabled = true;
    }
    else {
        pokemonText.innerHTML = 'The Pokemon ran away!';
        catchButton.disabled = true;
    }
};



const movietitle = document.getElementById('js--movie-title');
const movietext = document.getElementById('js--movie-text');
const movieimg = document.getElementById('js--movie-image');

let movie = fetch('https://api.tvmaze.com/search/shows?q=' + 'flint the time detective')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data[0].show);
        movietitle.innerHTML = data[0].show.name;
        movietext.innerHTML = data[0].show.summary;
        movieimg.src = data[0].show.image.medium;
        return data;
    })
    .catch(function (error) {
        console.log(error);
    });
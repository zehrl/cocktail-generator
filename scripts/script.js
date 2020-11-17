// Global Variables
var currentTemp; // Fahrenheit 

// Moment.js https://momentjs.com/docs/#/displaying/
var time = {
    hour: moment().format("H"), // 0 to 24 (military)
    minute: moment().format("m")
};

// Geolocation API
var geolocationOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function getGeolocation(pos) {
    console.log(pos);

    var crd = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    console.log(`------------------------------------`);

    getWeather(crd.longitude, crd.latitude);

}

function geolocationError(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

// Weather API https://openweathermap.org/current
function getWeather(longitude, latitude) {
    var apikey = "279ad54354e9b294cca24c90d19796a2";
    var units = "imperial";  // Displays fahrenheit

    var settings = {
        "url": `https://api.openweathermap.org/data/2.5/weather?lat=${latitude.toString()}&lon=${longitude.toString()}&units=${units}&appid=${apikey}`,
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).done(function (response) {
        currentTemp = response.main.temp;
        displayData();
    });

}

// Cocktaildb API https://www.thecocktaildb.com/api.php
function getCocktail(cocktailName) {

    cocktailName = cocktailName.replace(" ", "%");
    console.log(`cocktailName = ${cocktailName}`);
    var cocktail = {};
    var apikey = "1";

    var settings = {
        "url": `https://www.thecocktaildb.com/api/json/v1/${apikey}/search.php?s=${cocktailName}`,
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).done(function (response) {

        cocktail.instructions = response.drinks[0].strInstructions;
        console.log(`response = `, cocktail)
    });

}

// Calls
navigator.geolocation.getCurrentPosition(getGeolocation, geolocationError, geolocationOptions);
var cocktail = getCocktail("");

function displayData() {
    console.log(`Current Hour = ${time.hour}`);
    console.log(`Current Minute = ${time.minute}`);
    console.log(`Current Temperature = ${currentTemp}`);
    console.log(cocktail);
}

var filteredCocktails = [];

function getRandomDrinks(filteredCocktails) {
    // select 5 random items from the filteredCocktails array
    var recommendedDrinks = [];

    for (var i = 0; i < 5; i++) {
        var m = Math.floor(Math.random() * filteredCocktails.length);
        recommendedDrinks.push(filteredCocktails[m]);

        // excludes repeated values
        filteredCocktails.splice(m, 1);
    }

    return recommendedDrinks;
}

getRandomDrinks(filteredCocktails);
console.log(recommendedDrinks);
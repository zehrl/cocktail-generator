// ----- Logan's Code ----- :)

// Global Variables
var currentTemp; // Fahrenheit

// Moment.js API https://momentjs.com/docs/#/displaying/
var time = moment().format("HHmm") // 0130-2359 (12:00am - 11:59pm)

// Geolocation API
var geolocationOptions = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
};

function getGeolocation(pos) {
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
    var units = "imperial";

    var settings = {
        "url": `https://api.openweathermap.org/data/2.5/weather?lat=${latitude.toString()}&lon=${longitude.toString()}&units=${units}&appid=${apikey}`,
        "method": "GET",
    };

    $.ajax(settings).done(function (response) {
        currentTemp = response.main.temp;
        console.log(`Current Temp = ${currentTemp}`)
    });

}

// Cocktaildb API https://www.thecocktaildb.com/api.php
function getCocktail(cocktailID) {
    var apikey = "1";

    var settings = {
        "url": `https://www.thecocktaildb.com/api/json/v1/${apikey}/lookup.php?i=${cocktailID}`,
        "method": "GET",
    };
    console.log(settings);
    $.ajax(settings).done(function (response) {
        console.log(`response = `, response)
        return response;
    });

}

// Calls
navigator.geolocation.getCurrentPosition(getGeolocation, geolocationError, geolocationOptions); //Weather

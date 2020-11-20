// global variable declarations
var currentTemp; // Fahrenheit
var userTemp; 
var userTime;
var filteredCocktails = []; 
var recommendedDrinks = [];
var cocktailObjects = [];

// unique cocktail variables, which contain information on drink IDs as well as best temperature and time to drink 
var Americano = {
    drinkID: ["15941"],
    temperature: "LH, WM",
    time: "EM, LM"
}

var Aviation = {
    drinkID: ["17180"],
    temperature: "LH, WM",
    time: "EA, LA, EV, NT"
}

var Beach = {
    drinkID: ["12474", "12754", "15200"],
    temperature: "HH, LH, WM",
    time: "EM, LM, EA LA"
}

var BeesKnees = {
    drinkID: ["178317"],
    temperature: "LH, WM",
    time: "LM, EA LA"
}

var Bellini = {
    drinkID: ["17195"],
    temperature: "HH, LH, WM",
    time: "EM, LM, EA"
}

var BlackThorn = {
    drinkID: ["11106"],
    temperature: "LH, WM",
    time: "LM, EA, LA"
}

var BloodyMary = {
    drinkID: ["11113"],
    temperature: "LH, WM, BR",
    time: "EM, LM"
}

var BoraBora = {
    drinkID: ["12572"],
    temperature: "HH, LH, WM",
    time: "EM, LM, EA"
}

var Boxcar = {
    drinkID: ["11149"],
    temperature: "LH, WM",
    time: "LM, EA, LA, EV, NT"
}

var Bramble = {
    drinkID: ["17210"],
    temperature: "LH, WM",
    time: "EA, LA"
}

var CorpseRiver2 = {
    drinkID: ["17250"],
    temperature: "LH, WM, BR, CD",
    time: "EM, LM, EA"
}

var Cosmopolitan = {
    drinkID: ["17196"],
    temperature: "LH, WM",
    time: "EA, LA, EV"
}

var CubaLibre = {
    drinkID: ["11288"],
    temperature: "HH, LH, WM",
    time: "EA, LA, EV"
}

var DarkNStormy = {
    drinkID: ["17211"],
    temperature: "HH, LH, WM",
    time: "LA, EV, NT"
}

var Derby = {
    drinkID: ["17187"],
    temperature: "LH, WM",
    time: "EA, LA, EV"
}

var FlyingDutchman = {
    drinkID: ["11368"],
    temperature: "WM, BR, CD",
    time: "LA, EV, NT"
}

var FlyingScotchman = {
    drinkID: ["11369"],
    temperature: "WM, BR, CD",
    time: "LA, EV, NT"
}

var French75 = {
    drinkID: ["17197"],
    temperature: "LH, WM",
    time: "LM, EA, LA, EV"
}

var FrenchConnection = {
    drinkID: ["17198"],
    temperature: "WM, BR",
    time: "LA, EV, NT"
}

var Gimlet = {
    drinkID: ["17255"],
    temperature: "WM, BR",
    time: "LA, EV, NT"
}

var GinRickey = {
    drinkID: ["17230"],
    temperature: "HH, LH, WM",
    time: "LM, EA, LA"
}

var Gluehwein = {
    drinkID: ["12944"],
    temperature: "BR, CD",
    time: "LA, EV, NT"
}

var Greyhound = {
    drinkID: ["17252"],
    temperature: "LH, WM",
    time: "LM, EA, LA"
}

var Hemingway = {
    drinkID: ["17201"],
    temperature: "HH, LH",
    time: "EA, LA, EV"
}

var Hot = {
    drinkID: ["17201"],
    temperature: "BR, CD",
    time: "LA, EV, NT"
}

var IrishCream = {
    drinkID: ["12820"],
    temperature: "BR, CD",
    time: "LA, EV, NT"
}

var IrishSpring = {
    drinkID: ["11528"],
    temperature: "HH, LH, WM",
    time: "LM, EA, LA"
}

var IrishRussian = {
    drinkID: ["17015"],
    temperature: "WM, BR",
    time: "LA, EV, NT"
}

var Jitterbug = {
    drinkID: ["16178"],
    temperature: "HH, LH, WM",
    time: "LM, EA, LA"
}

var KentuckyColonel = {
    drinkID: ["11604"],
    temperature: "WM, BR",
    time: "EA, LA, EV, NT"
}

var LemonDrop = {
    drinkID: ["14366"],
    temperature: "WM, BR",
    time: "LA, EV, NT"
}

var LongIslandIcedTea = {
    drinkID: ["17204"],
    temperature: "LH, WM",
    time: "LA, EV, NT"
}

var MaiTai = {
    drinkID: ["11690"],
    temperature: "HH, LH, WM",
    time: "EA, LA, EV"
}

var Manhattan = {
    drinkID: ["11008"],
    temperature: "WM, BR",
    time: "LA, EV, NT"
}

var Mimosa = {
    drinkID: ["17205"],
    temperature: "LH, WM",
    time: "EM, LM, EA, LA"
}

var MulledWine = {
    drinkID: ["12988"],
    temperature: "BR, CD",
    time: "EV, NT"
}

var OldFashioned = {
    drinkID: ["11001"],
    temperature: "WM, BR",
    time: "LA, EV, NT"
}

var PinaColada = {
    drinkID: ["17207"],
    temperature: "HH, LH",
    time: "LM, EA, LA"
}

var QueenElizabeth = {
    drinkID: ["11991"],
    temperature: "WM, BR",
    time: "LA, EV, NT"
}

var Quentin = {
    drinkID: ["11993"],
    temperature: "WM, BR",
    time: "LA, EV, NT"
}

var quickSand = {
    drinkID: ["15761"],
    temperature: "WM, BR",
    time: "LA, EV, NT"
}

var WhiteRussian = {
    drinkID: ["12528"],
    temperature: "WM, BR",
    time: "LA, EV, NT"
}

var BlackRussian = {
    drinkID: ["11102"],
    temperature: "LH, WM",
    time: "EV, NT"
}

var SaltyDog = {
    drinkID: ["12107"],
    temperature: "HH, LH",
    time: "LM, EA, LA"
}

var Sazerac = {
    drinkID: ["12127"],
    temperature: "WM, BR",
    time: "LA, EV, NT"
}

var SeaBreeze = {
    drinkID: ["13377"],
    temperature: "LH, WM",
    time: "EA, LA, EV, NT"
}

var Philosopher = {
    drinkID: ["178330"],
    temperature: "LH, WM",
    time: "EA, LA, EV, NT"
}

var Toddy = {
    drinkID: ["12097"],
    temperature: "BR, CD",
    time: "LA, EV, NT"
}

var Vesper = {
    drinkID: ["17218"],
    temperature: "WM, BR",
    time: "LA, EV, NT"
}

var Zombie = {
    drinkID: ["17241"],
    temperature: "HH, LH, WM, BR",
    time: "EA, LA, EV"
}

var Zorro = {
    drinkID: ["15328"],
    temperature: "BR, CD",
    time: "EV, NT"
}

var Cocktail = {
    drinkID: ["11010", "11011", "11013", "11019", "11022", "11121", "11255", "11227", "11326", "11339", "11470", "11472", "11476", "11542", "11664", "11720", "11959", "11963", "11983", "11985", "12186", "12198", "12224", "12418", "12420", "12434", "12706", "17229", "17834", "17838", "17256"],
    temperature: "LH, WM, BR",
    time: "LM, EA, LA, EV"
}

var HotCoffee = {
    drinkID: ["12764", "13971", "14860", "15521", "15825", "16082", "16951"],
    temperature: "BR, CD",
    time: "EM, LM, NT"
}

var IcedCoffee = {
    drinkID: ["12772", "12798", "12800"],
    temperature: "LH, WM",
    time: "EM, LM, NT"
}

var Collins = {
    drinkID: ["11580", "12402", "178341"],
    temperature: "HH, LH, WM",
    time: "LM, EA, LA"
}

var Cooler = {
    drinkID: ["11407", "11666", "12071", "13056", "17167"],
    temperature: "HH, LH, WM",
    time: "LM, EA, LA"
}

var Cooler = {
    drinkID: ["11407", "11666", "12071", "13056", "17167"],
    temperature: "HH, LH, WM",
    time: "LM, EA, LA"
}

var Daiquiri = {
    drinkID: ["11006", "11064", "11387", "11390", "11391", "12316"],
    temperature: "HH, LH, WM",
    time: "LM, EA, LA"
}

var EggNog = {
    drinkID: ["12188", "12910", "12916"],
    temperature: "BR, CD",
    time: "EV, NT"
}

var Espresso = {
    drinkID: ["17212", "178309"],
    temperature: "WM, BR",
    time: "EM, LM, EV, NT"
}

var Fizz = {
    drinkID: ["11242", "11410", "11524", "11558", "11634", "12055", "12057", "12362", "16967", "178321"],
    temperature: "HH, LH, WM",
    time: "LM, EA, LA, EV"
}

var Flip = {
    drinkID: ["11164", "11965", "12190", "17192"],
    temperature: "WM, BR, CD",
    time: "EV, NT"
}

var Julep = {
    drinkID: ["178333", "17206"],
    temperature: "HH, LH, WM",
    time: "EA, LA, EV"
}

var Lady = {
    drinkID: ["11050", "11375", "11670", "11938", "17194"],
    temperature: "LH, WM",
    time: "EA, LA, EV, NT"
}

var Martini = {
    drinkID: ["11728", "17181", "14167"],
    temperature: "WM, BR",
    time: "LA, EV, NT"
}

var Mojito = {
    drinkID: ["11000", "15841", "178336"],
    temperature: "HH, LH, WM",
    time: "EA, LA, EV, NT"
}

var Mule = {
    drinkID: ["11009", "178315"],
    temperature: "HH, LH, WM",
    time: "LA, EV, NT"
}

var Negroni = {
    drinkID: ["11003", "17248", "178340"],
    temperature: "HH, LH, WM",
    time: "LA, EV, NT"
}

var Paloma = {
    drinkID: ["17253", "178327", "178335"],
    temperature: "HH, LH, WM",
    time: "LM, EA, LA, EV"
}

var Punch = {
    drinkID: ["11786", "12087", "12870", "13058", "14364", "14978", "15849", "17182", "17191", "17214", "178312", "178329"],
    temperature: "HH, LH",
    time: "LM, EA, LA, EV"
}

var Sangria = {
    drinkID: ["13020", "13024", "13026"],
    temperature: "WM, BR, CD",
    time: "LA, EV, NT"
}

var Screwdriver = {
    drinkID: ["12162", "12091"],
    temperature: "HH, LH, WM",
    time: "EM, LM, EA, LA"
}

var Shake = {
    drinkID: ["14510", "15194", "15951"],
    temperature: "HH, LH, WM",
    time: "EM, LM, EA"
}

var Sidecar = {
    drinkID: ["11128", "12196", "12198"],
    temperature: "LH, WM",
    time: "LA, EV, NT"
}

var Sling = {
    drinkID: ["11146", "11415", "12214", "14482"],
    temperature: "LH, WM",
    time: "EA, LA, EV, NT"
}

var Smash = {
    drinkID: ["11129", "11147", "11170", "11382", "11417", "11844", "12093", "12158", "12308", "12370", "11004", "13214", "13731", "14306", "16100", "17005"],
    temperature: "HH, LH, WM",
    time: "EA, LA, EV, NT"
}

var Sour = {
    drinkID: ["11129", "11147", "11170", "11382", "11417", "11844", "12093", "12158", "12308", "12370", "11004", "13214", "13731", "14306", "16100", "17005"],
    temperature: "HH, LH, WM",
    time: "EA, LA, EV, NT"
}

var Sunrise = {
    drinkID: ["13621", "14578"],
    temperature: "LH, WM",
    time: "EM, LM, EA"
}

var Tonic = {
    drinkID: ["11403", "12460"],
    temperature: "HH, LH, WM",
    time: "LM, EA, LA, EV"
}

// store all unique cocktail variables into a master array of cocktails 
var cocktails = [Americano, Aviation, Beach, BeesKnees, Bellini, BlackThorn, BloodyMary, BoraBora, Boxcar, Bramble, CorpseRiver2, Cosmopolitan, CubaLibre, DarkNStormy, Derby, FlyingDutchman, FlyingScotchman, French75, FrenchConnection, Gimlet, GinRickey, Gluehwein, Greyhound, Hemingway, Hot, IrishCream, IrishSpring, IrishRussian, Jitterbug, KentuckyColonel, LemonDrop, LongIslandIcedTea, MaiTai, Manhattan, Mimosa, MulledWine, OldFashioned, PinaColada, QueenElizabeth, Quentin, quickSand, BlackRussian, WhiteRussian, SaltyDog, Sazerac, SeaBreeze, Philosopher, Toddy, Vesper, Zombie, Zorro, Cocktail, HotCoffee, IcedCoffee, Collins, Cooler, Daiquiri, EggNog, Espresso, Fizz, Flip, Julep, Lady, Martini, Mojito, Mule, Negroni, Paloma, Punch, Sangria, Screwdriver, Shake, Sidecar, Sour, Sunrise, Tonic];

// Determine User's current time via Moment.js API https://momentjs.com/docs/#/displaying/
var time = moment().format("HHmm") // 0130-2359 (12:00am - 11:59pm)
console.log("Your current time is " + time);
console.log(`------------------------------------`);

// Determine User's longtitude and latitude coordinates via Geolocation API
var geolocationOptions = {
    enableHighAccuracy: true,
    timeout: 1000000000,
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

// $("#SearchBtn").on("click", "button", getWeather, getGeolocation);


// Determine User's temperature via Weather API https://openweathermap.org/current
function getWeather(longitude, latitude) {
    var apikey = "279ad54354e9b294cca24c90d19796a2";
    var units = "imperial";  // Displays fahrenheit

    var settings = {
        "url": `https://api.openweathermap.org/data/2.5/weather?lat=${latitude.toString()}&lon=${longitude.toString()}&units=${units}&appid=${apikey}`,
        "method": "GET",
    };

    $.ajax(settings).done(function (response) {
        currentTemp = response.main.temp;
        console.log(`Current Temp = ${currentTemp}`)
        categorizeTemp();
        categorizeTime();
        filterCocktails();
        displayCocktails();
    });
}

function displayData() {
    console.log(`Current Hour = ${time.hour}`);
    console.log(`Current Minute = ${time.minute}`);
    console.log(`Current Temperature = ${currentTemp}`);
    console.log(cocktail);
}

// Translate User Temperature into one of the 5 distinct categories
function categorizeTemp() {
    if (currentTemp>=85) {
        userTemp = "HH"; // Category: High Heat, 85+ degrees 
    }
    else if ((currentTemp>=70)&&(currentTemp<85)){
        userTemp = "LH"; // Category: Low Heat, 70-85 degrees 
    }
    else if ((currentTemp>=60)&&(currentTemp<70)){
        userTemp = "WM"; // Category: Warm, 60-70 degrees 
    }
    else if ((currentTemp>=45)&&(currentTemp<60)){
        userTemp = "BR"; // Category: Brisk, 45-60 degrees 
    }
    else {
        userTemp = "CD"; // Category: Cold, under 45 degrees
    }
    console.log("------------------------------------")
    console.log("Temperature category: " + userTemp);
}

// Translate User Time into one of the 5 distinct categories
function categorizeTime() {
    if ((time>=600)&&(time<=859)) {
        userTime = "EM"; // Category: Early Morning
    }
    else if ((time>=900)&&(time<=1159)) {
        userTime = "LM"; // Category: Late Morning
    }
    else if ((time>=1200)&&(time<=1459)) {
        userTime = "EA"; // Category: Early Afternoon
    }
    else if ((time>=1500)&&(time<=1759)) {
        userTime = "LA"; // Category: Late Afternoon
    }
    else if ((time>=1800)&&(time<=2200)) {
        userTime = "EV"; // Category: Evening
    }
    else {
        userTime = "NT"; // Category: Night Time
    }
    console.log("Time category: " + userTime);
    console.log("------------------------------------")
}

// Filter out cocktails based on User's location's temperature and time; push drink ID information into a separate array
function filterCocktails() {
    for (let i = 0; i < cocktails.length; i++) {
        if ((cocktails[i].temperature.includes(userTemp)) && (cocktails[i].time.includes(userTime))) {
            for (let j = 0; j < cocktails[i].drinkID.length; j++) {
                filteredCocktails.push(cocktails[i].drinkID[j]);
            }
        }
    }
    console.log("List of possible drink IDs: " + filteredCocktails);    
    getRandomDrinks(filteredCocktails);
}

// Select 4 random cocktails from filteredCocktails array
function getRandomDrinks() {
    for (var i = 0; i < 4; i++) {
        var m = Math.floor(Math.random() * filteredCocktails.length);
        recommendedDrinks.push(filteredCocktails[m]);
        // exclude repeated values
        filteredCocktails.splice(m, 1);
    }
    console.log("List of selected drink IDs: " + recommendedDrinks);
    return recommendedDrinks;
}

// Cocktaildb API https://www.thecocktaildb.com/api.php
// feed drink ID from recommendedDrinks to API to get objects
async function getCocktail(cocktailID) {
    var apikey = "1";

    var settings = {
        "url": `https://www.thecocktaildb.com/api/json/v1/${apikey}/lookup.php?i=${cocktailID}`,
        "method": "GET",
    };
    
    hello=await $.ajax(settings).done(function (response) {
        return response;
    });
    return hello;
}

function displayCocktails() {
    for (let i = 0; i < recommendedDrinks.length; i++) {
        cocktailID = recommendedDrinks[i];
        getCocktail(cocktailID).then((bread)=>{cocktailObjects.push(bread)
            var name = bread.drinks[0].strDrink;
            var imageURL = bread.drinks[0].strDrinkThumb;
            $(`#card-result-name-${i}`).text(bread.drinks[0].strDrink);
            $(`#card-result-url-${i}`).attr("src", bread.drinks[0].strDrinkThumb);
    
            console.log("Drink Name: " + name + ", Image URL: " + imageURL);
            // set the card result to local storage by passing cocktailDB object from API and the card result name
            resultToLocalStorage(bread, `cardResult${i+1}`);
        });
    }
}

function resultToLocalStorage(cocktailDBObject, idName) {    
    // pull name
    var cocktailName = cocktailDBObject.drinks[0].strDrink;

    // pull url
    var cocktailImageUrl = cocktailDBObject.drinks[0].strDrinkThumb;

    // pull glass
    var glass = cocktailDBObject.drinks[0].strGlass;

    // pull instructions
    var instructions = cocktailDBObject.drinks[0].strInstructions;

    // pull ingredients
    var ingredientsArray = [];
    for (let i = 1; i <= 15; i++) {
        var ingredient = cocktailDBObject.drinks[0][`strIngredient${i}`];
        if (ingredient !== null) {
            ingredientsArray.push(ingredient);
        }
    }

    // pull measurements
    var measurementsArray = [];
    for (let i = 1; i <= ingredientsArray.length; i++) {
        var measurement = cocktailDBObject.drinks[0][`strMeasure${i}`];
        measurementsArray.push(measurement);
    }

    // create results object to set in local storage
    var results = {
        cocktailName: cocktailName,
        imageUrl: cocktailImageUrl,
        glass: glass,
        instructions: instructions,
        ingredients: ingredientsArray,
        measurements: measurementsArray
    }

    localStorage.setItem(idName, JSON.stringify(results));

}

// // Calls
navigator.geolocation.getCurrentPosition(getGeolocation, geolocationError, geolocationOptions); // Weather


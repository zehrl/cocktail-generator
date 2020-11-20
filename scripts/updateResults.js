// Updates the results based on the local storage
console.log("Pulled Results!")

var cardResults = [];
for (let i = 1; i <= 4; i++) {
    cardResult = JSON.parse(localStorage.getItem(`cardResult${i}`));
    $(`#card-result-name-${i-1}`).text(cardResult.cocktailName)
    $(`#card-result-url-${i-1}`).attr("src", cardResult.imageUrl)
}

// Listens for "Get Recipe" click
$("#recipe1").on("click", function(){
    setRecipe("cardResult1")
    window.location.href = "cocktail-recipe.html"
})

$("#recipe2").on("click", function(){
    setRecipe("cardResult2")
    window.location.href = "cocktail-recipe.html"
})

$("#recipe3").on("click", function(){
    setRecipe("cardResult3")
    window.location.href = "cocktail-recipe.html"
})

$("#recipe4").on("click", function(){
    setRecipe("cardResult4")
    window.location.href = "cocktail-recipe.html"
})

function setRecipe(cardResultText) {
    console.log(cardResultText);

    // Pull correct recipe object
    recipeObject = JSON.parse(localStorage.getItem(cardResultText))

    // Set localstorage variable to the correct recipe object
    localStorage.setItem("selectedRecipe", JSON.stringify(recipeObject))
}
var cocktailRecipe = JSON.parse(localStorage.getItem("selectedRecipe"))


$("#displayName").text(cocktailRecipe.cocktailName)
$("#displayImage").attr("src", cocktailRecipe.imageUrl)

for (let i = 0; i < cocktailRecipe.ingredients.length; i++) {
    var ingredientEl = $("<li>").text(`${cocktailRecipe.measurements[i]}${cocktailRecipe.ingredients[i]}`)
    $("#displayIngredients").append(ingredientEl)
}

$("#displayInstructions").text(cocktailRecipe.instructions)
$("#displayGlass").text(`Serve: ${cocktailRecipe.glass}`)

console.log(cocktailRecipe)
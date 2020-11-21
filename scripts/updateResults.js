// Updates the results based on the local storage
console.log("Pulled Results!")

var cardResults = [];
for (let i = 1; i <= 4; i++) {
    cardResult = JSON.parse(localStorage.getItem(`cardResult${i}`));
    $(`#card-result-name-${i-1}`).text(cardResult.cocktailName);
    $(`#card-result-url-${i-1}`).attr("src", cardResult.imageUrl);
}
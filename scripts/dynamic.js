
// // 1. Event listerner function
// $(".saveBtn").on("click", "button", storage);

// // 2. Save function
// function storage(event) {

//     // Prevent the page from reloading
//     event.preventDefault();

//     // Save the data-hour value
//     var saveButtonClick = $(this).data("hour");

//     // Query the information in the text area element with .prev
//     var getInformation = $(this).prev().val();

//     // Save the the hour value and textarea information into storage
//     localStorage.setItem("Textarea-" + SaveButtonClick, getInformation);
// };

// // 3. Function for printing text from local storage
// // var printText = localStorage.getItem("Textarea-" + i);
// // $("#userInput" + i).text(printText);
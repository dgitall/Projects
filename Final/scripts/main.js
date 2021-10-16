
// Upon loading the page, 
//  * pop up a prompt asking for the upper range of the mystery number
//  * update the game directions
//  * generate the mystery number 
let upperRange = 20;
// Function to open a prompt and get the upper range
upperRange = getNumber("Enter the maximum possible guess")

// Update the directions with the new range
let textBlock = document.getElementById("guessPrompt");
// Clear out the current directions contents
clearText(textBlock);
// Update the directions with the specified range
let textMessage = document.createElement("p");
textMessage.innerHTML = `Guess a number between <b>1</b> and <b>${upperRange}</b>.`;
textBlock.appendChild(textMessage);
textBlock.classList.remove("hide");

// Generate the magic number the user will try to guess
let randomNumber = Math.floor(Math.random() * upperRange) + 1;

// Create a variable to keep track of the guesses
let guesses = new Array;

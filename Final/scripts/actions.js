// Handle when the user clicks the guess button
// * Get value from text box
// * Validate the value
// * Pass to display the results if valid
//  return: none
var doGuessClick = function () {
    let guess = document.getElementById('guessInput').value;
    guess = Number(guess);

    if(validateGuess(guess)) {
        // Send validated guess to check and display results
        displayResults(guess, randomNumber);      
    }

}

/* Prevent some strange behavior when the user hits enter by redirecting to the button click */
//  return: none
function doReturnKey(event) {
    if (event.keyCode == 13) {
        document.getElementById('guess').click();
        event.preventDefault();
    }
}
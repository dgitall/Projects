let randomNumber = Math.floor(Math.random() * 20) + 1

var guess_click = function () {
    let guess = document.getElementById('guessInput').value;
    guess = Number(guess);

    displayResults(guess, randomNumber);
}

/* Prevent some strange behavior when the user hits enter by redirecting to the button click */
function noreturnkey(event) {
    if (event.keyCode == 13)
    {
        document.getElementById('guess').click();
        event.preventDefault();
    }
}
// Prompt the user for a number
//  * open a prompt window the the specified prompt message
//  * repeat this until the user enters a valid answer
//  * valid only if a number greater than 0
//  return: a user entered number
function getNumber(promptMessage) {
    let valid_input = false;
    let upperRange, input;

    while (!valid_input) {
        input = window.prompt(promptMessage);

        upperRange = Number(input);

        if (upperRange != NaN && upperRange > 0) {
            valid_input = true;
        }
    }

    return upperRange;
}

// Clear out any existing messages in the selected text block
//  return: none
function clearText(textBlock) {
    let textArray = textBlock.getElementsByTagName('p');
    for (;textArray.length > 0;) textBlock.removeChild(textArray[0]);

}

// Look through the stored array of guesses and see if user has already guessed that one
//  return: true if a duplicate was found
function checkDuplicate(guess) {
    let index = guesses.indexOf(guess);
    if(index>=0) return true;
    else return false;
}

// Check that the guess is valid
//  * Check if a number
//  * Check if if in range
//  * Check if a duplicate
// Return: true if a valid guess, false if not after displaying the appropriate error
function validateGuess(guess) {
    let valid = false;

    // Validate for a valid value
    if (isNaN(guess)) {
        displayError("That is not a number!");
    }
    else if ((guess < 1) || (guess > upperRange)) {
        displayError("That number is not in range, try again.");
    }    
    else if (checkDuplicate(guess)) {
        displayError("You already guessed that number, try again.");
    }
    else valid = true;

    return valid;
}

//  Display the requested error message in the results box
//  return: none
function displayError(errorMessage) {
    let textBlock = document.getElementById("results");

    // Clear out the current results contents
    clearText(textBlock);
    // Compare the guess to the random number and output a hint or congratulations
    let textMessage = document.createElement("p");
    textMessage.innerHTML = errorMessage;
    textBlock.appendChild(textMessage);
    textBlock.classList.remove("hide");
}
// Check the guess compared to the magic number and display 
// the correct results
//  * If they match, display the final messge with list of guesses
//  * If too high or too low, track guesses and display hint
//  return: none
function displayResults(guess, randomNumber) {
    let textBlock = document.getElementById("results");

    // Clear out the current results contents
    clearText(textBlock);

    // Compare the guess to the random number and output a hint or congratulations
    let textResult = document.createElement("p");
    if (guess == randomNumber) {
        guesses.push(guess);
        textResult.innerHTML = `<b>You got it! It took you ${guesses.length} tries and your guesses were ${guesses}.</b>
        <p>Refresh page to play again</p>`;
    }
    else if (guess < randomNumber) {
        guesses.push(guess);
        textResult.innerText = `No, try a higher number`;
    }
    else {
        guesses.push(guess);
        textResult.innerText = `No, try a lower number`;
    }
    textBlock.appendChild(textResult);
    textBlock.classList.remove("hide");
}

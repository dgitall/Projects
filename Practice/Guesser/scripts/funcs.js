function clearText(textBlock) {
    let textArray = textBlock.getElementsByTagName('p')
    for (; textArray.length > 0;) textBlock.removeChild(textArray[0]);

}

function displayResults(guess, randomNumber) {
    let textBlock = document.getElementById("results");

    // Clear out the current results contents
    clearText(textBlock)

    // Compare the guess to the random number and output a hint or congratulations
    let textResult = document.createElement("p");
    if (guess == randomNumber) {
        textResult.innerHTML = `<b>You got it!</b><p>Refresh page to play again</p>`;
    }
    else if (guess < randomNumber) {
        textResult.innerText = `No, try a higher number`;
    }
    else {
        textResult.innerText = `No, try a lower number`;
    }
    textBlock.appendChild(textResult);
    textBlock.classList.remove("hide");
}

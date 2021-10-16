function flipCoin() {
    let flip = Math.round(Math.random());
    
    if (flip==1) return 'heads';
    else return 'tails';
}

function displayResults(textBlock, selection, flip) {
    let textArray = textBlock.getElementsByTagName('p')
    for(; textArray.length>0;){
        textBlock.removeChild(textArray[0]);
    }

    let textFirst = document.createElement("p");
    textFirst.innerText = `You guessed ${selection}...`;
    textBlock.appendChild(textFirst);
    let textSecond = document.createElement("p");
    textSecond.innerText = `The coin flips and comes up ${flip}!`;
    textBlock.appendChild(textSecond);
    let textThird = document.createElement("p");
    if(selection == flip) {
        textThird.innerText = `Good Guess!`;   
    }
    else {
        textThird.innerText = `Sorry....better luck next time.`;
    }
   textBlock.appendChild(textThird);

}

function guessMade(guess){
    let flip = flipCoin();

    let textBlock = document.getElementById('results');
    displayResults(textBlock, guess, flip);
    textBlock.classList.remove("hide");
}
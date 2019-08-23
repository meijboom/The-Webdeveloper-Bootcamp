// create a secret number
var secretNumber = 4;
// ask user for guess
var guess = Number(prompt("guess a number"));

// check guess

if (guess === secretNumber) {
    alert("You got it right!");
}
// Guess too low
else if (guess > secretNumber){
        alert("too High, guess again!");
}
else alert ("Too low, guess again!");

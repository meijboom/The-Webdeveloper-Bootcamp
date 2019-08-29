var player1 = document.getElementById("p1");
var player2 = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var input = document.querySelector("input");
var maxScoreInput = document.getElementById("maxScoreInput");

var scoreMax = 7;
var gameOver = false;
var scoreP1 = 0;
var scoreP2 = 0;

var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");

// Input number value 
input.addEventListener("change", function(){
    scoreMax = Number(input.value);
    maxScoreInput.textContent = scoreMax;
    reset();
});


// P1 event listener 
player1.addEventListener("click", function(){
    if (!gameOver){
            scoreP1++;
            if (scoreP1 === scoreMax){
                gameOver = true;
            }
            p1Display.textContent = scoreP1;
            console.log("Player 1's score is now: " + scoreP1)
            }
            if (scoreP1 === scoreMax){
                p1Display.classList.add("winner");
                p2Display.classList.add("loser");
            }
});

// P2 event listener 
player2.addEventListener("click", function(){
    if (!gameOver){
            scoreP2++;
            if (scoreP2 === scoreMax){
                p2Display.classList.add("winner");
                gameOver = true;
            }
            p2Display.textContent = scoreP2;
            console.log("Player 2's score is now: " + scoreP2)
            }

            if (scoreP2 === scoreMax){
                p2Display.classList.add("winner");
                p1Display.classList.add("loser");
            }
});


// reset button
resetButton.addEventListener("click", function(){
    reset();
});


// reset function
function reset (){
    gameOver = false;
    scoreP1  = 0;
    scoreP2  = 0;
    p1Display.textContent = scoreP1;
    p2Display.textContent = scoreP2;
    p1Display.classList.remove("winner")
    p2Display.classList.remove("winner")
    p1Display.classList.remove("loser")
    p2Display.classList.remove("loser")
};

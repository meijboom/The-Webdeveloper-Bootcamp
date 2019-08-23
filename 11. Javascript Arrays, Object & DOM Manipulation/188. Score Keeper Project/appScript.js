var player1 = document.getElementById("p1");
var player2 = document.getElementById("p2");
var reset = document.getElementById("reset");
var scoreMax = 7
var scoreP1 = 0
var scoreP2 = 0

player1.addEventListener("click", function(){
    if (scoreP1 <= scoreMax-1){
            scoreP1++;
            console.log("score is now: " + scoreP1)
    }
    else console.log("maximum score reached.")

});
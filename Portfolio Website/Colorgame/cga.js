var numSquares = 6;
var colors = [];
var pickedColor;
var howtoBtn = document.getElementById("howtoBtn");
var howtoDisplay = document.querySelector(".howtoDisplay");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.getElementsByClassName("mode");

//initialize the color game application.
init();

function init(){
    //mode button event listener
        for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected")
            modeButtons[1].classList.remove("selected")
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }
    // square event listener
    for(var i = 0; i < squares.length; i++){
        // add click listeners to squares
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //Compare color to pickedColor
            if (clickedColor === pickedColor){
                messageDisplay.textContent = " Correct! "
                resetButton.textContent = "Play Again?"
                changeColors(pickedColor);
                h1.style.backgroundColor = clickedColor;
                }   else {
                this.style.backgroundColor = "#232323"
                messageDisplay.textContent = "Try Again."
                }
        });
    };
    reset();
}

function reset(){
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    // change colors of the squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block"
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue"
    messageDisplay.textContent = ("");
};

// Reset Button
resetButton.addEventListener("click", function(){
    reset();
});


// change the colors of all squares if guesses correctly
function changeColors(color){
    // loop trough all squares
    for(var i = 0; i < squares.length; i++){
        //change the color to match the correct given color
        squares[i].style.backgroundColor = color;
    }
};


//pick a random colour
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

// generates ramdom colors for each square.
// returns an array of random colors.
function generateRandomColors(num){
    //make an array
    var arr = []
    // add num random colors to array
    for (var i = 0; i < num; i++){
        //get random color and push into array
        arr.push(randomColor())
    }
    // return array
    return arr;
}
// create random RGB and output a string to push into an array.
function randomColor(){
    // pick a red from 0 to 256
    var red = Math.floor(Math.random() * 256 )
    // pick a green from 0 to 256
    var green = Math.floor(Math.random() * 256 )
    // pick a blue from 0 to 256
    var blue = Math.floor(Math.random() * 256 )
    // return the random RGB string
    return ("rgb(" + red + ", " + green + ", " + blue + ")");
}
// hide Button
howtoBtn.addEventListener("click", function(){
    hideHowto();
});
// how to button, to hide the hide the how to
function hideHowto() {
    howtoDisplay.classList.toggle("hide");
}
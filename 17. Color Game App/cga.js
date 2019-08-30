var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy")
var hardBtn = document.querySelector("#hard")

// easy Button
easyBtn.addEventListener("click", function (){
    easyBtn.classList.add("selected")
    hardBtn.classList.remove("selected")
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none"
        }

    }
});
// Hard Button
hardBtn.addEventListener("click", function (){
    easyBtn.classList.remove("selected")
    hardBtn.classList.add("selected")
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block"
    }
});
// Reset Button
resetButton.addEventListener("click", function(){
    // generate all new colors 
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    // change colors of the squares
    for(var i = 0; i < squares.length; i++){
        // add initial colors to squares
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323"
});

//show the color to be guessed in the title.
colorDisplay.textContent = pickedColor;

// loop trough the array of squares and assign a random color.
for(var i = 0; i < squares.length; i++){
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

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
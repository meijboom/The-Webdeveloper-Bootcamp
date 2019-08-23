function doMath(){
    var x = 40;
    console.log(x);
}
// X is defined in the function, not in the global scope. if we want to acces is, we can only acces it in the function scope.
// If we declare x outside a functiom IN the global scope, then we CAN acces it in a function(). the function being a "Child" of the GlobalScope.
// example:

var y = 2

function doMoreMath(){
    console.log(y)
}
// doMoreMath prints out 2 in the console
// But you can also declare A new variable y inside the Child.
// example


function doMoreMath(){
    var y = 4;
    console.log(y);
}
// doMoreMath() now Prints out 4
// in the global scope y = 2, inside the function doMoreMath() It's now 4
//>>>>>> always use var while declaring a new variable.
 
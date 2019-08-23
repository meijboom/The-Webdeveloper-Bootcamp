// My solution
// If the answer does not contain Yes or
// var answer = prompt("Are we there yet?");

// while (answer !== "Yes" && "Yeah"){
//     var answer = prompt("Are we there yet?");
// }
// alert("YAY, WE MADE IT")

// Bonus 
// Check if the string contains Yes, if so print "we made it"

var answer = prompt("Are we there yet?");

while (answer.indexOf("yes") === -1) {
    var answer = prompt("Are we there yet?");
}
alert("YAY, WE MADE IT")


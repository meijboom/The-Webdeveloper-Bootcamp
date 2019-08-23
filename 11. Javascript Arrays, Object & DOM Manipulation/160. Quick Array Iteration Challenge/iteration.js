// Exercise 1
// what does the following code print out?

var numbers = [1,2,3,4,5,6,7,8,9,10];
var colors = ["red", "orange", "yellow", "green"]

numbers.forEach(function(color){
    if(color % 3 === 0) {
        console.log(color);
    }
});


// My answer 
// prints out 3, 6, 9.
// array colors isn't used

// translate the code into a for loop

var numbers = [1,2,3,4,5,6,7,8,9,10];

for(i = 0; i < numbers.length; i++){
    if (i % 3 === 0) {
        console.log(i)
    }
}
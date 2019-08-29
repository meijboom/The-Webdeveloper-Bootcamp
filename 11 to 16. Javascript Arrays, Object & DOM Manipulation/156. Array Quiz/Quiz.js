// Exercise 1
var numbers = [22, 67, 33, 96, 88];

//what does the following line print?
console.log(numbers[numbers.length])

// My answer
// prints out the whole Array, followed by the length

// Correct answer
// prints out undefined
// console.log(numbers [number.length])
//             from numbers get [5] 5 is the length of the array, but since arrays start at 0 it ends at 4, 5 being undefined.



// Exercise 2
var friendGroups = [
    ["Harry", "Ron", "Hermione"],
    ["Malfoy", "Crabbe", "Goyle"],
    ["Mooney", "Wormtail", "Prongs"]
];

// What is the result of this line:
console.log(friendGroups[2][0]);

// My answer
// Prints out Array 3, starting with Mooney, Followed by Array 1, starting with Harry.


// Correct answer
// Prints out "Mooney" from Array 3
// this is a nested Array, so it will print out from array [2] the [0] index. this being Mooney
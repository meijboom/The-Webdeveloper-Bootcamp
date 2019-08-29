// an Array is a list inside a variable.
// you can tell JS that the var is an Array with squared brackets[] 
// example
var arrayExample = ["hello", 12, null, -12];
// arrayExample is indexed, starting at 0
// 0 = " hello "
// 1 = 12 
// etc

// we can edit arrays in JS with push/pop,   shift/unshift, indexOf, slice
//example push
arrayExample.push("green");
//adds "green" to the END of the Array

//example pop
arrayExample.pop();
// this method does NOT need an argument.
// Removes the last element of the Array, and Returns the removed element
// Returns "green" 


//example unshift 
arrayExample.unshift("purple");
// adds "purple" in front of the array, at index 0

//example shift
arrayExample.shift();
// Removes the FIRST element of the Array at index 0, and Returns it.
// Returns "purple"

//example indexOf
arrayExample.indexOf("purple");
// Locates the search in the Array, in this case index 0, and will return 0.
// Uppercase sensitive, needs to be an exact match.
// if element is not found, it returns -1


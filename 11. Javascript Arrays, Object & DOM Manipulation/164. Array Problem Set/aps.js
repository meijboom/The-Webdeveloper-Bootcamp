// printReverse
// function to reverse the returned array, by not changing the array itself.
// i = array.length -1, because an index of an array is always 1 bigger than the array itself.

function printReverse(array) {
    for(var i = array.length - 1; i >= 0; i--){
        console.log(array[i]);
    }
}

// isUniform()
// function to check if every value is the same in the array
function isUniform(array) {
        var reference = array[0];
        for(var i = 0; i < array.length; i++){
            if(array[i] !== reference){
                return false;
            }
        }
        return true;
    }

// sumArray()
// Function to Sum of all numbers in the array
function sumArray(array) {
    // save first number in array in a var
    var base = 0
    // add each number in the array to base
    array.forEach(function(value){
        base+=value;
    });
    return(base)
}

// max()
// write a function that returns the highest number of the array
function max(array) {
    // save the highest number in the array in a variable
    var max = 0
    array.forEach(function(value){
        if (value > max){
            max = value
        }
    });
    return(max)
}

// optional Building our own forEach code along
function myForEach(arr, func){
    // loop trough array
    for(var i = 0; i < arr.length; i++){
           // inside the loop call func for each item in the array 
           func(arr[i]);
    }
}

//isEven() Problem
// write a function isEven() wich takes a single numeric argument and returns true if even, and false otherwise.

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}

// answer was correct but can be shortened
// return evaluates the statement % 2 === 0, wich is boolean and will return accordingly
function isEven(num) {
    return (num % 2 === 0);
}


// factorial()
// write a function factorial() wich takes a single numeric argument and returns the factorial of that number.
// 4! = 4 x 3 x 2 x 1
// 6! = 6 x 5 x 4 x 3 x 2 x 1
function factorial(num) {
    var result = num;
        for(i = num-1; i >=1; i--){
        result *= i;
    }
    return result;
}
    // num=4
    // i=4-1=3; 3 >= 1;         BRACKETS RUN {4 = 4*3 = 12}   then i--  = 3-1; i=2 repeat
    // i=2        >= 1;         BRACKETS RUN {12 = 12*2 = 24} then i--  = 2-1; i=1 repeat
    // i=1        >= 1;         Code stops because 1=1


// kebabToSnake()
// write a function kebabtosnake() wich takes single kebab-cased string argument and returns teh snake_case version.
// example: kebab-to-snake to kebab_to_snake

function kebabtosnake(str) {
    var kts = str.replace("-", "_");
    console.log(kts);
    return kts;
}

// Exercise 1
var num = 8;
function doMath() {
    num += 1;
    if(num % 5 == 0) {
        return true
    }
    else {
        return false
    }
}

num += 1;
// Prints 9
doMath();
// Returns False
// Didn't read the num += 1; inside the doMath(), this made num=10 that is divisible by 5, so equals true.
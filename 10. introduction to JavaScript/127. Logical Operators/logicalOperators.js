var x = 10;
var y = "a"

var test = ( y === "b" || x >=10 )
//         ( "a" === "b" || 10 >= 10)
//         ( FALSE ||  TRUE)
console.log(test)

// exercise 2
var x = 3;
var y = 8;
   !(x == "3" || x === y) && !(y != 8 && x <= y)
// !(3 == "3" || 3 === 8) && !(8 != 8 && 3 <= 8)
// not(TRUE or FALSE)     and not(FALSE and TRUE)
// not(TRUE) and not(False)
// False and TRUE = FALSE

// exercise 3
var str = ""
var msg = "haha!"
var isFunny = "false"

   !(( str || msg ) && isFunny)
// not(( false or true) and true) = FALSE

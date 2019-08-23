function sing(){
    console.log("twinkle twinkle...")
    console.log("How I wonder..")
}
setInterval(sing, 1000)
// setinterval(calls sing, every 1000ms)

// Anonymous Functions
setInterval(function(){
    console.log("this is an anonymous function")
    console.log("this function can not be called outside of \"setInterval\"" )
}, 300)

// prints 2 consolelogs every 300ms.
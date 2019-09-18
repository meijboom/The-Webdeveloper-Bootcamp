var scroll = document.getElementById("scroll");

window.addEventListener("scroll", function(){
    console.log("scrolled")
    scroll.classList.add("scrolled")
});
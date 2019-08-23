var toggler = document.querySelector("button");
var body = document.querySelector("body");

toggler.addEventListener("click", function () {
    console.log("button was clicked")
    body.classList.toggle("darkblue")
});

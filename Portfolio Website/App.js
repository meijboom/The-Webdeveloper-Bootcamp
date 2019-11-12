// Link variables
var homeLnk = document.getElementById("homeLnk");
var projectLnk = document.getElementById("projectLnk");
var aboutLnk = document.getElementById("aboutLnk");
var contactLnk = document.getElementById("contactLnk");
// click listeners
// back home
homeLnk.addEventListener("click", function(){
    scrollToId("#landing", 1000);
});
// projects
projectLnk.addEventListener("click", function(){
    scrollToId("#accordion", 1000);
});
// about
aboutLnk.addEventListener("click", function(){
    scrollToId("#about", 1000);
});
// contact
contactLnk.addEventListener("click", function(){
    scrollToId("#contact", 1000);
});
// when scrolled down, #scroll dissapears.
$(window).scroll(function() {
    $("#scroll").css({
    'opacity' : 1-(($(this).scrollTop())/250)
    });          
});


////////////////////////////////////////////////////
//  Scroll to querySelector function.            ///
//  example >>> scrollToId('#BIOGRAPHY', 1000)   ///
//  Scrolls to #BIOGRAPHY in 1 second. (1000ms)  ///
////////////////////////////////////////////////////
function scrollToId(id, duration) {
    var target = document.querySelector(id);
    // -200 from targetPosition is the height of the navbar.
    var targetPosition = target.getBoundingClientRect().top - 300;
    var startPosition = window.pageYOffset;
    var startTime = null;

    // next line is not needed and causes a bug with a navbar.
    // var distance = targetPosition - startPosition;

    // loops through at 60 FPS ( from Dev Ed on youtube)
    function animation(currentTime){
        if(startTime === null ) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        //              t            b              c         d
        var run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0,run);
        if(timeElapsed < duration)requestAnimationFrame(animation);
    }

    // easing function from gizma.com/easing/
    function ease(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t*t + b;
        t -= 2;
        return -c/2 * (t*t*t*t - 2) + b;
    };

    requestAnimationFrame(animation);
}

// For bootstrap from now on using jQuery.
// jQuery hides the navbar after being clicked.
$('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });
// when scrolled down, scroll dissapears.
$(window).scroll(function() {
    $("#scroll").css({
    'opacity' : 1-(($(this).scrollTop())/250)
    });          
});
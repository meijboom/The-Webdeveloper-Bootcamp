// when scrolled down, #scroll dissapears.
$(window).scroll(function() {
    $("#scroll").css({
    'opacity' : 1-(($(this).scrollTop())/250)
    });          
});

// when clicked, change the icon to arrow up.
$('.accordionButton').click(function(){
    // toggle class arrow down and up
    $(this).find('svg').toggleClass('fa-caret-down fa-caret-up')
});
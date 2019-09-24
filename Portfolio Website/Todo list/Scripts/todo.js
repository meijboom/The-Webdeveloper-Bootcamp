// Strike through li when clicked.
$("ul").on("click", "li", function(){
    $(this).toggleClass("clicked");
});
// Delete ToDo when span(X) is clicked.
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});
// Add new ToDo
$("input[type='text']").on("keypress", function(event){
    if(event.which === 13){
       // saves the new todo text to todoText
        var todoText = $(this).val();
        // creates new li with the value of todoText
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + " " + todoText + "</li>");
        // delete the text from the input box.
        $(this).val("");

    }
});
// Toggle the inputform
$("#toggleForm").on("click", function(){
    $("input[type='text']").fadeToggle();
});
    var todos = ["s"];
window.setTimeout(function() {
    // put all of your JS code from the lecture here
    var input = prompt("what would you like to do?");

    while (input !== "quit"){
        //handle input
        if(input === "list"){
            listTodos();
        } else if(input === "new"){
            newTodo();
        } else if (input === "delete") {
            deleteTodos()
        }
        //ask again for new input
        input = prompt("what would you like to do?");
    }
    console.log("Ok, you have quit the app.")

    // list the toDo's
    function listTodos(){
        console.log("**************")
        todos.forEach(function(value, index){
            console.log(index + ": " + value);
        });
        console.log("**************")
    }
    // new toDO
    function newTodo(){
        // ask for a new todo
        var newTodo = prompt("Enter new todo");
        // add to todos array
        todos.push(newTodo);
    }
    // Delete toDos
    function deleteTodos(){
                //ask for index of todo to be deleted
                var index = prompt("enter index of todo to delete");

                //delete that todo
                todos.splice(index, 1);
                console.log("You've deleted this todo:")
    }

// sluit timout
  }, 500);



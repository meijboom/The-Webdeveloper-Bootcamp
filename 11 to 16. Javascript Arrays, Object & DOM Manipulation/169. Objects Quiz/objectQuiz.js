
// Exercise 1
var someObject = {};
// Wich of the following are valid:
someObject._name = "Hedwig";
//Valid

someObject.age = 6;
//Valid
var prop = "color"
// Valid but is set in global scope instead of object?
someObject[prop] = "red";
// not Valid

//^^correct answer is valid, someObject[prop] == someObject["red"]

someObject.123 = True;

// not valid, should be someObject ["123"] = True;


// Exercise 2
var someObject = {
    friends: [
        {name: "Malfoy"},
        {name: "Crabbe"},
        {name: "Goyle"}
    ],
    color: "baby blue",
    isEvil: true
};

// this makes an Object with a nested array with 3 nested Objects. 
// Friends -> Object * 3 
// color: "baby blue"
// isEvil: true

// write code to retrieve malfoy:
someObject["friends"][0]["name"];

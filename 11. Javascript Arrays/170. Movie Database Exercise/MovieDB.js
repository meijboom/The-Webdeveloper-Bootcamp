//MovieDB exercise
// Create an array of movie objects. Each movie should have a title, rating, and hasWatched properties. 
// Iterate trough the array and print out something that looks like:
// You have watched "in Bruges" - 5 Stars.

var watchlist = [
    {
        name: "Gone in 60 seconds",
        seen: true,
        rating: 4.5
    },
    {
        name: "The Avengers: Infinity war",
        seen: true,
        rating: 5
    },
    {
        name: "The Avengers: End game",
        seen: true,
        rating: 5
    },
    {
        name: "Toystory 4",
        seen: false,
        rating: undefined
    }
]

// Iterate trough the array
function movieRating(){
    watchlist.forEach(function(movie){
        if (movie.seen == true){
            console.log("you have seen " + movie.name + " and rated it at " + movie.rating + " stars");
        }
        else {
            console.log("you have not yet seen the movie " + movie.name);
        }
    }
)};

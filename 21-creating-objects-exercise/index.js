/**
 * Exercise 1
 *
 * create an object "user", which has
 * properties "firstName", "lastName" and "age"
 *
 * PS: use console.log() to see the result
 */
const user = {
    firstName: 'Patrick',
    lastName: 'Whitty-Clarke',
    age: 32
}
console.log( user );

/**
 * Exercise 2
 *
 * create an object "allTypes" with a property of types:
 * string, number, array, object, function, boolean
 *
 * PS: use console.log() to see the result
 */
const allTypes = {
    string: "this is a string",
    number: 7,
    array: ["my", "array"],
    object: {param1: 'first', param2: "object"},
    function: function() {
        // myFunction
    },
    boolean: true
}

/**
 * Exercise 3
 *
 * create a function "createMovieObject" which takes
 * name, rating and ticketPrice and returns a movie object
 * with these properties
 *
 * PS: use console.log() to see the result
 */
function createMovieObject( name, rating, ticketPrice ) {
    const movieObject = {
        name: name,
        rating: rating,
        ticketPrice: ticketPrice,
    }
    return movieObject;
}
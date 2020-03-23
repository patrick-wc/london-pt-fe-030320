/**
 * Exercise 1
 * create a function {logProperties} which will
 * take object as a param and console log each property in a format
 * "Property name: {propertyName}"
 */
function logProperties( object ) {
    for( const key in object ) {
        console.log( `${key}` );
    }
}


/**
 * Exercise 2
 * Create a function {getAllValues} that takes an object
 * and returns an array of all values.
 */
function getAllValues( object ) {
    let newArray = [];
    for( const key in object ) {
        newArray.push( object[key] )
    }
    return newArray;
}

/**
 * Exercise 3
 * Create a function {getAllValuesAsString} that takes an object
 * and returns all values as one string with space separation.
 */
function getAllValuesAsString( object ) {
    let string = '';
    for( const key in object ) {
        string += `${object[key]} `;
    }
    string = string.trim();
    return string;
}

/**
 * Exercise 4
 * Create a function {propertyValueString} that takes object as a param
 * and log property and values as string in a next format:
 * 'PROPERTY: VALUE'
 */
function propertyValueString( object ) {
    for( const key in object ) {
        console.log( `${key}: ${object[key]}`);
    } 
}
// const testObject = {
//     property: "name",
//     age: 32,
//     status: "self-isolating",
//     mood: "tres fatigue, but good"
// }
// console.log( propertyValueString( testObject ) );
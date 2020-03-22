/**
 * create an array "carBrands"
 * and assign to it ["Mercedes", "Volvo", "BMW", "Reno", "Vauxhall"]
 */
let carBrands = ["Mercedes", "Citroen", "Volvo", "BMW", "Reno", "Vauxhall", "Land Rover"];

/**
 * Exercise 1
 *
 * remove the last element from the carBrands array
 *
 * * PS: console.log() the result to see the difference
 */
carBrands.pop();

/**
 * Exercise 2
 *
 * remove the first element from the carBrands array
 *
 * * PS: console.log() the result to see the difference
 */
carBrands.shift();

/**
 * Exercise 3
 *
 * from "carBrands" remove "Vauxhall"
 *
 * * PS: console.log() the result to see the difference
 */
// carBrands = carBrands.filter(vauxhall => vauxhall === 'Vauxhall');
// console.log( carBrands );
carBrands.pop();

/**
 * Exercise 4
 *
 * in "carBrands" replace Citroen with Rolls-Royce
 *
 * * PS: console.log() the result to see the difference
 */
const citroenIndex = carBrands.findIndex( citroen => citroen === "Citroen" );
carBrands.splice( citroenIndex, 1, "Rolls-Royce" );
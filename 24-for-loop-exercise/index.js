const myName = "Patrick"; // SET YOUR NAME

const visitors = [
  "Alex",
  "Mike",
  "Sam",
  "Julian",
  "Alesh",
  "Matthew",
  "Nick",
  "Joe",
  "James"
]; // Add at least 5 names

/**
 * Exercise 1
 *
 * create a function {greetVisitors} and inside it write for loop which
 * will greet all people from "visitors" for each person you should
 * console.log "Hi {name}, my name is {myName}!"
 */

function greetVisitors() {
  for (let iteration = 0; iteration < visitors.length; iteration++) {
    console.log(`Hi ${visitors[iteration]}, my name is ${myName}!`);
  }
}

greetVisitors();

// ========================
const numbers = [2, 123, 13, 1, 6, 84, 23, 12, 45]; // DON'T TOUCH THIS LINE :)

/**
 * Exercise 2
 * Create a function {getElementIndex} that uses a for loop to find the index of a
 * given item in {numbers}.
 * If the item is not present, return a string "Item not found"
 */
let returnStatement = "";
function getElementIndex(item) {
  for (let i = 0; i < numbers.length; i++) {
    if (item === numbers[i]) {
      return i;
    }
  }
  return "Item not found";
}

getElementIndex(6);

// ========================

/**
 * Exercise 3
 * Create a function {total} that will return sum of all numbers
 * from {numbers} array
 */
function total() {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  return total;
}

total();

// ========================

const numbersForIndexes = [6, 2, 16, 23, 84, 21, 9, 3]; // DON'T TOUCH THIS LINE :)

/**
 * Exercise 4
 * Create a function {addIndex} that takes {numbersForIndexes} array,
 * and returns a new array which includes each number + it's index
 */
function addIndex() {
  let newArray = [];
  for (let i = 0; i < numbersForIndexes.length; i++) {
    newArray.push(numbersForIndexes[i] + i);
  }
  return newArray;
}

addIndex();

const forLowestNumber = [5, 234, 96, 34, -34, 0, 23]; // DON'T TOUCH THIS LINE :)
/**
 * Exercise 5
 *  create function {lowestNumber} which will return the lowest integer
 * from {forLowestNumber}
 */
function lowestNumber() {
  // set lowestInteger to LARGEST POSSIBLE NUMBER EVA
  let lowestInteger = Number.MAX_VALUE;
  for (let i = 0; i < forLowestNumber.length; i++) {
    // number current loop number is less than MAX NUMBER EVA, set it as lowest. then carry on
    if (forLowestNumber[i] < lowestInteger) {
      lowestInteger = forLowestNumber[i];
    }
  }
  return lowestInteger;
}

console.log(lowestNumber());

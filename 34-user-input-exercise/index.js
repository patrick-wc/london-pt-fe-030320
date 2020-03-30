// install and  import "readline-sync" npm package before you do exercises
const readlineSync = require("readline-sync");
/**
 * Exercise 1
 *
 * ask user for a name and assign a response to variable {name}
 */

const name = readlineSync.question("What is your name mate? ");

//===== DO NOT TOUCH THIS BLOCK =====
console.log(`Hi ${name}!`);
console.log("=====================");
console.log(`Let me do math for you!`);
console.log("=====================");
//===================================

/**
 * Exercise 2
 *
 * offer user to do some math, ask to provide a math symbol and
 * offer a few options: +, -, * or /
 * Save response to {selectedSymbol} variable.
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get correct symbol
 */

let selectedSymbol = "";
function userSymbol() {
  let mathsSymbols = ["+", "-", "*", "/"];
  selectedSymbol = readlineSync.question(
    "Shall we do some maths? Which mathematical symbol are we using? Please pick one from +, -, * or / "
  );

  //   console.log("Is the selected symbol included in mathsSymbols?");
  //   let checkBoolean = mathsSymbols.includes(selectedSymbol);
  //   console.log(checkBoolean);

  //   if (checkSymbol.includes(mathsSymbols) === false) {
  //     console.log("nah, user did not pick one from +, -, * or /");
  //   } else {
  //     console.log("Hooray, we checked if the selectedSymbol ");
  //   }

  while (mathsSymbols.includes(selectedSymbol) === false) {
    selectedSymbol = readlineSync.question(
      "Sorry, you did not pick +, -, * or / "
    );
  }
}

userSymbol();

/**
 * Exercise 3
 *
 * ask user for the first number and assign response to a variable {number1}
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get a number
 */
let number1 = readlineSync.questionInt("Please enter the first number: ");
// function userNumber1() {
//   number1 = readlineSync.question("Please enter the first number: ");

//   // convert string to number
//   number1 = parseInt(number1);

//   while (Number.isInteger(number1) === false) {
//     number1 = readlineSync.question(
//       "Sorry, you did not pick a number. Pick a number: "
//     );

//     // convert string to number
//     number1 = parseInt(number1);
//   }
// }

// userNumber1();

/**
 * Exercise 4
 *
 * ask user for the second number and assign response to a variable {number2}
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get a number
 */
let number2 = readlineSync.questionInt("Please enter the first number: ");
// function userNumber2() {
//   number2 = readlineSync.question("Please enter the second number: ");

//   // convert string to number
//   number2 = parseInt(number2);

//   while (Number.isInteger(number2) === false) {
//     number2 = readlineSync.question(
//       "Sorry, you did not pick a number. Pick a number: "
//     );

//     // convert string to number
//     number2 = parseInt(number2);
//   }
// }

// userNumber2();

/**
 * Exercise 5
 *
 * take numbers that user provided to you and do math based on user
 * selected symbol.
 *
 * show the result to the user
 */

const result = eval(`${number1} ${selectedSymbol} ${number2}`);

console.log("=====================");
console.log(`Here you go, the result is ${result}`);

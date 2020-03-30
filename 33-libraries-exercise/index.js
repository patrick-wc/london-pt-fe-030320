/**
 * Exercise 1
 *
 * Add Chalk(https://github.com/chalk/chalk) to your project
 */

const chalk = require("chalk");

console.log(chalk.blue("Hello world!"));

/**
 * =============================================
 * READ CHALK DOCUMENTATION TO SEE HOW TO USE IT
 * =============================================
 */

/**
 * Exercise 2
 *
 *  create a function {renderBlueText} which will log
 * your text but make font colour blue
 *
 * Call this function and run "node index.js" in a terminal
 * to see the result
 */
function renderBlueText(text) {
  console.log(chalk.blue(text));
}
renderBlueText("blue");
/**
 * Exercise 3
 *
 * create a function {inversedColourText} which takes string as
 * an argument and log it with inversed background and foreground colors
 * Call this function and run "node index.js" in a terminal
 * to see the result
 */
const inversedColourText = string => {
  console.log(chalk.inverse(string));
};

/**
 * Exercise 4
 *
 * create a function styledText that takes array of strings
 * and style each by adding red background colour and setting
 * font colour to white.
 */
const styledText = array => {
  for (const arrayItem of array) {
    console.log(chalk.bgRed.white(arrayItem));
  }
};

console.log(styledText(["some", "array", "items"]));

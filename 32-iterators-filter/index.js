/**
 * Exercise 1
 *
 * create a function {noStrings} that takes an array
 * as a parameter and return an array but without strings
 */
function noStrings(array) {
  return array.filter(arrayItem => (typeof arrayItem === "string") === false);
}

/**
 * Exercise 2
 *
 * create a function {justStrings} that takes an array
 * as a parameter and return an array of strings by removing
 * every other type
 */
const justStrings = array => {
  return array.filter(arrayItem => (typeof arrayItem === "string") === true);
};

/**
 * Exercise 3
 *
 * create a function {justStringsLongerThan5} that takes
 * an array as a parameter and return an array of strings
 * that are longer than 5 characters
 */
const justStringsLongerThan5 = array => {
  const filteredOnce = array.filter(
    arrayItem => (typeof arrayItem === "string") === true
  );
  const filteredTwice = filteredOnce.filter(
    arrayItem => arrayItem.length > 5 === true
  );
  return filteredTwice;
};

/**
 * Exercise 4
 *
 * create a function {numbersMoreThan13} that takes
 * an array as a parameter and return an array of numbers
 * that are more than 13
 */
const numbersMoreThan13 = array => {
  const filteredOnce = array.filter(
    arrayItem => Number.isInteger(arrayItem) === true
  );
  const filteredTwice = filteredOnce.filter(
    arrayItem => arrayItem > 13 === true
  );
  return filteredTwice;
};

/**
 * Exercise 5
 *
 * create a function {objectsOnly} that takes
 * an array as a parameter and return an array of objects
 */
const objectsOnly = array => {
  return array.filter(arrayItem => (typeof arrayItem === "object") === true);
};

/**
 * Exercise 6
 *
 * create a function {truthyOnly} that takes
 * an array as a parameter and return an array of truthy values.
 * IMPORTANT: You still need to keep number 0.
 */
const truthyOnly = array => {
  return array.filter(
    arrayItem => (Boolean(arrayItem) === true || arrayItem === 0) === true
  );
};

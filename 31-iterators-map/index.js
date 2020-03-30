// ============================================
// ALL IMPLEMENTATIONS SHOULD BE WITH {map} METHOD
// ============================================

/**
 * Exercise 1
 *
 * create an arrow function {convertToPositive} which takes
 * array of numbers, convert all negatives to positives and return
 * a new array.
 */
const convertToPositive = numbers => {
  //   const positiveNumbers = numbers.map(number => {
  //     return Math.abs(number);
  //   });
  const positiveNumbers = numbers.map(number => Math.abs(number));
  return positiveNumbers;
};

/**
 * Exercise 2
 *
 * create an arrow function {getAllNames} which will take
 * an array of users(objects) as parameter and return an
 * array on names
 *
 * Ex: getAllNames([
 *   {name: 'Alex', age: 26},
 *   {name: 'John', age: 25}
 * ]) will return ['Alex', 'John']
 */
const getAllNames = users => {
  const arrayOfNames = users.map(user => user.name);
  return arrayOfNames;
};

/**
 * Exercise 3
 *
 * create a function {greetAll} that takes array of names as a parameter
 * and return a new array of greetings "Hi, {name}!"
 */
const greetAll = names => {
  const greetings = names.map(name => {
    return `Hi, ${name}!`;
  });
  return greetings;
};

/**
 * Exercise 4
 *
 * create a function {multiplyAllNumbers} that takes an array as a param
 * and multiply all numbers inside array by 5 and return the whole array
 * with multiplied numbers
 */
const multiplyAllNumbers = numbers => {
  const numbersBy5 = numbers.map(number => {
    if (Number.isInteger(number)) {
      return number * 5;
    } else {
      return number;
    }
  });
  return numbersBy5;
};

console.log(multiplyAllNumbers([1, "Alex", 2, 3, 4]));

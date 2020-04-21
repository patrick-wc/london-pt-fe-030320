/**
 * Exercise 1
 *
 * create a function {generateFibonacci} which will take a parameter
 * that represents a length of an array that needs to be generated
 *
 * The array must be a Fibonacci sequence:
 *
 * The next number is found by adding up the two numbers before it,
 * always starting with 0 and 1.
 *
 * Ex: generateFibonacci(5) // return [0, 1, 1, 2, 3];
 */
const generateFibonacci = (length) => {
  let fibArray = [];

  for (let index = 0; index < length; index++) {
    if (index < 2) {
      fibArray.push(index);
    } else {
      fibArray.push(fibArray[index - 1] + fibArray[index - 2]);
    }
  }
  return fibArray;
};

// console.log(generateFibonacci(2));

/**
 * Exercise 2
 *
 * create a function {isPowerOf} which takes 2 arguments:
 *
 * number – a number
 * primeNumber – a number (a prime number)
 *
 * return a Boolean if your number is a power of primeNumber
 *
 * Ex: isPowerOf(27, 3) // return true;
 */
const isPowerOf = (number, primeNumber) => {
  let result = Math.pow(primeNumber, primeNumber);
  if (result === number) {
    return true;
  } else {
    return false;
  }
};

// console.log(isPowerOf(27, 3));

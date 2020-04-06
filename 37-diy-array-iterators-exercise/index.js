/**
 * Exercise #1
 *
 * forEach(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is
 * passed each element and the index.
 *
 */
function forEach(array, callback) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    callback(array[i], i);
  }
  return newArray;
}

// myArray = ["one", "two", "three"];
// function callback(element, index) {
//   // console.log(
//   //   `This is my callback function and it logs array items: ${element} + ${index}`
//   // );
// }
// forEach(myArray, callback);

// console.log(forEach(myArray, callback));

/**
 * Exercise #2
 *
 * map(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. A new
 * array is returned which contains
 * whatever was returned from each
 * time the callback was invoked.
 *
 */
function map(array, callback) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    const value = callback(array[i], i);
    newArray.push(value);
  }

  return newArray;
}

// myMapArray = [2, 3, 5];
// function mapCallback(element, index) {}
// map(myMapArray, mapCallback);

// console.log(map(myMapArray, mapCallback));

/**
 * Exercise #3
 *
 * filter(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. A new
 * array is returned which contains
 * _only_ the elements for which the
 * callback returned a truthy value.
 *
 */
function filter(array, callback) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    const value = callback(array[i], i);
    console.log(`the callback value was: ${value}`);

    if (Boolean(value) === true) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

// console.log(filter(myFilterArray, filterCallback));

/**
 * Exercise #4
 *
 * find(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns the _first element_
 * for which the callback returns a
 * truthy value.
 *
 */
function find(array, callback) {
  for (let i = 0; i < array.length; i++) {
    const value = callback(array[i], i);

    if (Boolean(value) === true) {
      return array[i];
    }
  }
}

/**
 * Exercise #5
 *
 * findIndex(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns the _index of
 * the first element_ for which the
 * callback returns a truthy value.
 *
 */
function findIndex(array, callback) {
  for (let i = 0; i < array.length; i++) {
    const value = callback(array[i], i);

    if (Boolean(value) === true) {
      return i;
    }
  }
}

/**
 * Exercise #6
 *
 * every(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns a boolean value
 * representing if every time the
 * callback was invoked it returned
 * a truthy value.
 *
 */
function every(array, callback) {
  for (let i = 0; i < array.length; i++) {
    const value = callback(array[i], i);

    if (Boolean(value) != true) {
      return false;
    }
  }

  // return false never occurred, so we can return true
  return true;
}

/**
 * Exercise #7
 *
 * some(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns a boolean value
 * representing if _any_ time the
 * callback was invoked it returned
 * a truthy value.
 *
 */
function some(array, callback) {
  for (let i = 0; i < array.length; i++) {
    const value = callback(array[i], i);

    if (Boolean(value) === true) {
      return true;
    }
  }
}

/**
 * Exercise #8
 *
 * reduce(array, callback, initialValue)
 *
 * Reduce is often used for combining
 * values together.
 *
 * `reduce` should take 3 arguments:
 * `array`, `callback` and `initialValue`.
 *
 * The callback is invoked for every
 * element in the array and is passed
 * **the current cumulative value**,
 * each element and the index. Whatever
 * the callback returns is the new
 * cumulative value. The function
 * should return the final cumulative
 * value.
 *
 */
function reduce(array, callback, initialValue = 0) {
  let cumulativeValue = initialValue;
  for (let i = 0; i < array.length; i++) {
    cumulativeValue = callback(cumulativeValue, array[i], i);
  }

  return cumulativeValue;
}

const reduceArray = [1, 10, 4, 27];
const keys = ["CON", "LAB", "LIB", "GRE"];
function reduceCallback(total, number) {
  return total + number;
}

const total = reduce(reduceArray, reduceCallback, 0);

const votingResults = reduce(
  keys,
  (results, key, i) => {
    results[key] = reduceArray[i];

    return results;
  },
  {}
);

const overTen = reduce(
  reduceArray,
  (filteredArray, number) => {
    if (number > 10) filteredArray.push(number);

    return filteredArray;
  },
  []
);

console.log(votingResults);

console.log(overTen);

console.log(reduce(reduceArray, reduceCallback, 0));

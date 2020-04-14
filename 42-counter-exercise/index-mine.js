let step = 1;
let counter = 0;
const counterValue = document.querySelector(".counter_value");

/**
 * Exercise 1
 *
 * create a function {action} which will take a {symbol} param: "+" or "-".
 * increment {counter} by {step} if you pass "+", or
 * decrement {counter} by {step} if you pass "-"
 *
 * NOTE: ".counter_value" should always represent the current value of {counter}
 */
const action = (symbol) => {
  //   console.log(counterValue);

  if (symbol === "+") {
    counter += step;
    counterValue.innerText = counter;
  } else if (symbol === "-") {
    counter -= step;
    counterValue.innerText = counter;
  }

  //   counter_value = counter;
  //   console.log(counterValue);
};
// console.log(action("+"));

/**
 * Exercise 2
 *
 * When the user clicks on "Set step" button, you need to:
 * 1. set {step} to the current value of input.
 * 2. reset value of input field to 1
 * 3. update value of ".step_value" to value of {step}
 *
 * NOTE: {step} should be an integer
 *
 */
const form = document.querySelector(".step_form");
const input = form.querySelector("input");
const stepValueEl = document.querySelector(".step_value");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  step = Number(input.value);

  input.value = 1;
  stepValueEl.innerText = step;
});

/**
 * Exercise 3
 *
 * handle click on "#decrement" button and
 * decrement counter by {step}
 *
 * NOTE: remember to use your {action} function
 */
const decBtn = document.querySelector("#decrement");

decBtn.addEventListener("click", (event) => {
  action("-");
});

/**
 * Exercise 4
 *
 * handle click on "#increment" button and
 * increment counter by {step}
 *
 * NOTE: remember to use your {action} function
 */
const incBtn = document.querySelector("#increment");

incBtn.addEventListener("click", (event) => {
  action("+");
});

/**
 * Exercise 5
 *
 * when the user clicks on "#auto_decrement",
 * {counter} should be decremented by {step} every second
 *
 * NOTE: ".counter_value" should represent current state of counter
 */
let intervalId = 0;

const autoDecrement = () => {
  const autoDecBtn = document.querySelector("#auto_decrement");

  autoDecBtn.addEventListener("click", (event) => {
    clearInterval();
    intervalId = setInterval(() => {
      action("-");
    }, 1000);
  });
};

autoDecrement();

/**
 * Exercise 6
 *
 * when the user clicks on "#auto_increment",
 * {counter} should be incremented by {step} every second
 *
 * NOTE: ".counter_value" should represent current state of counter
 */

const autoIncrement = () => {
  const autoIncBtn = document.querySelector("#auto_increment");

  autoIncBtn.addEventListener("click", (event) => {
    clearInterval();
    intervalId = setInterval(() => {
      action("+");
    }, 1000);
  });
};

autoIncrement();

/**
 * Exercise 7
 *
 * when the user clicks on "#stop_auto",
 * the auto counter should stop
 */
const stopAuto = document.querySelector("#stop_auto");

stopAuto.addEventListener("click", (event) => {
  clearInterval(intervalId);
});

// OPEN index.html IN YOUR BROWSER
// CALL YOUR FUNCTIONS IN DEV TOOLS TO SEE CHANGES

/**
 * Exercise 1
 *
 * create a function {clickTheButton} which listens for a click
 * on a button inside div with class "click", and
 * logs a message in the console when a click occurs
 */
const clickTheButton = () => {
  let button = document.querySelector(".click button");
  button.addEventListener("click", () => {
    console.log("the button was clicked");
  });
};

/**
 * Exercise 2
 *
 * create a function {hoverOver} which listens for a hover over an
 * "a" tag inside div with class "mouseover" and logs a message in the console
 */
const hoverOver = () => {
  let a = document.querySelector(".mouseover a");
  a.addEventListener("mouseover", () => {
    console.log("the a was hovered over");
  });
};

/**
 * Exercise 3
 *
 * create a function {handleLeave} which listens for when the
 * cursor leaves the "a" tag inside div with class "mouseover"
 * and log a message in the console
 */
const handleLeave = () => {
  let a = document.querySelector(".mouseover a");
  a.addEventListener("mouseout", () => {
    console.log("the a was hovered over and then the pointer left the area");
  });
};

/**
 * Exercise 4
 *
 * create a function {focusOnMe} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 */
const focusOnMe = () => {
  let input = document.querySelector(".input input");
  input.addEventListener("focus", () => {
    console.log("an input element inside div.input was focussed on");
  });
};

/**
 * Exercise 5
 *
 * create a function {clickElsewhere} which will log a message in the console
 * when first you focus on input which is inside 'div' with class 'input'
 * and then click on anything else
 */
const clickElsewhere = () => {
  let input = document.querySelector(".input input");

  input.addEventListener("blur", () => {
    console.log("something was clicked after .input input was focussed on");
  });
};

/**
 * Exercise 6
 *
 * create a function {pressAKey} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 * and then press any key
 */
const pressAKey = () => {
  let input = document.querySelector(".input input");

  input.addEventListener("keydown", () => {
    console.log("a key was pressed inside .input input");
  });
};

/**
 * Exercise 7
 *
 * create a function {releaseAKey} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 * and then press any key and release it
 */
const releaseAKey = () => {
  let input = document.querySelector(".input input");

  input.addEventListener("keyup", () => {
    console.log("a key was pressed then released inside .input input");
  });
};

/**
 * Exercise 8
 *
 * create a function {inputToUpperCase} which will convert value of input
 * to uppercase when you focus on input which is inside 'div' with class 'input'
 * and then press any key and release it
 */
const inputToUpperCase = () => {
  let input = document.querySelector(".input input");
  let inputValue = input.value;

  input.addEventListener("keyup", () => {
    console.log("a key was pressed then released inside .input input");
    inputValue = input.value;
    inputValue = inputValue.toUpperCase();

    input.setAttribute("value", inputValue);
    input.value = inputValue;
  });
};
// console.log(inputToUpperCase());

/**
 * Exercise 9
 *
 * create a function {handleSelectChange} which will log selected option value
 * in console when you select an option in "select" with id "items"
 */
const handleSelectChange = () => {
  let selectElement = document.querySelector("#items");

  selectElement.addEventListener("change", (event) => {
    console.log(event.target.value);
  });
};

/**
 * Exercise 10
 *
 * create a function {submitFormHandler} which will get values from form inputs
 * on submit, build an object where property names will be input names,
 * and values, input values and log it in the console
 */
const submitFormHandler = () => {
  let form = document.querySelector("form");
  let formInputs = form.querySelectorAll("input");
  let formObject = {};

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    formInputs.forEach((element) => {
      // get name and value and set to object:
      let name = element.getAttribute("name");
      let value = element.value;
      formObject[name] = value;
    });

    console.log(formObject);
  });
};
submitFormHandler();

/**
 * Exercise 11
 *
 * create a function {handleScroll} which will get window vertical scroll position
 * on scroll, and log it in the console
 */
const handleScroll = () => {
  window.addEventListener("scroll", (event) => {
    console.log("this is the vertical scroll position = " + window.scrollY);
  });
};

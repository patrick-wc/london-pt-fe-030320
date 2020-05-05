Object.defineProperty(global.Element.prototype, "innerText", {
  get() {
    return this.textContent;
  },
  set(str) {
    this.innerHTML = this.textContent = str;
  },
});

const form = document.querySelector("form");
const result = document.querySelector(".result");
const input = document.querySelector("input");
// ================================

// BEFORE YOU START:
// run `npm install -g serve`
// then run `serve ./` to serve your index page

/**
 * Exercise 1
 *
 * create a function {getResponse} which takes
 * a URL as an argument and makes a GET request.
 * If the response {status} code is successful,
 * call a function which will render "Valid link! {Link}"
 * in {result} element, otherwise render
 * `Request failed with status code: {errorCode}`
 */
const getResponse = (url) => {
  fetch(url).then((response) => {
    if (response.ok) {
      renderLink(url);
    } else {
      renderError(response.status);
    }
  });
};

// getResponse("https://cat-fact.herokuapp.com/facts");

const renderLink = (url) => {
  result.innerHTML = "Valid link! ";

  let a = document.createElement("a");
  a.setAttribute("target", "_blank");
  a.setAttribute("rel", "noopener");
  a.setAttribute("href", url);
  a.innerHTML = url;
  result.append(a);
};

const renderError = (statusCode) => {
  result.innerHTML = `Request failed with status code: ${statusCode}`;
};

/**
 * Description of the application:
 *
 * As a user I should be able to:
 * 1. provide URL in input and submit my request
 * 2. if provided URL is a valid API URL, then I should see
 * a message with a link.
 * 3. When I click on a link, it should be opened in a new tab
 * 4. if provided URL is invalid API URL, then I should see
 * an error message in {result} with status code.
 * 5. When I focus on input, it should clear my input and hide
 * {result}
 */

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //   console.log(`form input when submitted was: ${input.value}`);
  if (input.value.length > 0) {
    getResponse(input.value);
  }
});

input.addEventListener("focus", (event) => {
  input.value = "";
  result.innerHTML = "";
});

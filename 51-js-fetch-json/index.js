const button = document.querySelector("button");
const result = document.querySelector(".result");
const input = document.querySelector("input");
const catFactUrl = "https://cat-fact.herokuapp.com/facts";
// ================================

// URL: https://cat-fact.herokuapp.com/facts

// BEFORE YOU START:
// run `npm install -g serve`
// then run `serve` in this directory

/**
 * Exercise 1
 *
 * create a function {fetchData} which takes
 * a URL as an argument and sends a GET request.
 * When you get a response, return an array of facts.
 */
const fetchData = async (url) => {
  const catFactsArray = await fetch(url)
    .then((response) => response.json())
    .then((catFacts) => {
      return catFacts;
    });

  return catFactsArray.all;
};

/**
 * Description of the application:
 *
 * As a user I should be able to:
 * 1. click on a button "Get random facts"
 * 2. view 3 random facts in ".result" element
 */
button.addEventListener("click", () => {
  // clear first
  result.innerHTML = "";

  // update with new facts
  const catFacts = fetchData(catFactUrl).then((catFacts) => {
    // randomize them
    catFacts.sort(() => Math.random() - 0.5);

    // show 3
    catFacts.forEach((fact, i) => {
      if (i < 3) {
        const factLi = document.createElement("li");
        const factP = document.createElement("p");
        const factAuthorP = document.createElement("p");
        const author = `${fact.user.name.first} ${fact.user.name.last}`;

        factP.classList.add("fact");
        factP.innerHTML = fact.text;

        factAuthorP.classList.add("author");
        factAuthorP.innerHTML = author;

        factLi.append(factP);
        factLi.append(factAuthorP);
        result.append(factLi);
      }
    });
  });
});

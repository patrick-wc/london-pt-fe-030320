import React from "react";
import "./App.css";

const APP_TITLE = "Awesome Pet Shop";

let today = new Date();
const dd = String(today.getDate());
const mm = String(today.getMonth() + 1); //January is 0!
const yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;

/**
 * Exercise: 1
 *
 * 1. Create a list element and render all animals as list items.
 *
 * Exercise 2
 *
 * 1. Display the APP_TITLE in an h1
 * 2. Display today's date in a p
 */

const App = () => {
  const animals = ["cat", "dog", "giraffe", "pig", "lion", "rabbit"];

  return (
    <div className="app">
      <h1>{APP_TITLE}</h1>
      <p>{today}</p>
      <ul>
        {animals.map((animalName) => (
          <li key={animalName}>{animalName}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

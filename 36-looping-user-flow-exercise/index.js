// install and  import "readline-sync" npm package before you do exercises
const readlineSync = require("readline-sync");

let selectedItems = {
  book: "",
  movie: "",
  nextTrip: "",
};

const movies = [
  "The Invisible Man",
  "Never Rarely Sometimes Always",
  "Gretel & Hansel",
  "No time to die",
  "Bloodshot",
  "Onward",
  "Sonic",
];

const books = [
  "My Dark Vanessa",
  "Uncanny Valley",
  "Weather",
  "The night watchman",
  "All adults here",
  "Dear Edward",
  "Grown ups",
];

const countries = [
  "Italy",
  "France",
  "Germany",
  "Spain",
  "Portugal",
  "Denmark",
  "Netherland",
];

/**
 * Exercise 1
 *
 * create a sub menu "Books" where you need to render a list of {books}.
 * User should be able to select one. On selection store the response
 * to {user.book}.
 *
 * NOTE: You need to add option to go back, to main menu
 */
const user = {};

function subMenuBooks() {
  console.log("Please choose a book:");
  books.forEach((book, index) => {
    console.log(`${index + 1}: ${book}`);
  });

  console.log(`${books.length + 1}: Back to main menu`);

  const choice = readlineSync.question(
    "Enter the number which matches your book choice: "
  );
  const choiceAsNumber = parseInt(choice);

  if (choiceAsNumber === books.length + 1) {
    mainMenu();
  }
  const chosenBook = books[choiceAsNumber - 1];

  if (chosenBook !== undefined) {
    console.log(`You chose ${chosenBook}!`);
    user.book = chosenBook;
    selectedItems.book = chosenBook;
  } else {
    console.log("You did not pick a book from the list. Please choose again");
    subMenuBooks();
  }
}

// subMenuBooks();

/**
 * Exercise 2
 *
 * create a sub menu "Movies" where you need to render a list of {movies}.
 * User should be able to select one. On selection store the response
 * to {user.movie}.
 *
 * NOTE: You need to add option to "go back", to main menu
 */
// selectedMovie = readlineSync.keyInSelect(movies, "Please select a movie: ");
// user.movie = movies[selectedMovie];
// console.log(user.movie);

function subMenuMovies() {
  console.log("Please choose a movie:");
  movies.forEach((movie, index) => {
    console.log(`${index + 1}: ${movie}`);
  });

  console.log(`${movies.length + 1}: Back to main menu`);

  const choice = readlineSync.question(
    "Enter the number which matches your movie choice: "
  );
  const choiceAsNumber = parseInt(choice);

  if (choiceAsNumber === movies.length + 1) {
    mainMenu();
  }
  const chosenMovie = movies[choiceAsNumber - 1];

  if (chosenMovie !== undefined) {
    console.log(`You chose ${chosenMovie}!`);
    user.movie = chosenMovie;
    selectedItems.movie = chosenMovie;
  } else {
    console.log("You did not pick a movie from the list. Please choose again");
    subMenuMovies();
  }
}

// subMenuMovies();

/**
 * Exercise 3
 *
 * create a sub menu "Next destination" where you need to render a list
 * of {countries}. User should be able to select one. On selection store
 * the response to {user.nextTrip}.
 *
 * NOTE: You need to add option to go back, to main menu
 */
function subMenuDestinations() {
  console.log("Please choose a country:");
  countries.forEach((country, index) => {
    console.log(`${index + 1}: ${country}`);
  });

  console.log(`${countries.length + 1}: Back to main menu`);

  const choice = readlineSync.question(
    "Enter the number which matches your country choice: "
  );
  const choiceAsNumber = parseInt(choice);

  if (choiceAsNumber === countries.length + 1) {
    mainMenu();
  }
  const chosenDestination = countries[choiceAsNumber - 1];

  if (chosenDestination !== undefined) {
    console.log(`You chose ${chosenDestination}!`);
    user.country = chosenDestination;
    selectedItems.nextTrip = chosenDestination;
  } else {
    console.log(
      "You did not pick a country from the list. Please choose again"
    );
    subMenuDestinations();
  }
}

// subMenuDestinations();

/**
 * Exercise 4
 *
 * create a top menu with categories: "Books", "Movies", "Next destination"
 * so user can pick one. User also should have the option "Exit".
 * When the user pick "Exit", log selected items.
 */
const subMenus = ["Books", "Movies", "Next destination"];
function mainMenu() {
  console.log("Main menu:");
  console.log("Please choose a subMenu:");
  subMenus.forEach((subMenu, index) => {
    console.log(`${index + 1}: ${subMenu}`);
  });

  console.log(`${subMenus.length + 1}: Quit and show choices`);

  const choice = readlineSync.question(
    "Enter the number which matches your subMenu choice: "
  );
  const choiceAsNumber = parseInt(choice);

  if (choiceAsNumber === subMenus.length + 1) {
    console.log("Exit! Showing your choices:");
    for (const selectedItem in selectedItems) {
      console.log(`${selectedItem}: ${selectedItems[selectedItem]}`);
    }
    return;
  }
  const chosenSubMenu = subMenus[choiceAsNumber - 1];

  if (chosenSubMenu !== undefined) {
    console.log(`chosen `);

    if (choiceAsNumber === 1) {
      subMenuBooks();
    } else if (choiceAsNumber === 2) {
      subMenuMovies();
    } else if (choiceAsNumber === 3) {
      subMenuDestinations();
    }
  } else {
    console.log(
      "You did not pick a subMenu from the list. Please choose again"
    );
    subMenuDestinations();
  }
}

mainMenu();

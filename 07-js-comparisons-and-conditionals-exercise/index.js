const target = 15;
const userValue = "15";

const password = "JSisKool888";
const passwordConfirmation = "JSisCool888";

const sortOrder = "ALPHABETICAL";

// ADD YOUR CODE BELOW
if ( target == userValue ) {
    targetMatchesCoercedUserValue = true;
}

if ( target === userValue ) {
    targetMatchesUserValue = true;
} else {
    targetMatchesUserValue = false;
}

let passwordMessage;

if ( password === passwordConfirmation ) {
    passwordMatchesConfirmation = true;
} else {
    passwordMessage = "Oops, your password and confirmation do not match!";
    passwordMatchesConfirmation = false;
}

let fruits;

if ( sortOrder === 'ALPHABETICAL' ) {
    fruits = "banana, cherry, watermelon";
}

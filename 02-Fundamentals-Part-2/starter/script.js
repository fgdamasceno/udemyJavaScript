// STRICT MODE ====================
"use strict";

// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) hasDriversLicence = true;
// if (hasDriversLicence) console.log("I can drive :D");

// const interface = "Audio";
// const private = 534;

// FUNCTIONS ====================
/*
function logger() {
  console.log("My name is Fernando");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

/*
// function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1982);
console.log(age1);

// function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1982);
console.log(age2);
*/

/*
// Arrow Function
const calcAge3 = (birthYear) => 2024 - birthYear;
const age3 = calcAge3(1982);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  //   return retirement;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1982, "Fernando"));
console.log(yearsUntilRetirement(1987, "Jane"));
*/

// Function calling others functions
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));
*/

// Reviewing Functions
/*
const calcAge = function (birthYear) {
  return 2024 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }
};

console.log(yearsUntilRetirement(1982, "Fernando"));
console.log(yearsUntilRetirement(1938, "Waldir"));
*/

// Arrays
/*
const years = new Array(1991, 1984, 2008, 2020); // instanciado

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends.length);
console.log(friends[friends.length - 1]); // index 2

friends[2] = "Jay";
console.log(friends);

const jonas = ["Jonas", "Schmedtmann", 2037 - 1991, "teacher", friends]; // stores multiple values
console.log(jonas);
*/

// Arrays Methods
/*
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);
friends.push("Jay"); // adds to the end of the array | returns the new length
console.log(friends);
friends.unshift("John"); // adds to the beginnign of the array | returns the new length
console.log(friends);
friends.pop(); // removes the last element of the array | returnes the value removed
console.log(friends);
friends.shift(); // removes the first element of the array | returns the value removed
console.log(friends);

console.log(friends.indexOf("Steven")); // returns the index of the element
console.log(friends.indexOf("Bob")); // returns -1 if the element in not in the array

console.log(friends.includes("Steven")); // returns true if the element exists
console.log(friends.includes("Bob")); // returns false if the element does not exists
// OBS.: .includes() uses 'strict equality' (===) to compare values
*/

// Objects

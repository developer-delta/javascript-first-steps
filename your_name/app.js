// this is the syntax for a code comment...
// alert("does this work?? Hoping so...");

// console.log("Hey this is a console.log statment hmmmm");

// console.log("first");
// console.log("second");
// console.log("third");
// console.log("fourth");
// console.log("fifth");

// Types of values

// "I'm a string" // string type with value "I'm a string.
// 25 // type of number

// true // Boolean
// false // Boolean

// 'single'

// "double"

// number

// console.log("3 + 1");

// console.log(4 + 1);
// console.log(4 / 10);
// console.log(4 * 198237);

// Boolean

// console.log(5 === 4);

// console.log("thing1" === "thing5");

// variable

// Variable assignment
let sean = "Seanie Boi";

// console.log(sean);

let blah = "kwehgoiweg";

// console.log(blah);

let num = 4;
// console.log(num)

// var oldSchool = "old";

// variable reassignment
let maidenName = "Nutt";
// console.log(maidenName);

// seans dad changes name to McKnight

maidenName = "McKnight";
// console.log(maidenName);


const IWONTCHANGE = 42;
// console.log(IWONTCHANGE);


// You CANNOT do this: (it will throw and error)
// IWONTCHANGE = 55;

// const does NOT allow you to change ANYTHING about your variables.

const MAX_VOLUME = 95; // preferred to use all caps for constants

// make it a habit to default to using const when declaring variables.

const rando = Math.random();
// console.log(rando);

// ----------------------------


// === strict equality operator
// = for ASSIGNMENT


// ----------------------------


// CONCATENATION
// concatenation is combining strings


// these two output the same thing:
// old-school concatenation
// console.log("Sean " + maidenName + " was a Nutt");

// template literal
// console.log(`Sean ` + `is a ${maidenName}`);

// ---------------------------

// Functions

// Both valid function syntax
() => {  }

() => {
  // code goes here
}

// --------------------

// if a function is like a machine then:
// (ingredient) => {
//   // gears
//   // cogs
//   // springs
//   // stuff happening and being manipulated
//   return ingredient; // spits something out
// }




// common syntax for creating functions.
// this is a function declaration:
// const myFirstFunc = (ingredient) => { // ingredient is a PARAMETER (PLACEHOLDER)

//   let newThing = ingredient + " - That ingredient ordered.";

//   console.log(newThing);
//   return newThing;
// }

// // to use a function you must invoke it
// // invoking
// // triggering
// // calling a function
// // executing function
// myFirstFunc("coffee cup"); // coffee cup is an ARGUMENT

// myFirstFunc("butthole");

let seansVar;
console.log(seansVar);
seansVar = "I'm a string";
console.log(seansVar);


// ----------------

(x) => {
  console.log(x * x);
  return x * x;
}

const squareNum = (x) => {
  console.log(x * x);
  return x * x;
}

squareNum(10);
squareNum(156);
squareNum(3466);
squareNum(890);
squareNum(14);
squareNum(0);
squareNum(1);
// write an alert that welcomes users to your webpage
//alert('Welcome to Paint em up Face and body Art');

// console log a string

console.log('Who love Star wars?');

// console log a number
// and make sure to open your browser dev tools to see the output in the console
console.log(14);


// create a (let) variable named myString and assign it to any string you like
let myString = 'Hi string';


// create a (let) variable named myNum and assign it to any number you like

let myNum = 121;

// write two console log statements to log out myString and myNum

console.log(myString);

console.log(myNum);
// go back and comment out your alert statement at the beginning of this file
//finish


// create a (const) variable and assign it to a number

const number = 15;

// re-assign myString to a different string and console log it again

myString = 'Hi number';

// using concatenation, console log both let variables and your const variable as a single string

console.log('What is your favorite number' + myNum + ' what is your other favorite number' + number + '.');

// use the strict equality operator to compare your two variables that are numbers. console log that out
console.log(myNum === number);


// add a console.log statement to this function that will log out the "name" parameter
const printName = (name) => {
    console.log(name);
  };
  
  // invoke the printName function here and pass in your name as an argument
  // invoke (call) function here

  printName('Jonah')
  
  
  // update this function so that it adds 2 to any given number.
  const addTwo = (numbers_two) => {
    console.log(numbers_two + 2 );
  
  };
  
  // this should output 7
  console.log(addTwo(5)); // (don't change this line)
  
  // this should output 22
  console.log(addTwo(20)); // (don't change this line)
  
  
  
  // write a function named "squared" that takes in one parameter.
  const check = (squared) => {
    return squared * squared
  }
  
  
  // in the body (between the curly braces) of the function, multiply the parameter by itself.
  // make sure the function has a "return" statement
  
  
  
  // call/invoke your function and pass it the number 7
  console.log(check(7));
  
  
  
  // write a function that re-assigns one of the previous let variables we created to the string "I'm a changed var"
  new_string = "";
  change = (new_string) => {
    return myNum = new_string
  }                                                       
  change("I'm a changed var");

  console.log(myNum);
  // uncomment the following line
  alert("I'm a badass and I'm done!");
  

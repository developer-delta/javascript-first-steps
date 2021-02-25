// alert("This is JavaScript in action...it doesn't suck");

// console.log('Here is a secret message...');

// console.log(6*111)

// console.log('first');
// console.log('second');
// console.log('third');
// console.log('fourth');
// console.log('fifth');
// console.log('sixth');
// console.log(true)

// let harry = 'Daniel Radcliffe';

// let hermione = 'Emma Watson';

// console.log(harry);

// let darkLord = "Tom Riddle";
// console.log(darkLord);

// darkLord = "Voldemort";
// console.log(darkLord);

// let randoMath = Math.floor(Math.random() * 10 + 1)
// console.log(Math.floor(Math.random() * 10 + 1))
// console.log(Math.floor(Math.random() * 10 + 1))
// console.log(Math.floor(Math.random() * 10 + 1))
// console.log(randoMath)
// console.log(randoMath)
// console.log(randoMath)
// console.log(randoMath)
// console.log(randoMath)





// write an alert that welcomes users to your webpage

// alert('Welcome to HELL!');

// console log a string

console.log('This page is meant to display your darkest fears');

// console log a number
// and make sure to open your browser dev tools to see the output in the console

console.log(6*111);

// create a (let) variable named myString and assign it to any string you like

let myString = 'I am the dark lord Lucifer';

// create a (let) variable named myNum and assign it to any number you like

let myNum = 666;

// write two console log statements to log out myString and myNum

console.log(myString);
console.log(myNum)

// go back and comment out your alert statement at the beginning of this file



// create a (const) variable and assign it to a number

const theNum = 42069

// re-assign myString to a different string and console log it again

myString = 'Bow to me, silly mortals'

// using concatenation, console log both let variables and your const variable as a single string

//es5 concatenation
console.log(myString + ' and yell out ' + myNum + ' to summon the great ' + theNum);

// es6 concatenation (with a template literal) supports multi line breaks
console.log(`${myString} and yell out ${myNum} to 


summon the great ${theNum}`);

// use the strict equality operator to compare your two variables that are numbers. console log that out

let six = ('6');
let nine = ('9');
console.log(six === nine);
// type coersion vvv BAD (JS trying to help you)
console.log('6' == 6);

// add a console.log statement to this function that will log out the "name" parameter
const printName = (name) => {
  console.log(`${name} is a boozebag`)
  return `${name} is a boozebag` // code here
  };
  
  // invoke the printName function here and pass in your name as an argument
  // invoke (call) function here
  
  printName('Greg');
  printName('Mikel');
  
  // update this function so that it adds 2 to any given number.
  const addTwo = (x) => {
  return x + 2;
  };
  
  // this should output 7
  console.log(addTwo(5)); // (don't change this line)
  
  // this should output 22
  console.log(addTwo(20)); // (don't change this line)
  
  
  
  // write a function named "squared" that takes in one parameter.
  
  const squared = (x) => {
    return x * x;
  }
  
  // in the body (between the curly braces) of the function, multiply the parameter by itself.
  // make sure the function has a "return" statement
  
  
  
  // call/invoke your function and pass it the number 7
  console.log(squared(7));
  
  
  
  // write a function that re-assigns one of the previous let variables we created to the string "I'm a changed var"
  console.log(myString)

  const changedVar = () => {
    myString = "I'm a changed var"
    return myString
  }; 

  changedVar(myString);

  console.log(myString);


  const bestFriendMaker = (name1, name2) => {
    return `${name1} is best boozebags with ${name2}`;
  };

  let result = bestFriendMaker('Joe', 'god')

  console.log(result)
  // uncomment the following line
  // alert("I'm a badass and I'm dead!")
  
const userInputOne = document.querySelector('.username1')
const userInputTwo = document.querySelector('.username2')

const kissButton = document.querySelector('button')
// console.log(kissButton)
kissButton.addEventListener('click', () => {
  let output = `${userInputOne.value} is best boozebags with ${userInputTwo.value}`;
  document.querySelector("div").innerHTML += `<div>${output}</div>`;
});


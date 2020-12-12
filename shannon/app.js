console.log("hiya!");
console.log("kewlllll")
console.log(3 + 1);

let clickCountNum = 0;
let mealNum = 0;
let clickMessage = "";
let mealMessage = "";
let color = 0;
const bubbleColors = ['pink', 'blue', 'red', 'green', 'yellow', 'orange', 'purple', 'lime'];

const hobbit = {
  meals: ['breakfast',
    'second breakfast',
    'elevenses',
    'lunch',
    'afternoon tea',
    'dinner',
    'supper'
  ],
  time: ['7:00 am',
    '9:00am',
    '11:00am',
    '1:00pm',
    '3:00pm',
    '5:00pm',
    '7:00pm'
  ]
};

let currentMeal = hobbit.meals[mealNum];
let currentMealTime = hobbit.meals[mealNum];

const clickMessaging = {
  10: "You are great at clicking",
  20: "Keep onnn clicking!",
  30: "Click awayyyy",
  40: "You're on a roll!",
  50: "wow, that is too many clicks! Lets start over!"
}

function getCurrentMeal() {
  return hobbit.meals[mealNum];
}

function getCurrentMealTime() {
  return hobbit.time[mealNum]
}

function getClickMessage() {
  return clickMessage;
}

function getMealMessage() {
  return mealMessage;
}

function nextMeal() {
  mealNum === 6 ? mealNum = 0 : mealNum++;
  document.querySelector('#meal').innerHTML = getCurrentMeal();
  document.querySelector('#time').innerHTML = getCurrentMealTime();
  document.querySelector('#mealMessage').innerHTML = mealNum === 6 ? "You've had all your hobbit meals for today! Start again tomorrow!" : "";
}

function clicky() {
  if (clickCountNum === 50) deleteBubbles();
  clickCountNum < 50 ? clickCountNum++ : clickCountNum = 0
  if (clickCountNum > 0) addBubble();
  document.querySelector('#clickCount').innerHTML = clickCount();
  if (Object.keys(clickMessaging).includes(clickCountNum.toString())) clickMessage = clickMessaging[clickCountNum];
  else clickMessage = "";
  document.querySelector('#clickMessage').innerHTML = getClickMessage();
}

function clickCount() {
  return clickCountNum;
}

document.querySelector('#clickCount').innerHTML = clickCount();
document.querySelector('#meal').innerHTML = getCurrentMeal();
document.querySelector('#time').innerHTML = getCurrentMealTime();


let currentBubbleClass = 0;
const bubbleClasses = [
  ['x', 'y'],
  ['z', 'w'],
  ['x', 'w'],
  ['z', 'y']
]


function addBubble() {
  var div = document.createElement('div');
  div.className = `bubble ${bubbleClasses[currentBubbleClass][0]}`;
  div.innerHTML = `<div class="${bubbleClasses[currentBubbleClass][1]} bubble-structure ${bubbleColors[color]}"></div>`;
  document.body.appendChild(div);
  currentBubbleClass < 3 ? currentBubbleClass++ : currentBubbleClass = 0;
  color <= 7 ? color++ : color = 0;
}

function deleteBubbles() {
  var bubbles = document.body.querySelectorAll(".bubble");
  bubbles.forEach(bubble => bubble.remove());
}


alert("Welcome!");
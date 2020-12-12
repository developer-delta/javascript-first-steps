let clickCount = 0;
let mealNum = 0;

const hobbitMeals = [
  { meal: 'Breakfast', time: '07:00am' },
  { meal: 'Second breakfast', time: '09:00am' },
  { meal: 'Elevenses', time: '11:00am' },
  { meal: 'Luncheon', time: '01:00pm' },
  { meal: 'Afternoon tea', time: '03:00pm' },
  { meal: 'Dinner', time: '05:00pm' },
  { meal: 'Supper', time: '07:00pm' },
]

function getClickMessaging(clickCount) {
  switch (clickCount) {
    case 10:
      return "You are great at clicking"
    case 20:
      return "Keep onnn clicking!"
    case 30:
      return "Click awayyyy"
    case 40:
      return "You're on a roll!"
    case 50:
      return "wow, that is too many clicks! Lets start over!"
    default:
      return ""
  }
}

function getMealMessaging(mealNum) {
  switch (mealNum) {
    case 2:
      return "What about elevenses?"
    case 4:
      return "Care for a spot of tea?"
    case 6:
      return "You've had all your hobbit meals for today! Start again tomorrow!"
    default:
      return ""
  }
}

// This method updates the current meal and then reflects the change in the DOM
function nextMeal() {
  mealNum === 6 ? mealNum = 0 : mealNum++;
  document.querySelector('#meal').innerHTML = hobbitMeals[mealNum].meal;
  document.querySelector('#time').innerHTML = hobbitMeals[mealNum].time;
  document.querySelector('#mealMessage').innerHTML = getMealMessaging(mealNum);
}

//This method increments the clickCount and adds bubbles up to a count of 50
function clicky() {
  if (clickCount === 50) {
    deleteBubbles();
    clickCount = 0
  } else {
    clickCount++;
    addBubble();
  }
  document.querySelector('#clickCount').innerHTML = clickCount;
  document.querySelector('#clickMessage').innerHTML = getClickMessaging(clickCount);
}

// this was a quick attempt to add variation to the bubble animation patterns and colors
let color = 0;
let currentBubbleClass = 0;
const bubbleColors = ['pink', 'blue', 'red', 'green', 'yellow', 'orange', 'purple', 'lime'];
const bubbleClasses = [
  ['x', 'y'],
  ['z', 'w'],
  ['x', 'w'],
  ['z', 'y']
]

function addBubble() {
  var div = document.createElement('div');
  div.className = `bubble-container ${bubbleClasses[currentBubbleClass][0]}`;
  div.innerHTML = `<div class="bubble ${bubbleClasses[currentBubbleClass][1]} ${bubbleColors[color]}"></div>`;
  document.body.appendChild(div);
  currentBubbleClass < 3 ? currentBubbleClass++ : currentBubbleClass = 0;
  color <= 7 ? color++ : color = 0;
}

function deleteBubbles() {
  var bubbles = document.body.querySelectorAll(".bubble");
  bubbles.forEach(bubble => bubble.remove());
}


// initializing what is displayed on intial page load in the DOM
document.querySelector('#clickCount').innerHTML = clickCount;
document.querySelector('#meal').innerHTML = hobbitMeals[mealNum].meal;
document.querySelector('#time').innerHTML = hobbitMeals[mealNum].time;
alert("Welcome!");
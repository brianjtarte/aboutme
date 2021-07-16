'use strict';

let userName = prompt('Hey! What\'s your name?');
alert('Hello ' + userName);

let answer1 = prompt('Do I like dogs?').toLowerCase();

// console.log('User entered answer to question 1 ' + answer1);

if(answer1 === 'yes' || answer1 === 'y'){

  alert('No...I LOVE them!');
}
else if (answer1 === 'no' || answer1 === 'n'){
  alert('This is the opposite of the correct answer.');
}
else {
  alert('Please answer yes or no');
}

let answer2 = prompt('Did I fix fighter jets in the Marine Corps?').toLowerCase();

// console.log('User entered answer to question 2 ' + answer2);

if(answer2 === 'yes' || answer2 === 'y'){
  alert('Good guess, onto the next one.');
}
else if(answer2 === 'no' || answer2 === 'n'){
  alert('Guess again!');
}
else {
  alert('Really? You didn\'t learn the first time? Please answer yes or no.');
}

let answer3 = prompt('Is chocolate ice cream my favorite flavor?').toLowerCase();

// console.log('User entered answer to question 3 ' + answer3);

if(answer3 === 'yes' || answer3 === 'y'){
  alert('I know, it\'s basic, but I love it!');
}
else if(answer3 === 'no' || answer3 === 'n'){
  alert('Obviously, you\'re wrong.');
}
else {
  alert('Really? You didn\'t learn the SECOND time? Please answer yes or no.');
}

let answer4 = prompt('Did Bill Nye The Science Guy give me a ride in his Tesla?').toLowerCase();

// console.log('User entered answer to question 4 ' + answer4);

if(answer4 === 'yes' || answer4 === 'y'){
  alert('I know, it sounds crazy, but it is true!');
}
else if(answer4 === 'no' || answer4 === 'n'){
  alert('Surprisingly, you are incorrect.');
}
else {
  alert('You\'ve had THREE tries to answer correctly! Please answer yes or no.');
}

let answer5 = prompt('Is my favorite movie Braveheart?').toLowerCase();

// console.log('User entered answer to question 5 ' + answer5);

if(answer5 === 'yes' || answer5 === 'y'){
  alert('FREEEEEEEEDOM! ' + 'Thanks for playing, ' + userName);
}
else if(answer5 === 'no' || answer5 === 'n'){
  alert('Try again. ' + 'Thanks for playing, ' + userName);
}
else {
  alert('Okay this is absurd ' + userName + ' Please answer yes or no.');
}







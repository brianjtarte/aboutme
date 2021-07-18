'use strict';


let userName = prompt('Hey! What\'s your name?');
alert('Hello ' + userName);

let answer1 = prompt('Do I like dogs?').toLowerCase();

let answer = 0;

// console.log('User entered answer to question 1 ' + answer1);

if(answer1 === 'yes' || answer1 === 'y'){

  alert('No...I LOVE them!');
  answer++;
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
  answer++;
}
else if(answer2 === 'no' || answer2 === 'n'){
  alert('Guess again!');
}
else {
  alert('Really? You didn\'t learn the first time? Please answer yes or no.');
  answer++;
}

let answer3 = prompt('Is chocolate ice cream my favorite flavor?').toLowerCase();

// console.log('User entered answer to question 3 ' + answer3);

if(answer3 === 'yes' || answer3 === 'y'){
  alert('I know, it\'s basic, but I love it!');
  answer++;
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
  answer++;
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
  answer++;
}
else if(answer5 === 'no' || answer5 === 'n'){
  alert('Try again. ' + 'Thanks for playing, ' + userName);
}
else {
  alert('Okay this is absurd ' + userName + ' Please answer yes or no.');
}

let myFavNumber = 5;
let userResponse = +prompt('Can you guess my favorite number? HINT: it is less than 10 and you have 4 tries to guess!');

let attemptsRemaining = 3;
let attempts = 3;

while (attemptsRemaining) {
  for (let i = 0; i < attempts; i++){
    console.log(`i: ${i}`);
    console.log(`attemptsRemaining: ${attemptsRemaining}`);
    if (userResponse === myFavNumber){
      attemptsRemaining = 0;
      alert(`You're right!`);
      answer++;
      break;
    }
    else if (userResponse < myFavNumber){
      alert(`Too low, guess again! You have ${attemptsRemaining} attempts remaining.`);
      userResponse = +prompt(`Can you try another number?`);
    }
    else if (userResponse > myFavNumber){
      userResponse = +prompt(`Can you try another number?`);
      alert(`Too high, guess again! You have ${attemptsRemaining} attempts remaining.`);
    }
    attemptsRemaining--;
    if (attemptsRemaining === 0 && userResponse !== myFavNumber){
      alert('The correct answer is ' + myFavNumber);
    }
    else if (userResponse === myFavNumber){
      alert('Close call, but you got it!');
      answer++;
    }
  }

}

let colors = ['blue', 'green', 'black'];
let userAnswer = prompt('Can you guess a favorite color of mine?');

let remaining = 5;
let attemptsLeft = 5;

while (remaining) {
  for (let i = 0; i < attemptsLeft; i++){
    if (userAnswer === colors[i]){
      remaining = 0;
      alert(`You're right!`);
      answer++;
      break;
    }
    else if (userAnswer !== colors[i]){

      alert(`That is not one of my favorite colors. You have ${remaining} attempts remaining.`);
      userAnswer = prompt(`Can you try another color?`);
    }
    remaining--;
    if (remaining === 0 && userAnswer !== colors[i]){
      alert('My favorite colors are: ' + colors);
    }
    else if (userAnswer === colors[i]){
      alert('PHEW! You got it!');
    }

  }
}

alert('Your score was ' + answer + ' out of 7');







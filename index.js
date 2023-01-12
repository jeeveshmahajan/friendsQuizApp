var readlineSync = require("readline-sync");

// functions
function welcomeUser() {
  console.log("Could I have your name please.")
  var firstName = readlineSync.question("\nFirst Name: ");
  var lastName = readlineSync.question("Last Name: ");
  console.log(`\nWelcome ${firstName} ${lastName}.\nLet's play a game.`);
}

function play(userAnswer, realAnswer) {
  if (userAnswer.toUpperCase() == realAnswer.toUpperCase()) {
    score += 1;
    console.log("You're right!");
  } else {
    score -= 0.25;
    console.log("You're Wrong!")
  }
  console.log(`Current Score: ${score}`);
}

// questions array
var questionsList = [
  {
    que: "\nWhat's my age: ",
    ans: "21"
  },
  {
    que: "\nWhere do I live? ",
    ans: "Indore"
  },
  {
    que: "\nWhere do I study? ",
    ans: "IPS"
  },
  {
    que: "\nWhat's my dream destination to travel? ",
    ans: "Bali"
  },
  {
    que: "\nWhat's my favorite dish? ",
    ans: "Baigan ka bharta"
  }
];

//initialising variables
var score = 0;
let length = questionsList.length;

welcomeUser();

// calling the quiz
for (i = 0; i < length; i++) {
  var currentQuestion = questionsList[i];
  var userAnswer = readlineSync.question(currentQuestion.que);
  var realAnswer = currentQuestion.ans;
  play(userAnswer, realAnswer)
}

console.log(`\nYour final score: ${score}`);
var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("What is your name?");
console.log("Welcome" + userName + "! \nLet's check how much you know Jaahanava Joshi");

function play(question,answer) {
    var userAnswer = readlineSync.question(question);
  
    if(userAnswer == answer) {
      score = score + 1;
      console.log("You are right!");
      console.log("Your score is: "+score);
    }
    else {
      console.log("You are wrong!");
      console.log("Your score is: "+score);
    }
  }
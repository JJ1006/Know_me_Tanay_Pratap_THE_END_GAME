var readlineSync = require("readline-sync");
var score =0;
var username = readlineSync.question("Please enter your name \n");
console.log("\nWelcome "+ username +"!\nLet's check how much you know Jaahanava Joshi\n\nPlease give your answer as one of the given options");


var highScore = [
  {
    playername : "Virat",
    playerscore:"5",
  },

  {
    playername : "Rishabh",
    playerscore : "4",
  }
]


function play(question,answer) {
  var useranswer = readlineSync.question(question);

  if(useranswer == answer){
    console.log("You are Right");
    score = score + 1;
  }
  else {
    console.log("You are Wrong")
  }

  console.log("Your current score: ",score);
  console.log("-------------------------------")
}

//array of objects
var questions = [ {
  question: "Who is my favourite cricketer\n(1) Sachin Tendulkar\n(2)Rishabh Pant\n(3)Virat Kohli\n(4)All of these\n",
  answer: "4"
},{
  question: "In which city do I live?\n(1)Ahmedabad\n(2)Pune\n(3)Banglore\n(4)Baroda\n",
  answer: "1"
},{
  question: "In which of the following sport have I played Nationals?\n(1)Cricket\n(2)Football\n(3)Table Tennis\n(4)Badminton\n",
  answer: "3"
},{
  question: "Do I love Nature (yes or no)\n(1)Yes\n(2)No\n",
  answer: "1"
},{
  question: "Do I exercise regularly?\n(1)Yes\n(2)No\n(3)Sometimes\n(4)If started would continue until something happens\n",
  answer: "4"
},{
  question: "Which music I prefer to hear?\n(1)Fast Beat\n(2)Slow\n(3)Old\n(4)Only of specific Singers\n",
  answer: "1"
}];

// loop

for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}


console.log("YAY! You scored :",+score+" out of 6\n\n")
console.log("High scores are =>\n")

for(var j=0; j < highScore.length; j++) {
  var tocheck = highScore[j];
  console.log(tocheck.playername + " : " + tocheck.playerscore);
}

console.log("\nPing me if your score is greater than the HighScore!");
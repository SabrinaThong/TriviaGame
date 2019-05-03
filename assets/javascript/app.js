var personChoice;
var rightAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;


var allQuestions = [
   {
      question: "What are the maximum amount of clubs a person can have in their bag?",
      answers: {
         A:"10",
         B: "14",
         C: "11",
         D: "15",
      },
      correctAnswer: "B"
   },
   {
      question: "When all players are on the gree, who putts first?",
      answers: {
         A:"Person who get to their ball first",
         B: "Person whose ball is the farthest from the hole",
         C: "Person whose ball is closest to the hole",
         D: "The person that teed off first",
      },
      correctAnswer: "B"
   },
   {
      question: "What club do you use when you need to putt?",
      answers: {
         A:"Putter",
         B: "Driver",
         C: "Fairway Driver",
         D: "Iron",
      },
      correctAnswer: "A"
   },
   {
      question: "Who is allowed to run on the green?",
      answers: {
         A:"Kids",
         B: "Anyone 21 years or older",
         C: "No one",
         D: "The employees",
      },
      correctAnswer: "C"
   },
   {
      question: "What is the maximum amount of people that can be in a group?",
      answers: {
         A:"3",
         B: "4",
         C: "6",
         D: "8",
      },
      correctAnswer: "B"
   },
   {
      question: "What is the biggest club in a persons bag?",
      answers: {
         A:"Driver",
         B: "Putter",
         C: "Fairway Driver",
         D: "Wedge",
      },
      correctAnswer: "B"
   },
   {
      question: "What club do you always have to use a tee with?",
      answers: {
         A:"Iron",
         B: "Hybrid",
         C: "Driver",
         D: "Putter",
      },
      correctAnswer: "C"
   },
   {
      question: "After adding everyones score, how do you know who did the best?",
      answers: {
         A:"Person with lowest score",
         B: "Person who counted the score",
         C: "Person with the most golfballs",
         D: "Person with highest score",
      },
      correctAnswer: "A"
   },
   {
      question: "Where should you stand when someone is hitting his/her golfball?",
      answers: {
         A:"Right in front of them",
         B: "On the green",
         C: "Many feet behind them",
         D: "On the fairway",
      },
      correctAnswer: "C"
   },
   {
      question: "What do you do when you hit in the water?",
      answers: {
         A:"Quit",
         B: "Cry",
         C: "hit again",
         D: "Go to the drop zone to hit",
      },
      correctAnswer: "D"
   },
];

console.log(allQuestions[0].question);
console.log(allQuestions[1].question);
console.log(allQuestions[2].question);
console.log(allQuestions[3].question);
console.log(allQuestions[4].question);
console.log(allQuestions[5].question);
console.log(allQuestions[6].question);
console.log(allQuestions[7].question);
console.log(allQuestions[8].question);
console.log(allQuestions[9].question);
function showQuestions() {
   $("#quiz").html(allQuestions[0].question);
   $("#quiz").text(allQuestions[1].question);
   $("#quiz").text(allQuestions[2].question);
   $("#quiz").text(allQuestions[3].question);
   $("#quiz").text(allQuestions[4].question);
   $("#quiz").text(allQuestions[5].question);
   $("#quiz").text(allQuestions[6].question);
   $("#quiz").text(allQuestions[7].question);
   $("#quiz").text(allQuestions[8].question);
   $("#quiz").text(allQuestions[9].question);
}

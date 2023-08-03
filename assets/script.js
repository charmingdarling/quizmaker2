// Local Scope Variables//
let start_quiz = document.querySelector(".start_quiz");
let begin = document.getElementById("beginbutton");
let quizContainer = document.querySelector(".quiz");
let scoreContainer = document.querySelector(".score");
let timeEl = document.querySelector(".timer");
let secondsLeft = 100;
let question = document.querySelector("#question");
let answerbank = document.querySelector("#answerbank");
let finalscore = document.querySelector("#finalscore");

//------------- Start Section -------------//

begin.addEventListener("click", (e) => {
  console.log("Begin button clicked.");
  start_quiz.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  timerSet();
  console.log("Timer start");
  showNextQuestion();
});

//------------- Timer Section -------------//

function timerSet() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if (secondsLeft === 0) {
      console.log("Time is up.");
      sendMessage();
      endquiz();
    }
  }, 1000);
}

function sendMessage() {
  timeEl.textContent = "Time's up!";
}

//------------- Question Function Section -------------//

function showNextQuestion() {
  var currentquestion = questionsbank[q_index];
  var questionasked = document.querySelector("#question");
  questionasked.textContent = currentquestion.question;
  answerbank.innerHTML = ""; //clears out section before populating new answer

  for (var i = 0; i < currentquestion.answers.length; i++) {
    var answer = currentquestion.answers[i];
    var answerLi = document.createElement("li");
    var button = document.createElement("button");
    button.textContent = answer;
    answerbank.append(answerLi);
    answerLi.append(button);
    button.classList.add("answerchoice");
    button.addEventListener("click", (e) => {
      q_index++;

      if (q_index < questionsbank.length) {
        showNextQuestion();
      } else {
        endquiz();
      }
    });
  }
}

//------------- Answer Function Section -------------//

function answerQuestion(event) {
  var answerEl = event.target;
  //^-Determines what User clicked on //
  //v-Hoping to determine that if they don't click on an answer button, nothing happens.
  if (!answerEl.matches(".answerchoice")) {
    return;
  }
  if (answerEl.value !== questionsbank[q_index].correct) {
    secondsLeft -= 10;
    if (secondsLeft < 0) {
      secondsLeft = 0;
    }
    document.querySelector("#feedback").textContent = "Whoops...";
  } else {
    document.querySelector("#feedback").textContent = "You got it!";
  }
}

//------------- End Quiz Section -------------//

const endquiz = function () {
  console.log("quiz is over");
  //Before I clear the timerInterval, how do I get the score?
  clearInterval(timerInterval);
  quizContainer.classList.add("hidden");
  scoreContainer.classList.remove("hidden");
};

// "A".includes("A"); // true

//------------- Quiz Question/Answer Index Section -------------//

let q_index = 0; // Makes index start from 1st question
const questionsbank = [
  {
    question: "What matches A?",
    answers: ["A", "B", "C", "D"],
    correct: "A",
  },
  {
    question: "What matches B?",
    answers: ["A", "B", "C", "D"],
    correct: "B",
  },
  {
    question: "What matches C?",
    answers: ["A", "B", "C", "D"],
    correct: "C",
  },
  {
    question: "What matches D?",
    answers: ["A", "B", "C", "D"],
    correct: "D",
  },
];

//------------- Final Score Section -------------//

function logFinalScore() {
  scoreContainer.classList.add("hidden");
  highScoreContainer.classList.remove("hidden");
}

// let remark

// let finalscore

// let submittoscoreboard

// let return
// let reset

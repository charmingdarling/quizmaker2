// Local Scope Variables//

let scoreContainer = document.querySelector(".score");

let finalscore = document.querySelector("#finalscore");

//------------- Start Section -------------//

let start_quiz = document.querySelector(".start_quiz");
let begin = document.getElementById("beginbutton");
let quizContainer = document.querySelector(".quiz");

begin.addEventListener("click", (e) => {
  console.log("Begin button clicked.");
  start_quiz.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  timerSet();
  console.log("Timer start");
  showNextQuestion();
});

//------------- Timer Section -------------//

let timeEl = document.querySelector(".timer");
let secondsLeft = 100;

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

let answerList = document.querySelector("#answerbank");
let question = document.querySelector("#question");

function showNextQuestion() {
  var currentquestion = questionsbank[q_index];
  question.textContent = currentquestion.question; //In the Question ID, replace the textContent with the current question.
  answerList.innerHTML = ""; //clears out section before populating new answer

  for (var i = 0; i < currentquestion.answers.length; i++) {
    let answer = currentquestion.answers[i];
    let answerbutton = document.createElement("button");
    let answerLi = document.createElement("li");
    answerbutton.setAttribute("class", "answerbutton");
    answerbutton.setAttribute("value", answer);
    answerbutton.textContent = i + 1 + ". " + answer;
    answerList.appendChild(answerbutton);
    answerList.appendChild(answerLi);
  }
}

//------------- Answer Function Section -------------//

let feedback = document.querySelector("#feedback");

function answerQuestion(e) {
  let answerClicked = e.target;
  if (!answerClicked.matches("answerbutton")) {
    return;
  }
  if (answerClicked.value !== questionsbank[q_index].correct) {
    secondsLeft -= 10;
    if (secondsLeft < 0) {
      secondsLeft = 0;
    }
    document.querySelector("#feedback").textContent = "Whoops";
  } else {
    document.querySelector("#feedback").textContent = "You got this!";
  }
  document.querySelector("#feedback").removeAttribute("class");
  setTimeout(function () {
    document.querySelector("#feedback").setAttribute("class", "hidden");
  }, 1500);
  q_index++;
  if (secondsLeft <= 0 || q_index === questionsbank.length) {
    endquiz();
  } else {
    showNextQuestion;
  }
}

let answerBank = document.querySelector("#answerbank");
answerBank.onclick = answerQuestion;

//------------- Answer Function Section -------------//

// function answerQuestion(event) {
//   var answerEl = event.target;
//   //^-Determines what User clicked on //
//   //v-Hoping to determine that if they don't click on an answer button, nothing happens.
//   if (!answerEl.matches(".answerchoice")) {
//     return;
//   }
//   if (answerEl.value !== questionsbank[q_index].correct) {
//     secondsLeft -= 10;
//     if (secondsLeft < 0) {
//       secondsLeft = 0;
//     }
//     document.querySelector("#feedback").textContent = "Whoops...";
//   } else {
//     document.querySelector("#feedback").textContent = "You got it!";
//   }
// }

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

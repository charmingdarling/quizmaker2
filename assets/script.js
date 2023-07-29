//------------- Start Section -------------//
let start_quiz = document.querySelector('.start_quiz')
let begin = document.getElementById('beginbutton');

begin.addEventListener('click', (e)=>{
    console.log('Begin button clicked.');
    start_quiz.classList.add('hidden');
    timerSet();
    console.log('Timer start')
});

//------------- Timer Section -------------//
let timeEl = document.querySelector('.timer');
let secondsLeft = 100;

function timerSet() {
    timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if(secondsLeft === 0) {
        clearInterval(timerInterval);
        console.log('Time is up.')
        sendMessage();
        }
    }, 1000);
}

function sendMessage() {
    timeEl.textContent = "Time's up!";
}

//------------- Question/Answer Function Section -------------//

let question = document.querySelector('#question');
let answerbank = document.querySelector('#answerbank');

function questionAnswerIndex () {
    var currentquestion = questionsbank[questionindex]
    var questionasked = document.querySelector('#question')
    questionasked.textContent = currentquestion.question
    answerbank.innerHTML = "" //clears out section before populating new answer

    for (var i = 0; i < currentquestion.answers.length; i++) {
        var answer = currentquestion.answers[i]
        console.log(currentquestion[i]);
        // var answer = currentquestion.answers[i] Unsure if this is what I need to do

        // var answerbutton = 
    }
}



//------------- Quiz Question/Answer Index Section -------------//

let questionindex = 0 // Makes index start from 1st question
const questionsbank = [
    {
        question: "What matches A?",
        answers: ["A", "B", "C", "D"],
        correct: "A"
    },
    {
        question: "What matches B?",
        answers: ["A", "B", "C", "D"],
        correct: "B"
    },
    {
        question: "What matches C?",
        answers: ["A", "B", "C", "D"],
        correct: "C"
    },
    {
        question: "What matches D?",
        answers: ["A", "B", "C", "D"],
        correct: "D"
    },
];


// let remark 

// let finalscore

// let submittoscoreboard

// let return
// let reset
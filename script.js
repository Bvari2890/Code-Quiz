var body = document.getElementById("quiz");
var questionsEl = document.getElementById("questions");
var endgameDiv = document.getElementById("endgame")
var finalScoreDiv = document.getElementById("finalScore")
var outcomeEl = document.getElementById("outcome");
var quizTimer = document.getElementById("timer");
var playBtn = document.getElementById("play-btn")
var homePageDiv = document.getElementById("homepage")
var nameInput = document.getElementById("name")
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");


var questions = [{
    question: "What does HTML stand for?",
    choiceA: "Hyper Text Markup Language",
    choiceB: "Haptic Touch Monitor Language",
    choiceC: "Hyper Text Monitor Language",
    choiceD: "Haptic Touch Markup Language",
    correctAnswer: "a"},
{
    question: "Which of these can only be applied to one element",
    choiceA: "ID",
    choiceB: "class",
    choiceC: "tag",
    choiceD: "bracket",
    correctAnswer: "a"},
{
    question: "What is CSS used for?",
    choiceA: "web page structure",
    choiceB: "styling",
    choiceC: "click events",
    choiceD: "functions",
    correctAnswer: "b"},
{
    question: "Which of the following is a self closing tag",
    choiceA: "h1",
    choiceB: "p",
    choiceC: "div",
    choiceD: "img",
    correctAnswer: "d"},
{
    question: "What can arrays be used to store?",
    choiceA: "other arrays",
    choiceB: "number",
    choiceC: "strings",
    choiceD: "all the above",
    correctAnswer: "c"},
]
var time = 60;
var timeInterval;
var score = 0;
var totalQuestionIndex = questions.length;
var questionIndex = 0;
var correct;

function generateQuestion(){
    endgameDiv.style.display = 'none';

    if (questionIndex === totalQuestionsIndex){
        return revealScore();
    }
    var offeredQuestion = questions[questionIndex];
    questionsEl.innerText = '<p>' + offeredQuestion.question + '</p>';
    buttonA.innerText = currentQuestion.choiceA;
    buttonB.innerText = currentQuestion.choiceB;
    buttonC.innerText = currentQuestion.choiceC;
    buttonD.innerText = currentQuestion.choiceD;
};

function revealScore() {
    body.style.display = 'none';
    endgameDiv.style.display = 'flex';
    clearInterval(timeInterval);
    nameInput.value = '';
    finalScoreDiv.innerHTML = "Congrats you got " + score + " right!";
}

function playQuiz(){
    gameoverDiv.style.display = 'none';
    homePageDiv.style.display = 'none';
    generateQuestion();
    timeInterval = setInterval(function() {
        time--;
        quizTimer.textContent = "Time: " + time;
    
        if (time === 0) {
            clearInterval(timeInterval);
            revealScore();
        }
    }, 1000);
    body.style.display = "flex";
}


playBtn.addEventListener('click', playQuiz);
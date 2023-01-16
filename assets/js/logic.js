// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers

// declare variables
var startButton = document.querySelector("#start");
var timeEl = document.querySelector("#time");
var timer = 0;
var timeLeft = 60;
var subtractTime = 10;
var questionIndex = 0;
var score = 0;
var winScore = 5;
var lastUserScore;

var startScreen = document.getElementById("start-screen");
var questionsDiv = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var choices = document.getElementById("choices");
var feedback = document.getElementById("feedback");
var endScreen = document.getElementById("end-screen");
var finalScore = document.getElementById("final-score");
var initialInput = document.getElementById("initials");
var submitButton = document.getElementById("submit");

// WHEN I click the start button
// The startQuiz function is called when the start button is clicked
function startQuiz() {
  // hide the start screen with rules
  startScreen.style.display = "none";
  // show questions on the screen
  questionsDiv.classList.remove("hide");
  // THEN a timer starts 
  startTimer();
  renderQuestion();
}

// Attach event listener to start button to call startQuiz function on click
startButton.addEventListener("click", startQuiz);

// The setTimer function starts and stops the timer
// Sets timer
function startTimer() {
  timer = setInterval(function () {
    timeEl.textContent = timeLeft;
    timeLeft--;
    // Tests if time has run out
    if (timeLeft <= 0) {
      // Clears interval
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);
}

// and I am presented with a question
function renderQuestion() {
  // Creates a question on screen
  var q = quizQuestions[questionIndex];
  if (timeLeft > 0 || questionIndex < quizQuestions.length) {
    questionTitle.textContent = q.question;
    choices.textContent = "";

    // Create a new button for each choice (answer)
    for (var i = 0; i < q.answers.length; i++) {
      var choiceButton = document.createElement("button");
      choiceButton.textContent = q.answers[i];
      choiceButton.setAttribute("data-index", i);
      choices.appendChild(choiceButton);
      // WHEN I answer a question, add a click event and check if the answer is correct
      choiceButton.addEventListener("click", checkAnswer);
    }
  }
}

function checkAnswer(event) {
  event.preventDefault();
  var q = quizQuestions[questionIndex];
  var answer = event.currentTarget.dataset.index;
  feedback.style.display = "block";
  if (answer == q.correctAnswerIndex) {
    // If the answer is correct, display feedback to be Correct!
    feedback.textContent = "Correct!";
    score = score + winScore;
    console.log("Correct answer.");
    console.log(score);
  } else {
    // When I answer a question incorrectly
    feedback.textContent = "Wrong!";
    console.log("Incorrect answer.");
    score += 0;
    // Then time is subtracted from the clock
    timeLeft -= subtractTime;
  }
  // render the next question
  if (timeLeft > 0 && questionIndex < quizQuestions.length - 1) {
    questionIndex++;
    renderQuestion();
  }
  else if (timeLeft === 0 || questionIndex === quizQuestions.length - 1) {
    // Stop timer
    clearInterval(timer);
    endQuiz();
    return;
  }


  // function storeScores() {
  //   // Stringify and set "score" key in localStorage to score variable
  //   localStorage.setItem("score", score.toString());
  //   lastUserScore = localStorage.getItem("score");
  // }
  // console.log(lastUserScore);
  // // questionIndex += 1;
  // // showNextQuestion();
}
// THEN I am presented with another question // this doesn't work
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
function endQuiz() {
  console.log("Ending quiz")
  timeEl.textContent = 0;
  endScreen.classList.remove("hide");
  questionsDiv.classList.add("hide");
}

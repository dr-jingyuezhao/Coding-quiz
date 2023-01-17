// Declare different variables
var startButton = document.querySelector("#start");
var timeEl = document.querySelector("#time");
var timer = 0;
var timeLeft = 60;
var subtractTime = 10;
var questionIndex = 0;
var score = 0;
var winScore = 5;

var startScreen = document.getElementById("start-screen");
var questionsDiv = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var choices = document.getElementById("choices");
var feedback = document.getElementById("feedback");
var endScreen = document.getElementById("end-screen");
var finalScore = document.getElementById("final-score");
var initialsInput = document.getElementById("initials");
var submitButton = document.getElementById("submit");

// When I click the start button
// Attach event listener to start button to call startQuiz function on click
startButton.addEventListener("click", startQuiz);
// Add the startQuiz function to hide rules and display the questions
function startQuiz() {
  // hide the start screen with rules
  startScreen.style.display = "none";
  // show questions on the screen
  questionsDiv.classList.remove("hide");
  // start the timer
  startTimer();
  renderQuestion();
}

// Add the startTimer function to set the timer
function startTimer() {
  timer = setInterval(function () {
    timeEl.textContent = timeLeft;
    timeLeft--;
    // if time has run out, clear interval
    if (timeLeft <= 0) {
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);
}

// Add the renderQuestion function to show a question on the screen
function renderQuestion() {
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
      // When I answer a question, add a click event and check if the answer is correct
      choiceButton.addEventListener("click", checkAnswer);
    }
  }
}

// Add the checkAnswer function to check if the answer is correct or incorrect, print to the console
function checkAnswer(event) {
  event.preventDefault();
  var q = quizQuestions[questionIndex];
  var answer = event.currentTarget.dataset.index;
  // Make the feedback to be displayed on the screen
  feedback.style.display = "block";
  if (answer == q.correctAnswerIndex) {
    // If the answer is correct, display feedback to be Correct!
    feedback.textContent = "Correct!";
    console.log("Correct answer.");
    score = score + winScore;
  } else {
    // When I answer a question incorrectly
    feedback.textContent = "Wrong!";
    console.log("Incorrect answer.");
    score += 0;
    // Then time is subtracted from the clock
    timeLeft -= subtractTime;
  }
  // Render the next question
  if (timeLeft > 0 && questionIndex < quizQuestions.length - 1) {
    questionIndex++;
    renderQuestion();
  }
  // When all questions are answered or the timer reaches 0, then the game is over
  else if (timeLeft === 0 || questionIndex === quizQuestions.length - 1) {
    // Stop timer
    clearInterval(timer);
    endQuiz();
    return;
  }
}

// Add the endQuiz function to end the quiz and print the final score to the console
function endQuiz() {
  timeEl.textContent = 0;
  endScreen.classList.remove("hide");
  questionsDiv.classList.add("hide");
  finalScore.textContent = score;
  console.log("Game over. Your final score is:", score);
}

// When the game is over, save initials and score in local storage
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  // validate the initials input
  if (initialsInput.value === "") {
    alert("Error!!! Please enter your initials, cannot leave it blank.");
  }
  else {
    alert("Congratulations!!! Your score has been submitted.");
    console.log(initialsInput.value, score);
    // store new submission
    storeScore();
    window.location.href = "highscores.html";
  }
});

// Add the storeScore function to save the submission in local storage
function storeScore() {
  var highScoreArray = JSON.parse(localStorage.getItem("highScore")) || [];
  var storedUserScore = { initials: initialsInput.value.trim(), score: score };
  highScoreArray.push(storedUserScore);
  localStorage.setItem("highScore", JSON.stringify(highScoreArray));
}

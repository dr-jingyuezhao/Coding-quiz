// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers

// declare variables
var startButton = document.querySelector("#start");
var timeEl = document.querySelector("#time");

var chosenAnswer = "";
var numBlanks = 0;
var correctCounter = 0;
var wrongCounter = 0;
var isCorrect = true;
var isWrong = true;


// WHEN I click the start button
// The startQuiz function is called when the start button is clicked
function startQuiz() {
  // THEN a timer starts 
  startTimer();
  renderQuestion();
}

// Attach event listener to start button to call startQuiz function on click
startButton.addEventListener("click", startQuiz);

// The setTimer function starts and stops the timer
// Sets timer
function startTimer() {
  var timeLeft = 90;
  var subtractTime = 10;
  var timer = setInterval(function () {
    timeEl.textContent = timeLeft;
    timeLeft--;
    // if the answer is wrong, 
    // when timeleft is more than the subtracted time, time is subtracted from the clock
    if (isWrong && timeLeft > subtractTime) {
      timeEl.textContent = timeLeft - subtractTime;
    }
    // when timeleft is less than the subtracted time, use `clearInterval()` to stop the timer
    else if (isWrong && timeLeft <= subtractTime) {
      // Clears interval and stops timer
      clearInterval(timer);
    }
    // Tests if time has run out
    else if (timeLeft === 0) {
      // Clears interval
      clearInterval(timer);
    }
  }, 1000);
}

// and I am presented with a question
function renderQuestion() {
// hide the start screen with rules
var startScreen = document.getElementById("start-screen");
startScreen.style.display = "none"; 
// show questions on the screen
var questionsDiv = document.getElementById("questions");
questionsDiv.style.display = "block";
// // Creates a question on screen
//   // Randomly picks word from words array
//   chosenQuestion = quizQuestions[Math.floor(Math.random() * quizQuestions.length)];
//   lettersInChosenWord = chosenWord.split("");
//   numBlanks = lettersInChosenWord.length;
//   blanksLetters = []
//   // Uses loop to push blanks to blankLetters array
//   for (var i = 0; i < numBlanks; i++) {
//     blanksLetters.push("_");
//   }
//   // Converts blankLetters array into a string and renders it on the screen
//   wordBlank.textContent = blanksLetters.join(" ")
}

// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over






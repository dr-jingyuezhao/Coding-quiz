// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers

// declare variables
var timeElement = document.querySelector("#time");
var startButton = document.querySelector("#start");
var timer;
var timerCount;

var chosenAnswer = "";
var numBlanks = 0;
var correctCounter = 0;
var wrongCounter = 0;
var isCorrect = true;

// The init function is called when the page loads 
function init() {
    getCorrectCount();
    getWrongCount();
  }
  


// The startQuiz function is called when the start button is clicked
function startQuiz() {
    isCorrect = false;
    timerCount = 60;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    renderBlanks();
    startTimer();
  }
  
// The correctAnswer function is called when the answer is correct
function correctAnswer() {
    wordBlank.textContent = "YOU WON!!!🏆 ";
    correctCounter++
    startButton.disabled = false;
    setWins()
  }
  
// The gameOver function is called when timer reaches 0
function gameOver() {
    wordBlank.textContent = "GAME OVER";
    loseCounter++
    startButton.disabled = false;
    setLosses()
  }
  

// WHEN I click the start button
// Attach event listener to start button to call startQuiz function on click
startButton.addEventListener("click", startQuiz);

// THEN a timer starts 
// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timeElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if the answer is correct (the isCorrect condition is met)
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }

// and I am presented with a question
// Creates blanks on screen
function renderBlanks() {
    // Randomly picks word from words array
    chosenQuestion = quizQuestions[Math.floor(Math.random() * quizQuestions.length)];
    lettersInChosenWord = chosenWord.split("");
    numBlanks = lettersInChosenWord.length;
    blanksLetters = []
    // Uses loop to push blanks to blankLetters array
    for (var i = 0; i < numBlanks; i++) {
      blanksLetters.push("_");
    }
    // Converts blankLetters array into a string and renders it on the screen
    wordBlank.textContent = blanksLetters.join(" ")
  }
  
  // WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

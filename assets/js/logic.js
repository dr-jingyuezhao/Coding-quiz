// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers

// declare variables
var timeElement = document.querySelector("#time");
var startButton = document.querySelector("#start");
var timeLeft;
var timer;

var chosenAnswer = "";
var numBlanks = 0;
var correctCounter = 0;
var wrongCounter = 0;
var isCorrect = true;
var isWrong = true;

// // The init function is called when the page loads 
// function init() {
//     getCorrectCount();
//     getWrongCount();
//   }




// // The correctAnswer function is called when the answer is correct
// function correctAnswer() {
//     wordBlank.textContent = "YOU WON!!!🏆 ";
//     correctCounter++
//     startButton.disabled = false;
//     setWins()
//   }

// // The gameOver function is called when timer reaches 0
// function gameOver() {
//     wordBlank.textContent = "GAME OVER";
//     loseCounter++
//     startButton.disabled = false;
//     setLosses()
//   }



// WHEN I click the start button
// The startQuiz function is called when the start button is clicked
function startQuiz() {
  // isCorrect = false;
  timeLeft = 90;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  renderBlanks();
  startTimer();
}

// Attach event listener to start button to call startQuiz function on click
startButton.addEventListener("click", startQuiz);

// THEN a timer starts 
// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  timer = setInterval(function () {
    timeLeft--;
    timeElement.textContent = timeLeft;
    if (timeLeft > 0) {
      // if the answer is wrong, time is subtracted from the clock
      if (isWrong && timeLeft > 15) {
        timeLeft = timeLeft - 15;
      }
      // if the answer is correct (the isCorrect condition is met)
      else if (isCorrect) {
        // Clears interval and stops timer
        clearInterval(timer);
        winGame();
      }
    }
    // Tests if time has run out
    if (timeLeft === 0) {
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
var finalScore = 0;
var finalScoreEl = document.querySelector("#final-score");
finalScoreEl.value = finalScore;

// WHEN the game is over
// THEN I can save my initials and score
var initialsEl = document.querySelector("#initials");
var submitEl = document.querySelector("#submit");
var submissionResponse = document.querySelector("#feedback");

// Add keydown event to input name initials
initialsEl.addEventListener('keydown', function (event) {
  event.preventDefault();

  // Access value of pressed key with key property
  var key = event.key.toLowerCase();
  var alphabetCharacters = "abcdefghijklmnopqrstuvwxyz".split(
    ''
  );
  if (alphabetCharacters.includes(key)) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].textContent += event.key;
    }
  }
});



// Action to be performed on click store in named function
function showScores(event) {
  // Prevent default action
  event.preventDefault();
  window.location.href = "highscores.html";
  console.log(event);
  var response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
  submissionResponseEl.textContent = response;
}

// Add event listener to submit element
var submitEl = document.querySelector("#submit");
submitEl.addEventListener("click", showScores);



// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers

// declare variables
var startButton = document.querySelector("#start");
var timeEl = document.querySelector("#time");
var timeLeft = 60;
var subtractTime = 10;
var score = 0;
var winScore = 5;
var lastUserScore;

var startScreen = document.getElementById("start-screen");
var questionsDiv = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var choices = document.getElementById("choices");
var feedback = document.getElementById("feedback");

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
  var timer = setInterval(function () {
    timeEl.textContent = timeLeft;
    timeLeft--;
    // Tests if time has run out
    if (timeLeft === 0) {
      // Clears interval
      clearInterval(timer);
    }
  }, 1000);
}

var questionIndex = 0;
var q = quizQuestions[questionIndex];
// and I am presented with a question
function renderQuestion() {
  // hide the start screen with rules
  startScreen.style.display = "none";
  // show questions on the screen
  questionsDiv.style.display = "block";
  // Creates a question on screen
  questionTitle.textContent = q.question;
  // Create a new button for each choice (answer)
  for (var i = 0; i < q.answers.length; i++) {
    var choiceButton = document.createElement("button");
    choiceButton.textContent = q.answers[i];
    choiceButton.setAttribute("data-index", i);
    choices.appendChild(choiceButton);
    questionIndex += 1;
    
  }
  
}

// function showNextQuestion() {
  //     // WHEN I answer a question, add a click event and check if the answer is correct
  //     var choice = document.querySelectorAll("button");
  //     choice.textContent = 
  //     choiceButton.addEventListener("click", checkAnswer);
  
  
  // }
  
  // WHEN I answer a question, add a click event and check if the answer is correct
  choices.addEventListener("click", function(event) {
    event.preventDefault();
    var element = event.target;
    if (element.matches("button") === true) {
      var answer = element.getAttribute("data-index");
      var correctAnswer;
      feedback.style.display = "block";
      if (answer == q.correctAnswerIndex) {
        correctAnswer = answer;
        // If the answer is correct, display feedback to be Correct!
        feedback.textContent = "Correct!";
        score = score + winScore;
      } else {
        // When I answer a question incorrectly
        feedback.textContent = "Wrong!";
        score += 0;
        // Then time is subtracted from the clock
        timeLeft -= subtractTime;
        if (timeLeft < 0) {
          timeLeft = 0;
        }
      }
      console.log(score);
      function storeScores() {
        // Stringify and set "score" key in localStorage to score variable
        localStorage.setItem("score", score.toString());
        lastUserScore = localStorage.getItem("score");
      }
      console.log(lastUserScore);
      // questionIndex += 1;
      // showNextQuestion();
    }
    
    }
  });
function checkAnswer(event) {
  event.preventDefault();
  var answer = event.currentTarget.dataset.index;
  var correctAnswer;
  feedback.style.display = "block";
  if (answer == q.correctAnswerIndex) {
    correctAnswer = answer;
    // If the answer is correct, display feedback to be Correct!
    feedback.textContent = "Correct!";
    score = score + winScore;
  } else {
    // When I answer a question incorrectly
    feedback.textContent = "Wrong!";
    score += 0;
    // Then time is subtracted from the clock
    timeLeft -= subtractTime;
    if (timeLeft < 0) {
      timeLeft = 0;
    }
  }
  console.log(score);
  function storeScores() {
    // Stringify and set "score" key in localStorage to score variable
    localStorage.setItem("score", score.toString());
    lastUserScore = localStorage.getItem("score");
  }
  console.log(lastUserScore);
  // questionIndex += 1;
  // showNextQuestion();
}
// THEN I am presented with another question // this doesn't work
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
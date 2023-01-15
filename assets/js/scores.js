var nameInput = document.querySelector("#initials");
var scoreInput = document.querySelector("#final-score");
var scoreList = document.querySelector("#highscores");
var userInitials = [];
var userScores = [];
var feedbackDiv = document.querySelector("#feedback");

function displayMessage(type, message) {
    feedbackDiv.textContent = message;
    feedbackDiv.setAttribute("class", type);
  }
  
// add event listener to the submit button
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
  
// create user object from submission
var user = {
    initials: nameInput.value.trim(),
    score: lastNameInput.value.trim(),
};

console.log(user);
// validate the fields
if (user.initials === "") {
    displayMessage("error", "Please enter your initials, cannot leave it blank.");
} else {
    displayMessage("success", "Your score has been submitted.");
    // set new submission
    localStorage.setItem("user", JSON.stringify(user));

    // get most recent submission
    var lastUser = JSON.parse(localStorage.getItem("user"));
    // userFirstNameSpan.textContent = lastUser.initials;
    // userLastNameSpan.textContent = lastUser.score;
    // userEmailSpan.textContent = lastUser.email;
    // userPasswordSpan.textContent = lastUser.password;
}
});

init();

// Render a new li for each user-score
function renderScores() {
    for (var i = 0; i < userScores.length; i++) {
        var userScore = userScores[i];
        var li = document.createElement("li");
        li.textContent = userInitials + " - " + userScore;
        li.setAttribute("data-index", i);
        scoreList.appendChild(li);
    }
}

function init() {
    // Get stored userScores from localStorage
    // Parsing the JSON string to an object
    var storedScores = JSON.parse(localStorage.getItem("user"));

    // If todos were retrieved from localStorage, update the todos array to it
    if (storedScores !== null) {
        userScores = storedScores;
    }

    // Render scores to the DOM
    renderScores();
}

function storeScores() {
    // Stringify and set "scores" key in localStorage to scores array
    localStorage.setItem("user", JSON.stringify(user));
}

// When form is submitted...
todoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var todoText = todoInput.value.trim();

    // Return from function early if submitted todoText is blank
    if (todoText === "") {
        return;
    }

    // Add new todoText to todos array, clear the input
    todos.push(todoText);
    todoInput.value = "";

    // Store updated todos in localStorage, re-render the list
    storeScores();
    renderScores();
});

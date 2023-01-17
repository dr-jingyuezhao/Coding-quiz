var scoreList = document.getElementById("highscores");
var highScoreArray = JSON.parse(localStorage.getItem("highScore"));
var clearButton = document.getElementById("clear");

// create ordered list item using create-append
for (var i = 0; i < highScoreArray.length; i++) {
    var li = document.createElement("li");
    var userScore = highScoreArray[i];

    li.textContent = userScore.initials + " - " + userScore.score;
    scoreList.appendChild(li);
}

// add a click listener to the clear button
clearButton.addEventListener("click", function (event) {
    event.preventDefault();
    // when clicking the button, remove the specified local storage item - highScore
    localStorage.removeItem("highScore");
    // also clear the scoreList displayed on the screen
    scoreList.classList.add("hide");
});

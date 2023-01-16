// // useful code
var index = 0;
var currentImage;
var images = [
    "https://picsum.photos/300/200",
    "https://picsum.photos/300/201",
    "https://picsum.photos/300/202",
    "https://picsum.photos/300/203"
];

currentImage = images[index];

// Clicking on image opens a new window containing the image
carousel.addEventListener("click", function () {
    window.location.href = images[index];
});

var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");

var backEl = document.querySelector('#back');
var clearEl = document.querySelector('#clear');

function navigate(direction) {
    index = index + direction;
    if (index < 0) {
        index = images.length - 1;
    } else if (index > images.length - 1) {
        index = 0;
    }
    currentImage = images[index];
    carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// Clicking on next button displays next image in carousel
next.addEventListener("click", function (event) {
    // Stops event from bubbling up and new window opening
    event.stopPropagation();

    navigate(1);
});

// Clicking previous displays previous image in carousel
prev.addEventListener("click", function (event) {
    // Event bubbling would occur and a new window would open if we did not include the following line of code.
    event.stopPropagation();

    navigate(-1);
});

navigate(0);

// Action to be performed on click store in named function
function showScores(event) {
    // Prevent default action
    event.preventDefault();
    window.location.href = "highscores.html";
    console.log(event);

    var li = document.createElement("li");
    li.textContent = "Apples";
    var listEl = document.querySelector("ol");
    listEl.appendChild(li);
    var response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
    submissionResponseEl.textContent = response;
}

// Add event listener to submit element
var submitEl = document.querySelector("#time");
submitEl.addEventListener("click", showScores);



// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

// Add text for list items
li1.textContent = "Apples 🍎 ";
li2.textContent = "Pizza 🍕 ";
li3.textContent = "Dumplings 🥟 ";
li4.textContent = "Cupcakes 🧁 ";

var listEl = document.querySelector("ol");

// Append list items to ordered list element 
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

if (alphabetNumericCharacters.includes(key)) {
    for (var i = 0; i < elements.length; i++) {
        elements[i].textContent += event.key;
    }
}

var clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', function (event) {
    event.preventDefault();

    //clear the local storage
    textAreaEl.value = '';

    for (var i = 0; i < elements.length; i++) {
        elements[i].textContent = '';
    }
});


data - state="still"

// Listen for any clicks within the img-container div
imageContainer.addEventListener("click", function (event) {
    var element = event.target;

    // Check if the clicked element was an image
    if (element.matches("img")) {
        // Get the current value of the image's data-state attribute
        var state = element.getAttribute("data-state");

        if (state === "still") {
            // Change the data-state attribute's value
            // There are two different ways this attribute can be set
            element.dataset.state = "animate";
            element.setAttribute("data-state", "animate");

            // Update the image's source to the string being stored in the data-animate attribute
            element.setAttribute("src", element.dataset.animate);
        } else {
            // Change the attributes back to their non-animated values
            element.dataset.state = "still";
            element.setAttribute("src", element.dataset.still);
        }
    }
});

var container = document.querySelector(".container");

container.addEventListener("click", function (event) {
    var element = event.target;

    if (element.matches(".box")) {
        var state = element.getAttribute("data-state");

        // Use an if statement to conditionally render the number on the card
        if (state === "hidden") {
            // If the card is clicked while the state is "hidden", we set .textContent to the number 
            element.textContent = element.dataset.number;
            // Using the dataset property, we change the state to visible because the user can now see the number
            element.dataset.state = "visible";

        } else {
            // 'Hide' the number by setting .textContent to an empty string
            element.textContent = "";
            // Use .setAttribute() method
            element.setAttribute("data-state", "hidden")

        }
    }

});


var score = localStorage.getItem("score");
counter.textContent = count;

localStorage.setItem("count", count);

signUpButton.addEventListener("click", function (event) {
    event.preventDefault();

    // create user object from submission
    var user = {
        firstName: firstNameInput.value.trim(),
        lastName: lastNameInput.value.trim(),
        email: emailInput.value.trim(),
        password: passwordInput.value.trim()
    };

    // validate the fields
    if (user.firstName === "") {
        displayMessage("error", "First name cannot be blank");
    } else if (user.lastName === "") {
        displayMessage("error", "Last name cannot be blank");
    } else if (user.email === "") {
        displayMessage("error", "Email cannot be blank");
    } else if (user.password === "") {
        displayMessage("error", "Password cannot be blank");
    } else {
        displayMessage("success", "Registered successfully");

        // set new submission
        console.log(user);
        localStorage.setItem("user", user);

        // get most recent submission
        var lastUser = localStorage.getItem("user");
        userFirstNameSpan.textContent = lastUser.firstName;
        userLastNameSpan.textContent = lastUser.lastName;
        userEmailSpan.textContent = lastUser.email;
        userPasswordSpan.textContent = lastUser.password;
    }
});



// The init function is called when the page loads 
function init() {
    getCorrectCount();
    getWrongCount();
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
var submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", showScores);


choices.innerHTML = q.answers;

// Create ordered list element of answers/choices 
var answerList = document.createElement("ol");
// Create listed answers
var answer1 = document.createElement("li");
var answer2 = document.createElement("li");
var answer3 = document.createElement("li");
var answer4 = document.createElement("li");

answer1.textContent = q.answers[0];
answer2.textContent = q.answers[1];
answer3.textContent = q.answers[2];
answer4.textContent = q.answers[3];
// Append ordered list and list items to ordered list element 
choices.appendChild(answerList);
answerList.appendChild(answer1);
answerList.appendChild(answer2);
answerList.appendChild(answer3);
answerList.appendChild(answer4); //works until here



// if the answer is wrong, 
// when timeleft is more than the subtracted time, time is subtracted from the clock
if (isWrong && timeLeft > subtractTime) {// require update for checking answer is wrong
    timeEl.textContent = timeLeft - subtractTime;
}
// when timeleft is less than the subtracted time, use `clearInterval()` to stop the timer
else if (isWrong && timeLeft <= subtractTime) {
    // Clears interval and stops timer
    clearInterval(timer);
}

// show questions on the screen

function showQuestion() {
    var questionsDiv = document.getElementById("questions");
    questionsDiv.style.display = "block";
    // Creates a question on screen
    var questionTitle = document.getElementById("question-title");
    questionTitle.textContent = q.question;
    var choices = document.getElementById("choices");
    // Create a new button for each choice (answer)
    for (var i = 0; i < q.answers.length; i++) {
        var choiceButton = document.createElement("button");
        choiceButton.textContent = q.answers[i];
        choiceButton.setAttribute("data-index", i);
        choices.appendChild(choiceButton);
    }
}

function storeScores() {
    // Stringify and set "score" key in localStorage to score variable
    localStorage.setItem("score", JSON.stringify(score));
  }
  

  choices.addEventListener("click", function(event) {
    var element = event.target;
  
    // If that element is a button...
    if (element.matches("button") === true) {
        var answer = element.getAttribute("data-index");

            // if (timeLeft <= 0 || questionIndex === quizQuestions.length - 1) {
    //   timeLeft = 0;
    //   endQuiz();
    //   return;
    // }

    function startTimer() {
        timer = setInterval(function () {
          timeEl.textContent = timeLeft;
          timeLeft--;
        //   // Tests if time has run out
        //   if (timeLeft <= 0) {
        //     // Clears interval
        //     clearInterval(timer);
        //     endQuiz();
        //   }
        }, 1000);
      }
      
// ## Acceptance Criteria/Pseudo Code: 
// GIVEN I am taking a code quiz
// WHEN I click the start button create a start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

// open page and button to start quiz appears on page
//when you press start (event listener) the first question appears with
// mulitple choic answers; the timer also begins counting down; user slects their answer, 
// question is answered, the user is provied with an alert that says
//  correct or incorrect response 
// the score card is then updated and 
// the next question appears and 
// when the time ends the quiz ends and the final score is presented to the 
// user and they add their initials to a high score page.  
// needed: questions, next buttons timer, socre tracker
// questions
// timer
// score tracker 


var quizQuestions = document.querySelector(".questions")
var quizSelections = document.querySelector(".user-options")
var totalScore = document.querySelector(".user-score")
var questionResult = document.querySelector(".user-result") 
var startButton = document.querySelector(".start")
var timeRemainingSection = document.querySelector(".time-remaining")
var answerOptionA = document.querySelector(".optionA")
var answerOptionB = document.querySelector(".optionB")
var answerOptionC = document.querySelector(".optionC")
var answerBtns = document.querySelectorAll(".answerbtn")
var finalScore = document.querySelector(".final-score")
var questArea = document.querySelector("#question-area")
var gameEnds = document.querySelector("#game-over-area")
var userName = document.querySelector(".user-name")
var endGameScores = document.querySelector("#users-scores")
var submitFinal = document.querySelector("#submitName")
var returnHome = document.querySelector("#start-over")
var currentQuest = 0;
var score = 0; 
var secondsRemaining = 30; 

// array for the questions && answers
var questions = [{
    question:   "What is a script refer to in JavaScript?",
    optionAnswers: ["a. a series of instructions", "b. words on the screen", "c. dialogue for the browser"],
    answer:  0
},
 {
    question:  "What does 'concat' mean in JavaScript?",  
    optionAnswers:  ["a. mix a cocktail",  "b. to subtract",   "c. to put together"],  
    answer: 2  
}, 
    {
    question: "What answer would you expect when using .length? ",  
    optionAnswers:  ["a. the distance between 2 points", "b. the number of elements in an array", "c. how long the code on the page is"],
    answer:  1
    
},
    {   
    question: "To generate a random number between 0 and 1, which MathObject would you use?",
    optionAnswers: ["a. Math.Pi", "b. Math.random", "c. Math.ceil"],
    answer: 1
},
{
    question: "Which of the following is considered a data type?",
    optionAnswers: ["a. alphabet", "b. array", "c. Boolean"],
    answer: 2
},
{
    question: "Document Object Model, DOM refers to what",
    optionAnswers:  ["a. *NSFW*", "b. information about the browser", "c. the current page"],
    answer: 2
},
{
    question:  "charAt() would refer to what information?",
    optionAnswers:["a. returns the charachter at the specified position", "b. the characther on the page", "c. charred hot dog"],
    answer: 0
},
{
    question: "==, !==, >=, < are called what in JavaScript",
    optionAnswers: ["a. all the symbols", "b. operators", "c. Greek to me"],
    answer: 1
},
{
    question: "In a for loop, what are the three condition statements the  loop consists of? ",
    optionAnswers: ["a. beginning, guess, Math", "b. Initialization, conidtion, update", "c. start, run, stop"],
    answer: 2
},
// {
//     question: "",
//     optionAnswers: [],
//     answer:
// },
// {
//     question: "".
//     optionAnswers:
//     answer:
// },
]

    // when user clicks start button timer appears done
    function startTimer() {
        
        var timerInterval = setInterval(function(){
            secondsRemaining --; 
            timeRemainingSection.textContent = secondsRemaining;
       
            if (secondsRemaining <= 0) {
               clearInterval(timerInterval);
               timeRemainingSection.textContent = 0  
               gameOver();
            }
     }, 1000)
      // question 1 pops up 
     showQuestion()
    }
    
    // this function displays the question and issue. 
    function showQuestion() {
        var p = questions[currentQuest];
        quizQuestions.textContent = p.question; 
        answerOptionA.textContent = p.optionAnswers[0]; 
        answerOptionB.textContent = p.optionAnswers[1]; 
        answerOptionC.textContent = p.optionAnswers[2]; 
        
    } 
     // user selects answer
    function userResponse () {
        console.log(this.value)
        var userPick = this.value
         
        // this function is for the user to select the answer the answer is validated and then the user is notified if the answer is correct or not.   it will have code similar to this: var yourpick = $(this).val()

                if (userPick == questions[currentQuest].answer) {
                     questionResult.textContent = "You are Correct" ; 
                     score++; 
                     totalScore.textContent= score;
                  }
                  else {
                    questionResult.textContent = "Not Quite there yet!" ; 
                    secondsRemaining = secondsRemaining - 3;
                  }
                   
                  setTimeout(nextQuestion, 1000); 

        //  validated in the console and then triggers correct or incorrect and the if else actions and advancing to next question.
    }

    function nextQuestion() {
        if (questions.length -1 == currentQuest) {
            gameOver();
        }
        else {
            questionResult.textContent = "";
            currentQuest++; 
            showQuestion();
        } 
    }
    // this function will run when the time runs out || questions completed
    function gameOver() {
        questArea.setAttribute("class", "hide");
        // clearInterval(timerInterval);
        finalScore.textContent = score;
        gameEnds.setAttribute("class", "show");
    }

        function highScore() {
            
            var name = userName.value.trim();
            var userScore = {
                score: score,
                name: name
            };
            var highScores = JSON.parse(window.localStorage.getItem("highscores")) || [];
            highScores.push(userScore);
            window.localStorage.setItem("highscores", JSON.stringify(highScores));

            var gameEnds = document.querySelector("#game-over-area")
            gameEnds.setAttribute("class", "hide")
           
            var leaderBoard = document.querySelector("#leaderboard-area")
            leaderBoard.removeAttribute("class");
            
            var listItem = document.getElementById("users-scores")
            listItem.innerHTML = "";

            highScores.forEach(function(score) {
                var liTag = document.createElement("li")
                liTag.textContent = score.name
                listItem.appendChild(liTag)
            })
        }

        function quizReset () {
            var leaderBoard = document.querySelector("#leaderboard-area")
            leaderBoard.setAttribute("class", "hide");

            timeRemainingSection.textContent = " ";
            totalScore.innerText = " "; 
            currentQuest = 0; 
            questArea.removeAttribute("class"); 
            quizQuestions.textContent = "To Begin the quiz click the Start Quiz button on the right. Good Luck!"; 
            answerOptionA.textContent = ""; 
            answerOptionB.textContent = "" ;
            answerOptionC.textContent =  "";
            userName.value = ""; 
            secondsRemaining=30; 
            score=0;
        }
    // this event starts the entire process the time and the quiz 
    startButton.addEventListener('click', startTimer)
    
    // this is the click even that is reflecting the users answer choice. 
    for (var i = 0; i < answerBtns.length; i++)  {
        answerBtns[i].addEventListener('click', userResponse)
    }

    submitName.addEventListener("click", highScore)

    returnHome.addEventListener("click", quizReset)


    
 
    // page alerts correct or incorrect
    // if correct add to score 
    // if incorrect add to timer 
    // next question appears on screen, etal.
    // user completes quiz or time runs out 




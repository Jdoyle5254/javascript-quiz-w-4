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
var correctAnswer = document.querySelector(".correct")
var correctAnswer = document.querySelector(".incorrect")
var startButton = document.querySelector(".start")
var timeRemainingSection = document.querySelector(".time-remaining")
var answerOptionA = document.querySelector(".optionA")
var answerbtns = document.querySelectorAll(".answerbtn")

// create a function to run the questions
var questions = [{
    question:   "What is a script?",
    optionAnswers: ["a. a series of instructions", "b. words on the screen", "c. xxxxx"],
    answer:  0
},
 {
    question:  "What does 'concat' mean in JavaScript?",  
    optionAnswers:  ["a. mix a cocktail",  "b. to subtract",   "c. to put together"],  
    answer: 2  
}, {
    question: "What answer would you expect when using .length? ",  
    optionAnswers:  ["a. the distance between 2 points", "b. the number of elements in an array", "c. how long the code on the page is"],
    answer:  1
}]


 function quiz () {

 }
    // when user clicks start button timer appears done
    function startTimer() {
        var secondsRemaining = 60    
        
        var timerInterval = setInterval(function(){
            secondsRemaining --; 
            timeRemainingSection.textContent = secondsRemaining;
       
            if (secondsRemaining === 0) {
               clearInterval(timerInterval)   
            }
     }, 1000)
      // question 1 pops up 
     showQuestion()
    }
    
    function showQuestion () {
        var p = questions[0]
        quizQuestions.textContent = p.question 
        answerOptionA.textContent = p.optionAnswers[0]
        // need 2 more option buttons B & C correspond to [1 &2]
    } 
    function userResponse () {
        console.log(this.answerbtn.value)
    }
    startButton.addEventListener('click', startTimer)
    answerbtns.addEventListener('click', userResponse)
    // user selects answer
    // page alerts correct or incorrect
    // if correct add to score 
    // if incorrect add to timer 
    // next question appears on screen, etal.
    // user completes quiz or time runs out 


// not positive on this code just yet
var score = 0;
//     //   loop to go through questions?
//         for (var i = 0; i < questions.length; i++) { 
//             var userAnswer = confirm(questions[i].question); 
//            
//             if(questions[i].answer == userAnswer) {
//                 alert("That's Correct!"); 
//                 score = score + 1; 
//             }
//             else {
//                 alert ("That's not correct"); 
//                  }
//                 
//         }
//        alert("Total Points "  + score);  









// // Timer Code
// var timer = 10
// var startButton = document.querySelector('.start')
// var timeRemainingSection = document.querySelector('.time-remaining')


// function startTimer() {
//     var timeRemaining =     
    
//     var timerInterval = setInterval(function(){
//         secondsRemaining --; 
//         timeRemainingSection.textContent = timeRemaining;
   
//         if (secondsRemaining === 0) {
//            clearInterval(timerInterval)   
//         else {
//             timeRemainingSection.textContent = "Time Remaiining" + timeRemaining; 
//         }   
//         }
//  }, 1000)

// }



// startButton.addEventListener('click', startTimer)

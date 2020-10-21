var startButton = document.querySelector(".start")
var timeRemainingSection = document.querySelector(".time-remaining")

function startTimer(e) {
    var secondsRemaining = 60    
    
    var timerInterval = setInterval(function(){
        secondsRemaining --; 
        timeRemainingSection.textContent = secondsRemaining;
   
        if (secondsRemaining === 0) {
           clearInterval(timerInterval)   
        }
 }, 1000)

}

startButton.addEventListener('click', startTimer)



var questions = [{
    question:   "What is a script?",
    optionAnswers: ["a. a series of instructions", "b. words on the screen", "c. xxxxx"],
    answer:  0
},
{
    question:   "What is a script?",
    optionAnswers: ["a. a series of instructions", "b. words on the screen", "c. xxxxx"],
    answer:  2
},
{
    question:   "What is a script?",
    optionAnswers: ["a. a series of instructions", "b. words on the screen", "c. xxxxx"],
    answer:  0
}]


<!-- <input type="radio" id="option-a" name="answer" value="huey"> -->
<label for="huey">Huey</label>
</div>
<div>
<!-- <input type="radio" id="obtion-b" name="drone" value="dewey"> -->
<label for="dewey">Dewey</label>
</div>
<div>
<!-- <input type="radio" id="obtion c" name="drone" value="option c"> -->
<label for="louie">"#option c</label
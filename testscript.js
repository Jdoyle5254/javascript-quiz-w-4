var startButton = document.querySelector("start")
var timeRemainingSection = document.querySelector("time-remaining")

function startTimer() {
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
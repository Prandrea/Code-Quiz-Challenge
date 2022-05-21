// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score


//control css using Javascript: hide questions and scoreboard initially and display questions when you start 
var timer = 5

//Button starts quiz
var startbutton = document.querySelector("#start-quiz");
var startFunction = function() {
//Display questions-store questions as variable, array or object
//Display answer choices
//add listener events to each response
//Same button should start timer

var timeInterval = setInterval(function () {timer--, console.log(timer)
if (timer === 0){
    clearInterval(timeInterval);
    //end quiz (hide remaining questions) because they're out of time 
    endquiz()
}
}, 1000);

console.log("Andrea");

}
function endquiz() {
    console.log(timer)
    var score = timer
}

// Quiz ends if timer reaches 0 or if questions run out
// if questions run out then store current timer as score and end quiz


startbutton.addEventListener("click", startFunction);




//timer should be displayed throughout quiz
//create html element to display timer variable


// Quiz questions begin, and answers are stored



//If incorrect, time is deducted



//User enters initials to save score
//Theres a place for all high scores to be displayed












//Questions
//1. Commonly used data types do NOT include__________.
//strings, booleans, *alerts, numbers
//2. Inside which HTML element do you put the JavaScript?
// <js> <title> *<script> <javascript>
//3. How do you add a comment in JavaScript?
// *//comment <!--comment--!> 
//4. The condition in an if/else statement is inclosed in _________.
// curly brackets, *parenthesis, quotes, square brackets
//5. How do you round the number 4.15 to the nearest integer?
// round(4.15) int.round(4.15) *Math.round(4.15) Math.int(4.15)
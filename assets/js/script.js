/*allows numbers to be selected by use*/
let number1 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let number2 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

/*a variable for keeping the score*/
let score = 0;

/*somewhere to store the correct answer so that it can be compared to the user's answer*/
let answer = [];

/*for the timer to know when to stop*/
var countdown;


/*so that you can't keep answering after the time has stopped*/
let answered = false;




function setQuestion() {
/*resets everything*/
    document.getElementById("answer").disabled = false;
    document.getElementById("answer-button").disabled = false;
    answered = false;    
    answer.length = 0;
    $("#right").removeClass("correct").addClass("tick");
    $("#wrong").removeClass("incorrect").addClass("cross");
    $("#showAnswer").text("");
    document.getElementById("answer").value = "";
    $("#timer-numbers").removeClass("time-running-out").addClass("text-style");
/*creates two random numbers to multiply*/    
    let multiplication1 = number1[Math.floor(Math.random() * number1.length)];
    let multiplication2 = number2[Math.floor(Math.random() * number2.length)];
    let realAnswer = multiplication1 * multiplication2;
/*puts the random multiplication in the box for the user to read*/
    $("#question-number").text(`${multiplication1} x ${multiplication2}`);
/*pushes the real answer into the answer array*/
    answer.push(realAnswer);
  
}



function answerQuestion() {
/*gets the user's answer that they have typed in*/    
    var userAnswer = document.getElementById("answer").value;
/*compares user's answer to the real answer and gives a tick or cross*/
    if (answer[0] == userAnswer) {
        $("#right").removeClass("tick").addClass("correct");
        correctAnswer = true;
    }
    else {
         $("#wrong").removeClass("cross").addClass("incorrect");
/*shows the real answer to the user so that they can learn*/
         $("#showAnswer").text(answer[0]);
    }
/*disable the answer box and button if an answer has been given*/
    document.getElementById("answer").disabled = true;
    document.getElementById("answer-button").disabled = true;


    

}

function timer() {
/*resets the text and timer colour*/
        $("#slow").text("");
        $("#timer-numbers").removeClass("time-running-out").addClass("text-style");
/*runs timeDown function on a loop every second*/
        countdown = setInterval(timeDown, 1000);
/*sets timer to 10 seconds*/
        document.getElementById("timer-numbers").innerHTML = 10;
 }   
        function timeDown() {
/*time counts down by 1 every time the function is called (every second) and is shown on screen*/
                var time = document.getElementById("timer-numbers").innerHTML;
                time = time - 1
                document.getElementById("timer-numbers").innerHTML = time;
/*timer goes red with 3 seconds left*/
            if (time <= 3) {
                $("#timer-numbers").removeClass("text-style").addClass("time-running-out");
            }      
/*when the timer reaches 0 it stops and gives a message*/
            if (time == 0) {
                clearInterval(countdown);
                $("#slow").text("Too slow!");
/*disable the answer box if the time runs out*/
                document.getElementById("answer").disabled = true;
                document.getElementById("answer-button").disabled = true;
            }
    
        
    }


function stopTimer() {
    clearInterval(countdown);
    if (correctAnswer == true) {
/*if correct answer is given, th time left gets added onto the score*/
        var timeScore = document.getElementById("timer-numbers").innerHTML;
        score = score + parseInt(timeScore);   
        document.getElementById("playerScore").innerHTML = `Score: ${score}`;
    }
}

function resetScore() {
   score = 0
   document.getElementById("playerScore").innerHTML = "Score: 0";
   clearInterval(win);
}

function challengeSetQuestion() {
/*resets everything*/
    $("#win").removeClass("trophy-win").addClass("trophy-custom");
    document.getElementById("answer").disabled = false;
    document.getElementById("answer-button").disabled = false;
    answered = false;    
    answer.length = 0;
    document.getElementById("answer").value = "";
/*creates two random numbers to multiply*/    
    let multiplication1 = number1[Math.floor(Math.random() * number1.length)];
    let multiplication2 = number2[Math.floor(Math.random() * number2.length)];
    let realAnswer = multiplication1 * multiplication2;
/*puts the random multiplication in the box for the user to read*/
    $("#question-number").text(`${multiplication1} x ${multiplication2}`);
/*pushes the real answer into the answer array*/
    answer.push(realAnswer);
  
}


function challengeClear () {
    $("#right").removeClass("correct").addClass("tick");
    $("#wrong").removeClass("incorrect").addClass("cross");
    $("#showAnswer").text("");
}

function challengeTimer() {
/*resets the text and timer colour*/
        $("#slow").text("");
        $("#timer-numbers").removeClass("time-running-out").addClass("text-style");
/*runs challengeTimeDown function on a loop every second*/
        countdown = setInterval(challengeTimeDown, 1000);
/*sets timer to 10 seconds*/
        document.getElementById("timer-numbers").innerHTML = 120;
 }   
        function challengeTimeDown() {
/*time counts down by 1 every time the function is called (every second) and is shown on screen*/
                var time = document.getElementById("timer-numbers").innerHTML;
                time = time - 1
                document.getElementById("timer-numbers").innerHTML = time;
/*timer goes red with 3 seconds left*/
            if (time <= 10) {
                $("#timer-numbers").removeClass("text-style").addClass("time-running-out");
            }      
/*when the timer reaches 0 it stops and gives a message*/
            if (time == 0) {
                clearInterval(countdown);
                $("#slow").text("Out of time!");
/*disable the answer box if the time runs out*/
                document.getElementById("answer").disabled = true;
                document.getElementById("answer-button").disabled = true;
            }
    
        
    }



function challengeAnswerQuestion(winPoints) {
/*gets the user's answer that they have typed in*/    
    var userAnswer = document.getElementById("answer").value;
/*compares user's answer to the real answer and gives a tick or cross*/
    if (answer[0] == userAnswer) {
        $("#right").removeClass("tick").addClass("correct");
        score = score + 1;   
        document.getElementById("playerScore").innerHTML = `Score: ${score}`;
        setTimeout(challengeClear, 500)
    }
    else {
         $("#wrong").removeClass("cross").addClass("incorrect");
/*shows the real answer to the user so that they can learn*/
         $("#showAnswer").text(answer[0]);
         setTimeout(challengeClear, 500)
    }
/*stop game when get to a certain amount of points- determined by the parameter*/
    if (score == winPoints) {
        clearInterval(countdown);
        document.getElementById("answer").disabled = true;
        win().repeat(6);
    }
/*disable the answer box and button if an answer has been given*/
    document.getElementById("answer").disabled = true;
    document.getElementById("answer-button").disabled = true;

    challengeSetQuestion();
}

function win() {
    $("#win").removeClass("trophy-custom").addClass("trophy-win");
    document.getElementById("answer-button").disabled = true;
}

/*allow users to answer questions by pressing enter*/

addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("answer-button").click();
  }
});


function setNumberQuestion(timesTable) {
/*resets everything*/
    document.getElementById("answer").disabled = false;
    document.getElementById("answer-button").disabled = false;
    answered = false;    
    answer.length = 0;
    $("#right").removeClass("correct").addClass("tick");
    $("#wrong").removeClass("incorrect").addClass("cross");
    $("#showAnswer").text("");
    document.getElementById("answer").value = "";
    $("#timer-numbers").removeClass("time-running-out").addClass("text-style");
/*creates two random numbers to multiply*/    
    let multiplication1 = timesTable;
    let multiplication2 = number2[Math.floor(Math.random() * number2.length)];
    let realAnswer = multiplication1 * multiplication2;
/*puts the random multiplication in the box for the user to read*/
    $("#question-number").text(`${multiplication1} x ${multiplication2}`);
/*pushes the real answer into the answer array*/
    answer.push(realAnswer);
  
}
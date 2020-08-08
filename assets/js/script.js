/*changes from the first screen to the game screen*/
$(document).ready(function(){
  $("#go").click(function(){
    $("#go").fadeOut(slow);
    $(".sub-title").fadeOut(slow);
    $("#userTimesTable").fadeOut(slow);
    $("#goChallenge").fadeOut(slow);
    $("#challenge-buttons").fadeOut(slow);
    $(".game").removeClass("hide").addClass("show");
    $("#answer").removeClass("answer-hide").css("display", "flex");
    $(".question-box").css("display", "block");
    $(".disappear").addClass("hide").removeClass("d-flex");
  });
});



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
var correctAnswer = false;

/* timer for the challenges*/
var seconds = 120
var minutes;


function reset() {
    document.getElementById("answer").disabled = false;
    document.getElementById("answer-button").disabled = false;  
    answer.length = 0;
    $("#right").removeClass("correct").addClass("tick");
    $("#wrong").removeClass("incorrect").addClass("cross");
    $("#showAnswer").text("");
    document.getElementById("answer").value = "";
    $("#timer-numbers").removeClass("time-running-out").addClass("text-style");
    clearInterval(countdown);
    document.getElementById("answer").focus();
}


function setQuestion() {
/*changes text to 'next question'*/
    document.getElementById("question-button").innerHTML = "Next";
/*creates two random numbers to multiply*/    
    let multiplication1 = number1[Math.floor(Math.random() * number1.length)];
    let multiplication2 = document.getElementById("userTimesTable").value;
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
        correctAnswer = true;
        $("#right").removeClass("tick").addClass("correct");
    }
    else {
         $("#wrong").removeClass("cross").addClass("incorrect");
/*shows the real answer to the user so that they can learn*/
         $("#showAnswer").text(answer[0]);
    }
/*disable the answer box and button if an answer has been given*/
    document.getElementById("answer").disabled = true;
    document.getElementById("answer-button").disabled = true;
    console.log(userAnswer);
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
            if (time === 0) {
                clearInterval(countdown);
                $("#slow").text("Too slow!");
/*disable the answer box if the time runs out*/
                document.getElementById("answer").disabled = true;
                document.getElementById("answer-button").disabled = true;
            }
    
        
    }


function stopTimer() {
    clearInterval(countdown);
    if (correctAnswer === true) {
/*if correct answer is given, the time left gets added onto the score*/
        var timeScore = document.getElementById("timer-numbers").innerHTML;
        score = score + parseInt(timeScore);   
        document.getElementById("playerScore").innerHTML = `Score: ${score}`;
    }
}


function resetScore() {
   score = 0
   document.getElementById("playerScore").innerHTML = "Score: 0";
   clearInterval(win);
   $("#win").removeClass("trophy-win").addClass("trophy-custom");
}


/*-----------------------------------------------Challenges--------------------------------------------------------------*/

function challengeSetQuestion() {
/*resets ready for the next question*/
    document.getElementById("answer").disabled = false;
    document.getElementById("answer-button").disabled = false;
    answered = false;
    answer.length = 0;
    document.getElementById("answer").value = "";    
/*cursor stays on the answer box*/
document.getElementById("answer").focus();
/*creates two random numbers to multiply*/    
    let multiplication1 = number1[Math.floor(Math.random() * number1.length)];
    let multiplication2 = number2[Math.floor(Math.random() * number2.length)];
    let realAnswer = multiplication1 * multiplication2;
/*puts the random multiplication in the box for the user to read*/
    $("#question-number").text(`${multiplication1} x ${multiplication2}`);
/*pushes the real answer into the answer array*/
    answer.push(realAnswer);
  
}

function resetChallenge() {
    /*resets everything else*/
    clearInterval(countdown);
    seconds = 120;
    minutes = 2;
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
/*sets timer to 2.00 minutes*/
        document.getElementById("timer-numbers").innerHTML = "2:00";
/*runs challengeTimeDown function on a loop every second*/
        countdown = setInterval(challengeTimeDown, 1000);

 }   
        
 function challengeTimeDown() {
/*time counts down by 1 every time the function is called (every second) and is shown on screen*/
        seconds = seconds - 1;
        minutes = Math.floor(seconds / 60);
        var secDisplay = Math.round((seconds / 60 - minutes) * 60)
        if (secDisplay < 10) {
            document.getElementById("timer-numbers").innerHTML = minutes + ":0" + secDisplay;
        }
        else {
            document.getElementById("timer-numbers").innerHTML = minutes + ":" + secDisplay;
        }           
/*timer goes red with 3 seconds left*/
            if (minutes === 0 && seconds <= 10) {
                $("#timer-numbers").removeClass("text-style").addClass("time-running-out");
            }      
/*when the timer reaches 0 it stops and gives a message*/
            if (minutes === 0 && seconds === 0) {
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
         setTimeout(challengeClear, 500);
    }
/*stop game when get to a certain amount of points- determined by the parameter*/
    if (score === winPoints) {
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

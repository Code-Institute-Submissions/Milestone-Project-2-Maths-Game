/*allows numbers to be selected by use*/
let number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

/*an array for keeping the score*/
let score = [0];

/*somewhere to store the correct answer so that it can be compared to the user's answer*/
let answer = [];

/*for the timer to know when to stop*/
var countdown;

var time;

function setQuestion() {
/*resets everything*/    
    answer.length = 0;
    $("#right").removeClass("correct").addClass("tick");
    $("#wrong").removeClass("incorrect").addClass("cross");
    $("#showAnswer").text("");
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

function answerQuestion() {
/*gets the user's answer that they have typed in*/    
    var userAnswer = document.getElementById("answer").value;
/*compares user's answer to the real answer and gives a tick or cross*/
    if (answer[0] == userAnswer) {
        $("#right").removeClass("tick").addClass("correct");
    }
    else {
         $("#wrong").removeClass("cross").addClass("incorrect");
/*shows the real answer to the user so that they can learn*/
         $("#showAnswer").text(answer[0]);
    }
    

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
            }
    
        
    }


function stopTimer() {
    clearInterval(countdown);
    document.getElementById("playerScore").innerHTML = `Score: ${totalScore}`;
}

var totalScore = score.reduce(function (a, b) {
    return a + b;
});


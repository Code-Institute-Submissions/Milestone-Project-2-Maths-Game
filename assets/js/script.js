/*allows numbers to be selected by use*/
let number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

/*somewhere to store the correct answer so that it can be compared to the user's answer*/
let answer = [];

/*for the timer to know when to stop*/
var countdown;

function setQuestion() {
/*resets everything*/    
    correctAnswer = false;
    wrongAnswer = false;
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
/*so that the timer knows that the correct answer has been put in and stops*/
        correctAnswer = true;
    }
    else {
         $("#wrong").removeClass("cross").addClass("incorrect");
/*shows the real answer to the user so that they can learn*/
         $("#showAnswer").text(answer[0]);
/*lets the timer know that the wrong answer has been put in and so it can stop*/
         wrongAnswer = true;
    }
    

}

function timer() {
/*resets the text*/
        $("#slow").text("");
/*runs timeDown function on a loop every second*/
        countdown = setInterval(timeDown, 1000);
/*sets timer to 10 seconds*/
        document.getElementById("timer-numbers").innerHTML = 10;
 }   
        function timeDown() {
/*the timer runs only if no answer has been given*/
            if (correctAnswer == false && wrongAnswer == false) {
/*this is for the user to see the timer and it goes down one every time the function is run*/ 
                var time = document.getElementById("timer-numbers").innerHTML;
                time = time - 1
                document.getElementById("timer-numbers").innerHTML = time;
/*when the timer reaches 0 it stops and gives a message*/
            if (time == 0) {
                clearInterval(countdown);
                $("#slow").text("Too slow!");
            }  
        
    }
}

function stopTimer() {
    clearInterval(countdown);
}

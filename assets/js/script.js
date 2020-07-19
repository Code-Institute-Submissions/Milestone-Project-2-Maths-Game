let number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let answer = [];
let correctAnswer = false;
let wrongAnswer = false;

function setQuestion() {
    correctAnswer = false;
    wrongAnswer = false;
    answer.length = 0;
    $("#right").removeClass("correct").addClass("tick");
    $("#wrong").removeClass("incorrect").addClass("cross");
    $("#showAnswer").text("");
    document.getElementById("answer").value = "";
    let multiplication1 = number1[Math.floor(Math.random() * number1.length)];
    let multiplication2 = number2[Math.floor(Math.random() * number2.length)];
    let realAnswer = multiplication1 * multiplication2;
    $("#question-number").text(`${multiplication1} x ${multiplication2}`)
    answer.push(realAnswer)
  
}

function answerQuestion() {
    var userAnswer = document.getElementById("answer").value;
    if (answer[0] == userAnswer) {
        $("#right").removeClass("tick").addClass("correct");
        correctAnswer = true;
    }
    else {
         $("#wrong").removeClass("cross").addClass("incorrect");
         $("#showAnswer").text(answer[0]);
         wrongAnswer = true;
    }
    

}

function timer() {
        wrongAnswer = false;
        $("#slow").text("")
        var countdown = setInterval(timeDown, 1000);
        document.getElementById("timer-numbers").innerHTML = 10;
        function timeDown() {
            if (correctAnswer == false && wrongAnswer == false) {
            var time = document.getElementById("timer-numbers").innerHTML;
            time = time - 1
            document.getElementById("timer-numbers").innerHTML = time;
            if (time == 0) {
                clearTimeout(countdown);
                $("#slow").text("Too slow!");
            }
            if (correctAnswer == true) {
                clearTimeout(countdown);
                return time;
        }
            if (wrongAnswer == true) {
                clearTimeout(countdown);
                return time;
            }
    }
        
    }
}


$(document).ready(function() {










});


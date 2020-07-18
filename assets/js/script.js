let number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let answer = [];

function setQuestion() {
    answer.length = 0;
    document.getElementById("answer").value = "";
    let multiplication1 = number1[Math.floor(Math.random() * number1.length)];
    let multiplication2 = number2[Math.floor(Math.random() * number2.length)];
    let realAnswer = multiplication1 * multiplication2;
    answer.push(realAnswer)
    console.log (realAnswer);
    console.log (answer);
}

function answerQuestion() {
    var userAnswer = document.getElementById("answer").value;
    if (answer[0] == userAnswer) {
        $("#message").text("Well done")
    }
    else {
         $("#message").text("Incorrect")
    }
    console.log(userAnswer)
    console.log(answer)
}



$(document).ready(function() {










});


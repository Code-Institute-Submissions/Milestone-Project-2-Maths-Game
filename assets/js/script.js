

function question() {
    var a = Math.floor((Math.random() * (12 - 1) + 1));
    var b = Math.floor((Math.random() * (12 - 1) + 1));
    $("#question-number").text(`${a} x ${b}`);
    var timesTable = a * b
    return timesTable
    console.log(timesTable)
}

function answer() {
    var userAnswer = document.getElementById("answer").value;
    var realAnswer = question();
    if (realAnswer == userAnswer) {
        $("#message").text("Well done")
    }
    else {
         $("#message").text("Incorrect")
    }
    console.log(userAnswer)
    console.log(realAnswer)
    
}

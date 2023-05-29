
function kri() {
   
    var q1 = document.querySelector('input[id="q1"]:checked').value;
    var q2 = document.querySelector('input[id="q2"]:checked').value;
    var q3 = document.querySelector('input[id="q3"]:checked').value;
    var q4 = document.querySelector('input[id="q4"]:checked').value;
    var q5 = document.querySelector('input[id="q5"]:checked').value;
    var q6 = document.querySelector('input[id="q6"]:checked').value;
    var correct = 0;


    if (q1 === "c") {
        correct++;
    }
    if (q2 === "a") {
        correct++;
    }
    if (q3 === "c")
    {
        correct++;
    }
    if (q4 === "b") {
        correct++;
    }
    if (q5 === "c") {
        correct++;
    }
    if (q6 === "a") {
        correct++;
    }

    alert("You got " + correct + " out of 6 questions correct.");
}


/** Questions */

var question1 = {
    question: "What is the capital of Australia?",
    choices: ["Sydney", "Melbourne", "Canberra"],
    answer: "Canberra",
};

document.getElementById("currentQuestion").innerText = question1.question;
document.getElementById("answerOne").innerText = question1.choices[0];
document.getElementById("answerTwo").innerText = question1.choices[1];
document.getElementById("answerThree").innerText = question1.choices[2];
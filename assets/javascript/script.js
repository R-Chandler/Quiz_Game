/* Wait for DOM content to load before any code is executed. */ 

document.addEventListener('DOMContentLoaded', function(){
    let Buttons = document.getElementsByClassName('answer');
    
    for (let Button of Buttons) {
        Button.addEventListener('click', function(){
            let buttonName = this.getAttribute('id');
            console.log("you clicked answer box:" + buttonName)
        })
    }
    
    console.log("Yay I work");
})

/** Questions */

let quizOne = [
    {"questionNumber":1,"question":"Question 1","answerA":"Answer A 1","answerB":"Answer B 1","answerC":"Answer C 1","correctAnswer":"answerB"},
    {"questionNumber":2,"question":"Question 2","answerA":"Answer A 2","answerB":"Answer B 2","answerC":"Answer C 2","correctAnswer":"answerC"},
    {"questionNumber":3,"question":"Question 3","answerA":"Answer A 3","answerB":"Answer B 3","answerC":"Answer C 3","correctAnswer":"answerB"},
    {"questionNumber":4,"question":"Question 4","answerA":"Answer A 4","answerB":"Answer B 4","answerC":"Answer C 4","correctAnswer":"answerC"},
    {"questionNumber":5,"question":"Question 5","answerA":"Answer A 5","answerB":"Answer B 5","answerC":"Answer C 5","correctAnswer":"answerA"},
    {"questionNumber":6,"question":"Question 6","answerA":"Answer A 6","answerB":"Answer B 6","answerC":"Answer C 6","correctAnswer":"answerC"},
    {"questionNumber":7,"question":"Question 7","answerA":"Answer A 7","answerB":"Answer B 7","answerC":"Answer C 7","correctAnswer":"answerC"},
    {"questionNumber":8,"question":"Question 8","answerA":"Answer A 8","answerB":"Answer B 8","answerC":"Answer C 8","correctAnswer":"answerB"},
    {"questionNumber":9,"question":"Question 9","answerA":"Answer A 9","answerB":"Answer B 9","answerC":"Answer C 9","correctAnswer":"answerC"},
    {"questionNumber":10,"question":"Question 10","answerA":"Answer A 10","answerB":"Answer B 10","answerC":"Answer C 10","correctAnswer":"answerB"}
]


let questionNumber = 0
document.getElementById("currentQuestion").innerText = quizOne[questionNumber].question;
document.getElementById("answerOne").innerText = quizOne[questionNumber].answerA;
document.getElementById("answerTwo").innerText = quizOne[questionNumber].answerB;
document.getElementById("answerThree").innerText = quizOne[questionNumber].answerC;
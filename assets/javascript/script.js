/* Wait for DOM content to load before any code is executed. */

document.addEventListener('DOMContentLoaded', function () {

    let Buttons = document.getElementsByTagName('button');
    let quizNum = document.getElementById('quizTitle').getAttribute('data-type');
    console.log(quizNum);

    for (let Button of Buttons) {
        Button.addEventListener('click', function () {
            if (this.getAttribute('data-type') === 'answer') {
                let buttonName = this.getAttribute('id');
                let selectedAnswer = buttonName;

                checkAnswer(quizNum, selectedAnswer);
            } else {
                let quizType = this.getAttribute('data-type');

                console.log('quiz type is ' + quizType);
            }
        })
    }


    runQuiz(quizNum, 0);
})

/* questions*/
let quizOne = [
    { "questionNumber": 1, "question": "Question 1", "answerA": "Answer A 1", "answerB": "Answer B 1", "answerC": "Answer C 1", "correctAnswer": "answerA" },
    { "questionNumber": 2, "question": "Question 2", "answerA": "Answer A 2", "answerB": "Answer B 2", "answerC": "Answer C 2", "correctAnswer": "answerC" },
    { "questionNumber": 3, "question": "Question 3", "answerA": "Answer A 3", "answerB": "Answer B 3", "answerC": "Answer C 3", "correctAnswer": "answerB" },
    { "questionNumber": 4, "question": "Question 4", "answerA": "Answer A 4", "answerB": "Answer B 4", "answerC": "Answer C 4", "correctAnswer": "answerC" },
    { "questionNumber": 5, "question": "Question 5", "answerA": "Answer A 5", "answerB": "Answer B 5", "answerC": "Answer C 5", "correctAnswer": "answerA" },
    { "questionNumber": 6, "question": "Question 6", "answerA": "Answer A 6", "answerB": "Answer B 6", "answerC": "Answer C 6", "correctAnswer": "answerC" },
    { "questionNumber": 7, "question": "Question 7", "answerA": "Answer A 7", "answerB": "Answer B 7", "answerC": "Answer C 7", "correctAnswer": "answerC" },
    { "questionNumber": 8, "question": "Question 8", "answerA": "Answer A 8", "answerB": "Answer B 8", "answerC": "Answer C 8", "correctAnswer": "answerB" },
    { "questionNumber": 9, "question": "Question 9", "answerA": "Answer A 9", "answerB": "Answer B 9", "answerC": "Answer C 9", "correctAnswer": "answerC" },
    { "questionNumber": 10, "question": "Question 10", "answerA": "Answer A 10", "answerB": "Answer B 10", "answerC": "Answer C 10", "correctAnswer": "answerB" }
]

let quizTwo = [
    { "questionNumber": 1, "question": "Question 2.1", "answerA": "Answer A 1", "answerB": "Answer B 1", "answerC": "Answer C 1", "correctAnswer": "answerA" },
    { "questionNumber": 2, "question": "Question 2.2", "answerA": "Answer A 2", "answerB": "Answer B 2", "answerC": "Answer C 2", "correctAnswer": "answerC" },
    { "questionNumber": 3, "question": "Question 2.3", "answerA": "Answer A 3", "answerB": "Answer B 3", "answerC": "Answer C 3", "correctAnswer": "answerB" },
    { "questionNumber": 4, "question": "Question 2.4", "answerA": "Answer A 4", "answerB": "Answer B 4", "answerC": "Answer C 4", "correctAnswer": "answerC" },
    { "questionNumber": 5, "question": "Question 2.5", "answerA": "Answer A 5", "answerB": "Answer B 5", "answerC": "Answer C 5", "correctAnswer": "answerA" },
    { "questionNumber": 6, "question": "Question 2.6", "answerA": "Answer A 6", "answerB": "Answer B 6", "answerC": "Answer C 6", "correctAnswer": "answerC" },
    { "questionNumber": 7, "question": "Question 2.7", "answerA": "Answer A 7", "answerB": "Answer B 7", "answerC": "Answer C 7", "correctAnswer": "answerC" },
    { "questionNumber": 8, "question": "Question 2.8", "answerA": "Answer A 8", "answerB": "Answer B 8", "answerC": "Answer C 8", "correctAnswer": "answerB" },
    { "questionNumber": 9, "question": "Question 2.9", "answerA": "Answer A 9", "answerB": "Answer B 9", "answerC": "Answer C 9", "correctAnswer": "answerC" },
    { "questionNumber": 10, "question": "Question 2.10", "answerA": "Answer A 10", "answerB": "Answer B 10", "answerC": "Answer C 10", "correctAnswer": "answerB" }
]

let quizThree = [
    { "questionNumber": 1, "question": "Question 3.1", "answerA": "Answer A 1", "answerB": "Answer B 1", "answerC": "Answer C 1", "correctAnswer": "answerA" },
    { "questionNumber": 2, "question": "Question 3.2", "answerA": "Answer A 2", "answerB": "Answer B 2", "answerC": "Answer C 2", "correctAnswer": "answerC" },
    { "questionNumber": 3, "question": "Question 3.3", "answerA": "Answer A 3", "answerB": "Answer B 3", "answerC": "Answer C 3", "correctAnswer": "answerB" },
    { "questionNumber": 4, "question": "Question 3.4", "answerA": "Answer A 4", "answerB": "Answer B 4", "answerC": "Answer C 4", "correctAnswer": "answerC" },
    { "questionNumber": 5, "question": "Question 3.5", "answerA": "Answer A 5", "answerB": "Answer B 5", "answerC": "Answer C 5", "correctAnswer": "answerA" },
    { "questionNumber": 6, "question": "Question 3.6", "answerA": "Answer A 6", "answerB": "Answer B 6", "answerC": "Answer C 6", "correctAnswer": "answerC" },
    { "questionNumber": 7, "question": "Question 3.7", "answerA": "Answer A 7", "answerB": "Answer B 7", "answerC": "Answer C 7", "correctAnswer": "answerC" },
    { "questionNumber": 8, "question": "Question 3.8", "answerA": "Answer A 8", "answerB": "Answer B 8", "answerC": "Answer C 8", "correctAnswer": "answerB" },
    { "questionNumber": 9, "question": "Question 3.9", "answerA": "Answer A 9", "answerB": "Answer B 9", "answerC": "Answer C 9", "correctAnswer": "answerC" },
    { "questionNumber": 10, "question": "Question 3.10", "answerA": "Answer A 10", "answerB": "Answer B 10", "answerC": "Answer C 10", "correctAnswer": "answerB" }
]

let quizFour = [
    { "questionNumber": 1, "question": "Question 4.1", "answerA": "Answer A 1", "answerB": "Answer B 1", "answerC": "Answer C 1", "correctAnswer": "answerA" },
    { "questionNumber": 2, "question": "Question 4.2", "answerA": "Answer A 2", "answerB": "Answer B 2", "answerC": "Answer C 2", "correctAnswer": "answerC" },
    { "questionNumber": 3, "question": "Question 4.3", "answerA": "Answer A 3", "answerB": "Answer B 3", "answerC": "Answer C 3", "correctAnswer": "answerB" },
    { "questionNumber": 4, "question": "Question 4.4", "answerA": "Answer A 4", "answerB": "Answer B 4", "answerC": "Answer C 4", "correctAnswer": "answerC" },
    { "questionNumber": 5, "question": "Question 4.5", "answerA": "Answer A 5", "answerB": "Answer B 5", "answerC": "Answer C 5", "correctAnswer": "answerA" },
    { "questionNumber": 6, "question": "Question 4.6", "answerA": "Answer A 6", "answerB": "Answer B 6", "answerC": "Answer C 6", "correctAnswer": "answerC" },
    { "questionNumber": 7, "question": "Question 4.7", "answerA": "Answer A 7", "answerB": "Answer B 7", "answerC": "Answer C 7", "correctAnswer": "answerC" },
    { "questionNumber": 8, "question": "Question 4.8", "answerA": "Answer A 8", "answerB": "Answer B 8", "answerC": "Answer C 8", "correctAnswer": "answerB" },
    { "questionNumber": 9, "question": "Question 4.9", "answerA": "Answer A 9", "answerB": "Answer B 9", "answerC": "Answer C 9", "correctAnswer": "answerC" },
    { "questionNumber": 10, "question": "Question 4.10", "answerA": "Answer A 10", "answerB": "Answer B 10", "answerC": "Answer C 10", "correctAnswer": "answerB" }
]

/** Runs the quiz. Gets the question details for each question using the question number parameter. Injects this info to the DOM */

function runQuiz(quizNum, questionIndex) {
    document.getElementById('questionNum').innerText = quizNum[questionIndex].questionNumber;
    document.getElementById("currentQuestion").innerText = quizNum[questionIndex].question;
    document.getElementById("answerOne").innerText = quizNum[questionIndex].answerA;
    document.getElementById("answerTwo").innerText = quizNum[questionIndex].answerB;
    document.getElementById("answerThree").innerText = quizNum[questionIndex].answerC;

}

/* Checks the answer that has been selected against the correct answer, iterates through questions and incriments score*/

function checkAnswer(quizNum, selectedAnswer) {
    let questionCount = 10;
    let questionNumber = parseInt(document.getElementById("questionNum").innerText);
    let score = parseInt(document.getElementById("Score").innerText);
    var questionIndex = questionNumber - 1;
    let correctAnswer = quizNum[questionIndex].correctAnswer;


    if (selectedAnswer === correctAnswer) {
        
        if (questionNumber < questionCount) {
            questionNumber++;
            score++;
            questionIndex++;
            document.getElementById("Score").innerText = score;
            document.getElementById("questionNum").innerText = questionNumber;
            correctAnswer = quizNum[questionIndex].correctAnswer;

            alert("Yay, you are correct!");
            runQuiz(quizNum, questionIndex);
            console.log(quizNum, questionNumber, correctAnswer, questionIndex, score);
            
        } else {
            score++;
            alert("Yay, you have finished the quiz, your score is " + score);
            finishQuiz(score);
        }
    } else {
        if (questionNumber < questionCount) {
            alert("The correct answer was: " + correctAnswer);
            questionNumber++;
            questionIndex++;
            runQuiz(quizNum, questionIndex);
            console.log(questionNumber, correctAnswer, questionIndex, score);
        } else {
            score++;
            alert("Yay, you have finished the quiz, your score is " + score);
            finishQuiz(score);
        }
    }

}


/* Function to handle end of quiz, will display an overlay and inject text to the DOM */
function    finishQuiz(score){
    let newOverlayText = `Final score: ${score}`;
    let newOverlayTitle = "Thanks for playing!"

    document.getElementById("overlay").style.display = "flex";
    document.getElementById("overlayText").innerText = newOverlayText;
    document.getElementById("overlayTitle").innerText = newOverlayTitle;

}

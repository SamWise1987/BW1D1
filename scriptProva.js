let timer = 60;
let score = 0;
let countQuestion = 0;

// seleziono l'elemento HTML che mostra i numeri del timer
let timerDigitElement = document.getElementById('timerDigit');
// imposto il timer iniziale a 30 secondi
let timerCount = 30;

// starto il display del timer con il valore iniziale (30 secondi)
timerDigitElement.textContent = timerCount;

// creo l'intervallo che si attiva ogni secondo
let interval = setInterval(function () {
    // decremento il timer di 1 ogni secondo
    timerCount--;

    // aggiorno il display del timer
    timerDigitElement.textContent = timerCount;

    // se il timer arriva a 0, lo ferma e non lo fa ripartire
    if (timerCount === 0) {
        clearInterval(interval); // fermo l'intervallo
        timerDigitElement.textContent = "Fine!"; // cambio il testo a 'Fine!'
    }
}, 1000); // imposto l'intervallo di tempo a 1000 millisecondi (1 secondo)

//const countdown = setInterval(() => {
//  timer--;
//if (timer === 0) {
//  clearInterval(countdown);
//}

//}, 1000)


function displayQuestion() {
    if (countQuestion < questions.lenght) {
        let currentQuestion = questions.question[countQuestion];

        let questionDiv = document.createElement("div");
        questionDiv.classList.add("questionDiv");
        questionDiv.textContent = currentQuestion.question;
        document.body.appendChild(questionDiv);

        countQuestion++;
    }

};

function callAnswer (managingAnswers){

    let currentAnswer = [currentAnswer.correct_answer, ...currentAnswer.inceorrect_answers];
    
    shuffle(answers)

    for(i=0; i < answers.lenght; i++){
        let answerDiv = document.createElement("div");
        answerDiv.classList.add("answerBox");
        answerDiv.textContent =answers[i];
        document.body.appendChild(answerDiv);

    }
}


function correctAnswer() {
    if (selectedAnswer === questions.correct_answer) {
        score++;
    }

    countQuestion++;
    displayQuestion();
}


function shuffle(answers) {
    for (let i = answers.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [answers[i], answers[j]] = [answers[j], answers[i]];
    }
}
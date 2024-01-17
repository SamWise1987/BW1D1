let timer = 60;
let score = 0;
let countQuestion = 0;

const countdown = setInterval(() => {
    timer--;
    if (timer === 0) {
        clearInterval(countdown);
    }

}, 1000)


function displayQuestion(){
    let question = document.querySelector(".questionDiv");
    let answers = document.querySelectorAll(".radioBtn");
    

}


per ogni elemento dell'array visualiizzami l'indice zer, crea il bottone delle risposte, in base a quella che clicco ti prenderai il testo che è all'interno di correct_answer.

//function displayQuestion() {
  //  if (countQuestion < quastions.lengh) {
    //    let question = questions[countQuestion];
      //  let answers = [questions.correct_answer, ...questions.incorrect_answers];
      //  shuffle(answers);

   // }

// };

function correctAnswer() {
    if (selectedAnswer === questions.correct_answer) {
        score++;
    }

    countQuestion++;
}


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
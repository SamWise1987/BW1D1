let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        let question = questions[currentQuestionIndex];
        let answers = [question.correct_answer, ...question.incorrect_answers]; //i tre puntini servono per diffondere gli elementi dell'array dentro il nuovo array answers si chiama operatore di spread

        shuffleArray(answers); // Funzione per mescolare le risposte --> la trovate in fondo 

        // Qui si può costruire il codice HTML per la domanda e le risposte
        // e aggiungerlo al DOM o farlo diretto in HTML (secondo me partiamo facendolo da html e una volta che sta in piedi possiamo fare i matti e farlo direttamente da JS)
    } else {
        // Fine delle domande
        alert("Quiz completato. Il tuo punteggio è: " + score);
    }
}

function handleAnswer(selectedAnswer) {
    let question = questions[currentQuestionIndex];
    if (selectedAnswer === question.correct_answer) {
        score++;
    }
    currentQuestionIndex++;
    displayQuestion();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Scambio degli elementi, teoricamente dovrebbe scambiare le risposte ad ogni domanda
    }
}

// Caricamento iniziale
displayQuestion();

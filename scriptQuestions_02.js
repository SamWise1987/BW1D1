const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];




let currentQuestionIndex = 0;
let score = 0;
let timerCount = 30;
let interval;

// funzione per avviare il quiz
function startQuiz() {
  displayQuestion(questions[currentQuestionIndex]);
  startTimer();
}

// imposta e avvia il timer per la domanda corrente
function startTimer() {
  resetTimer();
  resetAnimation();
  interval = setInterval(() => {
    timerCount--;
    updateTimerDisplay();

    // se il timer scade passa alla prossima domanda
    if (timerCount <= 0) {
      clearInterval(interval);
      nextQuestion();
    }
  }, 1000);
}

// aggiorna il display del timer
function updateTimerDisplay() {
  let timerDigitElement = document.getElementById("timerDigit");
  timerDigitElement.textContent = timerCount > 0 ? timerCount : "Tempo Scaduto";
}

// reimposta il timer al valore iniziale
function resetTimer() {
  timerCount = 30;
  updateTimerDisplay();
}

// funzione per resettare il cerchio insieme al timer (mezza scopiazzata da w3 però funziona) 

function resetAnimation() {
  const svgElement = document.querySelector('svg');
  let circle = document.querySelector('svg circle');
  if (circle) {
    svgElement.removeChild(circle);
  }

  circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("r", "47");
  circle.setAttribute("cx", "50");
  circle.setAttribute("cy", "50");
  circle.style.strokeDasharray = "314px";
  circle.style.strokeDashoffset = "314px";
  circle.style.animation = `timerAnimation ${timerCount}s linear infinite forwards`;

  svgElement.appendChild(circle);
}

// mescola le risposte prima di visualizzarle
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

// mostra la domanda corrente e le relative risposte
function displayQuestion(questionObj) {
  clearQuestionBox();

  let questionText = document.getElementById("questionText");
  questionText.textContent = questionObj.question;

  let answersGrid = document.getElementById("answersGrid");

  let answers = [questionObj.correct_answer, ...questionObj.incorrect_answers];
  shuffle(answers);

  answers.forEach((answer) => {
    createAnswerElement(answersGrid, answer, questionObj.correct_answer);
  });
}

// crea un elemento html per ogni risposta possibile
//function createAnswerElement(parentElement, answer, correctAnswer) {
  //const label = document.createElement("label");
  //label.className = "answerLabel";
  //label.textContent = answer;
  //label.onclick = () => {
   // checkAnswer(answer, correctAnswer);
 // };

  //parentElement.appendChild(label);
//}


//La funzione di base è quella di Andrea e ho utilizzato classi e id per riccreare i laber e ii radio button. Tocca solo rodare il css per farli rimettere a guppi di due. 
function createAnswerElement(parentElement, answer, correctAnswer) {
  const container = document.createElement("div");
  container.className = "answerContainer";

  const radioButton = document.createElement("input");
  radioButton.type = "radio";
  radioButton.name = "answer";
  radioButton.value = answer;
  radioButton.id = answer;
  radioButton.className = "answerRadio";

  const label = document.createElement("label");
  label.className = "answerLabel";
  label.textContent = answer;
  label.htmlFor = answer;

  container.appendChild(radioButton);
  container.appendChild(label);

  parentElement.appendChild(container);

  radioButton.onclick = () => {
      checkAnswer(answer, correctAnswer);
  };
}

// controlla se la risposta selezionata è corretta
//function checkAnswer(selectedAnswer, correctAnswer) {
  //if (selectedAnswer === correctAnswer) {
    //score++;
  //}
  //clearInterval(interval);
//  nextQuestion();
//}

// passa alla domanda successiva
function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    displayQuestion(questions[currentQuestionIndex]);
    startTimer();
  } else {
    endQuiz();
  }
}
// pulisce il box delle domande prima di caricare la nuova domanda
function clearQuestionBox() {
  let answersGrid = document.getElementById("answersGrid");
  answersGrid.innerHTML = "";
}

// termina il quiz e mostra il punteggio finale
//function endQuiz() {
  //clearInterval(interval);
  //alert(`Quiz finito! Il tuo punteggio è: ${score}`);
//}

let userAnswers = [];

// La funzione checkAnswer salva le risposte dell'utente
function checkAnswer(selectedAnswer, correctAnswer) {
  userAnswers.push(selectedAnswer);
  if (selectedAnswer === correctAnswer) {
    score++;
  }
  clearInterval(interval);
  nextQuestion();
}


// Questa funzione crea un div con i risultati del quiz
function displayResults() {
  let resultsDiv = document.createElement('div');
  resultsDiv.id = 'results';

  for (let i = 0; i < questions.length; i++) {
    let questionP = document.createElement('p');
    questionP.textContent = `Domanda ${i + 1}: ${questions[i].question}`;
    resultsDiv.appendChild(questionP);

    let userAnswerP = document.createElement('p');
    userAnswerP.textContent = `La tua risposta: ${userAnswers[i]}`;
    resultsDiv.appendChild(userAnswerP);

    let correctAnswerP = document.createElement('p');
    if (userAnswers[i] === questions[i].correct_answer) {
      correctAnswerP.textContent = "Hai risposto correttamente a questa domanda.";
    } else {
      correctAnswerP.textContent = `Hai risposto in modo errato a questa domanda. La risposta corretta era: ${questions[i].correct_answer}`;
    }
    resultsDiv.appendChild(correctAnswerP);
  }
  
  document.body.appendChild(resultsDiv);
}



// Modifico la funzione endQuiz per chiamare displayResults
function endQuiz() {
  clearInterval(interval);
  displayResults();
  alert(`Quiz finito! Il tuo punteggio è: ${score}`);
  
}

startQuiz();

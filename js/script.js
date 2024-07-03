const questionsData = [
  {
    question: "What is the capital of Canada ?",
    choice1: "Toronto",
    choice2: "Ottawa",
    choice3: "Montréal",
    choice4: "Vancouver",
    answerText: "Ottawa",
    answer: 2
  },
  {
    question: "What is the capital of Morocco ?",
    choice1: "Rabat",
    choice2: "Marrakech",
    choice3: "Casablanca",
    choice4: "Agadir",
    answerText: "Rabat",
    answer: 1
  },
  {
    question: "Which one of these cities is a capital ?",
    choice1: "New-York",
    choice2: "Sydney",
    choice3: "Rotterdam",
    choice4: "Reykjavik",
    answerText: "Reykjavik",
    answer: 4
  },
  {
    question: "Which one of these cities is NOT a capital ?",
    choice1: "Tegucigalpa",
    choice2: "Quito",
    choice3: "Johannesburg",
    choice4: "Luanda",
    answerText: "Johannesburg",
    answer: 3
  },
  {
    question: "Comment appelle-t-on une aurore polaire du pôle sud ?",
    choice1: "boréale",
    choice2: "polaire",
    choice3: "australe",
    choice4: "antarctique",
    answerText: "australe",
    answer: 3
  },
  {
    question: "In 1939, Britain and France declared war on Germany after it invaded which country ?",
    choice1: "Poland",
    choice2: "Austria",
    choice3: "Hungary",
    choice4: "Bulgaria",
    answerText: "Poland",
    answer: 1
  },
  {
    question: "Combien de temps a duré la guerre de cent ans ?",
    choice1: "112 ans",
    choice2: "98 ans",
    choice3: "100 ans",
    choice4: "116 ans",
    answerText: "116 ans",
    answer: 4
  },
  {
    question: "Who is the Joker's actor in the Joker movie ?",
    choice1: "Jared Leto",
    choice2: "Joaquin Phoenix",
    choice3: "Heath Ledger",
    choice4: "Robert de Niro",
    answerText: "Joaquin Phoenix",
    answer: 2
  },
  {
    question: "Combien y a-t-il de membres dans le groupe Blackpink ?",
    choice1: "2",
    choice2: "3",
    choice3: "4",
    choice4: "5",
    answerText: "4 : Jisoo, Jennie, Rose, Lisa",
    answer: 3
  },
  {
    question: "When was Martin Luther King killed ?",
    choice1: "4 avril 1968",
    choice2: "4 avril 1970",
    choice3: "4 avril 1965",
    choice4: "4 avril 1962",
    answerText: "4 avril 1968",
    answer: 1
  }
]


const answers = document.querySelectorAll('.input-answer');
const result = document.getElementById('result');

const questionEl = document.getElementById('question');
const answerOne = document.getElementById('one-text');
const answerTwo = document.getElementById('two-text');
const answerThree = document.getElementById('three-text');
const answerFour = document.getElementById('four-text');

let currentQuestion = 0;
let score = 1;

const correctScore = document.getElementById('correct-score');
const totalQuestions = document.querySelectorAll('.total-question');
const currentQuestionNumber = document.getElementById('current-question-number');

const nextBtn = document.getElementById('next');

loadQuestion();


function loadQuestion() {
  let currentQuestionData = questionsData[currentQuestion];

  questionEl.textContent = currentQuestionData.question;
  answerOne.textContent = currentQuestionData.choice1;
  answerTwo.textContent = currentQuestionData.choice2;
  answerThree.textContent = currentQuestionData.choice3;
  answerFour.textContent = currentQuestionData.choice4;

  totalQuestions.forEach(totalQuestion => {
    totalQuestion.textContent = questionsData.length;
  });
  nextBtn.disabled = true;
}

function checkAnswer() {
  let currentQuestionData = questionsData[currentQuestion];
  let inputCheck = document.querySelector('.input-answer:checked');

  if (inputCheck.id == currentQuestionData.answer) {
    result.textContent = "You're right ! Continue";
    correctScore.textContent = score++;
    disabledElement();
  } else {
    result.textContent = "Right answer : " + currentQuestionData.answerText;
    disabledElement();
  }
}

function disabledElement() {
  nextBtn.disabled = false;
  answers.forEach(answer => {
    answer.disabled = true;
    answer.classList.add('disabled');
  });
}

answers.forEach(answer => {
  answer.addEventListener('click', () => {
    checkAnswer();
  });
});


nextBtn.addEventListener('click', () => {
  nextBtn.disabled = true;
  currentQuestion++;
  if (currentQuestion < questionsData.length) {
    currentQuestionNumber.textContent = currentQuestion + 1;
    answers.forEach(answer => {
      answer.disabled = false;
      answer.classList.remove('disabled');
    });
    loadQuestion();
    result.textContent = "";
    deselectAnswers();
  } else {
    window.location.href = "/end.html";
  }
});


function deselectAnswers() {
  answers.forEach(answer => answer.checked = false);
}

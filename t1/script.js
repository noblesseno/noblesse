(function(){
  function buildQuiz(){
    const output = [];
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
        const answers = [];
        for(letter in currentQuestion.answers){
          answers.push(
            `<label class ="container">
              <input type="checkbox" name="question${questionNumber}" value="${letter}">

              ${letter} :
              ${currentQuestion.answers[letter]}
              <span class="checkmark"></span>
            </label>`
          );
        }
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    const answerContainers = quizContainer.querySelectorAll('.answers');

    let numCorrect = 0;

    myQuestions.forEach( (currentQuestion, questionNumber) => {

      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;

        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      else{
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    resultsContainer.innerHTML = `Правильных ответов ${numCorrect} из ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "1. Сколько видов завязывания галстука представлено в нашей статье? ",
      answers: {
        a: "шесть",
        b: "семь",
        c: "восемь"
      },
      correctAnswer: "b"
    },
    {
      question: "2. Какой из способов является самым популярным и простым ?   :",
      answers: {
        a: "Four-in-hand.",
        b: "Принц Альберт.",
        c: "Кельвин."
      },
      correctAnswer: "a"

    },
    {
      question: "3. Какой способ завязывания галстука подходит для шерстяных моделей ?   ",
      answers: {
        a: "Пратт..",
        b: "Ориентал.",
        c: "Полувиндзор.",
      },
      correctAnswer: "c"
    },
    {
      question: "4. Какой узел завязывается изнаночным методом?",
      answers: {
        a: "Кельвин.",
        b: "Пратт.",
        c: "Four-in-hand.",

      },
      correctAnswer: "b"
    },
    {
      question: "5. Какой узел подходит для рубашки с маленьким воротником?    ",
      answers: {
        a: "Ориентал.",
        b: "Виндзор. ",
        c: "Кельвин.",
      },
      correctAnswer: "c"
    },
    {
      question: "6. Какой узел подходит для торжественных мероприятий?     ",
      answers: {
        a: "Принц Альберт.",
        b: "Полувиндзор.",
        c: "Пратт.",
      },
      correctAnswer: "a"
    },
    {
      question: "7. Какой узел распускается очень легко?     ",
      answers: {
        a: "Пратт.",
        b: "Кельвин.",
        c: "Ориентал.",

      },
      correctAnswer: "c"
    },
    {
      question: "8. Какой узел назван в честь герцога ?      ",
      answers: {
        a: "Кельвин.",
        b: "Виндзор. ",
          c: "Пратт.",
      },
      correctAnswer: "b"
    },
    {
      question: "9. Какой узел был прославлен телеведущим ?      ",
      answers: {
        a: "Полувиндзор.",
        b: "Принц Альберт.",
        c: "Пратт.",
      },
      correctAnswer: "c"
    },
    {
      question: "10. Для какого из узлов вам понадобиться всего 6 манипуляций ?   ",
      answers: {
        a: "Виндзор.",
        b: "Полувиндзор.",
        c: "Ориентал.",
      },
      correctAnswer: "a"
    }
  ];
  buildQuiz();
  submitButton.addEventListener('click', showResults);
})();

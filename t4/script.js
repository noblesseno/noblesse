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
      question: "1. Сколько основных видов сервировки представлено в нашей статье?  ",
      answers: {
        a: "три",
        b: "четыре",
        c: "пять"
      },
      correctAnswer: "b"
    },
    {
      question: "2. Сервировка стола для какого приема пищи включает в себя меньше всего предметов ?  ",
      answers: {
        a: "завтрак",
        b: "обед.",
        c: "ужин."
      },
      correctAnswer: "a"

    },
    {
      question: "3. Какой прием пищи предполагает наличие тарелки для хлеба ?   ",
      answers: {
        a: "Все.",
        b: "Все, кроме неформального ужина.",
        c: "Только обед.",
      },
      correctAnswer: "b"
    },
    {
      question: "4. Какой приём пищи может обойтись без скатерти ?    ",
      answers: {
        a: "Обед.",
        b: "Завтрак.",
        c: "Для любого приёма пищи нужна скатерть.",

      },
      correctAnswer: "b"
    },
    {
      question: "5. Вилка для закусок всегда располагается слева от тарелки ?      ",
      answers: {
        a: "Всегда.",
        b: "Только на завтраке. ",
        c: "Всегда располагается справа от тарелки.",
      },
      correctAnswer: "a"
    },
    {
      question: "6. Верно ли, что чашка с блюдцем не используется только для неформального ужина ?     ",
      answers: {
        a: "Верно.",
        b: "Используется только для неформального ужина.",
        c: "Не используется вовсе.",
      },
      correctAnswer: "a"
    },
    {
      question: "7. Сколько тарелок необходимо использовать для официального ужина?      ",
      answers: {
        a: "Три.",
        b: "Две.",
        c: "Четыре",

      },
      correctAnswer: "a"
    },
    {
      question: "8. На каком приёме пиши будет уместна скатерть или дорожка с узором ?        ",
      answers: {
        a: "Обед.",
        b: "Неформальный ужин. ",
          c: "Официальный ужин.",
      },
      correctAnswer: "b"
    },
    {
      question: "9. Официальный ужин предполагает наличие трёх бокалов ?      ",
      answers: {
        a: "Да.",
        b: " Нет.",
        c: "Только два.",
      },
      correctAnswer: "a"
    },
    {
      question: "10. Что означает положение скрещённых вилки и ножа на тарелке ?    ",
      answers: {
        a: "Пауза.",
        b: "Блюдо не понравилось.",
        c: "Блюдо превосходно.",
      },
      correctAnswer: "b"
    }
  ];
  buildQuiz();
  submitButton.addEventListener('click', showResults);
})();

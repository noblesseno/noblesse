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
      question: "1.На какие сферы влияния можно повлиять с помощью имиджа? ",
      answers: {
        a: "рабочий процесс, отношения с коллегами",
        b: "общественную деятельность, рабочий процесс",
        c: "рабочий процесс, отношения с коллегами, общественную деятельность, деловые встречи"
      },
      correctAnswer: "c"
    },
    {
      question: "2.Какие из этих факторов являются ключевыми, которые производят положительное впечатление на окружающих? ",
      answers: {
        a: "элегантная одежда, привлекательная прическа, тонкий макияж, впечатляющие аксессуары",
        b: "элегантная одежда.",
        c: "впечатляющие аксессуары."
      },
      correctAnswer: "a"

    },
    {
      question: "3.Какой из представленных ниже цветов не соответствует деловому этикету?",
      answers: {
        a: "яркий(красный, ярко-жёлтый)",
        b: "черный.",
        c: "синий.",
      },
      correctAnswer: "b"
    },
    {
      question: "4.Какой ткани не стоит отдавать предпочтение?",
      answers: {
        a: "шелк.",
        b: "шерсть.",
        c: "акрил",

      },
      correctAnswer: "c"
    },
    {
      question: "5.Правда ли,что правило, которое никогда нельзя нарушать в деловом гардеробе: в любое время года надо носить чулки или колготки? ",
      answers: {
        a: "да.",
        b: "нет, допускается такой вариант при открытой обуви. ",
        c: "этого не было в статье.",
      },
      correctAnswer: "a"
    },
    {
      question: "6.Какой вид сумки желательно использовать в образе деловой жещины?     ",
      answers: {
        a: "сумка-купол.",
        b: "дипломат, атташе-кейс.",
        c: "сумка-рюкзак.",
      },
      correctAnswer: "B"
    },
    {
      question: "7.Можно ли использовать затемнённые очки?  ",
      answers: {
        a: "да,при сильном солнце.",
        b: "нет.",
        c: "этого не было в статье.",

      },
      correctAnswer: "B"
    },
    {
      question: "8.Важна ли презентация в соцсетях при создании имиджа? ",
      answers: {
        a: "да.",
        b: "нет. ",
          c: "этого не было в статье .",
      },
      correctAnswer: "b"
    },
    {
      question: "9.Какие манеры в бизнесе выходят на первый план? ",
      answers: {
        a: "коммуникабельность, тактичность.",
        b: " эмоциональный интеллект, тактичность.",
        c: "коммуникабельность, эмоциональный интеллект, критическое мышление.",
      },
      correctAnswer: "c"
    },
    {
      question: "10.Бизнес-леди в совершенстве должна знать:   ",
      answers: {
        a: "область своей профессиональной деятельности.",
        b: "методы управления людьми.",
        c: "область своей профессиональной деятельности, методы управления людьми, правила делового этикета.",
      },
      correctAnswer: "c"
    }
  ];
  buildQuiz();
  submitButton.addEventListener('click', showResults);
})();

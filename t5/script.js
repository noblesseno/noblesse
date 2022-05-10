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
      question: "1.Сколько направлений делового стиля одежды представлено в нашей статье ? ",
      answers: {
        a: "2",
        b: "6",
        c: "4"
      },
      correctAnswer: "C"
    },
    {
      question: "2.Какое направление делового стиля является наиболее универсальным ?  ",
      answers: {
        a: "повседневный",
        b: "офисный.",
        c: "классчисекий."
      },
      correctAnswer: "a"

    },
    {
      question: "3.Какой стиль подразумевает строгий костюм двойку( тройку)?",
      answers: {
        a: "классический.",
        b: "офисный.",
        c: "официальный.",
      },
      correctAnswer: "b"
    },
    {
      question: "4.Как называется фрак с белым галстуком ?",
      answers: {
        a: "blacktie.",
        b: "snow - white.",
        c: "whitetie.",

      },
      correctAnswer: "c"
    },
    {
      question: "5.В каком стиле желательным будет использование галстука-бабочки ? ",
      answers: {
        a: "официальный.",
        b: "офисный. ",
        c: "классический.",
      },
      correctAnswer: "a"
    },
    {
      question: "6.Верно ли утверждение , что крой классического костюма выглядит так : 2-3 пуговицы , средняя ширина лацкана 7,5-9 см?",
      answers: {
        a: "Верно.",
        b: "характерны 3-4 пуговицы.",
        c: "ширина лацкана 6,5-7 см.",
      },
      correctAnswer: "a"
    },
    {
      question: "7.Какие цвета рубашек принято считать классикой ?",
      answers: {
        a: "серый и белый.",
        b: "чёрный и белый.",
        c: "голубой и белый",

      },
      correctAnswer: "c"
    },
    {
      question: "8.Какой элемент одежды запросто может испортить образ ?",
      answers: {
        a: "короткие носки.",
        b: "острый нос у туфель. ",
          c: "блестящая пряжка на ремне.",
      },
      correctAnswer: "a"
    },
    {
      question: "9.Считается ли раскачивание ногой ненужной привычкой ? ",
      answers: {
        a: "зависит от ситуации.",
        b: " Нет.",
        c: "да.",
      },
      correctAnswer: "c"
    },
    {
      question: "10.Если вы , сидя на стуле , решили откинуться назад , покажет ли это вашу раскрепощённость и уверенность ?",
      answers: {
        a: "да.",
        b: "нет.",
        c: "затрудняюсь ответить.",
      },
      correctAnswer: "b"
    }
  ];
  buildQuiz();
  submitButton.addEventListener('click', showResults);
})();

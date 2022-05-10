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
      question: "1.К плюсам двубортного пиджака можно отнести",
      answers: {
        a: "универсальная модель, подходящая практически всем",
        b: "подойдет худощавым мужчинам высокого роста",
        c: "удобно расстегивать и застегивать "
      },
      correctAnswer: "b"
    },
    {
      question: "2.Более распространённой моделью является :",
      answers: {
        a: "однобортный",
        b: "двубортный",
        c: "костюм-тройка"
      },
      correctAnswer: "a"

    },
    {
      question: "3.Для особых случаев и протокольных мероприятий более подходящим вариантом будет:",
      answers: {
        a: "casual",
        b: "смокинг",
        c: "fashion item",
      },
      correctAnswer: "b"
    },
    {
      question: "4.Какое из описаний подходит под “фрак”?",
      answers: {
        a: "парадный вечерний костюм, который обычно надевают на торжественные и официальные мероприятия по строгому протоколу",
        b: "так называемый костюм «на один сезон»",
        c: "подходит для прогулок, встреч с друзьями, неформального общения, семейных вечеринок и неофициальных мероприятий выходного дня",

      },
      correctAnswer: "a"
    },
    {
      question: "5.Что из этого относят к неформальным костюмам?",
      answers: {
        a: "casual",
        b: "фрак",
        c: "смокинг",
      },
      correctAnswer: "a"
    },
    {
      question: "6. Так называемый «клубный» пиджак",
      answers: {
        a: "фрак",
        b: "смокинг",
        c: "двубортный",
      },
      correctAnswer: "b"
    },
    {
      question: "7. Мужские костюмы по пошиву бывают:",
      answers: {
        a: "английский,американский,итальянский",
        b: "немецкий,итальянский,американский",
        c: "английский,итальянский",

      },
      correctAnswer: "a"
    },
    {
      question: "8. Выберите верное утверждение",
      answers: {
        a: "итальянский пошив отличается от английского и американского вариантов высоким расположением пуговиц, приподнятыми плечевыми элементами",
        b: "пик популярности американских костюмов наблюдался в 50-х годах",
          c: "костюмы английского пошива являются идеальным вариантом для полных мужчин",
      },
      correctAnswer: "a"
    },
    {
      question: "9. Из нетрадиционных для мужских костюмов тканей (например, хлопка, льна, шелка) шьются",
      answers: {
        a: "casual",
        b: "смокинг",
        c: "fashion item",
      },
      correctAnswer: "c"
    },
    {
      question: "10. Верно ли, что “согласно этикету, в костюме-тройке позволительно снять пиджак, не спросив об этом разрешения ”?",
      answers: {
        a: "да",
        b: "нет",
        c: "этого не было сказано",
      },
      correctAnswer: "a"
    }
  ];
  buildQuiz();
  submitButton.addEventListener('click', showResults);
})();

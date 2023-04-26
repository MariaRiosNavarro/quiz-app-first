// -------------glogal js-----------------------------
// const body = document.querySelector('[data-js="js-body"]');

// // ------------user page: darkmode switch--------------

// const toggleDarkmode = document.querySelector('[data-js="switch-dark"]');

// toggleDarkmode.addEventListener("click", () => {
//   body.classList.toggle("dark");
// });

// // Works but todo:

// // icon user white
// // event for all the pages
// // header in black

// //--------------Question-answer js--------------------------

const answerButtonOne = document.querySelector('[data-js="answer-button-one"]');
const answerButtonTwo = document.querySelector('[data-js="answer-button-two"]');
const answerButtonThree = document.querySelector(
  '[data-js="answer-button-three"]'
);
const firstAnswer = document.querySelector('[data-js="answer-one"]');
const secondAnswer = document.querySelector('[data-js="answer-two"]');
const thirdAnswer = document.querySelector('[data-js="answer-three"]');

answerButtonOne.addEventListener("click", () => {
  console.log("show answer");
  firstAnswer.classList.toggle("question-card__answer--hidden");
});

answerButtonTwo.addEventListener("click", () => {
  console.log("show answer");
  secondAnswer.classList.toggle("question-card__answer--hidden");
});

answerButtonThree.addEventListener("click", () => {
  console.log("show answer");
  thirdAnswer.classList.toggle("question-card__answer--hidden");
});
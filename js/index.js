//--------------Question-answer js--------------------------

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

console.log("hello");
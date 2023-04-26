// glogal js

const body = document.querySelector('[data-js="js-body"]');

// // user page: darkmode switch

// const toggleDarkmode = document.querySelector('[data-js="switch-dark"]');

// toggleDarkmode.addEventListener("click", () => {
//   body.classList.toggle("dark");
// });

//to  check:
// icon user in weis machen
// event übertragber für alle seiten.
// title in schwarz lassen

// Question-answer tests

// Warning speziall case  to JS-another structure!!! I have a pre inside the p!! in question 3 and 4 -->

const answerOne = document.querySelector('[data-js="answer-one"]');
const answerButton = document.querySelector('[data-js="answer-button-one"]');

answerButton.addEventListener("click", () => {
  answerOne.classList.toggle("hidden");
});

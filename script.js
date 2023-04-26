// -------------glogal js-----------------------------

const body = document.querySelector('[data-js="js-body"]');

// ------------user page: darkmode switch--------------

const toggleDarkmode = document.querySelector('[data-js="switch-dark"]');

toggleDarkmode.addEventListener("click", () => {
  body.classList.toggle("dark");
});

// Works but todo:

// icon user white
// event for all the pages
// header in black

//--------------Question-answer js--------------------------

// Warning speziall in question 3 and 4 _ JS-another structure!!! I have a pre inside the p!! in question 3 and 4 -->

// ???????WHY THAT DOESNT WORK?????????

const answerOne = document.querySelector('[data-js="answer-one"]');
const answerButton = document.querySelector('[data-js="answer-button-one"]');

answerButton.addEventListener("click", () => {
  answerOne.classList.toggle("question-card__answer--hidden");
});

// Allready done: check the script @ header (everything ok, dark mode works )

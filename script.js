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


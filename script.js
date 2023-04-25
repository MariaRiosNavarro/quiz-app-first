
const body = document.querySelector('[data-js="js-body"]');
const toggleDarkmode = document.querySelector('[data-js="switch-dark"]');

toggleDarkmode.addEventListener("click", () => {
  body.classList.toggle("dark");
});


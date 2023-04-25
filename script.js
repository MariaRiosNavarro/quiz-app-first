const body = document.querySelector('[data-js="js-body"]');
const toggleDarkmode = document.querySelector('[data-js="switch-dark"]');

toggleDarkmode.addEventListener("click", () => {
  body.classList.toggle("dark");
});

//to  check:
// icon user in weis machen
// event übertragber für alle seiten.
// title in schwarz lassen

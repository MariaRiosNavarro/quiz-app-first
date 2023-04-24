
  function showAnswer() {
    const answerElement = document.getElementById("answer-one"); 
    const answerButton = document.querySelector(".answer");
  
    answerElement.innerHTML = "Hypertext Markup Language";
    answerButton.classList.toggle("hide-answer");
  
    answerButton.onclick = function () {
      answerElement.innerHTML = "";
      answerButton.classList.toggle("hide-answer");
    };
  }
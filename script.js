const elements = document.querySelectorAll(".anime-title");
const words = [" créatif", " curieux", " étudiant", " junior"];
let currentWordIndex = 0;

function updateText() {
  for (let element of elements) {
    element.textContent = words[currentWordIndex];
  }
  currentWordIndex = (currentWordIndex + 1) % words.length;
}

setInterval(updateText, 2000);

// const elements = document.querySelectorAll(".anime-title");
// const words = [" créatif", " curieux", " étudiant", " junior"];
// let currentWordIndex = 0;

// function updateText() {
//   for (let element of elements) {
//     element.textContent = words[currentWordIndex];
//   }
//   currentWordIndex = (currentWordIndex + 1) % words.length;
// }

// setInterval(updateText, 2000);
const elements = document.querySelectorAll(".anime-title");
const words = ["mot 1", "mot 2", "mot 3", "mot 4"];
let currentWordIndex = 0;

function updateText() {
  for (let element of elements) {
    const text = element.textContent;
    const lastIndex = text.lastIndexOf(" ");
    const lastWord = text.substring(lastIndex);
    element.textContent = text.substring(0, lastIndex);

    const newSpan = document.createElement("span");
    newSpan.textContent = words[currentWordIndex];
    newSpan.classList.add("animate__animated", "animate__flipInX");

    element.appendChild(newSpan);
  }
  currentWordIndex = (currentWordIndex + 1) % words.length;
}

setInterval(updateText, 2000);
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

const sr = ScrollReveal({
  duration: 1000,
  delay: 300,
  easing: 'ease',
  reset: false,
});

sr.reveal('.btn-scroll', {
  origin: 'bottom',
  distance: '20px',
  scale: 0.9,
});

// Fonction pour l'animation de scroll en douceur
function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// Ajouter un gestionnaire d'événements au bouton pour déclencher l'animation de scroll en douceur
var scrollBtn = document.querySelector(".scroll-btn");
scrollBtn.addEventListener("click", function () {
  smoothScroll(".content-section", 1000);
}); 
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

// Fonction pour l'animation de défilement en douceur
function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.offsetTop;
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

  // Fonction pour l'effet d'accélération et de décélération
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// Ajout d'événements aux liens de navigation pour déclencher l'animation de scroll en douceur
var navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    var target = this.getAttribute('data-target');
    smoothScroll(target, 1000);
    navLinks.forEach(function(link) {
      link.classList.remove('active');
    });
    this.classList.add('active');
  });
});

// Responsive menu modal
document.getElementById("menu-icon").addEventListener("click", function () {
  var modal = document.getElementById("modal");
  modal.classList.remove('hidden');
  modal.classList.remove('animate__fadeOutDown');
  modal.classList.add('animate__fadeInDown');
})

document.getElementById("modal").addEventListener("click", function () {
  var modal = document.getElementById("modal");
  modal.classList.remove('animate__fadeInDown');
  modal.classList.add('animate__fadeOutDown');
  setTimeout(function(){
    modal.classList.add('hidden');
  }, 1000);
})
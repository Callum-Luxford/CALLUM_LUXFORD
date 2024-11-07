// Mouse circle
// $(document).mousemove(function (e) {
//   $(".circle").css({
//     left: e.pageX - 125,
//     top: e.pageY - 125,
//   });
// });
// End Mouse circle

// Card content blur and box shadow
const cards = document.querySelectorAll(".exp__card");
const cardsList = document.querySelectorAll(".exp__list");

// blur all cards except the first one
cards.forEach((card, index) => {
  if (index !== 0) {
    card.classList.add("blurred");
  }
});

// unblur the card that is hovered and blur the others
cards.forEach((card) => {
  card.addEventListener("mouseover", () => {
    cards.forEach((c) => c.classList.add("blurred"));
    card.classList.remove("blurred");
  });

  card.addEventListener("mouseout", () => {
    cards.forEach((c, index) => {
      if (index !== 0) {
        c.classList.add("blurred");
      } else {
        c.classList.remove("blurred");
      }
    });
  });
});

// box shadow
cards.forEach(function (card, index) {
  if (index === 0) card.classList.add("box__shadow");
});

cards.forEach(function (card) {
  card.addEventListener("mouseover", function () {
    cards.forEach(function (e) {
      e.classList.remove("box__shadow");
    });
    card.classList.add("box__shadow");
  });

  card.addEventListener("mouseout", () => {
    cards.forEach((c, index) => {
      if (index !== 0) {
        c.classList.remove("box__shadow");
      } else {
        c.classList.add("box__shadow");
      }
    });
  });
});
// End Card content blur and box shadow

// Card hover plane
const pCards = document.querySelectorAll(".project__card");
const plane = document.querySelectorAll(".plane");
// End Card hover plane

// Card project links
let project1 = document.getElementById("project__1");
project1.addEventListener("click", () => {
  window.open("https://bitebybite.onrender.com/", "_blank");
});
let project2 = document.getElementById("project__2");
project2.addEventListener("click", () => {
  window.open("https://manafinder.onrender.com", "_blank");
});
let project3 = document.getElementById("project__3");
project3.addEventListener("click", () => {
  window.open("https://dynamicroofingsolutionsltd.co.uk/", "_blank");
});
let project4 = document.getElementById("project__4");
project4.addEventListener("click", () => {
  window.open("https://callum-luxford.github.io/PORTFOLIO/#", "_blank");
});
let project5 = document.getElementById("project__5");
project5.addEventListener("click", () => {
  window.open("https://github.com/Callum-Luxford/PYTHON-PONG", "_blank");
});
let project6 = document.getElementById("project__6");
project6.addEventListener("click", () => {
  window.open("https://github.com/Callum-Luxford/PYTHON-SNAKE", "_blank");
});
let project7 = document.getElementById("project__7");
project7.addEventListener("click", () => {
  window.open(
    "https://github.com/Callum-Luxford/PYTHON-POMODORO/tree/main",
    "_blank"
  );
});
// End Card project links

// Type Writer
var typed = new Typed(".auto-type", {
  strings: [
    "",
    "",
    "Hello user.. ^2000",
    "I'm Callum.. ^2000",
    "Welcome to my Portfolio :) ",
  ],
  typeSpeed: 50,
  backSpeed: 75,
  loop: false,
});
// End Type Writer

// Scroll reveal
const scrollRevealOption = {
  distance: "25px",
  origin: "right",
  duration: 500,
};

ScrollReveal().reveal(".about__section, .experience__section", {
  ...scrollRevealOption,
  delay: 250,
});
ScrollReveal().reveal(".header__content", {
  ...scrollRevealOption,
  delay: 250,
  origin: "left",
});
ScrollReveal().reveal(".header__icons", {
  ...scrollRevealOption,
  delay: 250,
  origin: "bottom",
});
// End Scroll reveal

// Swiper

// Mouse circle
// $(document).mousemove(function (e) {
//   $(".circle").css({
//     left: e.pageX - 125,
//     top: e.pageY - 125,
//   });
// });
// End Mouse circle

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
ScrollReveal().reveal(".about__info, .exp__list",{
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


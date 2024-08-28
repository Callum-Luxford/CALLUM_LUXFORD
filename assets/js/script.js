// Mouse circle
$(document).mousemove(function (e) {
  $(".circle").css({
    left: e.pageX - 125,
    top: e.pageY - 125,
  });
});
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
ScrollReveal().reveal(".main__content", {
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


// 
const aboutInfo = document.getElementById("about__info");

// about.addEventListener("click", (e) => {
//   aboutInfo.style.visibility = "visible";
//   ScrollReveal().reveal(aboutInfo,{
//     ...scrollRevealOption,
//     delay: 100,
//     origin: "top",
//   });
// });

// function toggleNav(){
//   let x = aboutInfo;
//   if(x.style.visibility === "hidden"){
//     x.style.visibility = "visible";
//   } else {
//     x.style.visibility = "hidden";
//   }
// };

// $('#about').click(function(){
//   $('.about__info').slideToggle(500, "linear");
//   aboutInfo.style.display = "grid";
// })


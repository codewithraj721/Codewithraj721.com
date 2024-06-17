
const container = document.querySelector(".info-box");
const toggle = document.querySelector(".toggle");
toggle.addEventListener("click", () => {
  container.classList.toggle("active");
});


function vibrate() {
  navigator.vibrate(6);
}


const socialMediaLinks = document.querySelectorAll(".social-media div");


ScrollReveal().reveal(socialMediaLinks, {
  duration: 1000,
  opacity: 0,
  distance: "30%",
  origin: "bottom",
  scale: 0.9,
});

setTimeout(() => document.querySelector('.name').classList.add('loaded'), 500);




const startButton = document.getElementById("start-button");
const ctaText = document.getElementById("big-text");
const navLinks = Array.from(document.querySelectorAll(".nav"));
const logoImg = document.getElementById("logo-img");
const navContainer = document.getElementById("nav-container");


window.addEventListener("click", (event) => {
  TweenLite.to(ctaText, 2, {color:`rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`});
});


startButton.addEventListener("click", (event) => {
  TweenLite.to(startButton, 1, {
    x: Math.floor(Math.random()*200) - 100,
    y: Math.floor(Math.random()*200) - 100,
    ease:Bounce.easeInOut
  });
  event.stopPropagation();
});


let rotated = false;

navLinks[0].addEventListener("click", (event) => {
  if (rotated) {
    TweenMax.to(navLinks, 2, {rotation:0, ease:RoughEase.ease});
    rotated = false;
  }
  else {
    TweenMax.to(navLinks, 2, {rotation:180, ease:RoughEase.ease});
    rotated = true;
  }
  event.stopPropagation();
});

navLinks[1].addEventListener("click", (event) => {
  TweenMax.from(navLinks, .5, {rotation:360});
  event.stopPropagation();
});

navLinks[2].addEventListener("click", (event) => {
  if (navContainer.style.flexDirection === "column") navContainer.style.flexDirection = "row";
  else navContainer.style.flexDirection = "column";
  event.stopPropagation();
});

navLinks[3].addEventListener("click", (event) => {
  TweenMax.from(".nav", 2, {
  y: 200,
  });
  event.stopPropagation();
});

navLinks[4].addEventListener("click", (event) => {
  TweenMax.from(navLinks, 1, {color:`rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`});
  event.stopPropagation();
});

navLinks[5].addEventListener("click", (event) => {
  TweenMax.to(".text-content", 5, {color:`rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`, scale: Math.random() + .5});
  event.stopPropagation();
});

logoImg.addEventListener("mouseenter", (event) => {
  TweenLite.to(logoImg, 10, {
    scale: Math.random() * 3 + 1,
    background: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
    ease: Power1.easeOut
  });
});

logoImg.addEventListener("mouseleave", (event) => {
  TweenLite.to(logoImg, 10, {scale: 1, background: `rgb(255, 255, 255)`, ease: Power1.easeIn});
});

window.addEventListener("keyup", (event) => {
  ctaText.innerHTML = `D${event.key}M\<br> Is\<br> Awesome`
});

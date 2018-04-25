const startButton = document.getElementById("start-button");
const ctaText = document.getElementById("big-text");
const navLinks = Array.from(document.querySelectorAll(".nav"));
const logoImg = document.getElementById("logo-img");
const navContainer = document.getElementById("nav-container");


window.addEventListener("click", (event) => {
  TweenLite.to(ctaText, 2, {color:`rgb(${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))})`});
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
  TweenMax.to(navLinks, 2, {rotation:0, ease:RoughEase.ease});
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
  console.log("I got clicked 5");
  event.stopPropagation();
});

navLinks[5].addEventListener("click", (event) => {
  console.log("I got clicked 6");
  event.stopPropagation();
});

logoImg.addEventListener("mouseenter", (event) => {
  TweenLite.to(logoImg, 10, {
    width: `${Math.floor(Math.random()*1000)}px`,
    height:  `${Math.floor(Math.random()*1000)}px`,
    background: `rgb(${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))})`,
    ease: Power1.easeOut
  });
});

logoImg.addEventListener("mouseleave", (event) => {
  TweenLite.to(logoImg, 10, {width: `183px`, height: `36px`, background: `rgb(255, 255, 255)`, ease: Power1.easeIn});
});

window.addEventListener("keyup", (event) => {
  ctaText.innerHTML = `D${event.key}M\<br> Is\<br> Awesome`
});

// Your code goes here

// Event 1: mouseover
const logoImg = document.querySelector("img");

logoImg.addEventListener("mouseover", () => {
  logoImg.style.transform = "scale(1.2)";
  logoImg.style.transition = "all 0.3s";
});

// Event 2: scroll
const headerLogoScroll = document.querySelector("h1");
const paragraph = document.querySelector("p");
document.addEventListener("scroll", function(event) {
  headerLogoScroll.textContent = "Test";
  paragraph.style.cssText = "background: yellow";
  paragraph.textContent = "Yellow!";
});

// Event 3: dblclick
const logoDbl = document.querySelector(".home .intro h2");

logoDbl.addEventListener("dblclick", function(event) {
  event.target.style.cssText = "font-size:5rem;color:pink";
});

// Event 4: mouseenter
const scaleUp = document.querySelectorAll("img");

console.log(scaleUp);
scaleUp.forEach(item => {
  item.addEventListener("mouseenter", event => {
    item.style.transform = "scale(1.1)";
    item.style.transition = "transform 0.5s";
  });
});

// Event 5: mouseleave
const scaleDown = document.querySelectorAll("img");

scaleDown.forEach(item => {
  item.addEventListener("mouseleave", event => {
    item.style.transform = "scale(1)";
    item.style.transition = "transform 0.5s";
  });
});

// Event 6: keydown
document.body.addEventListener("keydown", e => {
  let keyThatGotPressed = e.key;

  let sound1 = new Audio("sound1.wav");
  let sound2 = new Audio("sound2.wav");
  let sound3 = new Audio("sound3.wav");
  if (keyThatGotPressed === "a") {
    sound1.play();
  } else if (keyThatGotPressed === "s") {
    sound2.play();
  } else if (keyThatGotPressed === "d") {
    sound3.play();
  } else if (keyThatGotPressed === "x") {
    console.log(keyThatGotPressed);
    sound3.pause();
  }
});

// Event 7: resize
window.addEventListener("resize", () => {
  if (!document.body.style.opacity) {
    document.body.style.opacity = 1;
  }
  document.body.style.opacity = Number(document.body.style.opacity) * 0.98;
});

// Event 9: drag
let pickYourImg = document.querySelector(".content-destination img");
pickYourImg.addEventListener("drag", event => {
  document.body.style.display = "none";
});

// prevent default
const navDefault = document.querySelectorAll(".nav-link");
navDefault.forEach(currentvalue => {
  currentvalue.addEventListener("click", event => {
    console.log("link is clicked");
    event.preventDefault();
  });
});

// event 10: click
const divButton = document.querySelector(".destination");

divButton.addEventListener("click", function(event) {
  console.log("I'm in the div!");
  event.target.style.cssText = "background:purple";
});

// stopPropagation()

const buttonInDiv = document.querySelector(".destination .btn");
buttonInDiv.addEventListener("click", event => {
  console.log("I'm in the button!");
  event.target.style.cssText = "background:pink";
  event.stopPropagation();
});

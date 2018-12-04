// Your code goes here

const logoHeading = document.querySelector(".logo-heading");
logoHeading.addEventListener("mouseenter", function (){
  logoHeading.classList.toggle("animate-wobble");
});
logoHeading.addEventListener("mouseleave", function (){
  logoHeading.classList.toggle("animate-wobble");
});

const html = document.querySelector("html");
html.addEventListener("keydown", function (){
  html.classList.add("vibrate");
});
html.addEventListener("keyup", function (){
  html.classList.remove("vibrate");
});

const aBus = document.querySelector("#a-bus");
let busOffset = 200;
let goLeft = false;
html.addEventListener("wheel", function (){
  aBus.style.marginLeft = `${busOffset}px`;
  if (busOffset > 900){
    aBus.classList.toggle("a-bus-flipped");
    goLeft = true;
  } else if (busOffset < -300) {
    aBus.classList.toggle("a-bus-flipped");
    goLeft = false;
  }
  if (goLeft) {
    busOffset -= 70;
  } else {
    busOffset += 70;
  }
});

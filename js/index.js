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
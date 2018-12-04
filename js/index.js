// Your code goes here

const logoHeading = document.querySelector(".logo-heading");
logoHeading.addEventListener("mouseenter", function (){
  logoHeading.classList.toggle("animate-wobble");
});
logoHeading.addEventListener("mouseleave", function (){
  logoHeading.classList.toggle("animate-wobble");
});
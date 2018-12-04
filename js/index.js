// Your code goes here

const logoHeading = document.querySelector(".logo-heading");
logoHeading.addEventListener("mouseover", function (){
  logoHeading.classList.toggle("animate-wobble");
  console.log("logoHeading mouseover");
});
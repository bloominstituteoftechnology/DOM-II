// Your code goes here
let logoHeading = document.querySelector(".logo-heading");
logoHeading.addEventListener("mouseover", () => {
  logoHeading.classList.add("funLogo");
});
logoHeading.addEventListener("mouseleave", () => {
  logoHeading.classList.remove("funLogo");
});

let mainImg = document.querySelector(".intro img");
mainImg.addEventListener("dblclick", () => {
  mainImg.classList.toggle("funImg");
});

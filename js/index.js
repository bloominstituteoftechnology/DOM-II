// Your code goes here
const logoHead = document.querySelector(".logo-heading");
console.log(logoHead);

logoHead.addEventListener("mouseover", event => {
  event.target.style.color = "orange";
});

const pickdestination = document.querySelectorAll(".destination");
console.log(pickdestination);
pickdestination[0].addEventListener("mouseover", event => {
  document.querySelector(".img-destination").src = "img/sun.jpg";
});
pickdestination[1].addEventListener("mouseover", event => {
  document.querySelector(".img-destination").src = "img/montain.jpg";
});
pickdestination[2].addEventListener("mouseover", event => {
  document.querySelector(".img-destination").src = "img/island.jpg";
});

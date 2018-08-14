// Your code goes here
// mouseover;
// keydown;
// wheel;
// drag / drop;
// load;
// focus;
// resize;
// scroll;
// select;
// dblclick;

const navElement = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-link");
const menu = document.querySelector(".menu-img");
const firstHeading = document.querySelectorAll("h1");
const secondHeading = document.querySelectorAll("h2");

menu.addEventListener("mouseover", event => {
  menu.style.cursor = "pointer";
});
menu.addEventListener("click", event => {
  navElement.classList.toggle("hidden");
  event.stopPropagation();

  navLinks.forEach((link, i) => {
    link.classList.toggle("hidden");
    link.addEventListener("mouseover", event => {
      link.style.fontWeight = "900";
    });
    link.addEventListener("mouseleave", event => {
      link.style.fontWeight = "400";
    });
    link.addEventListener("click", event => {
      event.preventDefault();
    });
  });
});

firstHeading[0].addEventListener("dblclick", event => {
  firstHeading[0].style.backgroundColor = "blue";
});

for (i = 0; i < secondHeading.length; i++) {
  secondHeading[i].addEventListener("dblclick", event => {
    secondHeading.style.backgroundColor = "red";
  });
}

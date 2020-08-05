// Your code goes here

const navLink = Array.from(document.querySelectorAll(".nav-link"));
const navItem = Array.from(document.querySelectorAll(".nav-link a"));
const navBar = document.querySelector(".main-navigation");
const introH2 = document.querySelector(".intro h2");
const contentOne = document.querySelector(".content-section");
const contentTwo = document.querySelector(".inverse-content");
const contentThree = document.querySelector(".content-destination");
const destination = document.querySelectorAll(".destination .btn");

// window.addEventListener("load", (event) => {
//   alert("Welcome");
// });

navLink.forEach((el) => {
  el.addEventListener("pointerover", (event) => {
    el.style.color = "green";
    gsap.from(el, { duration: 2.5, opacity: 0.2 });
  });
  el.addEventListener("pointerout", (event) => {
    el.style.removeProperty("color");
  });
  el.addEventListener("focus", (event) => {
    el.style.width = "45%";
    el.style.color = "white";
    event.stopPropagation();
  });
  el.addEventListener("focusout", (event) => {
    el.style.width = "5%";
    el.style.color = "skyblue";
    event.stopPropagation();
  });
});

navItem.forEach((el) => {
  el.preventDefault();
});

navBar.addEventListener("click", (event) => {
  navBar.style.backgroundColor = "blue";
});

introH2.addEventListener("mouseover", (event) => {
  introH2.style.backgroundColor = "grey";
  gsap.to(introH2, {
    duration: 3,
    x: 100,
    y: 100,
    scale: 1.5,
    skewX: 45,
    rotation: 180,
  });
});

contentOne.addEventListener("select", (event) => {
  contentOne.style.backgroundColor = "grey";
});

contentTwo.addEventListener("dblclick", (event) => {
  contentTwo.style.backgroundColor = "grey";
  gsap.to(contentTwo, { duration: 3, rotationY: 360 });
});

contentThree.addEventListener("wheel", (event) => {
  contentThree.style.border = "1px solid black";
});

destination[0].addEventListener("mousemove", (event) => {
  destination[0].innerHTML = "HELLO";
  gsap.to(destination[0], { duration: 3, rotationX: 360 });
});

///// GSAP animations

// Your code goes here

// MOUSEOVER & MOUSEOUT
document.querySelectorAll(".nav a").forEach(element => {
  element.addEventListener("mouseover", () => {
    element.style.color = "#17a2b8";
  });
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("mouseout", () => {
    link.style.color = "";
  });
});

// KEYDOWN
window.addEventListener("keydown", () => {
  const newText = document.querySelector(".logo-heading");
  newText.textContent = "Come Play In The Sun With Us!";
  newText.style.color = "#c7624c";
  newText.style.fontSize = "5rem";
});

// WHEEL
// const advImg = document.querySelector('img-content')
// advImg.addEventListener ('wheel', () => {
//     advImg.addEventListener.style.transform = "scale (1.2)";
// }

// MOUSEENTER & MOUSELEAVE
// const headingTarget = document.getElementsByClassName("logo-heading");

// headingTarget.addEventListener("mouseenter", element => {
//   headingTarget.style.border = "5px dotted orange";
// });

// LOAD

// FOCUS

// RESIZE
window.addEventListener("resize", () => {
  const cityBus = document.querySelector(".intro img");
  const resizeBody = document.querySelector("body");
  const resizeHeader = document.querySelector("header");

  cityBus.src = "img/fun-bus-city.jpg";
  resizeBody.style.backgroundColor = "#daf3f5";
  resizeHeader.style.backgroundColor = "#fcf2a4";
});

// window.addEventListener("resize", () => {

// }
// SCROLL
document.addEventListener("scroll", () => {
  document.querySelectorAll("h2").forEach(item => {
    item.style.color = "#5cae70";
  });
});

document.addEventListener("scroll", () => {
  document.querySelectorAll("h4").forEach(item => {
    item.style.color = "#ec113b";
  });
});

// SELECT

//DBLCLICK
const changeImage = document.querySelector(".intro img");
// console.log(changeImage);

changeImage.addEventListener("dblclick", () => {
  changeImage.src = "img/volkswagen.jpg";
});
